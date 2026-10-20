// Pre-render: después del build abre cada página en un navegador, deja que React la arme
// y guarda el HTML completo (contenido + título + meta tags) para que Google lo lea directo.
// Se corre solo con `npm run build` (postbuild). Las páginas van en dist/_pre/ y el .htaccess
// las sirve en su URL normal; la página de inicio se escribe directo en dist/index.html.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { preview } from 'vite'
import puppeteer from 'puppeteer'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = resolve(ROOT, 'dist')
const PORT = 4179
const ORIGEN = `http://localhost:${PORT}`

// Rutas: todas las del sitemap + las landings de campaña (/lp/*)
const sitemap = readFileSync(resolve(DIST, 'sitemap.xml'), 'utf8')
const rutas = [...sitemap.matchAll(/<loc>https:\/\/nebulaestudio\.com\.mx([^<]*)<\/loc>/g)].map(m => m[1] || '/')
const datosLp = readFileSync(resolve(ROOT, 'src/data/landingsData.js'), 'utf8')
for (const [, slug] of datosLp.matchAll(/foto: '\/lp-([a-z-]+)\.jpg'/g)) rutas.push(`/lp/${slug}`)

// La página de inicio va al final para que, mientras se generan las demás, index.html siga
// siendo el cascarón vacío original. Ese cascarón se guarda también como _shell.html: es lo que
// el .htaccess sirve para cualquier ruta que no tenga pre-render.
rutas.sort((a, b) => (a === '/') - (b === '/'))
const plantilla = readFileSync(resolve(DIST, 'index.html'), 'utf8')
writeFileSync(resolve(DIST, '_shell.html'), plantilla)

// Quita de la plantilla las etiquetas que cada página define por su cuenta
const limpiarHead = (html) => html
  .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
  .replace(/<meta\s+(name|property)="(description|keywords|robots|og:[^"]+|twitter:[^"]+)"[^>]*>\s*/gi, '')
  .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')

const base = limpiarHead(plantilla)
if (!base.includes('<div id="root"></div>')) throw new Error('prerender: no encontré <div id="root"></div> en dist/index.html')

const servidor = await preview({ root: ROOT, logLevel: 'error', preview: { port: PORT, strictPort: true, open: false } })
const navegador = await puppeteer.launch({
  headless: true,
  executablePath: process.env.PRERENDER_CHROME || undefined,
  args: ['--no-sandbox'],
})

let ok = 0
const fallas = []
try {
  for (const ruta of rutas) {
    const pagina = await navegador.newPage()
    await pagina.setViewport({ width: 1366, height: 900 })
    // Solo dejamos pasar lo local: nada de GTM, Analytics, Pixel ni fuentes externas
    await pagina.setRequestInterception(true)
    pagina.on('request', r => (r.url().startsWith(ORIGEN) ? r.continue() : r.abort()))
    try {
      await pagina.goto(ORIGEN + ruta, { waitUntil: 'networkidle0', timeout: 30000 })
      await new Promise(r => setTimeout(r, 300))
      const res = await pagina.evaluate(() => {
        const sel = 'meta[name="description"], meta[name="keywords"], meta[name="robots"], link[rel="canonical"], meta[property^="og:"], meta[name^="twitter:"]'
        return {
          title: document.title,
          lang: document.documentElement.lang || 'es',
          head: [...document.head.querySelectorAll(sel)].map(e => e.outerHTML).join('\n    '),
          body: document.getElementById('root').innerHTML,
        }
      })
      if (!res.body || res.body.length < 500) throw new Error('la página salió vacía')

      const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
      // Reemplazos con función: así un "$1" dentro de un precio ($10,500) no se interpreta como patrón
      const html = base
        .replace(/<html lang="[^"]*"/, () => `<html lang="${res.lang}"`)
        .replace(/(<meta name="viewport"[^>]*>)/, (m, vp) => `${vp}\n    <title>${esc(res.title)}</title>\n    ${res.head}`)
        .replace('<div id="root"></div>', () => `<div id="root">${res.body}</div>`)

      const destino = ruta === '/' ? resolve(DIST, 'index.html') : resolve(DIST, '_pre', ruta.slice(1) + '.html')
      mkdirSync(dirname(destino), { recursive: true })
      writeFileSync(destino, html)
      ok++
    } catch (e) {
      fallas.push(`${ruta}: ${e.message}`)
    } finally {
      await pagina.close()
    }
  }
} finally {
  await navegador.close()
  await new Promise(r => servidor.httpServer.close(r))
}

console.log(`prerender: ${ok}/${rutas.length} páginas listas`)
if (fallas.length) {
  console.error('prerender: fallaron estas páginas (se sirven como antes, sin pre-render):\n  ' + fallas.join('\n  '))
}

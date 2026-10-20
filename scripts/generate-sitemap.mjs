// Genera public/sitemap.xml antes de cada build (npm run build lo corre solo).
// - Páginas principales y landings de ciudad: lista fija abajo.
// - Blog: lee src/pages/Blog.jsx y solo incluye artículos cuya fecha ya llegó.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DOMAIN = 'https://nebulaestudio.com.mx'

// [ruta, changefreq, priority]
const PAGINAS = [
  ['/',          'weekly',  '1.0'],
  ['/servicios', 'monthly', '0.9'],
  ['/precios',   'monthly', '0.9'],
  ['/trabajo',   'monthly', '0.8'],
  ['/ejemplos',  'monthly', '0.8'],
  ['/blog',      'weekly',  '0.7'],
  ['/estudio',   'monthly', '0.6'],
  ['/contacto',  'monthly', '0.6'],
]

// Deben coincidir con las rutas de App.jsx
const CIUDADES = [
  'monterrey', 'cancun', 'los-cabos', 'tulum', 'playa-del-carmen', 'cdmx',
  'guadalajara', 'tijuana', 'chihuahua', 'california', 'texas', 'ensenada',
]

// Fecha de hoy en hora de México (evita que un build nocturno en UTC publique antes)
const hoy = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Mexico_City' })

const blogSrc = readFileSync(resolve(ROOT, 'src/pages/Blog.jsx'), 'utf8')
const posts = [...blogSrc.matchAll(/slug:\s*"([^"]+)"[^}]*?date:\s*"(\d{4}-\d{2}-\d{2})"/g)]
  .map(([, slug, date]) => ({ slug, date }))
  .filter(p => p.date <= hoy)

if (posts.length === 0) {
  console.error('generate-sitemap: no encontré artículos en Blog.jsx, revisa el formato de POSTS')
  process.exit(1)
}

const url = (loc, changefreq, priority, lastmod) =>
  `  <url>\n    <loc>${DOMAIN}${loc}</loc>\n` +
  (lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : '') +
  `    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`

const ultimoPost = posts[posts.length - 1].date

const entradas = [
  ...PAGINAS.map(([ruta, f, p]) => url(ruta, f, p, ruta === '/blog' ? ultimoPost : null)),
  ...CIUDADES.map(c => url(`/${c}`, 'monthly', '0.8')),
  ...posts.map(p => url(`/blog/${p.slug}`, 'yearly', '0.6', p.date)),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entradas.join('\n')}
</urlset>
`

writeFileSync(resolve(ROOT, 'public/sitemap.xml'), xml)
console.log(`sitemap.xml: ${entradas.length} URLs (${posts.length} artículos publicados al ${hoy})`)

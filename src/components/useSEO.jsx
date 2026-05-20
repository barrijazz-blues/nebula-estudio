import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DOMAIN = 'https://nebulaestudio.com.mx'

const SEO_DATA = {
  '/': {
    title: 'Nebula Estudio — Marketing digital con criterio | MTY · Tulum · Ensenada',
    description: 'Consultoría de marketing digital independiente. Branding, páginas web, Google Ads, Meta Ads y SEO. Diagnóstico, estrategia y ejecución. MTY · Tulum · BC.',
    og_image: `${DOMAIN}/og-home.jpg`,
  },
  '/servicios': {
    title: 'Servicios de Marketing Digital — Nebula Estudio',
    description: 'Branding, diseño web, redes sociales, Google Ads, Meta Ads y SEO. Seis servicios bajo un mismo método. Diagnóstico 360° incluido.',
    og_image: `${DOMAIN}/og-servicios.jpg`,
  },
  '/trabajo': {
    title: 'Portafolio — Nebula Estudio | Branding, Web y Campañas',
    description: 'Casos de estudio reales: hoteles, restaurantes, inmobiliarias y más. Branding, web y performance que generan resultados medibles.',
    og_image: `${DOMAIN}/og-trabajo.jpg`,
  },
  '/estudio': {
    title: 'Sobre Nosotros — Nebula Estudio | Estudio Creativo Independiente',
    description: 'Somos un estudio creativo independiente con sedes en Monterrey, Tulum y Ensenada. Diagnosticamos, diseñamos la estrategia y la ejecutamos contigo.',
    og_image: `${DOMAIN}/og-estudio.jpg`,
  },
  '/blog': {
    title: 'Blog — Miércoles Espaciales | Nebula Estudio',
    description: 'Ideas que mueven negocios. Cada miércoles un artículo sobre marketing digital, estrategia y crecimiento. Sin relleno, sin tecnicismos.',
    og_image: `${DOMAIN}/og-blog.jpg`,
  },
  '/precios': {
    title: 'Precios y Paquetes — Nebula Estudio | Web, Social Media y Campañas',
    description: 'Paquetes de página web desde $1,499, social media desde $3,500/mes y campañas digitales desde $2,800/mes. Sin letras chicas. Precios más IVA.',
    og_image: `${DOMAIN}/og-precios.jpg`,
  },
  '/contacto': {
    title: 'Contacto — Nebula Estudio | Hablemos de tu Proyecto',
    description: 'Cuéntanos qué órbita quieres alcanzar. Respondemos en menos de 24 horas. Sedes en Monterrey, Tulum y Ensenada. WhatsApp: +52 81 3539 0665.',
    og_image: `${DOMAIN}/og-contacto.jpg`,
  },
}

export default function useSEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const data = SEO_DATA[pathname] || SEO_DATA['/']
    const canonical = `${DOMAIN}${pathname}`

    // Title
    document.title = data.title

    // Helper
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el) { el = document.createElement('meta'); document.head.appendChild(el) }
      el.setAttribute(attr, value)
    }

    // Description
    setMeta('meta[name="description"]', 'content', data.description)

    // Canonical
    let canonical_el = document.querySelector('link[rel="canonical"]')
    if (!canonical_el) { canonical_el = document.createElement('link'); canonical_el.rel = 'canonical'; document.head.appendChild(canonical_el) }
    canonical_el.href = canonical

    // Open Graph
    setMeta('meta[property="og:title"]',       'content', data.title)
    setMeta('meta[property="og:description"]', 'content', data.description)
    setMeta('meta[property="og:url"]',         'content', canonical)
    setMeta('meta[property="og:image"]',       'content', data.og_image)
    setMeta('meta[property="og:type"]',        'content', 'website')
    setMeta('meta[property="og:locale"]',      'content', 'es_MX')
    setMeta('meta[property="og:site_name"]',   'content', 'Nebula Estudio')

    // Twitter Card
    setMeta('meta[name="twitter:card"]',        'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]',       'content', data.title)
    setMeta('meta[name="twitter:description"]', 'content', data.description)
    setMeta('meta[name="twitter:image"]',       'content', data.og_image)

  }, [pathname])
}

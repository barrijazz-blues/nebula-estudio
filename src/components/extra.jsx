import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from './atoms.jsx'

const PROBLEMS = [
  { tone: "coral", tag: "Sin estrategia", title: "Marketing reactivo, no proactivo.", desc: "Posts cuando da tiempo, campañas cuando hay urgencia. No hay tesis, no hay roadmap, no hay manera de medir si funciona." },
  { tone: "lila",  tag: "Canales dispersos", title: "Cinco proveedores, cero coherencia.", desc: "Una agencia para web, otra para ads, otra para redes, un freelance para SEO. La marca se ve distinta en cada canal y nadie es dueño del resultado." },
  { tone: "menta", tag: "Reportes vacíos", title: "Métricas de vanidad sin negocio.", desc: "Likes, alcance, impresiones — todo sube. Pero el CAC también, y nadie te puede explicar qué peso de los que invertiste regresó como ingreso." },
]

export function Problemas() {
  return (
    <section id="problemas">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Diagnóstico inicial</span>
            <h2 className="section-title">Tres síntomas<br/>que vemos <em>siempre</em>.</h2>
          </div>
          <p className="section-lead">Antes de hablar de táctica, conviene reconocer el patrón. La mayoría de las empresas con las que platicamos llegan con uno —o los tres— de estos diagnósticos.</p>
        </div>
        <div className="problems reveal">
          {PROBLEMS.map(p => (
            <div className={`problem problem--${p.tone}`} key={p.tag}>
              <div className="problem-tag">— {p.tag}</div>
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-desc">{p.desc}</p>
              <div className="problem-corner">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1" />
                  <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PROOFS = [
  { tone: "accent", size: "wide", kpi: "+218%", title: "Revenue YoY",         brand: "Wakax · Tulum",       desc: "Branding completo + sitio web inspirado en texturas locales.", k: "01" },
  { tone: "lila",   size: "tall", kpi: "6.2×",  title: "ROAS sostenido",       brand: "Pacific Best · BC",   desc: "Google Ads + página responsive para distribuidora en Ensenada.", k: "02" },
  { tone: "ambar",  size: "sq",   kpi: "+89%",  title: "Direct bookings",      brand: "Pocna · Tulum",       desc: "Sitio del hotel con identidad propia.", k: "03" },
  { tone: "menta",  size: "sq",   kpi: "−42%",  title: "CAC en 6 meses",       brand: "FS Brokers · SPGG",   desc: "Logo, web y campañas inmobiliarias.", k: "04" },
  { tone: "ink",    size: "wide", kpi: "4.9★",  title: "Reseñas posicionamiento", brand: "Yucannabis · Q. Roo", desc: "Branding de CBD: identidad espiritual, paleta natural.", k: "05" },
]

export function Proof() {
  return (
    <section id="proof">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Pruebas, no promesas</span>
            <h2 className="section-title">Lo que sale<br/>cuando <em>ejecutamos</em>.</h2>
          </div>
          <p className="section-lead">Una muestra de los engagements recientes con su impacto medible.</p>
        </div>
        <div className="proof-bento reveal">
          {PROOFS.map(p => (
            <article className={`proof proof--${p.tone} proof--${p.size}`} key={p.k}>
              <div className="proof-head">
                <span className="proof-k">/ {p.k}</span>
                <span className="proof-brand">{p.brand}</span>
              </div>
              <div className="proof-kpi">
                <div className="proof-num">{p.kpi}</div>
                <div className="proof-label">{p.title}</div>
              </div>
              <p className="proof-desc">{p.desc}</p>
              <Link to="/trabajo" className="proof-link">Ver caso <Arrow size={10} rot={-45} /></Link>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }} className="reveal">
          <Link to="/trabajo" className="btn btn--ghost">
            Ver portafolio completo
            <span className="arrow"><Arrow size={12} rot={-45} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

const VERTICALS = [
  { name: "Hoteles & Hospitality", count: "12 marcas", icon: "hotel" },
  { name: "Restaurantes & Bares",  count: "9 marcas",  icon: "rest" },
  { name: "Inmobiliarias",         count: "7 marcas",  icon: "home" },
  { name: "Wellness & CBD",        count: "5 marcas",  icon: "leaf" },
  { name: "Retail & E-commerce",   count: "11 marcas", icon: "bag" },
  { name: "Distribución & B2B",    count: "6 marcas",  icon: "box" },
  { name: "Servicios profesionales",count: "8 marcas", icon: "brief" },
  { name: "Turismo & Experiencias",count: "10 marcas", icon: "comp" },
]

function VerticalIcon({ k }) {
  const s = { width: 22, height: 22, viewBox: "0 0 22 22", fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }
  switch (k) {
    case "hotel": return <svg {...s}><rect x="3" y="6" width="16" height="13" /><path d="M3 10h16M7 13h2M11 13h2M15 13h2M7 16h2M11 16h2M15 16h2" /></svg>
    case "rest":  return <svg {...s}><path d="M6 3v8a2 2 0 002 2v6M6 7h4M10 3v10M16 3c-1.5 0-3 1.5-3 5s1.5 5 3 5v6" /></svg>
    case "home":  return <svg {...s}><path d="M3 10l8-7 8 7v9H3z" /><path d="M9 19v-6h4v6" /></svg>
    case "leaf":  return <svg {...s}><path d="M4 18C4 10 10 4 18 4c0 8-6 14-14 14z" /><path d="M4 18l10-10" /></svg>
    case "bag":   return <svg {...s}><path d="M5 7h12l-1 12H6z" /><path d="M8 7V5a3 3 0 016 0v2" /></svg>
    case "box":   return <svg {...s}><path d="M11 3l8 4v8l-8 4-8-4V7z" /><path d="M3 7l8 4 8-4M11 11v8" /></svg>
    case "brief": return <svg {...s}><rect x="3" y="7" width="16" height="11" /><path d="M8 7V5h6v2M3 12h16" /></svg>
    case "comp":  return <svg {...s}><circle cx="11" cy="11" r="8" /><path d="M11 3v16M3 11h16" /></svg>
    default: return null
  }
}

export function Verticales() {
  return (
    <section id="verticales">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Industrias que conocemos</span>
            <h2 className="section-title">8 verticales,<br/>una <em>tesis</em> por cada una.</h2>
          </div>
          <p className="section-lead">No somos generalistas. Hemos construido playbooks específicos para los sectores donde más hemos trabajado.</p>
        </div>
        <div className="verticals reveal">
          {VERTICALS.map(v => (
            <div className="vertical" key={v.name}>
              <div className="vertical-icon"><VerticalIcon k={v.icon} /></div>
              <div className="vertical-name">{v.name}</div>
              <div className="vertical-count">{v.count}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

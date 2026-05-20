import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow, ChevronLeft, ChevronRight, ServiceIcon } from './atoms.jsx'

const SERVICES = [
  { num: "01", kind: "strategy",    title: "Diagnóstico 360°",  desc: "Auditoría completa de marca, canales, datos y stack. El punto de partida de cada engagement.", tags: ["Auditoría", "Data review", "Stack"] },
  { num: "02", kind: "branding",    title: "Branding & Diseño", desc: "Identidad, sistemas visuales y materiales que aguantan el escrutinio del mercado.", tags: ["Identidad", "Sistema", "Print"] },
  { num: "03", kind: "web",         title: "Páginas web",       desc: "Sitios y landings que cargan rápido, posicionan y convierten. Diseño + desarrollo + CRO.", tags: ["Diseño", "Desarrollo", "CRO"] },
  { num: "04", kind: "social",      title: "Redes sociales",    desc: "Estrategia de contenido, producción y community management con foco en negocio.", tags: ["Estrategia", "Producción", "Community"] },
  { num: "05", kind: "performance", title: "Google Ads & Meta", desc: "Campañas pagadas con foco en LTV y CAC, no en clicks vacíos. Reporting transparente.", tags: ["Google Ads", "Meta", "Reporting"] },
  { num: "06", kind: "seo",         title: "SEO & Contenido",   desc: "Posicionamiento orgánico que convierte intención en demanda sostenida.", tags: ["Technical SEO", "Editorial", "Topic clusters"] },
]

export function Servicios() {
  return (
    <section id="servicios">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Áreas de consultoría</span>
            <h2 className="section-title">Una consultora,<br/><em>seis frentes</em>.</h2>
          </div>
          <p className="section-lead">Cada engagement empieza con un diagnóstico de 360°. Después intervenimos solo donde mueve la aguja.</p>
        </div>
        <div className="services reveal">
          {SERVICES.map(s => (
            <div className="service" key={s.num}>
              <div>
                <div className="service-icon"><ServiceIcon kind={s.kind} /></div>
                <div className="service-num">/ {s.num}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
              <div className="service-tags">
                {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }} className="reveal">
          <Link to="/servicios" className="btn btn--ghost">
            Ver detalle de cada servicio
            <span className="arrow"><Arrow size={12} rot={-45} /></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

const PROCESS = [
  { n: "01", t: "Diagnóstico",   d: "4 semanas dentro de tu negocio: data, stack, equipo, mercado.", items: ["Data audit", "Entrevistas", "Benchmarks"] },
  { n: "02", t: "Tesis",         d: "Documento de tesis: dónde está el palanque y por qué.",         items: ["Hipótesis", "Roadmap", "Targets"] },
  { n: "03", t: "Implementación",d: "Bajamos a ejecución con tu equipo. Sprints quincenales.",        items: ["Sprints", "Pair-work", "Enablement"] },
  { n: "04", t: "Medición",      d: "Tableros honestos, reviews trimestrales y handover.",            items: ["Dashboards", "QBRs", "Handover"] },
]

export function Proceso() {
  return (
    <section id="proceso">
      <div className="container" style={{ marginBottom: 64 }}>
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Cómo trabajamos</span>
            <h2 className="section-title">Un método <em>en cuatro fases</em>,<br/>sin atajos.</h2>
          </div>
          <p className="section-lead">La consultoría es tan buena como su diagnóstico. Los nuestros tardan porque preguntan lo que nadie pregunta.</p>
        </div>
      </div>
      <div className="process reveal">
        {PROCESS.map(p => (
          <div className="process-step" key={p.n}>
            <div>
              <div className="process-num">{p.n}</div>
              <h3 className="process-title">{p.t}</h3>
              <p className="process-desc">{p.d}</p>
            </div>
            <div className="process-list">
              {p.items.map(i => <div key={i}>— {i}</div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const CASES = [
  { tag: "Hotel · Tulum",    year: "2024", title: "Pocna Tulum",      desc: "Desarrollo y diseño web del hotel. Simplicidad como máxima sofisticación.", stats: [["Web", "Completa"], ["Tulum", "Hospitality"]] },
  { tag: "Hotel · Tulum",    year: "2024", title: "Wakax",            desc: "Sitio web inspirado en colores, elementos y texturas del lugar.", stats: [["Branding", "+ Web"], ["4★", "Hotel"]] },
  { tag: "CBD · Tulum",      year: "2024", title: "Yucannabis",       desc: "Diseño de branding completo para marca de CBD en Quintana Roo.", stats: [["Identidad", "Sistema"], ["CBD", "Vertical"]] },
  { tag: "Inmobiliaria · MTY",year: "2024", title: "FS Brokers",      desc: "Logotipo y desarrollo de página web para inmobiliaria en San Pedro.", stats: [["Web", "+ Logo"], ["SPGG", "Real estate"]] },
  { tag: "Wellness · Tulum", year: "2024", title: "Ilaria Lisi",      desc: "Identidad de marca con paleta natural y trazos suaves.", stats: [["Branding", "Moodboard"], ["Wellness", "Spirit"]] },
  { tag: "Distribuidora · BC",year: "2024", title: "Pacific Best Berry",desc: "Página web responsive Google-friendly para distribuidora en Ensenada.", stats: [["Web", "Responsive"], ["BC", "Distribución"]] },
]

export function Casos() {
  const [idx, setIdx] = useState(0)
  const total = Math.ceil(CASES.length / 2)
  const goTo = i => setIdx(Math.max(0, Math.min(total - 1, i)))

  return (
    <section id="trabajo" className="cases">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Trabajo seleccionado</span>
            <h2 className="section-title">Lo que <em>sale</em><br/>del estudio.</h2>
          </div>
          <p className="section-lead">Una muestra reciente. Cada proyecto tiene su propio caso de estudio con todo el detalle.</p>
        </div>
        <div className="cases-track-wrap">
          <div className="cases-track" style={{ transform: `translateX(calc(${-idx * 100}% - ${idx * 24}px))` }}>
            {CASES.map((c, i) => (
              <article className="case" key={i}>
                <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 14, aspectRatio: "4/3", display: "grid", placeItems: "center" }}>
                  <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)" }}>{c.title}</span>
                </div>
                <div className="case-meta"><span>{c.tag}</span><span>{c.year}</span></div>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-desc">{c.desc}</p>
                <div className="case-stats">
                  {c.stats.map(([v, l]) => (
                    <div className="case-stat" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="cases-controls">
          <div className="cases-pagination">
            {Array.from({ length: total }).map((_, i) => (
              <button key={i} className={`cases-dot ${i === idx ? "active" : ""}`} onClick={() => goTo(i)} aria-label={`Página ${i + 1}`} />
            ))}
          </div>
          <div className="cases-arrows">
            <button className="icon-btn" onClick={() => goTo(idx - 1)} disabled={idx === 0}><ChevronLeft /></button>
            <button className="icon-btn" onClick={() => goTo(idx + 1)} disabled={idx === total - 1}><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

const LOGOS = ["Pocna Tulum","Wakax","Yucannabis","FS Brokers","Ilaria Lisi","Pacific Best","EatBar","Italdo","Tululha","Lavaggio","Dalmar","María del Mar"]

export function Logos() {
  const list = [...LOGOS, ...LOGOS]
  return (
    <section style={{ padding: 0 }}>
      <div className="logos">
        <div className="logos-marquee">
          {list.map((l, i) => (
            <span className="logo-item" key={i}><span className="dot" />{l}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

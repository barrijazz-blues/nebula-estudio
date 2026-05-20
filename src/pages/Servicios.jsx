import React from 'react'
import { Link } from 'react-router-dom'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { Arrow, ServiceIcon } from '../components/atoms.jsx'
import { CTA } from '../components/CTA.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const SERVICE_DETAIL = [
  { num:"01", kind:"strategy",    title:"Diagnóstico 360°",  pitch:"El punto de partida innegociable. Cuatro semanas dentro de tu negocio para entender qué está pasando antes de proponer qué hacer.", deliverables:["Auditoría de marca, canales y stack","Revisión de datos: CAC, LTV, atribución","Entrevistas con clientes y stakeholders","Benchmark competitivo del sector","Documento de tesis con priorización"], duration:"4 semanas", pricing:"Desde $80,000 MXN", ar:"3/2" },
  { num:"02", kind:"branding",    title:"Branding & Diseño", pitch:"Identidades que aguantan el escrutinio del mercado y del CFO. Sistemas, no logos sueltos.", deliverables:["Posicionamiento y narrativa","Identidad visual completa","Sistema verbal y tono","Manual de marca + assets","Aplicación en touchpoints clave"], duration:"6–8 semanas", pricing:"Desde $120,000 MXN", ar:"4/3" },
  { num:"03", kind:"web",         title:"Páginas web",       pitch:"Sitios que cargan rápido, posicionan, convierten — y no se sienten genéricos al tercer scroll.", deliverables:["Diseño UX/UI a la medida","Desarrollo en stack moderno","CMS para que tu equipo edite","SEO técnico base incluido","Pagos a 3 y 6 MSI disponibles"], duration:"8–12 semanas", pricing:"Desde $90,000 MXN", ar:"16/9" },
  { num:"04", kind:"social",      title:"Redes sociales",    pitch:"Comunidad, no audiencia. Calendarios pensados para tu marca, no para el algoritmo del mes.", deliverables:["Estrategia editorial trimestral","Producción de contenido nativo","Community management","Reporting mensual con insights","Coordinación con campañas pagadas"], duration:"Retainer mensual", pricing:"Desde $35,000 MXN/mes", ar:"1/1" },
  { num:"05", kind:"performance", title:"Google Ads & Meta", pitch:"Campañas pagadas con foco en LTV/CAC, no en CPC. Reporting transparente y revisión quincenal.", deliverables:["Diseño y setup del media mix","Google Ads · Meta · LinkedIn · TikTok","Creativos optimizados por canal","Tracking + atribución funcional","Optimización quincenal + QBR"], duration:"Retainer mensual", pricing:"Desde $25,000 MXN/mes + ad spend", ar:"3/2" },
  { num:"06", kind:"seo",         title:"SEO & Contenido",   pitch:"Posicionamiento orgánico que convierte intención en demanda. Técnico + editorial bajo el mismo techo.", deliverables:["Auditoría técnica completa","Estrategia de topic clusters","Producción editorial mensual","Optimización on-page continua","Reporting de tráfico y conversión"], duration:"Retainer mensual", pricing:"Desde $20,000 MXN/mes", ar:"3/2" },
]

function ServiceBlock({ s, i }) {
  const flip = i % 2 === 1
  return (
    <section className="svc-detail reveal" id={`svc-${s.num}`}>
      <div className="container">
        <div className={`svc-detail-grid ${flip ? "flip" : ""}`}>
          <div className="svc-detail-media">
            <ImageSlot placeholder={`${s.title} — imagen`} style={{ width:"100%", aspectRatio: s.ar }} />
          </div>
          <div className="svc-detail-copy">
            <div className="svc-detail-num">/ {s.num}</div>
            <h2 className="svc-detail-title">{s.title}</h2>
            <p className="svc-detail-pitch">{s.pitch}</p>
            <div className="svc-detail-list">
              <div className="svc-detail-list-h">Entregables</div>
              {s.deliverables.map(d => <div className="svc-detail-li" key={d}><span className="dot"/>{d}</div>)}
            </div>
            <div className="svc-detail-meta">
              <div><div className="svc-detail-meta-k">Duración</div><div>{s.duration}</div></div>
              <div><div className="svc-detail-meta-k">Inversión</div><div>{s.pricing}</div></div>
            </div>
            <Link to="/contacto" className="btn btn--ghost" style={{marginTop:24}}>
              Cotizar este servicio <span className="arrow"><Arrow size={12} rot={-45}/></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Servicios() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Servicios · Nebula Estudio"
        title={<>Seis servicios.<br/><em>Un solo</em> método.</>}
        lead="Trabajamos cada disciplina como parte de un mismo sistema. No vendemos paquetes sueltos: diagnosticamos qué necesitas y armamos un engagement a la medida."
        meta={[{k:"Mín. retainer",v:"3 meses"},{k:"Pagos",v:"Contado · 3/6 MSI"},{k:"Sedes",v:"MTY · QR · BC"}]}
      />
      <section style={{paddingBlock:"60px 40px"}}>
        <div className="container">
          <div className="svc-index reveal">
            {SERVICE_DETAIL.map(s => (
              <a key={s.num} href={`#svc-${s.num}`} className="svc-index-item">
                <span className="svc-index-num">{s.num}</span>
                <span className="svc-index-title">{s.title}</span>
                <span className="svc-index-arrow"><Arrow size={12} rot={45}/></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      {SERVICE_DETAIL.map((s,i) => <ServiceBlock key={s.num} s={s} i={i} />)}
      <CTA />
    </PageShell>
  )
}

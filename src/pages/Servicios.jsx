import React from 'react'
import { Link } from 'react-router-dom'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { Arrow } from '../components/atoms.jsx'
import { CTA } from '../components/CTA.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const SERVICE_DETAIL = [
  {
    num:"01", kind:"strategy", title:"Diagnóstico 360°", img:"/svc-01.jpg",
    pitch:"El punto de partida. Entramos a tu negocio para entender qué está pasando antes de proponer qué hacer.",
    items:["Auditoría de marca, canales y herramientas","Revisión de costos, resultados y origen de clientes","Entrevistas con clientes y equipo","Análisis de la competencia","Documento con hallazgos y priorización"],
    ar:"3/2"
  },
  {
    num:"02", kind:"branding", img:"/svc-02.jpg", title:"Branding & Diseño",
    pitch:"Identidades que funcionan en el mercado y tienen coherencia en todos los canales. Sistemas, no logos sueltos.",
    items:["Posicionamiento y narrativa de marca","Identidad visual completa","Sistema verbal y tono de comunicación","Manual de marca + materiales","Aplicación en materiales clave"],
    ar:"4/3"
  },
  {
    num:"03", kind:"web", img:"/svc-03.jpg", title:"Páginas web",
    pitch:"Sitios que cargan rápido, posicionan en Google y convierten visitas en clientes.",
    items:["Diseño a la medida","Desarrollo web profesional","SEO técnico base incluido","Formularios y botones de contacto","Adaptado para móvil y desktop"],
    ar:"16/9"
  },
  {
    num:"04", kind:"social", img:"/svc-04.jpg", title:"Redes sociales",
    pitch:"Contenido con estrategia, no posts por publicar. Calendarios pensados para tu marca y tu cliente.",
    items:["Estrategia editorial mensual","Producción de contenido para cada plataforma","Diseño gráfico profesional","Textos estratégicos para cada publicación","Reporte mensual de resultados"],
    ar:"1/1"
  },
  {
    num:"05", kind:"performance", img:"/svc-05.jpg", title:"Google Ads & Meta",
    pitch:"Campañas pagadas con foco en resultados reales. Reporting transparente y optimización continua.",
    items:["Configuración de campañas","Google Ads y Meta Ads","Diseño de anuncios incluido","Segmentación estratégica","Optimización semanal + reporte mensual"],
    ar:"3/2"
  },
  {
    num:"06", kind:"seo", img:"/svc-06.jpg", title:"SEO & Contenido",
    pitch:"Posicionamiento orgánico que trae clientes sin pagar por cada click.",
    items:["Auditoría técnica del sitio","Estrategia de contenido","Producción editorial mensual","Mejoras continuas al sitio","Reporte de tráfico y posiciones"],
    ar:"3/2"
  },
]

function ServiceBlock({ s, i }) {
  const flip = i % 2 === 1
  return (
    <section className="svc-detail reveal" id={`svc-${s.num}`}>
      <div className="container">
        <div className={`svc-detail-grid ${flip ? "flip" : ""}`}>
          <div className="svc-detail-media">
            {s.img
              ? <img src={s.img} alt={s.title} style={{width:"100%",aspectRatio:s.ar,objectFit:"cover",borderRadius:"var(--r-md)",display:"block"}} />
              : <ImageSlot placeholder={`${s.title} — imagen`} style={{ width:"100%", aspectRatio: s.ar }} />
            }
          </div>
          <div className="svc-detail-copy">
            <div className="svc-detail-num">/ {s.num}</div>
            <h2 className="svc-detail-title">{s.title}</h2>
            <p className="svc-detail-pitch">{s.pitch}</p>
            <div className="svc-detail-list">
              <div className="svc-detail-list-h">Qué incluye</div>
              {s.items.map(d => <div className="svc-detail-li" key={d}><span className="dot"/>{d}</div>)}
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
        lead="Trabajamos cada disciplina como parte de un mismo sistema. Diagnosticamos qué necesitas y armamos un plan a la medida de tu negocio."
        meta={[{k:"Sedes",v:"MTY · QR · BC"},{k:"Atención",v:"Toda la República"},{k:"Respuesta",v:"< 24 h hábiles"}]}
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

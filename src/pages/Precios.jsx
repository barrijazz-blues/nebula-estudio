import React from 'react'
import { Link } from 'react-router-dom'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { Arrow } from '../components/atoms.jsx'
import { CTA } from '../components/CTA.jsx'

const PAQUETES = {
  web: {
    label: "Página Web",
    tagline: "Tu sitio web, listo para traer clientes.",
    note: "Los paquetes no incluyen toma ni edición de fotografías. Copys por parte del cliente. Precios más IVA.",
    planes: [
      {
        name: "Órbita", sub: "Landing Express", price: "$3,499", period: "único", highlight: false,
        desc: "Para negocios que necesitan presencia profesional ya.",
        includes: ["1 página completa y bien diseñada","Diseño responsivo (móvil, tablet y desktop)","Formulario de contacto o botón a WhatsApp","Integración con redes sociales","Hosting primer año gratis","Favicon y metadatos básicos (SEO on-page)","Entrega en 7 días hábiles"],
        cta: "/ejemplos", ctaLabel: "Ver ejemplos",
      },
      {
        name: "Satélite", sub: "Sitio Profesional", price: "$7,900", period: "único", highlight: false,
        desc: "Para negocios que quieren destacar y generar confianza.",
        includes: ["Hasta 5 secciones personalizadas","Diseño responsivo (móvil, tablet y desktop)","Formulario de contacto avanzado","Integración con Google Maps","Integración con redes sociales","SEO básico incluido","Hosting primer año gratis","Botón de WhatsApp flotante","1 revisión de diseño incluida","Entrega en 15 días hábiles"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
      {
        name: "Nebula", sub: "Sitio Completo", price: "$14,000", period: "único", highlight: true,
        desc: "El sitio que trabaja por ti mientras tú trabajas en tu negocio.",
        includes: ["Hasta 15 páginas personalizadas","Diseño responsivo (móvil, tablet y desktop)","SEO completo (técnico + on-page)","Formulario de contacto avanzado","Integración con Google Maps y redes sociales","Botón de WhatsApp flotante","Google Analytics configurado","Hosting primer año gratis","Certificado SSL incluido","Blog integrado y listo para publicar","Velocidad optimizada (Core Web Vitals)","Mapa de calor básico (Hotjar o similar)","2 revisiones de diseño incluidas","Soporte post-entrega 30 días","Entrega en 21 días hábiles"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
      {
        name: "Cosmos", sub: "Tienda en línea", price: "$28,000", period: "único", highlight: false,
        desc: "Tu negocio vendiendo en línea las 24 horas.",
        includes: ["Todo lo del paquete Nebula","Tienda en línea completa (hasta 20 productos)","Carrito de compras","Pasarela de pago (Mercado Pago o Stripe)","Panel de administración para gestionar productos","Fichas de producto optimizadas para SEO","Hosting primer año gratis","Capacitación para gestionar tu tienda","Soporte post-entrega 60 días","Entrega en 30 días hábiles"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
    ],
  },
  social: {
    label: "Social Media",
    tagline: "Redes sociales que se ven, se sienten y se mueven.",
    note: "La inversión en pauta no está incluida. Los paquetes no incluyen toma de fotografía ni producción de video. El cliente deberá proporcionar el material. Precios más IVA.",
    desde: true,
    desdePrice: "$3,500",
    desdeDesc: "Gestión profesional de redes sociales. Posts, reels, copywriting y reportes mensuales. Paquetes disponibles según tus objetivos y presupuesto.",
    planes: [
      {
        name: "Social Media Básico", price: "$3,500", period: "mes", highlight: false,
        desc: "Presencia profesional en redes sin complicaciones.",
        includes: ["8 posts estáticos al mes","Diseño gráfico profesional","Copywriting estratégico optimizado para redes (SEO)","Optimización básica del perfil"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
      {
        name: "Social Media Video", price: "$5,000", period: "mes", highlight: true,
        desc: "Contenido en video para destacar en el algoritmo.",
        includes: ["8 posts estáticos","4 reels / videos cortos al mes (edición profesional)","Desarrollo de guión para reels","Copywriting estratégico optimizado para redes (SEO)","Programación de contenido","Optimización del perfil","Reporte mensual"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
      {
        name: "Social Media + Campañas Meta", price: "$7,000", period: "mes", highlight: false,
        desc: "Contenido + publicidad pagada en Meta.",
        includes: ["Todo lo del Paquete Video","Gestión de campañas en Meta Ads (Facebook e Instagram)","Estrategia para campañas publicitarias","Configuración y administración de hasta 3 campañas mensuales","Optimización semanal de anuncios","Reporte mensual y medición de resultados"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
    ],
  },
  campanas: {
    label: "Campañas Digitales",
    tagline: "Publicidad que no se gasta, se invierte.",
    note: "La inversión en pauta publicitaria no está incluida en el costo del servicio y se define según los objetivos de la campaña. Precios más IVA.",
    desde: true,
    desdePrice: "$2,800",
    desdeDesc: "Campañas en Google, Meta o ambas. Segmentación estratégica, diseño de anuncios y optimización continua para traer clientes reales.",
    planes: [
      {
        name: "Meta Ads", price: "$2,800", period: "mes", highlight: false,
        desc: "Publicidad en Facebook e Instagram.",
        includes: ["Configuración de cuenta publicitaria","Hasta 2 campañas activas por mes","2–3 conjuntos de anuncios por campaña","Diseño gráfico de la publicidad","Segmentación estratégica","Optimización semanal","Reporte mensual y análisis de resultados"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
      {
        name: "Google Ads", price: "$3,800", period: "mes", highlight: true,
        desc: "Aparece cuando tus clientes te están buscando.",
        includes: ["Estrategia para 3 meses","Hasta 3 campañas mensuales (Búsqueda)","Palabras clave y palabras negativas","Análisis de calidad de anuncio","Reporte estratégico mensual (clics, conversiones, CTR, ROI)"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
      {
        name: "Full Traffic", price: "$5,500", period: "mes", highlight: false,
        desc: "Meta + Google. Máxima cobertura digital.",
        includes: ["Todo lo que incluye el paquete Meta Ads","Todo lo que incluye el paquete Google Ads","Máxima cobertura digital","Reporte unificado mensual"],
        cta: "/contacto", ctaLabel: "Contratar",
      },
    ],
  },
}

function PlanCard({ plan }) {
  return (
    <div style={{
      border: plan.highlight ? "2px solid var(--accent)" : "1px solid var(--line)",
      borderRadius: "var(--r-lg)", padding: "32px 28px",
      background: plan.highlight ? "var(--accent-soft)" : "var(--bg)",
      display: "flex", flexDirection: "column", gap: 20, position: "relative",
    }}>
      {plan.highlight && (
        <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", background:"var(--accent)", color:"white", fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", padding:"4px 14px", borderRadius:999 }}>Más popular</div>
      )}
      <div>
        <div style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"var(--accent)", marginBottom:4 }}>{plan.name}</div>
        {plan.sub && <div style={{ fontFamily:"var(--f-mono)", fontSize:11, color:"var(--ink-3)", marginBottom:8, letterSpacing:".06em" }}>{plan.sub}</div>}
        <div style={{ display:"flex", alignItems:"baseline", gap:6 }}>
          <span style={{ fontFamily:"var(--f-display)", fontSize:"clamp(32px,4vw,48px)", letterSpacing:"-0.02em" }}>{plan.price}</span>
          <span style={{ fontFamily:"var(--f-mono)", fontSize:11, color:"var(--ink-3)" }}>MXN / {plan.period}</span>
        </div>
        <p style={{ fontSize:14, color:"var(--ink-2)", marginTop:8, lineHeight:1.5 }}>{plan.desc}</p>
      </div>
      <div style={{ borderTop:"1px solid var(--line)", paddingTop:20, display:"flex", flexDirection:"column", gap:10, flex:1 }}>
        {plan.includes.map((item, i) => (
          <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", fontSize:14, color:"var(--ink-2)" }}>
            <span style={{ color:"var(--accent)", marginTop:2, flexShrink:0 }}>✓</span>
            {item}
          </div>
        ))}
      </div>
      <Link to={plan.cta} className="btn" style={{ textAlign:"center", justifyContent:"center" }}>
        {plan.ctaLabel} <span className="arrow"><Arrow size={12} rot={-45} /></span>
      </Link>
    </div>
  )
}

function DesdeCard({ tab }) {
  return (
    <div style={{ border:'1px solid var(--line)', borderRadius:'var(--r-lg)', padding:'clamp(32px,5vw,56px)', background:'var(--bg)', display:'flex', flexDirection:'column', gap:24, maxWidth:640 }}>
      <div>
        <div style={{ fontFamily:'var(--f-mono)', fontSize:10, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--accent)', marginBottom:8 }}>{tab.label}</div>
        <div style={{ display:'flex', alignItems:'baseline', gap:8, marginBottom:12 }}>
          <span style={{ fontFamily:'var(--f-display)', fontSize:'clamp(18px,2vw,24px)', color:'var(--ink-3)', fontWeight:400 }}>desde</span>
          <span style={{ fontFamily:'var(--f-display)', fontSize:'clamp(40px,5vw,64px)', letterSpacing:'-0.02em', lineHeight:1 }}>{tab.desdePrice}</span>
          <span style={{ fontFamily:'var(--f-mono)', fontSize:12, color:'var(--ink-3)' }}>MXN / mes</span>
        </div>
        <p style={{ fontSize:16, color:'var(--ink-2)', lineHeight:1.6 }}>{tab.desdeDesc}</p>
      </div>
      <div style={{ borderTop:'1px solid var(--line)', paddingTop:24, display:'flex', gap:12, flexWrap:'wrap' }}>
        <Link to="/contacto" className="btn btn--accent" style={{ justifyContent:'center' }}>
          Quiero información <Arrow size={12} rot={-45} />
        </Link>
      </div>
      {tab.note && (
        <p style={{ fontSize:11, color:'var(--ink-3)', fontFamily:'var(--f-mono)', letterSpacing:'.06em', lineHeight:1.6, margin:0 }}>* {tab.note}</p>
      )}
    </div>
  )
}

export default function Precios() {
  const [tab, setTab] = React.useState("web")
  const current = PAQUETES[tab]

  return (
    <PageShell>
      <PageHero
        eyebrow="Precios · Nebula Estudio"
        title={<>Inversión clara,<br/><em>resultados</em> medibles.</>}
        lead="Sin letras chicas, sin sorpresas. Elige el servicio que necesitas y empieza esta semana."
        meta={[
          { k:"Pagos", v:"Contado · 3 / 6 MSI" },
          { k:"Sedes", v:"MTY · QR · BC" },
          { k:"IVA", v:"Precios más IVA" },
        ]}
      />

      <section>
        <div className="container">
          <div style={{ display:"flex", gap:8, marginBottom:48, flexWrap:"wrap" }} className="reveal">
            {Object.entries(PAQUETES).map(([key, val]) => (
              <button key={key} className={`work-filter ${tab===key?"active":""}`} onClick={() => setTab(key)}>
                {val.label}
              </button>
            ))}
          </div>

          <div className="section-head reveal" style={{ marginBottom:40 }}>
            <h2 className="section-title">{current.tagline}</h2>
          </div>

          {current.desde
            ? <DesdeCard tab={current} />
            : (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:24 }} className="reveal">
                {current.planes.map((plan, i) => <PlanCard key={i} plan={plan} />)}
              </div>
            )
          }

          {!current.desde && current.note && (
            <p style={{ marginTop:24, fontSize:11, color:"var(--ink-3)", fontFamily:"var(--f-mono)", letterSpacing:".06em", lineHeight:1.6 }} className="reveal">
              * {current.note}
            </p>
          )}

          <div style={{ marginTop:48, textAlign:"center" }} className="reveal">
            <Link to="/contacto" style={{ color:"var(--accent)", borderBottom:"1px solid var(--accent)", fontFamily:"var(--f-mono)", fontSize:12, letterSpacing:".08em" }}>
              ¿Necesitas algo a la medida? Hablemos y armamos un paquete para ti.
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  )
}
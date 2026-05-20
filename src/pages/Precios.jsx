import React from 'react'
import { Link } from 'react-router-dom'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { Arrow } from '../components/atoms.jsx'
import { CTA } from '../components/CTA.jsx'

const PAQUETES = {
  web: {
    label: "Página Web",
    tagline: "Webs que no solo se ven bien, funcionan.",
    note: "Los paquetes no incluyen toma ni edición de fotografías. Copys por parte del cliente. Precios más IVA.",
    planes: [
      {
        name: "Landing Express",
        price: "$1,499",
        period: "único",
        highlight: false,
        desc: "Para emprendedores que necesitan presencia rápida.",
        includes: [
          "1 página completa",
          "Diseño responsivo (desktop, tablet y móvil)",
          "Formulario de contacto o botón a WhatsApp",
          "Integración con redes sociales",
          "Entrega en 7 días hábiles",
        ],
      },
      {
        name: "Landing Page",
        price: "$4,900",
        period: "único",
        highlight: false,
        desc: "Diseño enfocado en convertir visitas en clientes.",
        includes: [
          "Diseño de landing page enfocada a conversión",
          "Diseño responsivo (desktop, tablet y móvil)",
          "Formulario de contacto o botón a WhatsApp",
          "Integración con redes sociales",
          "Optimización básica de velocidad",
        ],
      },
      {
        name: "Web Refresh",
        price: "$7,900",
        period: "único",
        highlight: true,
        desc: "Rediseño moderno de tu página web actual.",
        includes: [
          "Análisis de la página actual",
          "Rediseño visual (look & feel moderno)",
          "Mejora de estructura y navegación (UX)",
          "Diseño responsivo",
          "Actualización de estilos, tipografías y colores",
          "Optimización básica de velocidad",
          "Ajustes de secciones existentes",
          "Soporte durante el proceso",
        ],
      },
      {
        name: "Web Informativa",
        price: "$12,000",
        period: "único",
        highlight: false,
        desc: "Sitio completo y profesional para tu negocio.",
        includes: [
          "Diseño web profesional",
          "Hasta 7 secciones",
          "Diseño responsivo",
          "Formulario de contacto",
          "Optimización SEO básica",
          "Integración con Google Maps y redes sociales",
          "Hosting primer año gratis",
        ],
      },
    ],
  },
  social: {
    label: "Social Media",
    tagline: "Redes sociales que se ven, se sienten y se mueven.",
    note: "La inversión en pauta no está incluida. Los paquetes no incluyen toma de fotografía ni producción de video. El cliente deberá proporcionar el material. Precios más IVA.",
    planes: [
      {
        name: "Social Media Básico",
        price: "$3,500",
        period: "mes",
        highlight: false,
        desc: "Presencia profesional en redes sin complicaciones.",
        includes: [
          "8 posts estáticos al mes",
          "Diseño gráfico profesional",
          "Copywriting estratégico optimizado para redes (SEO)",
          "Optimización básica del perfil",
        ],
      },
      {
        name: "Social Media Video",
        price: "$5,000",
        period: "mes",
        highlight: true,
        desc: "Contenido en video para destacar en el algoritmo.",
        includes: [
          "8 posts estáticos",
          "4 reels / videos cortos al mes (edición profesional)",
          "Desarrollo de guión para reels",
          "Copywriting estratégico optimizado para redes (SEO)",
          "Programación de contenido",
          "Optimización del perfil",
          "Reporte mensual",
        ],
      },
      {
        name: "Social Media + Campañas Meta",
        price: "$7,000",
        period: "mes",
        highlight: false,
        desc: "Contenido + publicidad pagada en Meta.",
        includes: [
          "Todo lo del Paquete Video",
          "Gestión de campañas en Meta Ads (Facebook e Instagram)",
          "Estrategia para campañas publicitarias",
          "Configuración y administración de hasta 3 campañas mensuales",
          "Optimización semanal de anuncios",
          "Reporte mensual y medición de resultados",
        ],
      },
    ],
  },
  campanas: {
    label: "Campañas Digitales",
    tagline: "Publicidad que no se gasta, se invierte.",
    note: "La inversión en pauta publicitaria no está incluida en el costo del servicio y se define según los objetivos de la campaña. Precios más IVA.",
    planes: [
      {
        name: "Meta Ads",
        price: "$2,800",
        period: "mes",
        highlight: false,
        desc: "Publicidad en Facebook e Instagram.",
        includes: [
          "Configuración de cuenta publicitaria",
          "Hasta 2 campañas activas por mes",
          "2–3 conjuntos de anuncios por campaña",
          "Diseño gráfico de la publicidad",
          "Segmentación estratégica",
          "Optimización semanal",
          "Reporte mensual y análisis de resultados",
        ],
      },
      {
        name: "Google Ads",
        price: "$3,800",
        period: "mes",
        highlight: true,
        desc: "Aparece cuando tus clientes te están buscando.",
        includes: [
          "Estrategia para 3 meses",
          "Hasta 3 campañas mensuales (Búsqueda)",
          "Palabras clave y palabras negativas",
          "Análisis de calidad de anuncio",
          "Reporte estratégico mensual (clics, conversiones, CTR, ROI)",
        ],
      },
      {
        name: "Full Traffic",
        price: "$5,500",
        period: "mes",
        highlight: false,
        desc: "Meta + Google. Máxima cobertura digital.",
        includes: [
          "Todo lo que incluye el paquete Meta Ads",
          "Todo lo que incluye el paquete Google Ads",
          "Máxima cobertura digital",
          "Reporte unificado mensual",
        ],
      },
    ],
  },
}

function PlanCard({ plan }) {
  return (
    <div style={{
      border: plan.highlight ? "2px solid var(--accent)" : "1px solid var(--line)",
      borderRadius: "var(--r-lg)",
      padding: "32px 28px",
      background: plan.highlight ? "var(--accent-soft)" : "var(--bg)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      position: "relative",
    }}>
      {plan.highlight && (
        <div style={{
          position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
          background: "var(--accent)", color: "white", fontFamily: "var(--f-mono)",
          fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase",
          padding: "4px 14px", borderRadius: 999,
        }}>Más popular</div>
      )}
      <div>
        <div style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"var(--accent)", marginBottom:8 }}>{plan.name}</div>
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
      <Link to="/contacto" className="btn" style={{ textAlign:"center", justifyContent:"center" }}>
        Contratar <span className="arrow"><Arrow size={12} rot={-45} /></span>
      </Link>
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
          { k:"Retainer mínimo", v:"3 meses" },
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

          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${current.planes.length}, 1fr)`,
            gap: 24,
          }} className="reveal">
            {current.planes.map((plan, i) => <PlanCard key={i} plan={plan} />)}
          </div>

          {current.note && (
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

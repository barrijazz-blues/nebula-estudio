import React from 'react'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { CTA } from '../components/CTA.jsx'

const VALUES = [
  { num:"01", title:"Diagnóstico primero",          desc:"No proponemos antes de entender. Cada engagement empieza con inmersión en tu negocio, no con un brief copiado." },
  { num:"02", title:"Equipo pequeño, sin handoffs", desc:"Trabajas con quien hace el trabajo. Sin account managers que traducen entre tú y el equipo." },
  { num:"03", title:"Estrategia + ejecución",       desc:"La consultoría que se queda a implementar lo que recomienda. Si no sale, es nuestro problema también." },
]
const SEDES = [
  { name:"Monterrey", city:"San Pedro Garza García, N.L.", meta:"Sede principal" },
  { name:"Tulum",     city:"Quintana Roo",                 meta:"Sede creativa"  },
  { name:"Ensenada",  city:"Baja California",              meta:"Sede oeste"     },
]

export default function Estudio() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sobre Nebula · Somos espaciales ⚡"
        title={<>Estudio creativo<br/><em>independiente</em>.</>}
        lead="Una consultoría de marketing digital que entra a fondo. Diagnosticamos, diseñamos la estrategia y nos quedamos a ejecutarla — con tu equipo dentro."
        meta={[{k:"Fundado",v:"Monterrey · 2017"},{k:"Sedes",v:"MTY · Tulum · Ensenada"},{k:"Mercado",v:"Toda la República"}]}
      />
      <section style={{paddingBlock:"clamp(60px, 8vw, 100px)"}}>
        <div className="container">
          <p className="manifesto reveal">
            La mayoría de las empresas no tienen un problema de marketing. Tienen <em>cinco proveedores</em> y ninguna estrategia.<br/><br/>
            Nebula entra antes que las tácticas: diagnostica, decide y ejecuta hasta que los números se mueven.
          </p>
        </div>
      </section>
      <section>
        <div className="container" style={{marginBottom:48}}>
          <div className="section-head reveal">
            <div><span className="eyebrow">Lo que nos define</span><h2 className="section-title">Tres <em>principios</em>,<br/>cero excepciones.</h2></div>
            <p className="section-lead">No son posters en la pared. Son las reglas que usamos para decidir qué clientes tomamos y cómo trabajamos.</p>
          </div>
        </div>
        <div className="values-grid values-grid--3 reveal">
          {VALUES.map(v => (
            <div className="value-item" key={v.num}>
              <div><div className="value-num">/ {v.num}</div><h3 className="value-title">{v.title}</h3><p className="value-desc">{v.desc}</p></div>
            </div>
          ))}
        </div>
      </section>
      <section id="sedes">
        <div className="container">
          <div className="section-head reveal">
            <div><span className="eyebrow">Coordenadas</span><h2 className="section-title">Tres sedes,<br/>un solo <em>método</em>.</h2></div>
            <p className="section-lead">Atendemos toda la República. Las sedes nos permiten visitar clientes presencialmente cuando el proyecto lo amerita.</p>
          </div>
          <div className="sedes reveal">
            {SEDES.map(s => (
              <div className="sede" key={s.name}>
                <div>
                  <div className="sede-name">{s.name}</div>
                  <div style={{color:"var(--ink-3)",fontSize:13,marginTop:4,fontFamily:"var(--f-mono)",letterSpacing:".08em"}}>{s.city}</div>
                </div>
                <div className="sede-meta"><span>{s.meta}</span><span>↗</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </PageShell>
  )
}

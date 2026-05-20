import React from 'react'
import { Arrow, ServiceIcon } from '../components/atoms.jsx'

const WA_LINK = "https://wa.link/qedt1r"

const TESTIMONIOS = [
  { quote:"Nuestra página web nos ha permitido duplicar nuestras ventas en menos de seis meses. El diseño es limpio, rápido y ha mejorado nuestra presencia en línea.", name:"Cesar Gutiérrez", role:"CEO | Alia Offices", initial:"C" },
  { quote:"Los servicios de Social Media nos ayudan a mantenernos activos en redes sociales. Junto con ellos creamos estrategias para crear conversiones.", name:"Alex B.", role:"CEO | Chemdry Regiomontana", initial:"A" },
  { quote:"Gracias al paquete de branding, ahora tenemos una identidad visual profesional y coherente. Definitivamente marcó la diferencia en la percepción de nuestros clientes.", name:"Karen L.", role:"Emprendedora", initial:"K" },
  { quote:"Nos han ayudado por más de 5 años en nuestras estrategias de Google Ads y Social Media.", name:"Daniel M.", role:"Jefe de Marketing", initial:"D" },
]

const SERVICIOS = [
  { kind:"web",         title:"Diseño Web",         desc:"Creamos sitios atractivos y funcionales que convierten visitantes en clientes y reflejan la identidad única de tu marca." },
  { kind:"social",      title:"Redes Sociales",      desc:"Gestionamos tus plataformas para aumentar seguidores, engagement y conversiones con contenido estratégico y campañas efectivas." },
  { kind:"performance", title:"Marketing Digital",   desc:"Estrategias personalizadas que combinan SEO, publicidad online y análisis de datos para maximizar tu presencia digital." },
]

const RESULTADOS = [
  "Optimización web para atraer clientes potenciales",
  "Estrategias digitales con métricas transparentes",
  "Mejora continua de tu visibilidad online",
  "Aumento significativo en la tasa de conversión",
  "Posicionamiento SEO y SEM con resultados medibles",
  "Soluciones integrales adaptadas a tu industria",
]

const LOGOS_LANDING = [
  { src:"/logo-mariadelmar.png", alt:"María del Mar" },
  { src:"/logo-arthouse.png",    alt:"Arthouse Tulum" },
  { src:"/logo-pocna.png",       alt:"Pocna" },
  { src:"/logo-serna-impresos.png", alt:"Serna Impresos" },
  { src:"/logo-italdo.png",      alt:"Italdo" },
  { src:"/logo-alia.png",        alt:"Alia Offices" },
  { src:"/logo-catrina.png",     alt:"La Catrina" },
  { src:"/logo-link2wash.png",   alt:"Link2Wash" },
  { src:"/logo-dci.png",         alt:"DCIGlobal" },
  { src:"/logo-eatbar.png",      alt:"EatBar" },
  { src:"/logo-chem.png",        alt:"Chem-Dry" },
  { src:"/logo-colibri.png",     alt:"Colibrí Boutique Hotels" },
  { src:"/logo-lazebra.png",     alt:"La Zebra Tulum" },
  { src:"/logo-nevana.png",      alt:"Nevana Tulum" },
  { src:"/logo-cubo.png",        alt:"Cubo Petroleum" },
  { src:"/logo-solcaribe.png",   alt:"Hotel Sol Caribe" },
]

const logoList = [...LOGOS_LANDING, ...LOGOS_LANDING]

export default function Landing() {
  const [sent, setSent] = React.useState(false)
  const [form, setForm] = React.useState({ nombre:"", apellido:"", email:"", mensaje:"" })
  const update = (k,v) => setForm(f => ({...f,[k]:v}))
  const submit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <div style={{ fontFamily:"var(--f-sans)", color:"var(--ink)", background:"var(--bg)" }}>

      {/* NAV */}
      <nav style={{ position:"sticky", top:0, zIndex:100, background:"var(--bg)", borderBottom:"1px solid var(--line)", padding:"0 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <a href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", color:"inherit" }}>
            <img src="/logo.png" alt="Nebula Estudio" style={{ height:40, width:"auto" }} />
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn--accent" style={{ height:40, fontSize:13 }}>
            Contactar ahora <span className="arrow"><Arrow size={10} rot={-45} /></span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background:"var(--ink)", color:"var(--bg)", padding:"clamp(80px,10vw,140px) 24px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 60% 40%, oklch(0.4 0.22 295 / 0.4), transparent 70%)", pointerEvents:"none" }} />
        <div style={{ maxWidth:900, margin:"0 auto", position:"relative" }}>
          <div style={{ fontFamily:"var(--f-mono)", fontSize:11, letterSpacing:".2em", textTransform:"uppercase", color:"var(--accent)", marginBottom:24 }}>
            Más de 10 años de experiencia nos respaldan ⚡
          </div>
          <h1 style={{ fontFamily:"var(--f-display)", fontSize:"clamp(36px,6vw,80px)", fontWeight:400, lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:24 }}>
            Impulsa Tu Negocio con<br/><em style={{ color:"var(--accent)" }}>Estrategias Digitales</em> Completas
          </h1>
          <p style={{ fontSize:"clamp(16px,2vw,22px)", color:"oklch(0.78 0.01 280)", maxWidth:700, margin:"0 auto 40px", lineHeight:1.55 }}>
            Transformamos tu presencia online con soluciones integrales de marketing digital. Desde optimización web y posicionamiento en buscadores hasta campañas publicitarias y estrategias en redes sociales.
          </p>
          <div style={{ display:"flex", gap:16, justifyContent:"center", flexWrap:"wrap" }}>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn--accent" style={{ fontSize:16, height:52, padding:"0 32px" }}>
              Contactar por WhatsApp <span className="arrow"><Arrow size={12} rot={-45} /></span>
            </a>
            <a href="#servicios" className="btn btn--ghost" style={{ fontSize:16, height:52, padding:"0 32px", borderColor:"oklch(0.4 0.01 280)", color:"var(--bg)" }}>
              Explorar servicios
            </a>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section style={{padding:0}}>
        <div className="logos">
          <div className="logos-marquee">
            {logoList.map((l,i) => (
              <span className="logo-item" key={i}>
                <img src={l.src} alt={l.alt} style={{height:36,width:"auto",maxWidth:120,objectFit:"contain",filter:"grayscale(1) invert(1)",opacity:0.6,transition:"opacity .2s, filter .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.filter="grayscale(0) invert(1)"}}
                  onMouseLeave={e=>{e.currentTarget.style.opacity="0.6";e.currentTarget.style.filter="grayscale(1) invert(1)"}}
                />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={{ padding:"clamp(60px,8vw,100px) 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".15em", textTransform:"uppercase", color:"var(--accent)" }}>Nuestros servicios</span>
            <h2 style={{ fontFamily:"var(--f-display)", fontSize:"clamp(28px,4vw,52px)", fontWeight:400, letterSpacing:"-0.02em", marginTop:12 }}>
              Te ayudamos a gestionar<br/>tu <em>estrategia de marketing</em>
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:24 }}>
            {SERVICIOS.map(s => (
              <div key={s.title} style={{ border:"1px solid var(--line)", borderRadius:"var(--r-lg)", padding:"36px 28px", display:"flex", flexDirection:"column", gap:16 }}>
                <div style={{ color:"var(--accent)" }}><ServiceIcon kind={s.kind} /></div>
                <h3 style={{ fontFamily:"var(--f-display)", fontSize:28, fontWeight:400, letterSpacing:"-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize:15, color:"var(--ink-2)", lineHeight:1.6, flex:1 }}>{s.desc}</p>
                <a href={WA_LINK} target="_blank" rel="noopener" style={{ color:"var(--accent)", fontFamily:"var(--f-mono)", fontSize:12, letterSpacing:".08em", textTransform:"uppercase", textDecoration:"none", borderBottom:"1px solid var(--accent)", paddingBottom:2, alignSelf:"flex-start" }}>
                  Obtener información →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section style={{ background:"var(--bg-2)", padding:"clamp(60px,8vw,100px) 24px", borderBlock:"1px solid var(--line)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          <div>
            <span style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".15em", textTransform:"uppercase", color:"var(--accent)" }}>Por qué elegirnos</span>
            <h2 style={{ fontFamily:"var(--f-display)", fontSize:"clamp(28px,4vw,52px)", fontWeight:400, letterSpacing:"-0.02em", marginTop:12, marginBottom:24 }}>
              Nebula Estudio: Expertos en<br/><em>Marketing Digital</em>
            </h2>
            <p style={{ fontSize:16, color:"var(--ink-2)", lineHeight:1.6, marginBottom:32 }}>
              Somos especialistas en optimizar la presencia online de pequeñas y medianas empresas. Nuestras estrategias personalizadas garantizan resultados medibles desde el primer mes.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn--accent">
              Obtener oferta <span className="arrow"><Arrow size={12} rot={-45} /></span>
            </a>
          </div>
          <div style={{ display:"grid", gap:12 }}>
            {RESULTADOS.map((r,i) => (
              <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"14px 16px", background:"var(--bg)", borderRadius:"var(--r-md)", border:"1px solid var(--line)", fontSize:14, color:"var(--ink-2)" }}>
                <span style={{ color:"var(--accent)", flexShrink:0, fontWeight:600 }}>✓</span> {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding:"clamp(60px,8vw,100px) 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <span style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".15em", textTransform:"uppercase", color:"var(--accent)" }}>Opiniones de nuestro trabajo</span>
            <h2 style={{ fontFamily:"var(--f-display)", fontSize:"clamp(28px,4vw,52px)", fontWeight:400, letterSpacing:"-0.02em", marginTop:12 }}>
              Testimonios de <em>Clientes</em>
            </h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:24 }}>
            {TESTIMONIOS.map((t,i) => (
              <div key={i} style={{ border:"1px solid var(--line)", borderRadius:"var(--r-lg)", padding:"28px 24px", display:"flex", flexDirection:"column", gap:20 }}>
                <p style={{ fontSize:15, color:"var(--ink-2)", lineHeight:1.65, flex:1, fontStyle:"italic" }}>"{t.quote}"</p>
                <div style={{ display:"flex", gap:12, alignItems:"center" }}>
                  <div style={{ width:40, height:40, borderRadius:"50%", background:"var(--accent)", display:"flex", alignItems:"center", justifyContent:"center", color:"white", fontFamily:"var(--f-display)", fontSize:18, flexShrink:0 }}>{t.initial}</div>
                  <div>
                    <div style={{ fontFamily:"var(--f-display)", fontSize:16 }}>{t.name}</div>
                    <div style={{ fontFamily:"var(--f-mono)", fontSize:11, color:"var(--ink-3)", letterSpacing:".06em" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:40 }}>
            <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn--accent" style={{ fontSize:16, height:52, padding:"0 32px" }}>
              Obtener oferta <span className="arrow"><Arrow size={12} rot={-45} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA + FORMULARIO */}
      <section style={{ background:"var(--ink)", color:"var(--bg)", padding:"clamp(60px,8vw,100px) 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"start" }}>
          <div>
            <span style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".15em", textTransform:"uppercase", color:"var(--accent)" }}>Estamos a tus órdenes</span>
            <h2 style={{ fontFamily:"var(--f-display)", fontSize:"clamp(28px,4vw,52px)", fontWeight:400, letterSpacing:"-0.02em", marginTop:12, marginBottom:16 }}>
              ¿Tienes algún proyecto<br/>en <em>mente</em>?
            </h2>
            <p style={{ fontSize:16, color:"oklch(0.72 0.01 280)", lineHeight:1.6, marginBottom:32 }}>
              Es momento de llevar tu negocio al siguiente nivel. Respondemos en menos de 24 horas hábiles.
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              <a href="tel:8135390665" style={{ color:"var(--bg)", fontSize:20, fontFamily:"var(--f-display)", textDecoration:"none" }}>81 3539 0665</a>
              <a href="mailto:info@nebulaestudio.com.mx" style={{ color:"oklch(0.72 0.01 280)", fontSize:15, textDecoration:"none" }}>info@nebulaestudio.com.mx</a>
              <a href={WA_LINK} target="_blank" rel="noopener" className="btn btn--accent" style={{ marginTop:16, alignSelf:"flex-start" }}>
                WhatsApp directo <span className="arrow"><Arrow size={12} rot={-45} /></span>
              </a>
            </div>
          </div>
          <form onSubmit={submit} style={{ display:"grid", gap:20 }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                <label style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"oklch(0.55 0.01 280)" }}>Nombre *</label>
                <input type="text" placeholder="María" value={form.nombre} onChange={e=>update('nombre',e.target.value)} required style={{ background:"oklch(0.2 0.01 280)", border:"1px solid oklch(0.35 0.01 280)", borderRadius:8, padding:"12px 16px", color:"var(--bg)", fontSize:15, outline:"none", fontFamily:"var(--f-sans)" }} />
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                <label style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"oklch(0.55 0.01 280)" }}>Apellido *</label>
                <input type="text" placeholder="González" value={form.apellido} onChange={e=>update('apellido',e.target.value)} required style={{ background:"oklch(0.2 0.01 280)", border:"1px solid oklch(0.35 0.01 280)", borderRadius:8, padding:"12px 16px", color:"var(--bg)", fontSize:15, outline:"none", fontFamily:"var(--f-sans)" }} />
              </div>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              <label style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"oklch(0.55 0.01 280)" }}>Correo Electrónico *</label>
              <input type="email" placeholder="maria@empresa.com" value={form.email} onChange={e=>update('email',e.target.value)} required style={{ background:"oklch(0.2 0.01 280)", border:"1px solid oklch(0.35 0.01 280)", borderRadius:8, padding:"12px 16px", color:"var(--bg)", fontSize:15, outline:"none", fontFamily:"var(--f-sans)" }} />
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              <label style={{ fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".12em", textTransform:"uppercase", color:"oklch(0.55 0.01 280)" }}>Mensaje *</label>
              <textarea placeholder="Cuéntanos de tu proyecto..." value={form.mensaje} onChange={e=>update('mensaje',e.target.value)} required rows={4} style={{ background:"oklch(0.2 0.01 280)", border:"1px solid oklch(0.35 0.01 280)", borderRadius:8, padding:"12px 16px", color:"var(--bg)", fontSize:15, outline:"none", fontFamily:"var(--f-sans)", resize:"vertical" }} />
            </div>
            <button type="submit" className="btn btn--accent" style={{ justifyContent:"center", textAlign:"center", fontSize:16, height:52 }}>
              {sent ? "Mensaje enviado ✓" : "Enviar mensaje"} {!sent && <span className="arrow"><Arrow size={12} rot={-45} /></span>}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:"24px", borderTop:"1px solid var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12, fontSize:13, color:"var(--ink-3)" }}>
        <span>© 2026 Nebula Estudio. Todos los Derechos Reservados.</span>
        <div style={{ display:"flex", gap:20 }}>
          <a href="https://www.instagram.com/nebulaestudiomx/" target="_blank" rel="noopener" style={{ color:"var(--ink-3)" }}>Instagram</a>
          <a href="https://www.facebook.com/nebulaestudiomx" target="_blank" rel="noopener" style={{ color:"var(--ink-3)" }}>Facebook</a>
          <a href={WA_LINK} target="_blank" rel="noopener" style={{ color:"var(--accent)" }}>WhatsApp ↗</a>
        </div>
      </footer>

    </div>
  )
}

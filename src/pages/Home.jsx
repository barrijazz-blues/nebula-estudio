import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Footer, useReveal } from '../components/chrome.jsx'
import { Arrow, ChevronLeft, ChevronRight, ServiceIcon, VerticalIcon } from '../components/atoms.jsx'
import { CTA } from '../components/CTA.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const LOGOS = [
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

const PROBLEMS = [
  { num:"01", tone:"gray",   tag:"Sitio web",    title:"Sitio web desactualizado.",               desc:"Lo hicieron hace años y nadie lo toca. Carga lento, se ve mal en celular y la información ya no es correcta." },
  { num:"02", tone:"violet", tag:"Google",        title:"Poca o nula presencia en Google.",        desc:"No aparecen cuando alguien busca lo que venden. Su competencia sí." },
  { num:"03", tone:"gray",   tag:"Redes",         title:"Redes sociales abandonadas.",             desc:"Tienen cuenta pero publican cada mes o dos. Sin estrategia, sin consistencia, sin resultados." },
  { num:"04", tone:"violet", tag:"Identidad",     title:"Sin identidad de marca clara.",           desc:"Logo hecho en Canva, colores distintos en cada canal, mensaje diferente en cada pieza. Nadie los recuerda." },
  { num:"05", tone:"gray",   tag:"Publicidad",    title:"Invierten en publicidad sin resultados.", desc:"Han probado Google Ads o Meta pero el dinero se va sin clientes claros ni forma de medir qué pasó." },
  { num:"06", tone:"violet", tag:"Métricas",      title:"No saben qué está funcionando.",          desc:"No miden nada. No saben de dónde vienen sus clientes ni qué canal les está generando dinero." },
]

const SERVICES = [
  { num:"01", kind:"strategy",    title:"Diagnóstico 360°",  desc:"Auditoría completa de marca, canales, datos y stack.",          tags:["Auditoría","Data review","Stack"] },
  { num:"02", kind:"branding",    title:"Branding & Diseño", desc:"Identidad, sistemas visuales y materiales que aguantan el escrutinio.", tags:["Identidad","Sistema","Print"] },
  { num:"03", kind:"web",         title:"Páginas web",       desc:"Sitios y landings que cargan rápido, posicionan y convierten.", tags:["Diseño","Desarrollo","CRO"] },
  { num:"04", kind:"social",      title:"Redes sociales",    desc:"Estrategia de contenido, producción y community management.",   tags:["Estrategia","Producción","Community"] },
  { num:"05", kind:"performance", title:"Google Ads & Meta", desc:"Campañas pagadas con foco en LTV y CAC, no en clicks vacíos.", tags:["Google Ads","Meta","Reporting"] },
  { num:"06", kind:"seo",         title:"SEO & Contenido",   desc:"Posicionamiento orgánico que convierte intención en demanda.",  tags:["Technical SEO","Editorial","Topic clusters"] },
]

const VERTICALS = [
  { name:"Hoteles & Hospitality",   count:"12 marcas", icon:"hotel" },
  { name:"Restaurantes & Bares",    count:"9 marcas",  icon:"rest"  },
  { name:"Inmobiliarias",           count:"7 marcas",  icon:"home"  },
  { name:"Wellness & CBD",          count:"5 marcas",  icon:"leaf"  },
  { name:"Retail & E-commerce",     count:"11 marcas", icon:"bag"   },
  { name:"Distribución & B2B",      count:"6 marcas",  icon:"box"   },
  { name:"Servicios profesionales",  count:"8 marcas", icon:"brief" },
  { name:"Turismo & Experiencias",  count:"10 marcas", icon:"comp"  },
]

const CASES = [
  { tag:"Hotel · Tulum",       year:"2024", title:"Pocna Tulum",        desc:"Desarrollo y diseño web del hotel.", img:"/all-devices-pocna.png", stats:[["Web","Completa"],["Tulum","Hospitality"]] },
  { tag:"Hotel · Tulum",       year:"2026", title:"Nevana Tulum",        desc:"Desarrollo y diseño web del hotel.", img:"/trabajo-nevana.jpg", stats:[["Web","Completa"],["Tulum","Hospitality"]] },
  { tag:"CBD · Tulum",         year:"2024", title:"Yucannabis",          desc:"Branding completo para marca de CBD.", img:"/trabajo-yucannabis.png", stats:[["Identidad","Sistema"],["CBD","Vertical"]] },
  { tag:"Inmobiliaria · SPGG", year:"2024", title:"Alia Offices",        desc:"Logotipo y desarrollo de página web para inmobiliaria.", img:"/trabajo-fs-brookers.png", stats:[["Web","+ Logo"],["SPGG","Real estate"]] },
  { tag:"Wellness · Tulum",    year:"2024", title:"Ilaria Lisi",         desc:"Identidad de marca con paleta natural.", img:"/trabajo-ilaria.jpg", stats:[["Branding","Moodboard"],["Wellness","Spirit"]] },
  { tag:"Distribuidora · BC",  year:"2024", title:"Pacific Best Berry",  desc:"Página web responsive para distribuidora en Ensenada.", img:"/trabajo-pacific.jpg", stats:[["Web","Responsive"],["BC","Distribución"]] },
  { tag:"Restaurante · MTY",   year:"2023", title:"EatBar",              desc:"Branding y social media para restaurante en Monterrey.", img:"/trabajo-eatbar.jpg", stats:[["Branding","Social"],["MTY","F&B"]] },
  { tag:"Restaurante · MTY",   year:"2023", title:"Italdo",              desc:"Branding para restaurante italiano.", img:"/trabajo-italdo-social-media.jpg", stats:[["Branding","Social"],["MTY","F&B"]] },
  { tag:"Restaurante · MTY",   year:"2023", title:"Creepy Chicken",      desc:"Branding para restaurante en Monterrey.", img:"/trabajo-creepy-chicken.png", stats:[["Branding","Social"],["MTY","F&B"]] },
  { tag:"Servicios · MTY",     year:"2023", title:"Lavaggio",            desc:"Branding para empresa de servicios.", img:"/trabajo-lavaggio.jpg", stats:[["Branding","MTY"],["Servicios","MTY"]] },
]

const PROCESS = [
  { n:"01", t:"Diagnóstico",    d:"4 semanas dentro de tu negocio: data, stack, equipo, mercado.", items:["Data audit","Entrevistas","Benchmarks"] },
  { n:"02", t:"Tesis",          d:"Documento de tesis: dónde está el palanque y por qué.",          items:["Hipótesis","Roadmap","Targets"] },
  { n:"03", t:"Implementación", d:"Bajamos a ejecución con tu equipo. Sprints quincenales.",         items:["Sprints","Pair-work","Enablement"] },
  { n:"04", t:"Medición",       d:"Tableros honestos, reviews trimestrales y handover.",             items:["Dashboards","QBRs","Handover"] },
]

const TABS = {
  web: {
    label: "Página Web",
    planes: [
      { name:"Landing Express", price:"$1,499", period:"único", highlight:false, items:["1 página completa","Diseño responsivo (desktop, tablet y móvil)","Formulario de contacto o botón a WhatsApp","Integración con redes sociales","Entrega en 7 días hábiles"] },
      { name:"Landing Page",    price:"$4,900", period:"único", highlight:false, items:["Diseño de landing page enfocada a conversión","Diseño responsivo (desktop, tablet y móvil)","Formulario de contacto o botón a WhatsApp","Integración con redes sociales","Optimización básica de velocidad"] },
      { name:"Web Refresh",     price:"$7,900", period:"único", highlight:true,  items:["Análisis de la página actual","Rediseño visual (look & feel moderno)","Mejora de estructura y navegación (UX)","Diseño responsivo","Actualización de estilos, tipografías y colores","Optimización básica de velocidad","Soporte durante el proceso"] },
      { name:"Web Informativa", price:"$12,000",period:"único", highlight:false, items:["Diseño web profesional","Hasta 7 secciones","Diseño responsivo","Formulario de contacto","Optimización SEO básica","Integración con Google Maps y redes sociales","Hosting primer año gratis"] },
    ],
    note:"Los paquetes no incluyen toma ni edición de fotografías. Copys por parte del cliente. Precios más IVA.",
  },
  social: {
    label: "Social Media",
    planes: [
      { name:"Social Media Básico",           price:"$3,500", period:"mes", highlight:false, items:["8 posts estáticos al mes","Diseño gráfico profesional","Copywriting estratégico optimizado para redes (SEO)","Optimización básica del perfil"] },
      { name:"Social Media Video",            price:"$5,000", period:"mes", highlight:true,  items:["8 posts estáticos","4 reels / videos cortos al mes (edición profesional)","Desarrollo de guión para reels","Copywriting estratégico optimizado para redes (SEO)","Programación de contenido","Optimización del perfil","Reporte mensual"] },
      { name:"Social Media + Campañas Meta",  price:"$7,000", period:"mes", highlight:false, items:["Todo lo del Paquete Video","Gestión de campañas en Meta Ads (Facebook e Instagram)","Estrategia para campañas publicitarias","Hasta 3 campañas publicitarias mensuales","Optimización semanal de anuncios","Reporte mensual y medición de resultados"] },
    ],
    note:"La inversión en pauta no está incluida. Los paquetes no incluyen toma de fotografía ni producción de video. Precios más IVA.",
  },
  campanas: {
    label: "Campañas",
    planes: [
      { name:"Meta Ads",    price:"$2,800", period:"mes", highlight:false, items:["Configuración de cuenta publicitaria","Hasta 2 campañas activas por mes","2–3 conjuntos de anuncios por campaña","Diseño gráfico de la publicidad","Segmentación estratégica","Optimización semanal","Reporte mensual y análisis de resultados"] },
      { name:"Google Ads",  price:"$3,800", period:"mes", highlight:true,  items:["Estrategia para 3 meses","Hasta 3 campañas mensuales (Búsqueda)","Palabras clave y palabras negativas","Análisis de calidad de anuncio","Reporte estratégico mensual (clics, conversiones, CTR, ROI)"] },
      { name:"Full Traffic",price:"$5,500", period:"mes", highlight:false, items:["Todo lo que incluye Meta Ads","Todo lo que incluye Google Ads","Máxima cobertura digital","Reporte unificado mensual"] },
    ],
    note:"La inversión en pauta publicitaria no está incluida en el costo del servicio. Precios más IVA.",
  },
}

const list = [...LOGOS, ...LOGOS]

function PreciosHome() {
  const [tab, setTab] = React.useState("web")
  const current = TABS[tab]

  return (
    <section id="precios">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Inversión</span>
            <h2 className="section-title">Precios claros,<br/><em>sin sorpresas</em>.</h2>
          </div>
          <p className="section-lead">Elige lo que necesitas. Sin letras chicas, sin paquetes inflados. Precios más IVA.</p>
        </div>

        <div style={{display:"flex",gap:8,marginBottom:40,flexWrap:"wrap"}} className="reveal">
          {Object.entries(TABS).map(([key,val]) => (
            <button key={key} className={`work-filter ${tab===key?"active":""}`} onClick={()=>setTab(key)}>
              {val.label}
            </button>
          ))}
        </div>

        <div className="prices-home-grid reveal">
          {current.planes.map((plan,i) => (
            <div key={i} className={`price-card ${plan.highlight?"price-card--highlight":""}`}>
              {plan.highlight && <div className="price-card-badge">Más popular</div>}
              <div className="price-card-name">{plan.name}</div>
              <div className="price-card-amount">
                {plan.price}
                <span className="price-card-period">MXN / {plan.period}</span>
              </div>
              <div className="price-card-items">
                {plan.items.map((item,j) => (
                  <div key={j} className="price-card-item">
                    <span style={{color:"var(--accent)",flexShrink:0}}>✓</span> {item}
                  </div>
                ))}
              </div>
              <Link to="/contacto" className="btn" style={{marginTop:"auto",justifyContent:"center",textAlign:"center"}}>
                Contratar <span className="arrow"><Arrow size={12} rot={-45}/></span>
              </Link>
            </div>
          ))}
        </div>

        {current.note && (
          <p style={{marginTop:24,fontSize:11,color:"var(--ink-3)",fontFamily:"var(--f-mono)",letterSpacing:".06em",lineHeight:1.6}} className="reveal">
            * {current.note}
          </p>
        )}

        <div style={{textAlign:"center",marginTop:32}} className="reveal">
          <Link to="/precios" className="btn btn--ghost">
            Ver todos los paquetes <span className="arrow"><Arrow size={12} rot={-45}/></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useReveal()
  const [idx, setIdx] = React.useState(0)
  const total = Math.ceil(CASES.length / 2)
  const goTo = i => setIdx(Math.max(0, Math.min(total - 1, i)))

  return (
    <>
      <NavBar />
      <main id="top">
        {/* HERO */}
        <section className="hero-a">
          <div className="starfield" />
          <div className="halo halo-1" />
          <div className="container hero-a-inner">
            <span className="eyebrow reveal">Agencia de marketing digital · MX · Somos espaciales ⚡</span>
            <h1 className="display reveal">Consultoría de marketing<br/>digital, <em>a fondo</em>.</h1>
            <p className="hero-a-sub reveal">Estudio creativo independiente que desarrolla marcas y marketing para negocios que cuentan una historia. Entramos como socios: diagnosticamos, diseñamos la estrategia y la ejecutamos contigo.</p>
            <div className="hero-a-cta reveal">
              <Link to="/contacto" className="btn">Iniciar un proyecto <span className="arrow"><Arrow size={12} rot={-45} /></span></Link>
              <a href="#trabajo" className="btn btn--ghost">Ver trabajo <span className="arrow"><Arrow size={12} rot={0} /></span></a>
            </div>
            <div className="orbital reveal">
              <div className="orbital-core" />
              <div className="orbital-orbit"><div className="orbital-planet" /></div>
              <div className="orbital-orbit orbital-orbit-2"><div className="orbital-planet" /></div>
              <span className="orbital-tag" style={{left:"8%",top:"12%"}}>↗ DIAGNÓSTICO</span>
              <span className="orbital-tag" style={{right:"6%",top:"20%"}}>↘ ESTRATEGIA</span>
              <span className="orbital-tag" style={{left:"4%",bottom:"18%"}}>← EJECUCIÓN</span>
              <span className="orbital-tag" style={{right:"10%",bottom:"8%"}}>→ MEDICIÓN</span>
            </div>
            <div className="hero-a-meta reveal">
              <div><div style={{color:"var(--ink-2)",marginBottom:6}}>// 001 / Tesis</div>La consultoría que sí baja a ejecución.</div>
              <div style={{textAlign:"center"}}><div style={{color:"var(--ink-2)",marginBottom:6}}>// 002 / Disponibilidad</div>Aceptando 2 engagements · Q3 2026</div>
              <div style={{textAlign:"right"}}><div style={{color:"var(--ink-2)",marginBottom:6}}>// 003 / Coordenadas</div>Monterrey · Quintana Roo · Baja California</div>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section style={{padding:0}}>
          <div className="logos">
            <div className="logos-marquee">
              {list.map((l,i) => (
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

        {/* PROBLEMAS */}
        <section id="problemas">
          <div className="container">
            <div className="section-head reveal">
              <div><span className="eyebrow">Diagnóstico inicial</span><h2 className="section-title">Seis síntomas<br/>que vemos <em>siempre</em>.</h2></div>
              <p className="section-lead">Antes de hablar de táctica, conviene reconocer el patrón. La mayoría de las empresas llegan con uno —o varios— de estos diagnósticos.</p>
            </div>
            <div className="reveal" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
              {PROBLEMS.map(p => (
                <div key={p.num} style={{border:`1px solid ${p.tone==="violet"?"var(--accent)":"var(--line)"}`,borderRadius:"var(--r-md)",padding:"28px 24px",background:p.tone==="violet"?"var(--accent-soft)":"var(--bg-2)",display:"flex",flexDirection:"column",gap:12}}>
                  <div style={{fontFamily:"var(--f-mono)",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"var(--accent)"}}>/ {p.num} — {p.tag}</div>
                  <h3 style={{fontFamily:"var(--f-display)",fontSize:"clamp(20px,2.5vw,26px)",fontWeight:400,lineHeight:1.1,letterSpacing:"-0.01em"}}>{p.title}</h3>
                  <p style={{fontSize:13,color:"var(--ink-2)",lineHeight:1.55}}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios">
          <div className="container">
            <div className="section-head reveal">
              <div><span className="eyebrow">Áreas de consultoría</span><h2 className="section-title">Una consultora,<br/><em>seis frentes</em>.</h2></div>
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
                  <div className="service-tags">{s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}</div>
                </div>
              ))}
            </div>
            <div style={{marginTop:40,textAlign:"center"}} className="reveal">
              <Link to="/servicios" className="btn btn--ghost">Ver detalle de cada servicio <span className="arrow"><Arrow size={12} rot={-45}/></span></Link>
            </div>
          </div>
        </section>

        {/* VERTICALES */}
        <section id="verticales">
          <div className="container">
            <div className="section-head reveal">
              <div><span className="eyebrow">Industrias que conocemos</span><h2 className="section-title">8 verticales,<br/>una <em>tesis</em> por cada una.</h2></div>
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

        {/* PRECIOS */}
        <PreciosHome />

        {/* PROCESO */}
        <section id="proceso">
          <div className="container" style={{marginBottom:64}}>
            <div className="section-head reveal">
              <div><span className="eyebrow">Cómo trabajamos</span><h2 className="section-title">Un método <em>en cuatro fases</em>,<br/>sin atajos.</h2></div>
              <p className="section-lead">La consultoría es tan buena como su diagnóstico. Los nuestros tardan porque preguntan lo que nadie pregunta.</p>
            </div>
          </div>
          <div className="process reveal">
            {PROCESS.map(p => (
              <div className="process-step" key={p.n}>
                <div><div className="process-num">{p.n}</div><h3 className="process-title">{p.t}</h3><p className="process-desc">{p.d}</p></div>
                <div className="process-list">{p.items.map(i => <div key={i}>— {i}</div>)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CASOS */}
        <section id="trabajo" className="cases">
          <div className="container">
            <div className="section-head reveal">
              <div><span className="eyebrow">Trabajo seleccionado</span><h2 className="section-title">Lo que <em>sale</em><br/>del estudio.</h2></div>
              <p className="section-lead">Una muestra reciente. Cada proyecto tiene su propio caso de estudio.</p>
            </div>
            <div className="cases-track-wrap">
              <div className="cases-track" style={{transform:`translateX(calc(${-idx*100}% - ${idx*24}px))`}}>
                {CASES.map((c,i) => (
                  <article className="case" key={i}>
                    {c.img
  ? <img src={c.img} alt={c.title} style={{width:"100%",aspectRatio:"4/3",objectFit:"cover",borderRadius:"var(--r-md)",display:"block"}} />
  : <ImageSlot placeholder={`${c.title} — 1200×900`} style={{width:"100%",aspectRatio:"4/3"}} />
}
                    <div className="case-meta"><span>{c.tag}</span><span>{c.year}</span></div>
                    <h3 className="case-title">{c.title}</h3>
                    <p className="case-desc">{c.desc}</p>
                    <div className="case-stats">
                      {c.stats.map(([v,l]) => <div className="case-stat" key={l}><div className="v">{v}</div><div className="l">{l}</div></div>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="cases-controls">
              <div className="cases-pagination">
                {Array.from({length:total}).map((_,i) => <button key={i} className={`cases-dot ${i===idx?"active":""}`} onClick={()=>goTo(i)} aria-label={`Página ${i+1}`}/>)}
              </div>
              <div className="cases-arrows">
                <button className="icon-btn" onClick={()=>goTo(idx-1)} disabled={idx===0}><ChevronLeft/></button>
                <button className="icon-btn" onClick={()=>goTo(idx+1)} disabled={idx===total-1}><ChevronRight/></button>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section>
          <div className="container">
            <div className="section-head reveal">
              <div><span className="eyebrow">Lo que dicen</span><h2 className="section-title">Confianza, en sus<br/>propias <em>palabras</em>.</h2></div>
            </div>
            <div className="testimonials reveal">
              <div className="testimonial">
                <p className="testimonial-quote">Trabajamos con Nebula porque desde el primer día se sintió diferente: entendieron nuestra marca, propusieron una identidad coherente y ejecutaron toda la web sin que tuviéramos que perseguirlos.</p>
                <div className="testimonial-author">
                  <div className="author-avatar">P</div>
                  <div><div className="author-name">Equipo Pocna Tulum</div><div className="author-role">Hotel · Tulum, Q.R.</div></div>
                </div>
              </div>
              <div className="t-mini">
                <div className="testimonial">
                  <p className="testimonial-quote">"Nos trataron como tratan a su propia marca. Eso lo notas en cada detalle."</p>
                  <div className="testimonial-author"><div className="author-avatar">F</div><div><div className="author-name">Alia Offices</div><div className="author-role">Inmobiliaria · SPGG</div></div></div>
                </div>
                <div className="testimonial">
                  <p className="testimonial-quote">"Tenemos página web, branding y campañas funcionando. Por fin todo en orden."</p>
                  <div className="testimonial-author"><div className="author-avatar">P</div><div><div className="author-name">Pacific Best Berry</div><div className="author-role">Distribuidora · Ensenada, BC</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}

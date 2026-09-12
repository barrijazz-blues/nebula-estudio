import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '../components/atoms.jsx'
import { PageShell } from '../components/chrome.jsx'

const WA = '526461234567'
const wa = (msg) => `https://wa.me/${WA}?text=${msg}`

export const CIUDADES = {
  monterrey: {
    slug: 'monterrey', label: 'Monterrey, NL',
    titulo: <>Tu negocio en<br /><em>Monterrey</em><br />merece más clientes.</>,
    bajada: 'Diseñamos tu sitio web, posicionamos tu marca en Google y gestionamos tus campañas digitales para que los clientes en Monterrey te encuentren primero.',
    seoDesc: 'Aparece cuando alguien en Monterrey busca lo que tú vendes. Estrategia de keywords, contenido local y Google Business Profile.',
    ctaTitulo: '¿Tu negocio en Monterrey listo para crecer?',
    faqQ: '¿Trabajan con negocios en Monterrey siendo de Ensenada?',
    faqA: 'Sí, el 100% de nuestro trabajo es remoto. Coordinamos por videollamada y WhatsApp — respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Monterrey',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Monterrey',
    waTag: 'Monterrey',
    metaTitle: 'Agencia Digital en Monterrey | Diseño Web y Marketing | Nebula Estudio',
    metaDescription: 'Agencia digital en Monterrey especializada en diseño web, SEO y campañas. Resultados medibles para empresas en Nuevo León.',
    metaKeywords: 'agencia digital Monterrey, diseño web Monterrey, marketing digital Monterrey, SEO Monterrey',
  },
  cancun: {
    slug: 'cancun', label: 'Cancún · Tulum · Riviera Maya',
    titulo: <>Tu negocio turístico en<br /><em>Quintana Roo</em><br />merece más reservaciones.</>,
    bajada: 'Hoteles boutique, restaurantes, tours y experiencias. Diseñamos tu presencia digital para atraer viajeros que buscan exactamente lo que tú ofreces.',
    seoDesc: 'Posicionamiento en español e inglés para viajeros que buscan hoteles, tours o restaurantes en Cancún y Tulum.',
    ctaTitulo: '¿Tu negocio turístico listo para llenar su agenda?',
    faqQ: '¿Trabajan con negocios en Quintana Roo?',
    faqA: 'Sí, 100% remoto. Hemos trabajado con hoteles en Tulum, restaurantes en Playa del Carmen y tours en Cancún. Respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Canc%C3%BAn',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Canc%C3%BAn',
    waTag: 'Canc%C3%BAn',
    metaTitle: 'Agencia Digital en Cancún y Tulum | Marketing Turístico | Nebula Estudio',
    metaDescription: 'Agencia digital para hoteles, restaurantes y tours en Cancún, Tulum y Playa del Carmen.',
    metaKeywords: 'agencia digital Cancún, diseño web Tulum, marketing turístico Quintana Roo',
  },
  'los-cabos': {
    slug: 'los-cabos', label: 'Los Cabos, BCS',
    titulo: <>Tu negocio en<br /><em>Los Cabos</em><br />merece más reservaciones.</>,
    bajada: 'Hoteles boutique, restaurantes, tours y experiencias en el destino más exclusivo de México. Diseñamos tu presencia digital para atraer al viajero de alto valor que busca exactamente lo que tú ofreces.',
    seoDesc: 'Posicionamiento en español e inglés para viajeros que buscan hoteles, restaurantes y experiencias en Los Cabos y La Paz.',
    ctaTitulo: '¿Tu negocio en Los Cabos listo para crecer?',
    faqQ: '¿Trabajan con negocios en Los Cabos?',
    faqA: 'Sí, somos de Baja California — conocemos el mercado bajacaliforniano y el flujo de turistas internacionales que visitan Los Cabos. Respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Los%20Cabos',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Los%20Cabos',
    waTag: 'Los%20Cabos',
    metaTitle: 'Agencia Digital en Los Cabos | Diseño Web y Marketing Turístico | Nebula Estudio',
    metaDescription: 'Agencia digital para hoteles, restaurantes y negocios turísticos en Los Cabos. Diseño web, SEO bilingüe y campañas para el viajero de alto valor.',
    metaKeywords: 'agencia digital Los Cabos, diseño web Los Cabos, marketing turístico Los Cabos',
  },
  tulum: {
    slug: 'tulum', label: 'Tulum · Riviera Maya',
    titulo: <>Tu negocio en<br /><em>Tulum</em><br />necesita más que Instagram.</>,
    bajada: 'Hoteles boutique, cenotes, restaurantes y retiros. Diseñamos la presencia digital que merece el estilo de vida que vendes.',
    seoDesc: 'Posicionamiento para viajeros internacionales que buscan experiencias en Tulum. Tu negocio en Google antes que tu competencia.',
    ctaTitulo: '¿Tu negocio en Tulum listo para crecer?',
    faqQ: '¿Trabajan con negocios en Tulum?',
    faqA: 'Sí, trabajamos con varios negocios en la Riviera Maya. Todo remoto, respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Tulum',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Tulum',
    waTag: 'Tulum',
    metaTitle: 'Agencia Digital en Tulum | Marketing para Negocios Turísticos | Nebula Estudio',
    metaDescription: 'Diseño web y marketing para hoteles boutique, restaurantes y experiencias en Tulum.',
    metaKeywords: 'agencia digital Tulum, diseño web Tulum, marketing hoteles Tulum',
  },
  'playa-del-carmen': {
    slug: 'playa-del-carmen', label: 'Playa del Carmen, QR',
    titulo: <>Tu negocio en<br /><em>Playa del Carmen</em><br />merece más clientes.</>,
    bajada: 'Restaurantes, hoteles, spas y experiencias en la Quinta Avenida y más allá. Posicionamos tu negocio frente a viajeros que ya están buscando lo que tú ofreces.',
    seoDesc: 'Aparece en Google cuando turistas y locales buscan negocios en Playa del Carmen. En español e inglés.',
    ctaTitulo: '¿Tu negocio en Playa listo para crecer?',
    faqQ: '¿Trabajan con negocios en Playa del Carmen?',
    faqA: 'Sí, atendemos negocios en toda la Riviera Maya. Todo remoto — respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Playa%20del%20Carmen',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Playa%20del%20Carmen',
    waTag: 'Playa%20del%20Carmen',
    metaTitle: 'Agencia Digital en Playa del Carmen | Diseño Web y Marketing | Nebula Estudio',
    metaDescription: 'Diseño web y marketing para negocios en Playa del Carmen. SEO turístico, campañas Meta y Google Ads.',
    metaKeywords: 'agencia digital Playa del Carmen, marketing turístico Riviera Maya',
  },
  cdmx: {
    slug: 'cdmx', label: 'Ciudad de México',
    titulo: <>Tu negocio en<br /><em>CDMX</em><br />merece más visibilidad.</>,
    bajada: 'La Ciudad de México es el mercado más competitivo del país. Diseñamos sitios web y campañas que hacen que tu negocio aparezca primero.',
    seoDesc: 'Posicionamiento en el mercado más competido de México. Estrategia de keywords, contenido y Google Business Profile para CDMX.',
    ctaTitulo: '¿Tu negocio en CDMX listo para destacar?',
    faqQ: '¿Trabajan con negocios en Ciudad de México?',
    faqA: 'Sí, el 100% de nuestro trabajo es remoto. Hemos trabajado con negocios en Roma, Polanco, Condesa y Satélite. Respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20CDMX',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20CDMX',
    waTag: 'CDMX',
    metaTitle: 'Agencia Digital en CDMX | Diseño Web y Marketing Digital | Nebula Estudio',
    metaDescription: 'Agencia digital para negocios en Ciudad de México. Diseño web, SEO competitivo y campañas de Google y Meta Ads.',
    metaKeywords: 'agencia digital CDMX, diseño web Ciudad de México, marketing digital CDMX',
  },
  guadalajara: {
    slug: 'guadalajara', label: 'Guadalajara, Jalisco',
    titulo: <>Tu negocio en<br /><em>Guadalajara</em><br />merece más clientes.</>,
    bajada: 'La Perla de Occidente tiene uno de los ecosistemas empresariales más activos del país. Posicionamos tu negocio en el mercado digital tapatío.',
    seoDesc: 'Aparece cuando alguien en Guadalajara busca lo que tú vendes. Keywords locales, contenido y Google Business Profile.',
    ctaTitulo: '¿Tu negocio en GDL listo para crecer?',
    faqQ: '¿Trabajan con negocios en Guadalajara?',
    faqA: 'Sí, 100% remoto. Respondemos en menos de 24 horas. El proceso es igual que si estuviéramos en GDL.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Guadalajara',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Guadalajara',
    waTag: 'Guadalajara',
    metaTitle: 'Agencia Digital en Guadalajara | Diseño Web y Marketing | Nebula Estudio',
    metaDescription: 'Agencia digital en Guadalajara. Diseño web, SEO local y campañas para negocios en GDL y área metropolitana.',
    metaKeywords: 'agencia digital Guadalajara, diseño web GDL, marketing digital Guadalajara',
  },
  tijuana: {
    slug: 'tijuana', label: 'Tijuana, BC',
    titulo: <>Tu negocio en<br /><em>Tijuana</em><br />merece presencia en dos mercados.</>,
    bajada: 'Tijuana es la ciudad fronteriza más dinámica del mundo. Diseñamos tu presencia digital para captar clientes en México y en el mercado hispanohablante de California.',
    seoDesc: 'Posicionamiento en español e inglés para el mercado fronterizo de Tijuana y San Diego. Google Business Profile optimizado.',
    ctaTitulo: '¿Tu negocio en Tijuana listo para crecer?',
    faqQ: '¿Trabajan con negocios en Tijuana?',
    faqA: 'Somos de Ensenada — a 1 hora de Tijuana. Conocemos el mercado fronterizo mejor que nadie y respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Tijuana',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Tijuana',
    waTag: 'Tijuana',
    metaTitle: 'Agencia Digital en Tijuana | Diseño Web y Marketing Binacional | Nebula Estudio',
    metaDescription: 'Agencia digital en Tijuana. Diseño web, SEO y campañas para el mercado fronterizo.',
    metaKeywords: 'agencia digital Tijuana, diseño web Tijuana, marketing digital Tijuana',
  },
  chihuahua: {
    slug: 'chihuahua', label: 'Chihuahua, Chih.',
    titulo: <>Tu negocio en<br /><em>Chihuahua</em><br />merece más clientes.</>,
    bajada: 'Chihuahua es uno de los estados más activos económicamente en el norte del país. Posicionamos tu negocio en el mercado digital chihuahuense.',
    seoDesc: 'Aparece cuando alguien en Chihuahua o Ciudad Juárez busca lo que tú vendes. Keywords locales y Google Business Profile.',
    ctaTitulo: '¿Tu negocio en Chihuahua listo para crecer?',
    faqQ: '¿Trabajan con negocios en Chihuahua?',
    faqA: 'Sí, 100% remoto. Mismo huso horario del norte — respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Chihuahua',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Chihuahua',
    waTag: 'Chihuahua',
    metaTitle: 'Agencia Digital en Chihuahua | Diseño Web y Marketing | Nebula Estudio',
    metaDescription: 'Agencia digital para negocios en Chihuahua. Diseño web, SEO local y campañas para el mercado chihuahuense.',
    metaKeywords: 'agencia digital Chihuahua, diseño web Chihuahua, marketing digital Chihuahua',
  },
  california: {
    slug: 'california', lang: 'es-US', label: 'California, Estados Unidos',
    titulo: <>Tu negocio hispano en<br /><em>California</em><br />merece una presencia digital real.</>,
    bajada: 'Somos una agencia mexicana que habla tu idioma y entiende tu mercado. Diseño web y campañas para negocios latinos en Los Angeles, San Diego, Fresno y todo California.',
    seoDesc: 'Posicionamiento en español e inglés para clientes hispanos y anglosajones en California. Google Business Profile optimizado.',
    ctaTitulo: '¿Tu negocio en California listo para destacar?',
    faqQ: '¿Cómo trabajan con negocios en California?',
    faqA: 'Mismo huso horario (PST/PDT). Respondemos en menos de 24 horas. Facturamos en pesos o dólares según prefieras.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20California',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20California',
    waTag: 'California',
    metaTitle: 'Agencia Digital para Negocios Latinos en California | Nebula Estudio',
    metaDescription: 'Diseño web bilingüe y marketing digital en español para negocios latinos en Los Angeles, San Diego, Fresno y todo California.',
    metaKeywords: 'agencia digital latinos California, diseño web hispanos Los Angeles, marketing en español California',
  },
  texas: {
    slug: 'texas', lang: 'es-US', label: 'Texas, Estados Unidos',
    titulo: <>Tu negocio hispano en<br /><em>Texas</em><br />merece una presencia digital real.</>,
    bajada: 'Más del 40% de Texas es hispano. Diseñamos sitios web y campañas para negocios latinos en Houston, Dallas, San Antonio, Austin y todo el estado.',
    seoDesc: 'Posicionamiento en español e inglés para clientes hispanos y anglosajones en Texas.',
    ctaTitulo: '¿Tu negocio en Texas listo para destacar?',
    faqQ: '¿Cómo trabajan con negocios en Texas?',
    faqA: 'Solo 1-2 horas de diferencia (CST/CDT). Respondemos en menos de 24 horas. Facturamos en pesos o dólares.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Texas',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Texas',
    waTag: 'Texas',
    metaTitle: 'Agencia Digital para Negocios Latinos en Texas | Nebula Estudio',
    metaDescription: 'Diseño web bilingüe y marketing digital en español para negocios latinos en Houston, Dallas, San Antonio y Austin.',
    metaKeywords: 'agencia digital latinos Texas, diseño web hispanos Houston, marketing en español Texas',
  },
  ensenada: {
    slug: 'ensenada', label: 'Ensenada, Baja California',
    titulo: <>Tu negocio en<br /><em>Ensenada</em><br />merece más clientes.</>,
    bajada: 'Somos locales. Conocemos el mercado de Ensenada, la economía de Baja California y el flujo de turistas de California que visitan la región.',
    seoDesc: 'Aparece cuando alguien en Ensenada o Baja California te busca, y también cuando turistas de California buscan en inglés.',
    ctaTitulo: '¿Tu negocio en Ensenada listo para crecer?',
    faqQ: '¿Son una agencia local de Ensenada?',
    faqA: 'Sí, somos de aquí. Conocemos el mercado local, la región y el flujo binacional. Y respondemos en menos de 24 horas.',
    waMain: 'Hola%2C%20quiero%20cotizaci%C3%B3n%20para%20mi%20negocio%20en%20Ensenada',
    waDiag: 'Diagn%C3%B3stico%20gratuito%20%E2%80%94%20Ensenada',
    waTag: 'Ensenada',
    metaTitle: 'Agencia Digital en Ensenada BC | Diseño Web y Marketing | Nebula Estudio',
    metaDescription: 'Agencia digital local en Ensenada. Diseño web, SEO y campañas para negocios de Baja California y el mercado binacional.',
    metaKeywords: 'agencia digital Ensenada, diseño web Ensenada, marketing digital Ensenada',
  },
}

// ─── Hero card ────────────────────────────────────────────────────────────────
function HeroCard() {
  return (
    <div className="lc-hero-card">
      <div className="lc-hero-card-glow" />
      <div className="lc-hc-header">
        <span className="lc-hc-badge"><span className="lc-hc-dot" />Nebula Estudio · +10 años</span>
        <span className="lc-hc-city">MARKETING DIGITAL</span>
      </div>
      <div className="lc-hero-card-divider" />
      <div className="lc-hc-title">Cada proyecto incluye</div>
      <div className="lc-hc-list">
        {['Diseño web a la medida','Hosting + dominio + SSL','SEO desde el día uno','Campañas Meta y Google','Branding e identidad visual','Un solo punto de contacto'].map(item => (
          <div key={item} className="lc-hc-item">
            <span className="lc-hc-check">✓</span><span>{item}</span>
          </div>
        ))}
      </div>
      <div className="lc-hero-card-divider" />
      <div className="lc-hc-footer">
        <div className="lc-hc-footer-item"><span className="lc-hc-footer-n">+10</span><span className="lc-hc-footer-l">años de experiencia</span></div>
        <div className="lc-hc-footer-sep" />
        <div className="lc-hc-footer-item"><span className="lc-hc-footer-n">&lt;24h</span><span className="lc-hc-footer-l">tiempo de respuesta</span></div>
        <div className="lc-hc-footer-sep" />
        <div className="lc-hc-footer-item"><span className="lc-hc-footer-n">3 sedes</span><span className="lc-hc-footer-l">en México</span></div>
      </div>
    </div>
  )
}

// ─── Plan card ────────────────────────────────────────────────────────────────
function PlanCard({ plan, waTag }) {
  const isOrbita = plan.name === 'Órbita'
  const waMsg = `${plan.name}%20%E2%80%94%20${waTag}`
  return (
    <div className={`price-card${plan.highlight ? ' price-card--highlight' : ''}`}>
      {plan.highlight && <div className="price-card-badge">Más popular</div>}
      <div className="price-card-name">{plan.name}</div>
      {plan.sub && <div style={{ fontFamily:'var(--f-mono)', fontSize:11, color:'var(--ink-3)', letterSpacing:'.06em' }}>{plan.sub}</div>}
      <p style={{ fontSize:13, color:'var(--ink-2)', lineHeight:1.5 }}>{plan.desc}</p>
      <div className="price-card-amount">
        {plan.price} <span style={{ fontSize:13, fontFamily:'var(--f-mono)', color:'var(--ink-3)' }}>MXN / {plan.period}</span>
      </div>
      <ul className="price-card-items">
        {plan.includes.map((item, i) => (
          <li key={i} className="price-card-item">
            <span style={{ color:'var(--accent)', fontWeight:700, flexShrink:0 }}>✓</span> {item}
          </li>
        ))}
      </ul>
      {isOrbita
        ? <Link to="/ejemplos" className="btn btn--ghost" style={{ textAlign:'center', marginTop:'auto', justifyContent:'center' }}>
            Ver ejemplos <Arrow size={12} rot={0} />
          </Link>
        : <a href={wa(waMsg)} className={`btn ${plan.highlight ? 'btn--accent' : 'btn--ghost'}`} target="_blank" rel="noopener" style={{ textAlign:'center', marginTop:'auto', justifyContent:'center' }}>
            Quiero este paquete
          </a>
      }
    </div>
  )
}

// ─── Desde card (social y campañas) ──────────────────────────────────────────
function DesdeCard({ tab, waTag }) {
  const waMsg = `Informaci%C3%B3n%20${tab.label.replace(/ /g,'%20')}%20%E2%80%94%20${waTag}`
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
        <a href={`https://wa.me/${WA}?text=${waMsg}`} className="btn btn--accent" target="_blank" rel="noopener" style={{ justifyContent:'center' }}>
          Quiero información <Arrow size={12} rot={-45} />
        </a>
        <Link to="/precios" className="btn btn--ghost" style={{ justifyContent:'center' }}>
          Ver todos los planes <Arrow size={12} rot={0} />
        </Link>
      </div>
      {tab.note && (
        <p style={{ fontSize:11, color:'var(--ink-3)', fontFamily:'var(--f-mono)', letterSpacing:'.06em', lineHeight:1.6, margin:0 }}>* {tab.note}</p>
      )}
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function LandingCiudad({ ciudad: c }) {
  const [tab, setTab] = React.useState('web')
  const [openFaq, setOpenFaq] = React.useState(null)

  React.useEffect(() => {
    document.title = c.metaTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.metaDescription)
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', c.metaKeywords)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://nebulasestudio.com.mx/${c.slug}`)
    if (c.lang) document.documentElement.lang = c.lang
  }, [c])

  const TABS = {
    web: {
      label: 'Página Web',
      tagline: 'Tu sitio web, listo para traer clientes.',
      note: 'Los paquetes no incluyen toma ni edición de fotografías. Copys por parte del cliente. Precios más IVA.',
      planes: [
        { name:'Órbita', sub:'Landing Express', price:'$3,499', period:'único', highlight:false, desc:'Para negocios que necesitan presencia profesional ya.', includes:['1 página completa y bien diseñada','Diseño responsivo (móvil, tablet y desktop)','Formulario de contacto o botón a WhatsApp','Integración con redes sociales','Hosting primer año gratis','Favicon y metadatos básicos (SEO on-page)','Entrega en 7 días hábiles'] },
        { name:'Satélite', sub:'Sitio Profesional', price:'$7,900', period:'único', highlight:false, desc:'Para negocios que quieren destacar y generar confianza.', includes:['Hasta 5 secciones personalizadas','Diseño responsivo (móvil, tablet y desktop)','Formulario de contacto avanzado','Integración con Google Maps','Integración con redes sociales','SEO básico incluido','Hosting primer año gratis','Botón de WhatsApp flotante','1 revisión de diseño incluida','Entrega en 15 días hábiles'] },
        { name:'Nebula', sub:'Sitio Completo', price:'$14,000', period:'único', highlight:true, desc:'El sitio que trabaja por ti mientras tú trabajas en tu negocio.', includes:['Hasta 15 páginas personalizadas','Diseño responsivo (móvil, tablet y desktop)','SEO completo (técnico + on-page)','Formulario de contacto avanzado','Integración con Google Maps y redes sociales','Botón de WhatsApp flotante','Google Analytics configurado','Hosting primer año gratis','Certificado SSL incluido','Blog integrado y listo para publicar','Velocidad optimizada (Core Web Vitals)','Mapa de calor básico (Hotjar o similar)','2 revisiones de diseño incluidas','Soporte post-entrega 30 días','Entrega en 21 días hábiles'] },

        { name:'Cosmos', sub:'Tienda en línea', price:'$28,000', period:'único', highlight:false, desc:'Tu negocio vendiendo en línea las 24 horas.', includes:['Todo lo del paquete Nebula','Tienda en línea completa (hasta 20 productos)','Carrito de compras','Pasarela de pago (Mercado Pago o Stripe)','Panel de administración para gestionar productos','Fichas de producto optimizadas para SEO','Hosting primer año gratis','Capacitación para gestionar tu tienda','Soporte post-entrega 60 días','Entrega en 30 días hábiles'] },
      ],
    },
    social: {
      label: 'Social Media',
      tagline: 'Redes sociales que se ven, se sienten y se mueven.',
      note: 'La inversión en pauta no está incluida. No incluye toma de fotografía ni producción de video. Precios más IVA.',
      desde: true,
      desdePrice: '$3,500',
      desdeDesc: 'Gestión profesional de redes sociales. Posts, reels, copywriting y reportes mensuales. Paquetes disponibles según tus objetivos y presupuesto.',
    },
    campanas: {
      label: 'Campañas Digitales',
      tagline: 'Publicidad que no se gasta, se invierte.',
      note: 'La inversión en pauta publicitaria no está incluida. Se define según los objetivos de la campaña. Precios más IVA.',
      desde: true,
      desdePrice: '$2,800',
      desdeDesc: 'Campañas en Google, Meta o ambas. Segmentación estratégica, diseño de anuncios y optimización continua para traer clientes reales.',
    },
  }

  const currentTab = TABS[tab]

  const servicios = [
    { n:'01', title:'Diagnóstico 360°', desc:'Analizamos tu presencia digital completa: sitio, redes, competencia y oportunidades. El punto de partida para cualquier estrategia.', href:'/servicios#svc-01' },
    { n:'02', title:'Branding & Diseño', desc:'Identidad visual que comunica quién eres antes de que digas una palabra. Logo, colores, tipografía y manual de marca.', href:'/servicios#svc-02' },
    { n:'03', title:'Páginas web', desc:'Sitios rápidos, responsivos y optimizados para Google. Desde una landing hasta una tienda en línea completa.', href:'/servicios#svc-03' },
    { n:'04', title:'Redes sociales', desc:'Contenido estratégico y consistente para Instagram, Facebook y TikTok. Posts, reels y copywriting mensual.', href:'/servicios#svc-04' },
    { n:'05', title:'Google Ads & Meta', desc:'Campañas pagadas que llevan clientes reales a tu negocio. Segmentación, diseño de anuncios y optimización continua.', href:'/servicios#svc-05' },
    { n:'06', title:'SEO & Contenido', desc:c.seoDesc, href:'/servicios#svc-06' },
  ]

  const faqs = [
    { q:c.faqQ, a:c.faqA },
    { q:'¿Necesito tener algo listo antes de empezar?', a:'No. Solo necesitas información básica de tu negocio: qué vendes, a quién y cómo te contactan. Nosotros te guiamos en todo lo demás — textos, imágenes, estructura y estrategia.' },
    { q:'¿Cuánto tiempo tarda en estar listo mi sitio?', a:'Depende del paquete: Órbita en 7 días, Satélite en 15, Nebula en 21 y Cosmos en 30 días hábiles. Siempre con fechas claras desde el inicio, sin sorpresas.' },
    { q:'¿El hosting y dominio están incluidos?', a:'Sí, todos los paquetes de página web incluyen el hosting del primer año gratis. A partir del segundo año se renueva por separado con tarifas estándar del mercado.' },
    { q:'¿Qué pasa si el resultado no me gusta?', a:'Incluimos revisiones de diseño según el paquete (1 en Satélite, 2 en Nebula y Cosmos). Trabajamos contigo hasta que el resultado refleje tu visión.' },
    { q:'¿Pueden manejar mis redes sociales además del sitio?', a:'Sí, ofrecemos gestión de redes sociales como servicio independiente o complementario. Todo coordinado desde un solo punto de contacto.' },
    { q:'¿Trabajan con cualquier tipo de negocio?', a:'Hemos trabajado con restaurantes, hoteles, clínicas, despachos, distribuidoras, tiendas en línea, inmobiliarias y más. Si tienes un negocio y quieres más clientes, podemos ayudarte.' },
    { q:'¿Puedo agregar más páginas o secciones después?', a:'Claro. Todos los sitios que entregamos son escalables. Podemos agregar secciones, integraciones o funcionalidades nuevas según tus necesidades, con presupuesto aparte.' },
  ]

  return (
    <PageShell>

      {/* ── HERO ── */}
      <section className="lc-hero">
        <div className="lc-hero-bg-glow" />
        <div className="container lc-hero-inner">
          <div className="lc-hero-left">
            <p className="lc-location">{c.label}</p>
            <h1 className="lc-h1">{c.titulo}</h1>
            <p className="lc-lead">{c.bajada}</p>
            <div className="lc-actions">
              <a href={wa(c.waMain)} className="btn btn--accent" target="_blank" rel="noopener">
                Quiero mi diagnóstico gratis <Arrow size={12} rot={-45} />
              </a>
              <Link to="/trabajo" className="btn btn--ghost">
                Ver portafolio <Arrow size={12} rot={0} />
              </Link>
            </div>
          </div>
          <div className="lc-hero-right"><HeroCard /></div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="lc-section">
        <div className="container">
          <span className="eyebrow">Servicios</span>
          <h2 className="lc-section-h2">Diseño, estrategia y campañas<br />en un solo lugar.</h2>
          <div className="svc-index lc-svc-grid">
            {servicios.map(s => (
              <Link key={s.n} to={s.href} className="lc-svc-card">
                <div className="lc-svc-num">{s.n}</div>
                <div className="lc-svc-title">{s.title}</div>
                <p className="lc-svc-desc">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ marginTop:24, textAlign:'center' }}>
            <Link to="/servicios" className="btn btn--ghost">Ver todos los servicios <Arrow size={12} rot={0} /></Link>
          </div>
        </div>
      </section>

      {/* ── PAQUETES CON TABS ── */}
      <section id="paquetes" className="lc-section lc-section--tinted">
        <div className="container">
          <span className="eyebrow">Inversión</span>
          <h2 className="lc-section-h2">El servicio correcto<br />para donde estás hoy.</h2>
          <div style={{ display:'flex', gap:8, marginBottom:40, flexWrap:'wrap' }}>
            {Object.entries(TABS).map(([key, val]) => (
              <button key={key} className={`work-filter${tab === key ? ' active' : ''}`} onClick={() => setTab(key)}>
                {val.label}
              </button>
            ))}
          </div>
          <h3 style={{ fontFamily:'var(--f-display)', fontSize:'clamp(22px,2.5vw,32px)', fontWeight:400, letterSpacing:'-0.01em', marginBottom:32 }}>{currentTab.tagline}</h3>

          {currentTab.desde
            ? <DesdeCard tab={currentTab} waTag={c.waTag} />
            : (
              <div className="lc-planes-grid">
                {currentTab.planes.map((plan, i) => (
                  <PlanCard key={i} plan={plan} waTag={c.waTag} />
                ))}
              </div>
            )
          }

          {!currentTab.desde && currentTab.note && (
            <p style={{ marginTop:20, fontSize:11, color:'var(--ink-3)', fontFamily:'var(--f-mono)', letterSpacing:'.06em', lineHeight:1.6 }}>
              * {currentTab.note}
            </p>
          )}
          <div style={{ marginTop:32, textAlign:'center' }}>
            <Link to="/precios" className="btn btn--ghost">Ver todos los precios <Arrow size={12} rot={0} /></Link>
          </div>
        </div>
      </section>

      {/* ── PROCESO ── */}
      <section className="lc-section">
        <div className="container">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="lc-section-h2">De la llamada al primer resultado.</h2>
          <div className="svc-detail lc-steps">
            {[
              { n:'01', title:'Diagnóstico gratuito', desc:'Analizamos tu presencia digital actual, tu competencia y las oportunidades inmediatas. Sin costo ni compromiso. 30 minutos por videollamada.' },
              { n:'02', title:'Propuesta en menos de 24 horas', desc:'Te enviamos una propuesta clara con servicios, tiempos de entrega y precio. Sin letra chica ni costos escondidos.' },
              { n:'03', title:'Onboarding y arranque', desc:'Definimos contigo la identidad de marca, accesos, estructura del sitio y calendario de contenido. Todo desde un solo punto de contacto.' },
              { n:'04', title:'Entrega y seguimiento', desc:'Tu sitio listo en los tiempos acordados, con revisiones incluidas. Soporte post-entrega para que no te quedes solo después de lanzar.' },
            ].map(s => (
              <div key={s.n} className="lc-step">
                <div className="lc-step-n">{s.n}</div>
                <div>
                  <div className="lc-step-title">{s.title}</div>
                  <p className="lc-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTAFOLIO ── */}
      <section className="lc-section lc-section--tinted">
        <div className="container" style={{ textAlign:'center' }}>
          <span className="eyebrow">Portafolio</span>
          <h2 className="lc-section-h2">El trabajo habla<br />por sí solo.</h2>
          <p style={{ color:'var(--ink-2)', fontSize:16, maxWidth:480, margin:'0 auto 32px', lineHeight:1.6 }}>
            Desde landings express hasta tiendas en línea completas. Entra y revisa lo que hemos construido.
          </p>
          <Link to="/trabajo" className="btn btn--accent">Ver portafolio <Arrow size={12} rot={-45} /></Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lc-section">
        <div className="container">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="lc-section-h2">Lo que siempre nos preguntan.</h2>
          <div className="lc-faq">
            {faqs.map((f, i) => (
              <div key={i} className="lc-faq-item">
                <button className="lc-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}<span className="lc-faq-icon">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <p className="lc-faq-a">{f.a}</p>}
              </div>
            ))}
          </div>
          <div style={{ marginTop:32 }}>
            <Link to="/contacto" className="btn btn--ghost">¿Más preguntas? Contáctanos <Arrow size={12} rot={-45} /></Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lc-cta-section">
        <div className="container" style={{ textAlign:'center' }}>
          <h2 className="lc-cta-title">{c.ctaTitulo}</h2>
          <p className="lc-cta-lead">Diagnóstico gratuito. Propuesta en menos de 24 horas. Sin compromisos.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href={wa(c.waDiag)} className="btn lc-cta-btn" target="_blank" rel="noopener">
              Quiero mi diagnóstico gratis <Arrow size={12} rot={-45} />
            </a>
            <Link to="/contacto" className="btn lc-cta-btn-ghost">
              Escribirnos directamente <Arrow size={12} rot={0} />
            </Link>
          </div>
        </div>
      </section>

    </PageShell>
  )
}
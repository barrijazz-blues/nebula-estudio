import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { sendToSysteme } from '../components/useSysteme.js'
import { Arrow, ServiceIcon } from '../components/atoms.jsx'
import { PAQUETES } from './Precios.jsx'
import NotFound from './NotFound.jsx'
import {
  LANDINGS, PROMO, promoActiva, waLink, conDescuento,
  TESTIMONIOS, LOGOS, SERVICIOS_GRID, getCaso,
} from '../data/landingsData.js'
import './landing-servicio.css'

// ── Tracking de conversiones (GTM / GA4 / Google Ads / Meta) ─────────
// Conversiones de Google Ads creadas para las landings (por evento, no por URL)
const ADS_CONVERSION = {
  lead_form: 'AW-710065302/ChNgCJuesp8dEJb5ytIC',      // Formulario Landings LP 2026
  whatsapp_click: 'AW-710065302/mkdNCJ6esp8dEJb5ytIC', // WhatsApp Landings LP 2026
}

function track(evento, servicio) {
  try {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: evento, servicio })
    if (typeof window.gtag === 'function') {
      window.gtag('event', evento === 'lead_form' ? 'generate_lead' : 'contact', { servicio })
      if (ADS_CONVERSION[evento]) {
        window.gtag('event', 'conversion', { send_to: ADS_CONVERSION[evento], value: 1.0, currency: 'MXN', transport_type: 'beacon' })
      }
    }
    if (typeof window.fbq === 'function') {
      window.fbq('track', evento === 'lead_form' ? 'Lead' : 'Contact', { content_name: servicio })
    }
  } catch { /* el tracking nunca debe romper la página */ }
}

function abrirWhatsApp(e, url, servicio) {
  // El enlace abre WhatsApp normalmente; la conversión sale con beacon aunque se cambie de pestaña
  track('whatsapp_click', servicio)
}

// ── Cuenta regresiva ────────────────────────────────────────────────
function useCuentaRegresiva() {
  const calc = () => {
    const ms = Math.max(0, PROMO.hasta.getTime() - Date.now())
    return { d: Math.floor(ms / 864e5), h: Math.floor(ms / 36e5) % 24, m: Math.floor(ms / 6e4) % 60, activa: ms > 0 }
  }
  const [t, setT] = React.useState(calc)
  React.useEffect(() => {
    const id = setInterval(() => setT(calc()), 30000)
    return () => clearInterval(id)
  }, [])
  return t
}

function Precio({ precio, periodo, promo, mesesTxt }) {
  const mensual = periodo === 'mes'
  if (!promo) {
    return (
      <div className="lps-precio">
        <span className="lps-precio-num">{precio}</span>
        <span className="lps-precio-per">{mensual ? '/mes' : 'pago único'}</span>
      </div>
    )
  }
  return (
    <div className="lps-precio">
      <span className="lps-precio-antes">{precio}</span>
      <span className="lps-precio-num">{conDescuento(precio)}</span>
      <span className="lps-precio-per">{mensual ? `/mes ${mesesTxt}` : 'pago único'}</span>
    </div>
  )
}

const H2 = ({ eyebrow, a, em, b = '' }) => (
  <div className="lps-head">
    <span className="lps-eyebrow">{eyebrow}</span>
    <h2 className="lps-h2">{a}<em>{em}</em>{b}</h2>
  </div>
)

export default function LandingServicio() {
  const { slug } = useParams()
  const L = LANDINGS[slug]
  const cuenta = useCuentaRegresiva()
  const promo = cuenta.activa && promoActiva()
  const meses = L?.mesesPromo || 3
  const mesesTxt = meses === 1 ? 'el primer mes' : `los primeros ${meses} meses`

  const [form, setForm] = React.useState({ nombre: '', telefono: '', email: '', negocio: '', interes: '', mensaje: '' })
  const [estado, setEstado] = React.useState('idle') // idle | enviando | ok | error
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  // SEO: título propio y fuera del índice de Google (son páginas de anuncios)
  React.useEffect(() => {
    if (!L) return
    document.title = L.titulo
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) { robots = document.createElement('meta'); robots.name = 'robots'; document.head.appendChild(robots) }
    robots.content = 'noindex, follow'
    return () => robots.remove()
  }, [L])

  if (!L) return <NotFound />

  const wa = waLink(L.waMsg)
  const paquete = L.planes ? PAQUETES[L.planes] : null
  const testimonios = L.testimonios.map(k => TESTIMONIOS[k])
  const casos = (L.casos || []).map(getCaso)
  const logos = [...LOGOS, ...LOGOS]

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    const ok = await sendToSysteme({
      email: form.email,
      firstName: form.nombre,
      telefono: form.telefono,
      empresa: form.negocio,
      servicios: [L.servicio, form.interes].filter(Boolean),
      proyecto: form.mensaje,
      tags: ['lp-fin-2026'], // una sola etiqueta: el plan de systeme.io permite máx. 10; la landing va en 'fuente'
      fuente: `Landing campaña: ${L.servicio}`,
    })
    if (ok) { track('lead_form', L.servicio); setEstado('ok') }
    else setEstado('error')
  }

  const BtnWA = ({ children, className = 'btn btn--accent lps-btn-lg' }) => (
    <a href={wa} target="_blank" rel="noopener noreferrer" className={className}
       onClick={e => abrirWhatsApp(e, wa, L.servicio)}>
      {children} <span className="arrow"><Arrow size={12} rot={-45} /></span>
    </a>
  )

  return (
    <div className="lps">

      {/* BARRA PROMO */}
      {promo && (
        <div className="lps-promo">
          <span><strong>-{PROMO.pct}%</strong> de fin de año · contratando antes del {PROMO.hastaTexto}</span>
          <span className="lps-promo-cuenta">
            Termina en {cuenta.d}d {String(cuenta.h).padStart(2, '0')}h {String(cuenta.m).padStart(2, '0')}m
          </span>
        </div>
      )}

      {/* TOP */}
      <header className="lps-top">
        <img src="/logo.png" alt="Nebula Estudio" className="lps-logo" />
        <BtnWA className="btn btn--accent lps-btn-sm">WhatsApp</BtnWA>
      </header>

      {/* HERO */}
      <section className="lps-hero">
        <div className="lps-hero-glow" />
        <div className="lps-wrap lps-hero-grid">
          <div>
            <span className="lps-eyebrow lps-eyebrow--hero">
              <ServiceIcon kind={L.kind} /> {L.eyebrow}
            </span>
            <h1 className="lps-h1">{L.h1[0]}<em>{L.h1[1]}</em>{L.h1[2]}</h1>
            <p className="lps-sub">{L.sub}</p>
            <div className="lps-ctas">
              <BtnWA>Cotizar por WhatsApp</BtnWA>
              <a href="#cotizar" className="btn btn--ghost lps-btn-lg lps-btn-ghost-dark">Agendar llamada gratis</a>
            </div>
            <ul className="lps-trust">
              <li>+10 años de experiencia</li>
              <li>+24 clientes activos</li>
              <li>Respuesta en menos de 24 h</li>
            </ul>
          </div>

          <div className="lps-hero-media">
            {L.foto && <img src={L.foto} alt="" className="lps-hero-foto" fetchpriority="high" />}
          <aside className="lps-hero-card">
            {promo ? (
              <>
                <span className="lps-badge">Promo fin de año</span>
                <div className="lps-hero-pct">-{PROMO.pct}%</div>
                <p className="lps-hero-card-txt">
                  {L.desde
                    ? <>Desde <s>{L.desde.precio}</s> <strong>{conDescuento(L.desde.precio)}</strong>{L.desde.periodo === 'al mes' ? ` al mes ${mesesTxt}` : L.desde.periodo ? ` ${L.desde.periodo}` : ''}.</>
                    : <>Sobre tu cotización de {L.servicio}{L.cotizaPeriodo === 'mensual' ? ` ${mesesTxt}` : ''}.</>}
                </p>
                <p className="lps-hero-card-fine">Contratando antes del {PROMO.hastaTexto}. Precios más IVA.</p>
              </>
            ) : (
              <>
                <span className="lps-badge">Llamada sin costo</span>
                <p className="lps-hero-card-txt">Platícanos de tu negocio y te decimos qué te conviene, sin compromiso.</p>
              </>
            )}
            <a href="#cotizar" className="btn btn--accent lps-btn-full">Quiero mi lugar <span className="arrow"><Arrow size={12} rot={-45} /></span></a>
          </aside>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="lps-logos" aria-label="Clientes">
        <p className="lps-logos-label">Marcas que han trabajado con nosotros</p>
        <div className="logos"><div className="logos-marquee">
          {logos.map((l, i) => (
            <span className="logo-item" key={i}><img src={l.src} alt={l.alt} className="lps-logo-img" loading="lazy" /></span>
          ))}
        </div></div>
      </section>

      {/* DOLORES */}
      <section className="lps-sec">
        <div className="lps-wrap">
          <H2 eyebrow="¿Te identificas?" a="Retos que vemos " em="en muchos negocios" b="." />
          <div className="lps-grid3">
            {L.dolores.map((d, i) => (
              <div className="lps-card" key={i}>
                <span className="lps-num">0{i + 1}</span>
                <h3 className="lps-h3">{d.t}</h3>
                <p className="lps-p">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES / QUÉ INCLUYE / SERVICIOS */}
      <section className="lps-sec lps-sec--alt" id="planes">
        <div className="lps-wrap">
          {paquete && (
            <>
              <H2 eyebrow={promo ? `Precios con -${PROMO.pct}%` : 'Planes'} a="Elige tu plan, " em="sin letras chiquitas" b="." />
              <div className={`lps-planes lps-planes--${paquete.planes.length}`}>
                {paquete.planes.map(p => (
                  <div key={p.name} className={`lps-plan ${p.highlight ? 'is-top' : ''}`}>
                    {p.highlight && <span className="lps-plan-flag">Más popular</span>}
                    <div className="lps-plan-name">{p.name}</div>
                    {p.sub && <div className="lps-plan-sub">{p.sub}</div>}
                    <Precio precio={p.price} periodo={p.period} promo={promo && !(L.sinPromo || []).includes(p.name)} mesesTxt={mesesTxt} />
                    <p className="lps-p">{p.desc}</p>
                    <ul className="lps-check">{p.includes.map(it => <li key={it}>{it}</li>)}</ul>
                    <a href="#cotizar" onClick={() => set('interes', p.sub ? `${p.name} — ${p.sub}` : p.name)}
                       className={`btn ${p.highlight ? 'btn--accent' : 'btn--ghost'} lps-btn-full`}>
                      Quiero este plan <span className="arrow"><Arrow size={12} rot={-45} /></span>
                    </a>
                  </div>
                ))}
              </div>
              <p className="lps-nota">{paquete.note}</p>
            </>
          )}

          {L.incluye && (
            <div className="lps-incluye">
              <div>
                <H2 eyebrow="Qué incluye" a={`${L.servicio}, `} em="hecho a fondo" b="." />
                <p className="lps-p lps-p--lg">Cada proyecto es distinto, así que te mandamos una cotización cerrada después de la llamada. {promo && <strong>Contratando antes del {PROMO.hastaTexto}, -{PROMO.pct}%{L.cotizaPeriodo === 'mensual' ? ` ${mesesTxt}` : ''}.</strong>}</p>
                <a href="#cotizar" className="btn btn--accent lps-btn-lg">Pedir cotización <span className="arrow"><Arrow size={12} rot={-45} /></span></a>
              </div>
              <ul className="lps-check lps-check--big">{L.incluye.map(it => <li key={it}>{it}</li>)}</ul>
            </div>
          )}

          {L.servicios && (
            <>
              <H2 eyebrow="Servicios" a="Seis frentes, " em="una estrategia" b="." />
              <div className="lps-grid3">
                {SERVICIOS_GRID.map(s => (
                  <Link to={`/lp/${s.slug}`} className="lps-card lps-card--link" key={s.slug}>
                    <span className="lps-icon"><ServiceIcon kind={s.kind} /></span>
                    <h3 className="lps-h3">{s.title}</h3>
                    <p className="lps-p">{s.desc}</p>
                    <span className="lps-more">Ver detalle →</span>
                  </Link>
                ))}
              </div>
              {promo && <p className="lps-nota">-{PROMO.pct}% contratando antes del {PROMO.hastaTexto}: sobre el total en proyectos de pago único (en páginas web: Satélite, Nebula y Cosmos) y en planes mensuales: el primer mes en redes sociales y los primeros 3 meses en campañas y SEO. Precios más IVA.</p>}
            </>
          )}
        </div>
      </section>

      {/* CASOS */}
      {casos.length > 0 && (
        <section className="lps-sec">
          <div className="lps-wrap">
            <H2 eyebrow="Trabajo real" a="Proyectos que " em="salieron del estudio" b="." />
            <div className={casos.length === 1 ? 'lps-caso-solo' : casos.length % 2 === 0 ? 'lps-grid2' : 'lps-grid3'}>
              {casos.map(c => (
                <figure className="lps-caso" key={c.title}>
                  <img src={c.img} alt={c.title} loading="lazy" />
                  <figcaption>
                    <span className="lps-num">{c.tag}</span>
                    <h3 className="lps-h3">{c.title}</h3>
                    <p className="lps-p">{c.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESO */}
      <section className={`lps-sec ${casos.length ? 'lps-sec--alt' : ''}`}>
        <div className="lps-wrap">
          <H2 eyebrow="Cómo trabajamos" a="De la llamada " em="al resultado" b="." />
          <ol className="lps-pasos">
            <li><strong>Llamada sin costo</strong><span>Entendemos tu negocio, tus clientes y lo que necesitas.</span></li>
            <li><strong>Propuesta clara</strong><span>Precio cerrado, alcance y tiempos por escrito. Sin sorpresas.</span></li>
            <li><strong>Manos a la obra</strong><span>Ejecutamos y te mostramos avances para que opines.</span></li>
            <li><strong>Entrega y seguimiento</strong><span>Lo dejamos funcionando y medimos qué está dando resultados.</span></li>
          </ol>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="lps-sec lps-sec--dark">
        <div className="lps-wrap">
          <H2 eyebrow="Clientes" a="Lo que dicen " em="de trabajar con nosotros" b="." />
          <div className={`lps-testis lps-testis--${testimonios.length}`}>
            {testimonios.map(t => (
              <blockquote className="lps-testi" key={t.name}>
                <p>“{t.quote}”</p>
                <footer><span className="lps-avatar">{t.name[0]}</span><span><strong>{t.name}</strong><em>{t.role}</em></span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="lps-sec" id="cotizar">
        <div className="lps-wrap lps-form-grid">
          <div>
            <H2 eyebrow={promo ? `Aparta tu -${PROMO.pct}%` : 'Hablemos'} a="Agenda tu " em="llamada sin costo" b="." />
            <p className="lps-p lps-p--lg">Déjanos tus datos y te contactamos en menos de 24 horas. Si prefieres, escríbenos directo por WhatsApp.</p>
            <BtnWA className="btn btn--ghost lps-btn-lg">WhatsApp 81 3539 0665</BtnWA>
            {promo && <p className="lps-nota lps-nota--left">Promo válida contratando antes del {PROMO.hastaTexto} de 2026. Precios en MXN más IVA.</p>}
          </div>

          {estado === 'ok' ? (
            <div className="lps-gracias">
              <span className="lps-badge">Recibido ✓</span>
              <h3 className="lps-h2">Gracias, {form.nombre.split(' ')[0] || 'ya lo tenemos'}.</h3>
              <p className="lps-p lps-p--lg">Te contactamos en menos de 24 horas. ¿Prisa? Escríbenos y lo vemos hoy.</p>
              <BtnWA>Seguir por WhatsApp</BtnWA>
            </div>
          ) : (
            <form className="lps-form" onSubmit={enviar}>
              <label>Nombre *<input required value={form.nombre} onChange={e => set('nombre', e.target.value)} autoComplete="name" /></label>
              <label>WhatsApp *<input required type="tel" inputMode="tel" value={form.telefono} onChange={e => set('telefono', e.target.value)} autoComplete="tel" placeholder="10 dígitos" /></label>
              <label>Correo *<input required type="email" value={form.email} onChange={e => set('email', e.target.value)} autoComplete="email" /></label>
              <label>Tu negocio<input value={form.negocio} onChange={e => set('negocio', e.target.value)} placeholder="Nombre o giro" /></label>
              <label className="lps-full">¿Qué te interesa?
                <select value={form.interes} onChange={e => set('interes', e.target.value)}>
                  <option value="">Selecciona una opción</option>
                  {L.opciones.map(o => <option key={o}>{o}</option>)}
                  {form.interes && !L.opciones.includes(form.interes) && <option>{form.interes}</option>}
                </select>
              </label>
              <label className="lps-full">Cuéntanos algo (opcional)<textarea rows={3} value={form.mensaje} onChange={e => set('mensaje', e.target.value)} /></label>
              {estado === 'error' && <p className="lps-error lps-full">No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.</p>}
              <button type="submit" className="btn btn--accent lps-btn-full lps-btn-lg lps-full" disabled={estado === 'enviando'}>
                {estado === 'enviando' ? 'Enviando…' : 'Quiero mi llamada gratis'}
                {estado !== 'enviando' && <span className="arrow"><Arrow size={12} rot={-45} /></span>}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="lps-sec lps-sec--alt">
        <div className="lps-wrap lps-faq-wrap">
          <H2 eyebrow="Preguntas frecuentes" a="Lo que " em="siempre nos preguntan" b="." />
          <div className="lps-faq">
            {L.faq.map(f => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <footer className="lps-foot">
        <span>© 2026 Nebula Estudio · Monterrey · Tulum · Ensenada</span>
        <a href="mailto:info@nebulaestudio.com.mx">info@nebulaestudio.com.mx</a>
      </footer>

      {/* BARRA FIJA EN MÓVIL */}
      <div className="lps-sticky">
        <a href="#cotizar" className="btn btn--ghost">Llamada gratis</a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn--accent" onClick={e => abrirWhatsApp(e, wa, L.servicio)}>WhatsApp</a>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from './atoms.jsx'

export function CTA() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const submit = (e) => {
    e.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setError("Revisa el formato del correo."); return }
    setError(""); setSent(true)
  }
  return (
    <section id="contacto">
      <div className="container">
        <div className="cta reveal">
          <span className="eyebrow" style={{ color: "oklch(0.78 0.01 280)", position: "relative" }}>Iniciar un proyecto</span>
          <h2 className="display" style={{ marginTop: 16 }}>Cuéntanos qué<br/><em>órbita</em> quieres alcanzar.</h2>
          <p className="lead">Respondemos en menos de 24 h hábiles. Si encajamos, agendamos una llamada de 30 minutos. Si no, te recomendamos a alguien que sí.</p>
          <form className={`form ${sent ? "success" : ""}`} onSubmit={submit}>
            <input type="email" placeholder="tu@empresa.com" value={email} onChange={e => { setEmail(e.target.value); setError(""); setSent(false) }} disabled={sent} required />
            <button type="submit">{sent ? "Recibido ✓" : "Empezar"}</button>
          </form>
          {error && <div style={{ color: "oklch(0.85 0.18 30)", fontSize: 12, marginTop: 12, position: "relative" }}>{error}</div>}
          {sent && <div style={{ color: "oklch(0.85 0.18 295)", fontSize: 12, marginTop: 12, position: "relative", fontFamily: "var(--f-mono)", letterSpacing: ".1em", textTransform: "uppercase" }}>// Te escribimos en breve.</div>}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  const slot = (label, style) => (
    <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 14, display: "grid", placeItems: "center", ...style }}>
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)" }}>{label}</span>
    </div>
  )
  return (
    <section id="gallery" style={{ paddingBlock: "clamp(60px, 8vw, 100px)" }}>
      <div className="container">
        <div className="section-head reveal">
          <div><span className="eyebrow">Tras bambalinas</span><h2 className="section-title">Dentro del<br/><em>estudio</em>.</h2></div>
          <p className="section-lead">Tres sedes, un mismo método.</p>
        </div>
        <div className="gallery-grid reveal">
          {slot("Estudio MTY", { gridArea: "a", aspectRatio: "4/5" })}
          {slot("Equipo en sesión", { gridArea: "b", aspectRatio: "16/10" })}
          {slot("Detalle", { gridArea: "c", aspectRatio: "1/1" })}
          {slot("Sede QR", { gridArea: "d", aspectRatio: "3/2" })}
          {slot("Proceso", { gridArea: "e", aspectRatio: "4/5" })}
        </div>
      </div>
    </section>
  )
}

export function Testimonios() {
  return (
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
              <div className="testimonial-author"><div className="author-avatar">F</div><div><div className="author-name">FS Brokers</div><div className="author-role">Inmobiliaria · SPGG</div></div></div>
            </div>
            <div className="testimonial">
              <p className="testimonial-quote">"Tenemos página web responsive, branding y campañas funcionando. Por fin todo en orden."</p>
              <div className="testimonial-author"><div className="author-avatar">P</div><div><div className="author-name">Pacific Best Berry</div><div className="author-role">Distribuidora · Ensenada, BC</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

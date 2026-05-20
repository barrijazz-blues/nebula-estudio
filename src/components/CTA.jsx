import React from 'react'
import { Arrow } from './atoms.jsx'
import { sendToSysteme } from './useSysteme.js'

export function CTA() {
  const [email, setEmail] = React.useState("")
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState("")

  const submit = async (e) => {
    e.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setError("Revisa el formato del correo."); return }
    setLoading(true); setError("")
    const ok = await sendToSysteme({ email, tags: ["cta-home-nebula-2026"] })
    if (ok) setSent(true)
    else setError("Algo salió mal, intenta de nuevo.")
    setLoading(false)
  }

  return (
    <section id="contacto">
      <div className="container">
        <div className="cta reveal">
          <span className="eyebrow" style={{color:"oklch(0.78 0.01 280)",position:"relative"}}>Iniciar un proyecto</span>
          <h2 className="display" style={{marginTop:16}}>Cuéntanos qué<br/><em>órbita</em> quieres alcanzar.</h2>
          <p className="lead">Respondemos en menos de 24 h hábiles. Si encajamos, agendamos una llamada de 30 minutos. Si no, te recomendamos a alguien que sí.</p>
          <form className={`form ${sent?"success":""}`} onSubmit={submit}>
            <input type="email" placeholder="tu@empresa.com" value={email} onChange={e=>{setEmail(e.target.value);setError("");setSent(false)}} disabled={sent} required/>
            <button type="submit" disabled={loading}>{sent?"Recibido ✓":loading?"Enviando...":"Empezar"}</button>
          </form>
          {error && <div style={{color:"oklch(0.85 0.18 30)",fontSize:12,marginTop:12,position:"relative"}}>{error}</div>}
          {sent && <div style={{color:"oklch(0.85 0.18 295)",fontSize:12,marginTop:12,position:"relative",fontFamily:"var(--f-mono)",letterSpacing:".1em",textTransform:"uppercase"}}>// Te escribimos en breve.</div>}
        </div>
      </div>
    </section>
  )
}

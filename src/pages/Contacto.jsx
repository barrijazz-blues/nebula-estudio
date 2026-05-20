import React from 'react'
import { Link } from 'react-router-dom'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { Arrow } from '../components/atoms.jsx'
import { CTA } from '../components/CTA.jsx'
import { sendToSysteme } from '../components/useSysteme.js'

export default function Contacto() {
  const [budget, setBudget] = React.useState("")
  const [services, setServices] = React.useState([])
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [formData, setFormData] = React.useState({ nombre:"", empresa:"", email:"", telefono:"", proyecto:"", fuente:"" })

  const toggle = s => setServices(cur => cur.includes(s) ? cur.filter(x=>x!==s) : [...cur,s])
  const update = (k,v) => setFormData(f => ({...f,[k]:v}))

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await sendToSysteme({
      email: formData.email,
      firstName: formData.nombre,
      tags: ["contacto-web-nebula-2026", ...services.map(s=>`interes-${s.toLowerCase().replace(/\s+/g,'-')}`)]
    })
    setSent(true)
    setLoading(false)
  }

  return (
    <PageShell>
      <PageHero
        eyebrow="Contacto · Nebula Estudio"
        title={<>Cuéntanos qué<br/><em>órbita</em> quieres alcanzar.</>}
        lead="Respondemos en menos de 24 horas hábiles. Si encajamos, agendamos una llamada de diagnóstico de 30 minutos sin costo. Si no, te recomendamos a alguien que sí."
        meta={[{k:"Tiempo de respuesta",v:"< 24 h hábiles"},{k:"WhatsApp",v:"+52 81 3539 0665"},{k:"Email",v:"info@nebulaestudio.com.mx"}]}
      />
      <section>
        <div className="container">
          <div className="contact-grid">
            <form className="contact-form reveal" onSubmit={submit}>
              <div className="field-row">
                <div className="field"><label>Nombre</label><input type="text" placeholder="María González" value={formData.nombre} onChange={e=>update('nombre',e.target.value)} required /></div>
                <div className="field"><label>Empresa</label><input type="text" placeholder="Casa Verbena, S.A." value={formData.empresa} onChange={e=>update('empresa',e.target.value)} /></div>
              </div>
              <div className="field-row">
                <div className="field"><label>Email</label><input type="email" placeholder="maria@empresa.com" value={formData.email} onChange={e=>update('email',e.target.value)} required /></div>
                <div className="field"><label>Teléfono / WhatsApp</label><input type="tel" placeholder="+52 81 0000 0000" value={formData.telefono} onChange={e=>update('telefono',e.target.value)} /></div>
              </div>
              <div className="field">
                <label>Servicios de interés</label>
                <div className="budget-chips">
                  {["Branding","Web","Redes","Google Ads","Meta Ads","SEO","Diagnóstico 360°"].map(s => (
                    <button type="button" key={s} className={`budget-chip ${services.includes(s)?"on":""}`} onClick={()=>toggle(s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Presupuesto estimado (MXN)</label>
                <div className="budget-chips">
                  {["< 50k","50–150k","150–400k","400k–1M","+1M","Por definir"].map(b => (
                    <button type="button" key={b} className={`budget-chip ${budget===b?"on":""}`} onClick={()=>setBudget(b)}>{b}</button>
                  ))}
                </div>
              </div>
              <div className="field"><label>Cuéntanos del proyecto</label><textarea placeholder="¿Qué quieres lograr? ¿Por qué ahora? ¿Qué has intentado antes?" rows="5" value={formData.proyecto} onChange={e=>update('proyecto',e.target.value)} required></textarea></div>
              <div className="field">
                <label>¿Cómo llegaste a Nebula?</label>
                <select value={formData.fuente} onChange={e=>update('fuente',e.target.value)}>
                  <option value="" disabled>Selecciona una opción</option>
                  <option>Recomendación</option>
                  <option>Google / búsqueda</option>
                  <option>Instagram / Facebook</option>
                  <option>Portafolio · vi un proyecto</option>
                  <option>Evento o medio</option>
                  <option>Otro</option>
                </select>
              </div>
              <div style={{marginTop:16,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
                <span style={{fontFamily:"var(--f-mono)",fontSize:11,letterSpacing:".1em",textTransform:"uppercase",color:"var(--ink-3)"}}>
                  {sent ? "// Mensaje recibido, te escribimos en breve." : "// Respondemos en < 24 h hábiles"}
                </span>
                <button type="submit" className="btn" disabled={loading}>
                  {sent?"Enviado ✓":loading?"Enviando...":"Enviar mensaje"} <span className="arrow"><Arrow size={12} rot={-45}/></span>
                </button>
              </div>
            </form>

            <aside className="contact-side reveal">
              <div className="contact-card" style={{background:"var(--ink)",color:"var(--bg)",borderColor:"var(--ink)"}}>
                <div className="contact-card-h" style={{color:"oklch(0.65 0.01 280)"}}>WhatsApp directo</div>
                <div className="contact-card-v"><a href="https://wa.link/uewxbw" target="_blank" rel="noopener" style={{color:"var(--bg)"}}>+52 81 3539 0665 ↗</a></div>
                <div className="contact-card-sub" style={{color:"oklch(0.78 0.01 280)"}}>Para casos urgentes o si prefieres una primera plática rápida.</div>
              </div>
              <div className="contact-card">
                <div className="contact-card-h">Email</div>
                <div className="contact-card-v"><a href="mailto:info@nebulaestudio.com.mx">info@nebulaestudio.com.mx</a></div>
                <div className="contact-card-sub">Adjunta cualquier documento de contexto. Lo leemos antes de la llamada.</div>
              </div>
              <div className="contact-card">
                <div className="contact-card-h">Sedes</div>
                <div style={{display:"grid",gap:12,marginTop:12}}>
                  {[["Monterrey","San Pedro Garza García, N.L."],["Tulum","Quintana Roo"],["Ensenada","Baja California"]].map(([city,addr]) => (
                    <div key={city}><div style={{fontFamily:"var(--f-display)",fontSize:20}}>{city}</div><div style={{color:"var(--ink-2)",fontSize:13}}>{addr}</div></div>
                  ))}
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-h">Síguenos</div>
                <div style={{display:"flex",gap:16,marginTop:8,flexWrap:"wrap"}}>
                  <a href="https://www.instagram.com/nebulaestudiomx/" target="_blank" rel="noopener" className="post-link" style={{marginTop:0}}>Instagram ↗</a>
                  <a href="https://www.facebook.com/nebulaestudiomx" target="_blank" rel="noopener" className="post-link" style={{marginTop:0}}>Facebook ↗</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CTA />
    </PageShell>
  )
}

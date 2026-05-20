import React from 'react'
import { Arrow } from './atoms.jsx'
import { sendToSysteme } from './useSysteme.js'

export default function Popup() {
  const [show, setShow] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const dismissed = sessionStorage.getItem('nebula-popup-dismissed')
    if (dismissed) return
    const timer = setTimeout(() => setShow(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => { setShow(false); sessionStorage.setItem('nebula-popup-dismissed', '1') }

  const submit = async (e) => {
    e.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setError('Revisa el formato del correo.'); return }
    setLoading(true); setError('')
    const ok = await sendToSysteme({ email, firstName: name, tags: ['popup-nebula-2026', 'sitio-web-nebula-2026'] })
    if (ok) { setSent(true); setTimeout(() => dismiss(), 3000) }
    else setError('Error de conexión, intenta de nuevo.')
    setLoading(false)
  }

  if (!show) return null

  return (
    <div style={{position:'fixed',inset:0,zIndex:1000,background:'rgba(0,0,0,0.55)',display:'flex',alignItems:'center',justifyContent:'center',padding:24,backdropFilter:'blur(4px)'}}>
      <div style={{background:'var(--bg)',border:'1px solid var(--line)',borderRadius:'var(--r-lg)',padding:'clamp(28px,5vw,48px)',maxWidth:480,width:'100%',position:'relative'}}>
        <button onClick={dismiss} style={{position:'absolute',top:16,right:16,background:'transparent',border:'none',color:'var(--ink-3)',fontSize:20,lineHeight:1,padding:4,cursor:'pointer'}} aria-label="Cerrar">×</button>
        <span style={{fontFamily:'var(--f-mono)',fontSize:10,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--accent)'}}>Guía gratuita</span>
        <h2 style={{fontFamily:'var(--f-display)',fontSize:'clamp(24px,4vw,36px)',fontWeight:400,letterSpacing:'-0.02em',lineHeight:1.1,margin:'12px 0 16px'}}>
          Crece tu negocio<br/>en digital, <em>a fondo</em>.
        </h2>
        <p style={{fontSize:14,color:'var(--ink-2)',lineHeight:1.55,marginBottom:28}}>Descarga gratis la guía que usamos con nuestros clientes. Sin spam, sin rodeos.</p>
        {sent ? (
          <div style={{fontFamily:'var(--f-mono)',fontSize:12,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--accent)',padding:'20px 0'}}>
            // Revisa tu correo para confirmar y recibir la guía.
          </div>
        ) : (
          <form onSubmit={submit} style={{display:'grid',gap:16}}>
            <input type="text" placeholder="Tu nombre" value={name} onChange={e=>setName(e.target.value)}
              style={{background:'transparent',border:'none',borderBottom:'1px solid var(--line)',padding:'10px 0',font:'inherit',fontSize:16,color:'var(--ink)',outline:'none'}} />
            <input type="email" placeholder="tu@empresa.com" value={email} onChange={e=>{setEmail(e.target.value);setError('')}} required
              style={{background:'transparent',border:'none',borderBottom:'1px solid var(--line)',padding:'10px 0',font:'inherit',fontSize:16,color:'var(--ink)',outline:'none'}} />
            {error && <div style={{color:'oklch(0.65 0.18 30)',fontSize:12}}>{error}</div>}
            <button type="submit" className="btn" disabled={loading} style={{marginTop:8}}>
              {loading?'Enviando...':'Quiero la guía gratis'} {!loading && <span className="arrow"><Arrow size={12} rot={-45}/></span>}
            </button>
          </form>
        )}
        <p style={{fontSize:11,color:'var(--ink-3)',marginTop:16,fontFamily:'var(--f-mono)',letterSpacing:'.06em'}}>Sin spam. Cancela cuando quieras.</p>
      </div>
    </div>
  )
}

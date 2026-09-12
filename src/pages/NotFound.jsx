import React from 'react'
import { Link } from 'react-router-dom'
import { PageShell } from '../components/chrome.jsx'
import { Arrow } from '../components/atoms.jsx'

export default function NotFound() {
  return (
    <PageShell>
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="starfield" />
        <div className="halo" style={{ width: 600, height: 600, left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />
        <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 4px var(--accent-soft)', display: 'inline-block' }} />
            Error 404
          </div>
          <h1 className="display" style={{ fontSize: 'clamp(80px,16vw,200px)', lineHeight: 1, marginBottom: 24, color: 'var(--ink)' }}>
            404
          </h1>
          <p style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(22px,3vw,36px)', color: 'var(--ink-2)', marginBottom: 16, fontWeight: 400, letterSpacing: '-0.01em' }}>
            Esta página se perdió en el espacio.
          </p>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', marginBottom: 48, maxWidth: 400, margin: '0 auto 48px' }}>
            La URL que buscas no existe o fue movida. Regresa al inicio o revisa el enlace.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--accent">
              Ir al inicio <Arrow size={12} rot={-45} />
            </Link>
            <Link to="/contacto" className="btn btn--ghost">
              Contacto <Arrow size={12} rot={0} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

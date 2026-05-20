import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from './atoms.jsx'

export function HeroA() {
  return (
    <section className="hero-a">
      <div className="starfield" />
      <div className="halo halo-1" />
      <div className="container hero-a-inner">
        <span className="eyebrow reveal">Agencia de marketing digital · MX · Somos espaciales ⚡</span>
        <h1 className="display reveal">
          Consultoría de marketing<br />
          digital, <em>a fondo</em>.
        </h1>
        <p className="hero-a-sub reveal">
          Estudio creativo independiente que desarrolla marcas y marketing para negocios que cuentan una historia.
          Entramos como socios: diagnosticamos, diseñamos la estrategia y la ejecutamos contigo.
        </p>
        <div className="hero-a-cta reveal" style={{ marginTop: 32 }}>
          <Link to="/contacto" className="btn">
            Iniciar un proyecto
            <span className="arrow"><Arrow size={12} rot={-45} /></span>
          </Link>
          <a href="#trabajo" className="btn btn--ghost">
            Ver trabajo
            <span className="arrow"><Arrow size={12} rot={0} /></span>
          </a>
        </div>

        <div className="orbital reveal">
          <div className="orbital-core" />
          <div className="orbital-orbit"><div className="orbital-planet" /></div>
          <div className="orbital-orbit orbital-orbit-2"><div className="orbital-planet" /></div>
          <span className="orbital-tag" style={{ left: "8%", top: "12%" }}>↗ DIAGNÓSTICO</span>
          <span className="orbital-tag" style={{ right: "6%", top: "20%" }}>↘ ESTRATEGIA</span>
          <span className="orbital-tag" style={{ left: "4%", bottom: "18%" }}>← EJECUCIÓN</span>
          <span className="orbital-tag" style={{ right: "10%", bottom: "8%" }}>→ MEDICIÓN</span>
        </div>

        <div className="hero-a-meta reveal">
          <div>
            <div style={{ color: "var(--ink-2)", marginBottom: 6 }}>// 001 / Tesis</div>
            La consultoría que sí baja a ejecución.
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "var(--ink-2)", marginBottom: 6 }}>// 002 / Disponibilidad</div>
            Aceptando 2 engagements · Q3 2026
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "var(--ink-2)", marginBottom: 6 }}>// 003 / Coordenadas</div>
            Monterrey · Quintana Roo · Baja California
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroB() {
  return (
    <section className="hero-b">
      <div className="starfield" />
      <div className="container">
        <div className="hero-b-grid">
          <div className="reveal">
            <span className="eyebrow">Estudio creativo independiente · Somos espaciales ⚡</span>
            <h1 className="display" style={{ marginTop: 24 }}>
              Consultoría de marketing digital <em>a fondo</em>.
            </h1>
            <p style={{ color: "var(--ink-2)", fontSize: 18, maxWidth: 520, marginTop: 24, lineHeight: 1.55 }}>
              Páginas web, branding, redes sociales y campañas de Google Ads, Meta, LinkedIn y TikTok.
              Te tratamos como tratamos a la nuestra: con todo.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <Link to="/contacto" className="btn">
                Hablemos <span className="arrow"><Arrow size={12} rot={-45} /></span>
              </Link>
              <a href="#trabajo" className="btn btn--ghost">
                Casos <span className="arrow"><Arrow size={12} rot={0} /></span>
              </a>
            </div>
            <div className="hero-b-stats">
              <div className="hero-b-stat">
                <div className="num">68<span style={{ fontSize: 28, color: "var(--ink-3)" }}>+</span></div>
                <div className="label">Marcas<br/>desarrolladas</div>
              </div>
              <div className="hero-b-stat">
                <div className="num">3<span style={{ fontSize: 28, color: "var(--ink-3)" }}>×</span></div>
                <div className="label">Sedes en México<br/>MTY · QR · BC</div>
              </div>
            </div>
          </div>
          <div className="hero-b-side reveal" style={{ background: "var(--bg-2)", borderRadius: "var(--r-lg)", overflow: "hidden", aspectRatio: "4/5", display: "grid", placeItems: "center", border: "1px solid var(--line)" }}>
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-3)" }}>Hero image</span>
          </div>
        </div>
      </div>
    </section>
  )
}

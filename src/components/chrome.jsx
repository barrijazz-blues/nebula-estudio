import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Arrow, SunIcon, MoonIcon } from './atoms.jsx'

export const ACCENTS = {
  violet:  { color: "oklch(0.55 0.22 295)", soft: "oklch(0.92 0.06 295)", glow: "oklch(0.7 0.18 295 / 0.45)" },
  cobalto: { color: "oklch(0.55 0.22 255)", soft: "oklch(0.92 0.06 255)", glow: "oklch(0.7 0.18 255 / 0.45)" },
  ambar:   { color: "oklch(0.7 0.18 60)",   soft: "oklch(0.94 0.06 60)",  glow: "oklch(0.78 0.16 60 / 0.45)"  },
  jade:    { color: "oklch(0.6 0.16 165)",  soft: "oklch(0.92 0.06 165)", glow: "oklch(0.72 0.14 165 / 0.45)" },
  magenta: { color: "oklch(0.6 0.24 0)",    soft: "oklch(0.92 0.07 0)",   glow: "oklch(0.72 0.2 0 / 0.45)"    },
}

export function applyAccent(name) {
  const a = ACCENTS[name] || ACCENTS.violet
  document.documentElement.style.setProperty("--accent", a.color)
  document.documentElement.style.setProperty("--accent-soft", a.soft)
  document.documentElement.style.setProperty("--accent-glow", a.glow)
}

function readStored(key, fallback) {
  try { return localStorage.getItem(key) || fallback } catch { return fallback }
}

export function useTheme() {
  const [theme, setTheme] = React.useState(() => readStored("nebula-theme", "light"))
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem("nebula-theme", theme) } catch {}
  }, [theme])
  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark")
  return [theme, setTheme, toggle]
}

export function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)")
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  })
}

export function NavBar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [theme, , toggleTheme] = useTheme()
  const location = useLocation()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => { setMenuOpen(false) }, [location])

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} style={{ position: 'sticky', top: 0, zIndex: 200 }}>
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Nebula Estudio" style={{ height: 52, width: 'auto' }} />
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/servicios" className={isActive("/servicios") ? "active" : ""} onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link to="/trabajo"   className={isActive("/trabajo")   ? "active" : ""} onClick={() => setMenuOpen(false)}>Trabajo</Link>
          <Link to="/estudio"   className={isActive("/estudio")   ? "active" : ""} onClick={() => setMenuOpen(false)}>Estudio</Link>
          <Link to="/blog"      className={isActive("/blog")      ? "active" : ""} onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/precios"   className={isActive("/precios")   ? "active" : ""} onClick={() => setMenuOpen(false)}>Precios</Link>
          <Link to="/contacto"  className={isActive("/contacto")  ? "active" : ""} onClick={() => setMenuOpen(false)}>Contacto</Link>
          {menuOpen && (
            <a href="https://wa.link/uewxbw" target="_blank" rel="noopener" className="btn btn--accent" style={{ marginTop: 16 }}>
              WhatsApp <span className="arrow"><Arrow size={10} rot={-45} /></span>
            </a>
          )}
        </div>

        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link to="/contacto" className="btn btn--accent" style={{ height: 40, fontSize: 13 }}>
            Hablemos
            <span className="arrow"><Arrow size={10} rot={-45} /></span>
          </Link>
          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export function PageHero({ eyebrow, title, lead, meta }) {
  return (
    <section className="page-hero">
      <div className="starfield" />
      <div className="container">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h1 className="display reveal" style={{ marginTop: 20 }}>{title}</h1>
        {lead && <p className="page-hero-lead reveal">{lead}</p>}
        {meta && (
          <div className="page-hero-meta reveal">
            {meta.map((m, i) => (
              <div key={i}>
                <div className="page-hero-meta-k">// {m.k}</div>
                <div>{m.v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/"><img src="/logo.png" alt="Nebula Estudio" style={{ height: 56, width: 'auto' }} /></Link>
            <p>Atendemos a toda la República Mexicana. Sedes en Monterrey, Quintana Roo y Baja California. Somos espaciales ⚡</p>
          </div>
          <div className="footer-col">
            <h4>Estudio</h4>
            <ul>
              <li><Link to="/trabajo">Trabajo</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/estudio">Sobre nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Sedes</h4>
            <ul>
              <li><Link to="/estudio">Monterrey</Link></li>
              <li><Link to="/estudio">Tulum, Q.R.</Link></li>
              <li><Link to="/estudio">Ensenada, B.C.</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Coordenadas</h4>
            <ul>
              <li><a href="mailto:info@nebulaestudio.com.mx">info@nebulaestudio.com.mx</a></li>
              <li><a href="tel:8135390665">+52 81 3539 0665</a></li>
              <li><a href="https://www.instagram.com/nebulaestudiomx/" target="_blank" rel="noopener">Instagram ↗</a></li>
              <li><a href="https://www.facebook.com/nebulaestudiomx" target="_blank" rel="noopener">Facebook ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nebula Estudio.</span>
          <div className="links">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function PageShell({ children }) {
  useReveal()
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export function useAccent() {
  const [accent] = React.useState(() => { try { return localStorage.getItem("nebula-accent") || "violet" } catch { return "violet" } })
  React.useEffect(() => { applyAccent(accent) }, [accent])
}

export function CustomCursor() {
  React.useEffect(() => {
    if (window.matchMedia("(max-width: 720px)").matches) return
    const dot = document.createElement("div")
    const ring = document.createElement("div")
    dot.className = "cursor-dot"; ring.className = "cursor-ring"
    document.body.append(dot, ring)
    let rx = 0, ry = 0, dx = 0, dy = 0, raf
    const onMove = e => { dx = e.clientX; dy = e.clientY; dot.style.transform = `translate(${dx-3}px,${dy-3}px)` }
    const tick = () => { rx += (dx-rx)*0.18; ry += (dy-ry)*0.18; ring.style.transform = `translate(${rx-18}px,${ry-18}px)`; raf = requestAnimationFrame(tick) }
    const onOver = e => { if (e.target.closest?.("a,button,.case,.proof,.service,.vertical,.problem")) ring.classList.add("hover"); else ring.classList.remove("hover") }
    window.addEventListener("mousemove", onMove); window.addEventListener("mouseover", onOver); tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseover", onOver); dot.remove(); ring.remove() }
  }, [])
  return null
}

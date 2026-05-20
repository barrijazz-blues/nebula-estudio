import React from 'react'

export const Arrow = ({ size = 14, rot = -45 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ transform: `rotate(${rot}deg)` }}>
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
)

export const PlayIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M7 5l10 6-10 6V5z" fill="currentColor" />
  </svg>
)

export const ServiceIcon = ({ kind }) => {
  const common = { width: 28, height: 28, viewBox: "0 0 28 28", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" }
  switch (kind) {
    case "branding":   return <svg {...common}><circle cx="14" cy="14" r="9" /><circle cx="14" cy="14" r="4" /><path d="M14 5v18M5 14h18" /></svg>
    case "performance":return <svg {...common}><path d="M4 22l6-10 5 4 9-12" /><path d="M16 4h8v8" /></svg>
    case "seo":        return <svg {...common}><circle cx="12" cy="12" r="7" /><path d="M17 17l5 5M9 12h6M12 9v6" /></svg>
    case "social":     return <svg {...common}><circle cx="6" cy="6" r="3" /><circle cx="22" cy="6" r="3" /><circle cx="14" cy="22" r="3" /><path d="M8 8l4 11M20 8l-4 11" /></svg>
    case "web":        return <svg {...common}><rect x="3" y="5" width="22" height="16" rx="1.5" /><path d="M3 10h22M7 7.5h.01M10 7.5h.01" /></svg>
    case "strategy":   return <svg {...common}><path d="M6 22V10M14 22V4M22 22v-8" /><circle cx="6" cy="7" r="2" /></svg>
    default: return null
  }
}

export const VerticalIcon = ({ k }) => {
  const s = { width: 22, height: 22, viewBox: "0 0 22 22", fill: "none", stroke: "currentColor", strokeWidth: 1.3, strokeLinecap: "round", strokeLinejoin: "round" }
  switch (k) {
    case "hotel": return <svg {...s}><rect x="3" y="6" width="16" height="13" /><path d="M3 10h16M7 13h2M11 13h2M15 13h2M7 16h2M11 16h2M15 16h2" /></svg>
    case "rest":  return <svg {...s}><path d="M6 3v8a2 2 0 002 2v6M6 7h4M10 3v10M16 3c-1.5 0-3 1.5-3 5s1.5 5 3 5v6" /></svg>
    case "home":  return <svg {...s}><path d="M3 10l8-7 8 7v9H3z" /><path d="M9 19v-6h4v6" /></svg>
    case "leaf":  return <svg {...s}><path d="M4 18C4 10 10 4 18 4c0 8-6 14-14 14z" /><path d="M4 18l10-10" /></svg>
    case "bag":   return <svg {...s}><path d="M5 7h12l-1 12H6z" /><path d="M8 7V5a3 3 0 016 0v2" /></svg>
    case "box":   return <svg {...s}><path d="M11 3l8 4v8l-8 4-8-4V7z" /><path d="M3 7l8 4 8-4M11 11v8" /></svg>
    case "brief": return <svg {...s}><rect x="3" y="7" width="16" height="11" /><path d="M8 7V5h6v2M3 12h16" /></svg>
    case "comp":  return <svg {...s}><circle cx="11" cy="11" r="8" /><path d="M11 3v16M3 11h16" /><path d="M11 3a12 12 0 010 16M11 3a12 12 0 000 16" /></svg>
    default: return null
  }
}

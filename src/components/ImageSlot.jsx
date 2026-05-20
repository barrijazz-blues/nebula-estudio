import React from 'react'

export default function ImageSlot({ placeholder, style, shape = 'rounded', radius = 14 }) {
  const borderRadius = shape === 'circle' ? '50%' : shape === 'pill' ? '9999px' : `${radius}px`
  return (
    <div style={{
      background: 'var(--bg-2)',
      border: '1px solid var(--line)',
      borderRadius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 8,
      color: 'var(--ink-3)',
      fontSize: 11,
      fontFamily: 'var(--f-mono)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      overflow: 'hidden',
      position: 'relative',
      ...style,
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.4}}>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="m21 15-5-5L5 21"/>
      </svg>
      <span style={{opacity:0.5,textAlign:'center',padding:'0 16px'}}>{placeholder}</span>
    </div>
  )
}

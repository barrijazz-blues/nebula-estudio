import React from 'react'

const LOGOS = [
  { src: "/logo-mariadelmar.png", alt: "María del Mar" },
  { src: "/logo-arthouse.png",    alt: "Arthouse Tulum" },
  { src: "/logo-pocna.png",       alt: "Pocna" },
  { src: "/logo-serna-impresos.png", alt: "Serna Impresos" },
  { src: "/logo-italdo.png",      alt: "Italdo" },
  { src: "/logo-alia.png",        alt: "Alia Offices" },
  { src: "/logo-catrina.png",     alt: "La Catrina" },
  { src: "/logo-link2wash.png",   alt: "Link2Wash" },
  { src: "/logo-dci.png",         alt: "DCIGlobal" },
  { src: "/logo-eatbar.png",      alt: "EatBar" },
  { src: "/logo-chem.png",        alt: "Chem-Dry" },
  { src: "/logo-colibri.png",     alt: "Colibrí Boutique Hotels" },
  { src: "/logo-lazebra.png",     alt: "La Zebra Tulum" },
  { src: "/logo-nevana.png",      alt: "Nevana Tulum" },
  { src: "/logo-cubo.png",        alt: "Cubo Petroleum" },
  { src: "/logo-solcaribe.png",   alt: "Hotel Sol Caribe" },
]

const list = [...LOGOS, ...LOGOS]

export default function Logos() {
  return (
    <section style={{ padding: 0 }}>
      <div className="logos">
        <div className="logos-marquee">
          {list.map((l, i) => (
            <span className="logo-item" key={i}>
              <img
                src={l.src}
                alt={l.alt}
                style={{
                  height: 40,
                  width: 'auto',
                  maxWidth: 120,
                  objectFit: 'contain',
                  filter: 'grayscale(1)',
                  opacity: 0.65,
                  transition: 'opacity .2s, filter .2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.filter = 'grayscale(0)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '0.65'
                  e.currentTarget.style.filter = 'grayscale(1)'
                }}
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

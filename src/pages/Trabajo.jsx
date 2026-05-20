import React from 'react'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { CTA } from '../components/CTA.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const WORK = [
  { slug:"wakax",      title:"Wakax",             tag:"Hotel · Tulum",        year:"2024", filters:["branding","web"],    span:8, ar:"16/10", img:"/trabajo-wakax.jpg" },
  { slug:"pocna",      title:"Pocna Tulum",        tag:"Hotel · Tulum",        year:"2024", filters:["web"],               span:4, ar:"4/5",   img:"/trabajo-pocna.png" },
  { slug:"yucannabis", title:"Yucannabis",          tag:"CBD · Quintana Roo",   year:"2024", filters:["branding"],          span:4, ar:"4/5",   img:"/trabajo-yucannabis.png" },
  { slug:"fs-brokers", title:"FS Brokers",          tag:"Inmobiliaria · SPGG",  year:"2024", filters:["branding","web"],    span:8, ar:"16/10", img:"/trabajo-fs-brookers.png" },
  { slug:"ilaria",     title:"Ilaria Lisi",         tag:"Wellness · Tulum",     year:"2024", filters:["branding"],          span:6, ar:"4/3",   img:"/trabajo-ilaria.png" },
  { slug:"pacific",    title:"Pacific Best Berry",  tag:"Distribución · BC",    year:"2024", filters:["web","performance"], span:6, ar:"4/3",   img:"/trabajo-pacific.jpg" },
  { slug:"eatbar",     title:"EatBar",              tag:"Restaurante · MTY",    year:"2023", filters:["branding","social"], span:4, ar:"4/5",   img:"/trabajo-eatbar.jpg" },
  { slug:"italdo",     title:"Italdo",              tag:"Restaurante",           year:"2023", filters:["branding"],          span:4, ar:"4/5",   img:"/trabajo-italdo-social-media.jpg" },
  { slug:"chicken",    title:"Creepy Chicken",      tag:"Restaurante · MTY",    year:"2023", filters:["branding","social"], span:4, ar:"4/5",   img:"/trabajo-creepy-chicken.png" },
  { slug:"lavaggio",   title:"Lavaggio",            tag:"Servicios · MTY",      year:"2023", filters:["branding"],          span:6, ar:"4/3",   img:"/trabajo-lavaggio.jpg" },
  { slug:"dalmar",     title:"Dalmar",              tag:"Hospitality · QR",     year:"2023", filters:["branding","web"],    span:6, ar:"4/3",   img:"/trabajo-dalmar.jpg" },
]

const FILTERS = [
  { k:"all",         label:"Todo" },
  { k:"branding",    label:"Branding" },
  { k:"web",         label:"Web" },
  { k:"performance", label:"Performance" },
  { k:"social",      label:"Social" },
]

export default function Trabajo() {
  const [filter, setFilter] = React.useState("all")
  const visible = WORK.filter(w => filter === "all" || w.filters.includes(filter))

  return (
    <PageShell>
      <PageHero
        eyebrow="Portafolio · Nebula Estudio"
        title={<>Trabajo<br/><em>seleccionado</em>.</>}
        lead="Una muestra de los engagements recientes. Branding, web, redes y performance — casi siempre los cuatro juntos."
        meta={[
          { k:"Engagements", v:"68+ desde 2017" },
          { k:"Verticales",  v:"Hospitality · F&B · Real estate" },
          { k:"Mercado",     v:"Toda la República" },
        ]}
      />

      <section>
        <div className="container">
          <div className="work-filters reveal">
            {FILTERS.map(f => (
              <button
                key={f.k}
                className={`work-filter ${filter === f.k ? "active" : ""}`}
                onClick={() => setFilter(f.k)}
              >
                {f.label}
                <span style={{ marginLeft:8, opacity:.6 }}>
                  {f.k === "all" ? WORK.length : WORK.filter(w => w.filters.includes(f.k)).length}
                </span>
              </button>
            ))}
          </div>

          <div className="work-grid reveal">
            {visible.map(w => (
              <div key={w.slug} className={`work-card span-${w.span}`}>
                {w.img
                  ? <img
                      src={w.img}
                      alt={w.title}
                      style={{
                        width: "100%",
                        aspectRatio: w.ar,
                        objectFit: "cover",
                        borderRadius: "var(--r-md)",
                        display: "block",
                      }}
                    />
                  : <ImageSlot
                      placeholder={`${w.title} — próximamente`}
                      style={{ width:"100%", aspectRatio: w.ar }}
                    />
                }
                <div className="work-card-info">
                  <div className="work-card-info-l">
                    <h3>{w.title}</h3>
                    <div className="tag">{w.tag}</div>
                  </div>
                  <div className="work-card-info-r">{w.year} ↗</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  )
}

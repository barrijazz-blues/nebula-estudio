import React from 'react'
import { Link } from 'react-router-dom'
import { PageShell, PageHero } from '../components/chrome.jsx'
import { CTA } from '../components/CTA.jsx'
import ImageSlot from '../components/ImageSlot.jsx'

const POSTS = [
  { slug:"01", title:"Tu sitio web está muerto y no lo sabes",                          tag:"Presencia digital", date:"Miér 01", img:"/blog-01.jpg" },
  { slug:"02", title:"Por qué tu negocio no aparece en Google",                         tag:"SEO", date:"Miér 02", img:"/blog-02.jpg" },
  { slug:"03", title:"Tienes redes sociales pero no tienes estrategia",                  tag:"Redes sociales", date:"Miér 03", img:"/blog-03.jpg" },
  { slug:"04", title:"El error más caro del marketing: hacer todo a la vez",             tag:"Estrategia", date:"Miér 04", img:"/blog-04.jpg" },
  { slug:"05", title:"¿Por qué tu competencia te está ganando en digital?",              tag:"Estrategia", date:"Miér 05", img:"/blog-05.jpg" },
  { slug:"06", title:"Métricas de vanidad: los números que no significan nada",          tag:"Métricas", date:"Miér 06", img:"/blog-06.jpg" },
  { slug:"07", title:"Por dónde empezar si quieres crecer en digital",                  tag:"Estrategia", date:"Miér 07", img:"/blog-07.jpg" },
  { slug:"08", title:"Cómo saber si tu negocio está listo para crecer en digital",      tag:"Estrategia", date:"Miér 08", img:"/blog-08.jpg" },
  { slug:"09", title:"Cuánto debería gastar en marketing según mi negocio",             tag:"Presupuesto", date:"Miér 09", img:"/blog-09.jpg" },
  { slug:"10", title:"La diferencia entre tener presencia digital y tener estrategia",  tag:"Estrategia", date:"Miér 10", img:"/blog-10.jpg" },
  { slug:"11", title:"Por qué tu sitio web no vende aunque se vea bonito",              tag:"Conversión", date:"Miér 11", img:"/blog-11.jpg" },
  { slug:"12", title:"Cómo saber si tus campañas están funcionando de verdad",          tag:"Métricas", date:"Miér 12", img:"/blog-12.jpg" },
  { slug:"13", title:"Lo que nadie te dice sobre el SEO",                               tag:"SEO", date:"Miér 13", img:"/blog-13.jpg" },
  { slug:"14", title:"Redes sociales: cantidad vs calidad",                             tag:"Redes sociales", date:"Miér 14", img:"/blog-14.jpg" },
  { slug:"15", title:"Email marketing: el canal que todos ignoran y que más convierte", tag:"Email marketing", date:"Miér 15", img:"/blog-15.jpg" },
  { slug:"16", title:"Cómo hacer que tu sitio web trabaje mientras tú duermes",        tag:"Automatización", date:"Miér 16", img:"/blog-16.jpg" },
  { slug:"17", title:"El primer paso antes de invertir en publicidad",                  tag:"Publicidad", date:"Miér 17", img:"/blog-17.jpg" },
  { slug:"18", title:"Cómo construir una marca que la gente recuerde",                 tag:"Branding", date:"Miér 18", img:"/blog-18.jpg" },
  { slug:"19", title:"Guía básica de Google Ads para no expertos",                     tag:"Google Ads", date:"Miér 19", img:"/blog-19.jpg" },
  { slug:"20", title:"Cómo crear contenido sin morir en el intento",                   tag:"Contenido", date:"Miér 20", img:"/blog-20.jpg" },
  { slug:"21", title:"Lo que tus clientes buscan en Google y tú no les estás dando",   tag:"SEO", date:"Miér 21", img:"/blog-21.jpg" },
  { slug:"22", title:"Cómo recuperar clientes que ya te compraron",                    tag:"Retención", date:"Miér 22", img:"/blog-22.jpg" },
  { slug:"23", title:"Por qué el boca a boca ya no es suficiente",                     tag:"Estrategia", date:"Miér 23", img:"/blog-23.jpg" },
  { slug:"24", title:"Cómo competir en digital sin el presupuesto de los grandes",     tag:"Estrategia", date:"Miér 24", img:"/blog-24.jpg" },
  { slug:"25", title:"La IA no va a reemplazar tu negocio, pero sí a quien no la usa", tag:"Inteligencia Artificial", date:"Miér 25", img:"/blog-25.jpg" },
  { slug:"26", title:"Cómo usar IA para ahorrar tiempo en tu empresa",                 tag:"Inteligencia Artificial", date:"Miér 26", img:"/blog-26.jpg" },
  { slug:"27", title:"ChatGPT para dueños de negocio: para qué sí sirve y para qué no",tag:"Inteligencia Artificial", date:"Miér 27", img:"/blog-27.jpg" },
  { slug:"28", title:"Lo que la IA no puede hacer por ti (todavía)",                   tag:"Inteligencia Artificial", date:"Miér 28", img:"/blog-28.jpg" },
  { slug:"29", title:"El checklist de marketing digital para 2026",                    tag:"Estrategia", date:"Miér 29", img:"/blog-29.jpg" },
  { slug:"30", title:"Por qué los negocios que invierten en su marca ganan a largo plazo", tag:"Branding", date:"Miér 30", img:"/blog-30.jpg" },
]

export default function Blog() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Miércoles Espaciales · Nebula Estudio"
        title={<>Ideas que<br/><em>mueven</em> negocios.</>}
        lead="Cada miércoles publicamos un artículo sobre marketing digital, estrategia y crecimiento. Sin relleno, sin tecnicismos."
        meta={[
          { k:"Frecuencia", v:"Cada miércoles" },
          { k:"Temas", v:"Marketing · Estrategia · IA" },
          { k:"Nivel", v:"Para dueños de negocio" },
        ]}
      />

      <section>
        <div className="container">
          <div className="blog-grid reveal">
            {POSTS.map(p => (
              <article key={p.slug} className="blog-card">
                {p.img
                  ? <img src={p.img} alt={p.title} style={{ width:"100%", aspectRatio:"16/9", objectFit:"cover", borderRadius:"var(--r-md)", display:"block" }} />
                  : <ImageSlot placeholder={`Blog ${p.slug} — imagen`} style={{ width:"100%", aspectRatio:"16/9" }} />
                }
                <div className="blog-card-meta">
                  <span className="blog-card-tag">{p.tag}</span>
                  <span className="blog-card-date">{p.date}</span>
                </div>
                <h3 className="blog-card-title">{p.title}</h3>
                <a href="#" className="post-link">Leer artículo →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  )
}

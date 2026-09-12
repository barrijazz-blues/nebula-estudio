import React from 'react'
import { Link } from 'react-router-dom'
import { Arrow } from '../components/atoms.jsx'
import { sendToSysteme } from '../components/useSysteme.js'

const WA = "https://wa.link/uewxbw"

function LandingRestaurante() {
  return (
    <div style={{fontFamily:"'Georgia',serif",color:"#1c1917",background:"#faf8f4"}}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      <nav style={{position:"sticky",top:0,zIndex:50,background:"rgba(28,25,23,0.95)",backdropFilter:"blur(12px)",padding:"0 40px",height:70,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span style={{color:"#fff",fontSize:20,letterSpacing:2,fontStyle:"italic"}}>La Mesa</span>
        <a href={WA} target="_blank" rel="noopener" style={{background:"#c8a96e",color:"#fff",padding:"10px 24px",borderRadius:2,textDecoration:"none",fontFamily:"Lato,sans-serif",fontSize:12,fontWeight:700,letterSpacing:2}}>RESERVAR</a>
      </nav>
      <section style={{position:"relative",height:580,overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=85" alt="Restaurante" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.6))"}} />
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px"}}>
          <p style={{color:"#c8a96e",fontFamily:"Lato,sans-serif",fontSize:11,letterSpacing:6,textTransform:"uppercase",marginBottom:20}}>Cocina de autor · Monterrey</p>
          <h1 style={{color:"#fff",fontSize:"clamp(40px,5vw,72px)",fontWeight:400,lineHeight:1.05,marginBottom:24}}>Una experiencia<br/>para <em>recordar</em>.</h1>
          <p style={{color:"rgba(255,255,255,0.8)",fontFamily:"Lato,sans-serif",fontSize:17,maxWidth:480,marginBottom:36,lineHeight:1.6}}>Ingredientes de temporada, técnica contemporánea y una atmósfera que invita a quedarse.</p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center"}}>
            <a href={WA} target="_blank" rel="noopener" style={{background:"#c8a96e",color:"#fff",padding:"16px 40px",textDecoration:"none",fontFamily:"Lato,sans-serif",fontSize:13,fontWeight:700,letterSpacing:2}}>HACER RESERVACIÓN</a>
            <a href="#" style={{border:"1px solid rgba(255,255,255,0.5)",color:"#fff",padding:"16px 36px",textDecoration:"none",fontFamily:"Lato,sans-serif",fontSize:13,letterSpacing:2}}>VER MENÚ</a>
          </div>
        </div>
      </section>
      <section style={{padding:"72px 40px",maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:72,alignItems:"center"}}>
        <div>
          <p style={{color:"#c8a96e",fontFamily:"Lato,sans-serif",fontSize:11,letterSpacing:4,textTransform:"uppercase",marginBottom:16}}>Nuestra filosofía</p>
          <h2 style={{fontSize:"clamp(28px,3vw,44px)",fontWeight:400,lineHeight:1.15,marginBottom:20}}>Cocina honesta,<br/><em>ingredientes que hablan solos.</em></h2>
          <p style={{fontFamily:"Lato,sans-serif",fontSize:15,lineHeight:1.8,color:"#666",marginBottom:32}}>Trabajamos con productores locales y cambiamos el menú con las estaciones del año. Cada platillo es un homenaje al ingrediente.</p>
          <a href={WA} target="_blank" rel="noopener" style={{borderBottom:"1px solid #c8a96e",color:"#c8a96e",textDecoration:"none",fontFamily:"Lato,sans-serif",fontSize:13,letterSpacing:2,paddingBottom:4}}>RESERVAR MESA →</a>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" style={{width:"100%",aspectRatio:"3/4",objectFit:"cover",borderRadius:4}} alt="plato" />
          <div style={{display:"flex",flexDirection:"column",gap:12,marginTop:40}}>
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" style={{width:"100%",aspectRatio:"1",objectFit:"cover",borderRadius:4}} alt="cocina" />
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80" style={{width:"100%",aspectRatio:"1",objectFit:"cover",borderRadius:4}} alt="interior" />
          </div>
        </div>
      </section>
      <section style={{background:"#1c1917",padding:"72px 40px",textAlign:"center"}}>
        <h2 style={{color:"#fff",fontSize:36,fontWeight:400,marginBottom:16}}>¿Tienes algo que celebrar?</h2>
        <p style={{color:"rgba(255,255,255,0.5)",fontFamily:"Lato,sans-serif",fontSize:16,marginBottom:32,maxWidth:500,margin:"0 auto 32px"}}>Lun–Vie: 1–11pm · Sáb: 12–12am · Dom: 12–6pm</p>
        <a href={WA} target="_blank" rel="noopener" style={{background:"#c8a96e",color:"#fff",padding:"16px 40px",textDecoration:"none",fontFamily:"Lato,sans-serif",fontSize:13,fontWeight:700,letterSpacing:2}}>RESERVAR POR WHATSAPP</a>
      </section>
    </div>
  )
}

function LandingComercializadora() {
  return (
    <div style={{fontFamily:"'Inter',Arial,sans-serif",color:"#111",background:"#f8f8f8"}}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      <div style={{background:"#e63946",padding:"8px 40px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <p style={{color:"#fff",fontSize:12,fontWeight:600,margin:0,display:"flex",alignItems:"center",gap:8}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10"/><rect x="1" y="4" width="22" height="6"/><line x1="12" y1="4" x2="12" y2="22"/></svg> Envíos en 24–48 hrs al norte de México</p>
        <a href={WA} target="_blank" rel="noopener" style={{color:"#fff",fontSize:12,fontWeight:700,textDecoration:"none"}}>WhatsApp: (81) 9999-0000 →</a>
      </div>
      <nav style={{background:"#fff",padding:"0 40px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 1px 0 #eee"}}>
        <div><span style={{fontWeight:900,fontSize:22,letterSpacing:-1}}>NORTE</span><span style={{fontWeight:300,fontSize:14,color:"#e63946",marginLeft:8,letterSpacing:3}}>DISTRIBUCIONES</span></div>
        <a href={WA} target="_blank" rel="noopener" style={{background:"#e63946",color:"#fff",padding:"10px 24px",borderRadius:4,textDecoration:"none",fontSize:13,fontWeight:700}}>Cotizar ahora</a>
      </nav>
      <section style={{background:"#111",display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:540}}>
        <div style={{padding:"80px 60px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <div style={{background:"#e63946",display:"inline-block",padding:"6px 16px",fontSize:11,fontWeight:700,letterSpacing:3,color:"#fff",marginBottom:28,alignSelf:"flex-start"}}>B2B DESDE 2012</div>
          <h1 style={{color:"#fff",fontSize:"clamp(32px,4vw,56px)",fontWeight:900,lineHeight:1.0,letterSpacing:-2,marginBottom:24}}>Todo lo que tu<br/>negocio necesita,<br/><span style={{color:"#e63946"}}>en un solo lugar.</span></h1>
          <p style={{color:"rgba(255,255,255,0.55)",fontSize:16,lineHeight:1.7,marginBottom:36,fontWeight:300}}>Más de 500 productos. Precios de mayoreo y entregas rápidas.</p>
          <a href={WA} target="_blank" rel="noopener" style={{background:"#e63946",color:"#fff",padding:"16px 36px",textDecoration:"none",fontWeight:700,fontSize:15,letterSpacing:1,alignSelf:"flex-start"}}>SOLICITAR CATÁLOGO →</a>
        </div>
        <div style={{overflow:"hidden",position:"relative"}}>
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80" style={{width:"100%",height:"100%",objectFit:"cover",opacity:0.6}} alt="bodega" />
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,#111,transparent 40%)"}} />
        </div>
      </section>
      <section style={{background:"#fff",padding:"60px 40px"}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:1,background:"#eee"}}>
          {[["500+","Productos"],["8","Estados"],["24h","Entrega"],["10+","Años"]].map(([n,l])=>(
            <div key={l} style={{textAlign:"center",padding:"40px 16px",background:"#fff"}}>
              <div style={{fontSize:48,fontWeight:900,color:"#e63946",letterSpacing:-2}}>{n}</div>
              <div style={{fontSize:12,color:"#666",marginTop:8,textTransform:"uppercase",letterSpacing:1,fontWeight:600}}>{l}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{background:"#e63946",padding:"72px 40px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",maxWidth:"100%"}}>
        <div>
          <h2 style={{color:"#fff",fontSize:"clamp(28px,3vw,44px)",fontWeight:900,letterSpacing:-1,marginBottom:20}}>¿Primera vez con nosotros?</h2>
          <p style={{color:"rgba(255,255,255,0.85)",fontSize:16,lineHeight:1.7,marginBottom:32}}>Cotiza por WhatsApp. Te respondemos en menos de 2 horas con precios y disponibilidad.</p>
          <a href={WA} target="_blank" rel="noopener" style={{background:"#fff",color:"#e63946",padding:"16px 36px",textDecoration:"none",fontWeight:900,fontSize:15}}>COTIZAR AHORA</a>
        </div>
        <div style={{display:"grid",gap:12}}>
          {["Precios de mayoreo desde el primer pedido","Entrega a domicilio en tu negocio","Facturación inmediata","Asesor de cuenta dedicado"].map(b=>(
            <div key={b} style={{background:"rgba(255,255,255,0.15)",padding:"14px 20px",display:"flex",alignItems:"center",gap:12,borderRadius:4}}>
              <div style={{width:8,height:8,background:"#fff",borderRadius:"50%",flexShrink:0}} />
              <span style={{color:"#fff",fontSize:14}}>{b}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function LandingSalon() {
  return (
    <div style={{fontFamily:"'Georgia',serif",color:"#2d2320",background:"#fdf9f6"}}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <nav style={{background:"#fdf9f6",padding:"0 40px",height:72,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid #e8ddd3",position:"sticky",top:0,zIndex:50}}>
        <div>
          <p style={{fontSize:9,fontFamily:"Montserrat,sans-serif",letterSpacing:6,textTransform:"uppercase",color:"#b08b7a",margin:"0 0 2px"}}>Studio</p>
          <p style={{fontSize:24,fontStyle:"italic",letterSpacing:2,margin:0,lineHeight:1}}>Glam</p>
        </div>
        <a href={WA} target="_blank" rel="noopener" style={{background:"#b08b7a",color:"#fff",padding:"12px 28px",borderRadius:999,textDecoration:"none",fontFamily:"Montserrat,sans-serif",fontSize:11,fontWeight:700,letterSpacing:2}}>AGENDAR CITA</a>
      </nav>
      <section style={{display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:560}}>
        <div style={{padding:"80px 60px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <p style={{color:"#b08b7a",fontFamily:"Montserrat,sans-serif",fontSize:10,letterSpacing:5,textTransform:"uppercase",marginBottom:20}}>Salón de belleza · MTY</p>
          <h1 style={{fontSize:"clamp(32px,3.5vw,56px)",fontWeight:300,lineHeight:1.1,marginBottom:24,letterSpacing:-1}}>Donde cada visita<br/>es una <em style={{color:"#b08b7a"}}>experiencia.</em></h1>
          <p style={{fontFamily:"Montserrat,sans-serif",fontSize:14,lineHeight:1.8,color:"#777",marginBottom:36,fontWeight:300}}>Corte, color, tratamientos y más. Un espacio íntimo para que salgas sintiéndote increíble.</p>
          <a href={WA} target="_blank" rel="noopener" style={{background:"#b08b7a",color:"#fff",padding:"16px 36px",borderRadius:999,textDecoration:"none",fontFamily:"Montserrat,sans-serif",fontSize:12,fontWeight:700,letterSpacing:2,alignSelf:"flex-start"}}>AGENDAR MI CITA →</a>
        </div>
        <div style={{overflow:"hidden",position:"relative"}}>
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85" style={{width:"100%",height:"100%",objectFit:"cover"}} alt="salon" />
          <div style={{position:"absolute",bottom:24,right:24,background:"#fff",padding:"16px 20px",borderRadius:8}}>
            <div style={{fontFamily:"Montserrat,sans-serif",fontSize:10,letterSpacing:2,color:"#b08b7a",marginBottom:4}}>HOY</div>
            <div style={{fontSize:16,fontWeight:400}}>3 lugares disponibles</div>
            <a href={WA} target="_blank" rel="noopener" style={{display:"block",background:"#b08b7a",color:"#fff",padding:"8px 16px",borderRadius:999,textDecoration:"none",fontFamily:"Montserrat,sans-serif",fontSize:11,fontWeight:700,marginTop:10,textAlign:"center"}}>RESERVAR →</a>
          </div>
        </div>
      </section>
      <section style={{background:"#f5ede6",padding:"72px 40px"}}>
        <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
          {[{s:"Corte & Peinado",p:"Desde $250",img:"https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80"},{s:"Color & Mechas",p:"Desde $800",img:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80"},{s:"Tratamientos",p:"Desde $600",img:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80"}].map(({s,p,img})=>(
            <div key={s} style={{background:"#fff",borderRadius:8,overflow:"hidden"}}>
              <img src={img} style={{width:"100%",height:180,objectFit:"cover"}} alt={s} />
              <div style={{padding:"20px"}}>
                <h3 style={{fontSize:20,fontWeight:400,marginBottom:4}}>{s}</h3>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{color:"#b08b7a",fontFamily:"Montserrat,sans-serif",fontSize:13,fontWeight:600}}>{p}</span>
                  <a href={WA} target="_blank" rel="noopener" style={{background:"#2d2320",color:"#fff",padding:"8px 16px",borderRadius:999,textDecoration:"none",fontFamily:"Montserrat,sans-serif",fontSize:11,fontWeight:700}}>Agendar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function LandingGimnasio() {
  return (
    <div style={{fontFamily:"'Arial Black',Impact,sans-serif",color:"#fff",background:"#0a0a0a"}}>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <nav style={{position:"sticky",top:0,zIndex:50,background:"rgba(10,10,10,0.95)",backdropFilter:"blur(12px)",padding:"0 40px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,0,0.1)"}}>
        <span style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:28,letterSpacing:4,color:"#f5e642"}}>TITAN GYM</span>
        <a href={WA} target="_blank" rel="noopener" style={{background:"#f5e642",color:"#000",padding:"10px 28px",textDecoration:"none",fontFamily:"'Open Sans',sans-serif",fontSize:13,fontWeight:700,letterSpacing:2}}>INSCRÍBETE YA</a>
      </nav>
      <section style={{position:"relative",height:600,overflow:"hidden"}}>
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=85" style={{width:"100%",height:"100%",objectFit:"cover",filter:"brightness(0.4)"}} alt="gym" />
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"0 24px"}}>
          <p style={{color:"#f5e642",fontFamily:"'Open Sans',sans-serif",fontSize:12,letterSpacing:6,textTransform:"uppercase",marginBottom:16}}>Monterrey · Abierto 24/7</p>
          <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(60px,10vw,120px)",lineHeight:0.9,marginBottom:24,letterSpacing:4}}>SUPERA<br/>TUS<br/><span style={{color:"#f5e642"}}>LÍMITES.</span></h1>
          <p style={{fontFamily:"'Open Sans',sans-serif",color:"rgba(255,255,255,0.7)",fontSize:17,maxWidth:480,marginBottom:40,lineHeight:1.6}}>Equipamiento de alto rendimiento, entrenadores certificados y planes a tu medida.</p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center"}}>
            <a href={WA} target="_blank" rel="noopener" style={{background:"#f5e642",color:"#000",padding:"18px 48px",textDecoration:"none",fontFamily:"'Open Sans',sans-serif",fontSize:14,fontWeight:700,letterSpacing:2}}>PRIMER MES GRATIS</a>
            <a href="#planes" style={{border:"1px solid rgba(255,255,255,0.3)",color:"#fff",padding:"18px 36px",textDecoration:"none",fontFamily:"'Open Sans',sans-serif",fontSize:14,letterSpacing:2}}>VER PLANES</a>
          </div>
        </div>
      </section>
      <section style={{padding:"72px 40px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0,background:"#f5e642"}}>
        {[["5:00 AM","Apertura","lunes a sábado"],["24/7","Acceso","viernes y sábados"],["50+","Máquinas","de peso libre y cardio"],["15+","Clases","grupales al mes"]].map(([n,t,d])=>(
          <div key={t} style={{textAlign:"center",padding:"32px 16px",borderRight:"1px solid rgba(0,0,0,0.1)"}}>
            <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:52,color:"#000",lineHeight:1}}>{n}</div>
            <div style={{fontFamily:"'Open Sans',sans-serif",fontSize:13,fontWeight:700,color:"#000",marginTop:4,letterSpacing:1,textTransform:"uppercase"}}>{t}</div>
            <div style={{fontFamily:"'Open Sans',sans-serif",fontSize:12,color:"rgba(0,0,0,0.6)",marginTop:4}}>{d}</div>
          </div>
        ))}
      </section>
      <section id="planes" style={{padding:"72px 40px",maxWidth:1000,margin:"0 auto"}}>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:52,letterSpacing:4,textAlign:"center",marginBottom:48,color:"#f5e642"}}>PLANES DE MEMBRESÍA</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20}}>
          {[{n:"Básico",p:"$599",d:"mes",items:["Acceso Lun–Sáb","Horario 5am–11pm","Vestidores y regaderas"]},{n:"Pro",p:"$899",d:"mes",items:["Acceso 24/7","1 clase grupal/sem","Evaluación física inicial","Casillero incluido"],destacado:true},{n:"Elite",p:"$1,499",d:"mes",items:["Acceso 24/7","Clases ilimitadas","2 sesiones con trainer/mes","Nutrición básica","Casillero dedicado"]}].map(({n,p,d,items,destacado})=>(
            <div key={n} style={{background:destacado?"#f5e642":"#1a1a1a",padding:"40px 28px",border:destacado?"none":"1px solid rgba(255,255,255,0.1)"}}>
              {destacado && <div style={{fontFamily:"'Open Sans',sans-serif",fontSize:11,fontWeight:700,letterSpacing:3,color:"#000",marginBottom:16,textTransform:"uppercase"}}>MÁS POPULAR</div>}
              <h3 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:32,letterSpacing:3,color:destacado?"#000":"#fff",marginBottom:4}}>{n}</h3>
              <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:56,color:destacado?"#000":"#f5e642",lineHeight:1}}>{p}<span style={{fontSize:18,fontFamily:"'Open Sans',sans-serif",fontWeight:300}}>/{d}</span></div>
              <div style={{height:1,background:destacado?"rgba(0,0,0,0.15)":"rgba(255,255,255,0.1)",margin:"24px 0"}} />
              {items.map(i=><div key={i} style={{display:"flex",gap:10,alignItems:"flex-start",marginBottom:12}}>
                <span style={{color:destacado?"#000":"#f5e642",fontWeight:700,flexShrink:0}}>✓</span>
                <span style={{fontFamily:"'Open Sans',sans-serif",fontSize:13,color:destacado?"#333":"rgba(255,255,255,0.7)"}}>{i}</span>
              </div>)}
              <a href={WA} target="_blank" rel="noopener" style={{display:"block",background:destacado?"#000":"#f5e642",color:destacado?"#f5e642":"#000",padding:"14px",textDecoration:"none",fontFamily:"'Open Sans',sans-serif",fontSize:13,fontWeight:700,letterSpacing:2,textAlign:"center",marginTop:24}}>INSCRIBIRME</a>
            </div>
          ))}
        </div>
      </section>
      <section style={{background:"#f5e642",padding:"72px 40px",textAlign:"center"}}>
        <h2 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:52,letterSpacing:4,color:"#000",marginBottom:16}}>EMPIEZA HOY</h2>
        <p style={{fontFamily:"'Open Sans',sans-serif",color:"rgba(0,0,0,0.6)",fontSize:16,marginBottom:32}}>El primer mes es gratis. Sin contrato mínimo.</p>
        <a href={WA} target="_blank" rel="noopener" style={{background:"#000",color:"#f5e642",padding:"18px 48px",textDecoration:"none",fontFamily:"'Open Sans',sans-serif",fontSize:14,fontWeight:700,letterSpacing:2}}>WHATSAPP: (81) 7777-0000</a>
      </section>
    </div>
  )
}

function LandingDespacho() {
  return (
    <div style={{fontFamily:"'Times New Roman',Georgia,serif",color:"#1a1a2e",background:"#f8f7f4"}}>
      <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <nav style={{background:"#1a1a2e",padding:"0 40px",height:68,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <div>
          <span style={{color:"#c9a84c",fontFamily:"'EB Garamond',serif",fontSize:18,letterSpacing:2}}>Garza & Asociados</span>
          <span style={{color:"rgba(255,255,255,0.3)",fontFamily:"'DM Sans',sans-serif",fontSize:11,marginLeft:12,letterSpacing:3}}>CONTADORES PÚBLICOS</span>
        </div>
        <a href={WA} target="_blank" rel="noopener" style={{border:"1px solid #c9a84c",color:"#c9a84c",padding:"10px 24px",textDecoration:"none",fontFamily:"'DM Sans',sans-serif",fontSize:12,fontWeight:500,letterSpacing:2}}>CONTACTAR</a>
      </nav>
      <section style={{background:"#1a1a2e",padding:"80px 60px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center"}}>
        <div>
          <div style={{borderLeft:"2px solid #c9a84c",paddingLeft:20,marginBottom:32}}>
            <p style={{color:"#c9a84c",fontFamily:"'DM Sans',sans-serif",fontSize:11,letterSpacing:4,textTransform:"uppercase",margin:"0 0 8px"}}>Desde 2003</p>
            <p style={{color:"rgba(255,255,255,0.4)",fontFamily:"'DM Sans',sans-serif",fontSize:12,margin:0}}>Monterrey, Nuevo León</p>
          </div>
          <h1 style={{color:"#fff",fontFamily:"'EB Garamond',serif",fontSize:"clamp(36px,4vw,60px)",fontWeight:400,lineHeight:1.1,marginBottom:24}}>Contabilidad y<br/>fiscal que te da<br/><em>tranquilidad.</em></h1>
          <p style={{color:"rgba(255,255,255,0.55)",fontFamily:"'DM Sans',sans-serif",fontSize:16,lineHeight:1.75,marginBottom:40,fontWeight:300}}>Nos encargamos de tus impuestos, declaraciones y contabilidad para que tú te concentres en hacer crecer tu negocio.</p>
          <a href={WA} target="_blank" rel="noopener" style={{background:"#c9a84c",color:"#1a1a2e",padding:"16px 36px",textDecoration:"none",fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,letterSpacing:2,display:"inline-block"}}>AGENDAR CONSULTA GRATIS</a>
        </div>
        <div style={{display:"grid",gap:16}}>
          {[["Declaraciones mensuales y anuales","Presentación puntual ante el SAT"],["Contabilidad electrónica","Cumplimiento fiscal garantizado"],["Nómina y IMSS","Cálculo y timbrado de recibos"],["Asesoría fiscal","Estrategias para pagar menos impuestos"]].map(([t,d])=>(
            <div key={t} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(201,168,76,0.2)",padding:"20px 24px",borderRadius:4}}>
              <div style={{color:"#c9a84c",fontSize:15,marginBottom:4}}>{t}</div>
              <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'DM Sans',sans-serif",fontSize:13}}>{d}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{padding:"72px 60px",maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:32}}>
        {[{n:"200+",l:"Clientes activos",d:"Empresas y personas físicas"},{n:"20+",l:"Años en el mercado",d:"Experiencia comprobada"},{n:"100%",l:"Cumplimiento fiscal",d:"Cero multas, cero retrasos"}].map(({n,l,d})=>(
          <div key={l} style={{borderTop:"2px solid #c9a84c",paddingTop:24}}>
            <div style={{fontFamily:"'EB Garamond',serif",fontSize:52,fontWeight:500,color:"#1a1a2e",lineHeight:1}}>{n}</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:14,fontWeight:500,color:"#1a1a2e",marginTop:8}}>{l}</div>
            <div style={{fontFamily:"'DM Sans',sans-serif",fontSize:13,color:"#888",marginTop:4}}>{d}</div>
          </div>
        ))}
      </section>
      <section style={{background:"#1a1a2e",padding:"72px 60px",textAlign:"center"}}>
        <h2 style={{color:"#fff",fontFamily:"'EB Garamond',serif",fontSize:"clamp(28px,3vw,44px)",fontWeight:400,marginBottom:16}}>¿Tienes dudas fiscales?</h2>
        <p style={{color:"rgba(255,255,255,0.4)",fontFamily:"'DM Sans',sans-serif",fontSize:16,marginBottom:32}}>La primera consulta es gratuita. Sin compromiso.</p>
        <a href={WA} target="_blank" rel="noopener" style={{background:"#c9a84c",color:"#1a1a2e",padding:"16px 40px",textDecoration:"none",fontFamily:"'DM Sans',sans-serif",fontSize:13,fontWeight:500,letterSpacing:2}}>AGENDAR CONSULTA →</a>
      </section>
    </div>
  )
}

const EJEMPLOS = [
  {label:"Restaurante",sub:"La Mesa",comp:<LandingRestaurante />},
  {label:"Comercializadora",sub:"Norte Distribuciones",comp:<LandingComercializadora />},
  {label:"Salón de belleza",sub:"Studio Glam",comp:<LandingSalon />},
  {label:"Gimnasio",sub:"Titan Gym",comp:<LandingGimnasio />},
  {label:"Despacho contable",sub:"Garza & Asociados",comp:<LandingDespacho />},
]

const THUMBNAILS = [
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=70",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=70",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=70",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=70",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=70",
]

function FormularioCotizacion() {
  const [elegido, setElegido] = React.useState(null)
  const [form, setForm] = React.useState({nombre:"",email:"",telefono:"",negocio:""})
  const [sent, setSent] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const update = (k,v) => setForm(f=>({...f,[k]:v}))

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await sendToSysteme({
      email: form.email,
      firstName: form.nombre,
      tags: ["landing-nebula-2026", "interes-landing-express"],
      empresa: form.negocio,
      telefono: form.telefono,
      proyecto: `Estilo elegido: ${elegido !== null ? EJEMPLOS[elegido].label : "No seleccionó"}`,
      fuente: "Página de ejemplos Landing Express",
    })
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="cotizar" style={{padding:"80px 32px",background:"var(--ink)",color:"var(--bg)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:60}}>
          <p style={{fontFamily:"var(--f-mono)",fontSize:11,letterSpacing:".15em",textTransform:"uppercase",color:"var(--accent)",marginBottom:16}}>Quiero mi sitio web</p>
          <h2 style={{fontFamily:"var(--f-display)",fontSize:"clamp(32px,4vw,52px)",fontWeight:400,letterSpacing:"-0.02em",marginBottom:16}}>Elige el estilo que más<br/><em>te gusta</em> y cotiza.</h2>
          <p style={{color:"oklch(0.72 0.01 280)",fontSize:16,maxWidth:540,margin:"0 auto"}}>Selecciona el diseño que más se adapta a tu negocio y llena el formulario. Te contactamos en menos de 24 horas.</p>
        </div>

        {/* Selector de estilo */}
        <div style={{marginBottom:48}}>
          <p style={{fontFamily:"var(--f-mono)",fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"oklch(0.55 0.01 280)",marginBottom:20,textAlign:"center"}}>1. Elige el estilo de tu preferencia</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:16}}>
            {EJEMPLOS.map((e,i)=>(
              <div key={i} onClick={()=>setElegido(i)} style={{cursor:"pointer",border:`2px solid ${elegido===i?"var(--accent)":"rgba(255,255,255,0.1)"}`,borderRadius:"var(--r-md)",overflow:"hidden",transition:"all .2s",transform:elegido===i?"scale(1.02)":"scale(1)"}}>
                <div style={{position:"relative"}}>
                  <img src={THUMBNAILS[i]} alt={e.label} style={{width:"100%",height:130,objectFit:"cover",display:"block",filter:elegido===i?"none":"brightness(0.6)"}} />
                  {elegido===i && <div style={{position:"absolute",top:8,right:8,background:"var(--accent)",color:"#fff",borderRadius:"50%",width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700}}>✓</div>}
                </div>
                <div style={{padding:"12px 14px",background:elegido===i?"oklch(0.2 0.05 295)":"oklch(0.15 0.01 280)"}}>
                  <div style={{fontSize:13,fontWeight:600,color:"var(--bg)",marginBottom:2}}>{e.label}</div>
                  <div style={{fontFamily:"var(--f-mono)",fontSize:10,color:"oklch(0.55 0.01 280)",letterSpacing:".06em"}}>{e.sub}</div>
                </div>
              </div>
            ))}
          </div>
          {elegido===null && <p style={{textAlign:"center",fontFamily:"var(--f-mono)",fontSize:11,color:"oklch(0.5 0.01 280)",marginTop:12}}>* Puedes seleccionar uno o pedirnos uno personalizado</p>}
        </div>

        {/* Formulario */}
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <p style={{fontFamily:"var(--f-mono)",fontSize:11,letterSpacing:".12em",textTransform:"uppercase",color:"oklch(0.55 0.01 280)",marginBottom:24,textAlign:"center"}}>2. Déjanos tus datos</p>
          {sent ? (
            <div style={{textAlign:"center",padding:"60px 40px",border:"1px solid oklch(0.3 0.1 295)",borderRadius:"var(--r-lg)"}}>
              <div style={{width:64,height:64,borderRadius:"50%",background:"var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px"}}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <h3 style={{fontFamily:"var(--f-display)",fontSize:28,fontWeight:400,marginBottom:12}}>¡Listo! Recibimos tu solicitud.</h3>
              <p style={{color:"oklch(0.72 0.01 280)",fontSize:15}}>Te contactamos en menos de 24 horas hábiles por WhatsApp o email.</p>
            </div>
          ) : (
            <form onSubmit={submit} style={{display:"grid",gap:20}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  <label style={{fontFamily:"var(--f-mono)",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"oklch(0.55 0.01 280)"}}>Nombre *</label>
                  <input type="text" placeholder="María González" value={form.nombre} onChange={e=>update('nombre',e.target.value)} required style={{background:"oklch(0.18 0.01 280)",border:"1px solid oklch(0.3 0.01 280)",borderRadius:8,padding:"12px 16px",color:"var(--bg)",fontSize:15,outline:"none",fontFamily:"var(--f-sans)"}} />
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  <label style={{fontFamily:"var(--f-mono)",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"oklch(0.55 0.01 280)"}}>Teléfono / WhatsApp *</label>
                  <input type="tel" placeholder="+52 81 0000 0000" value={form.telefono} onChange={e=>update('telefono',e.target.value)} required style={{background:"oklch(0.18 0.01 280)",border:"1px solid oklch(0.3 0.01 280)",borderRadius:8,padding:"12px 16px",color:"var(--bg)",fontSize:15,outline:"none",fontFamily:"var(--f-sans)"}} />
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <label style={{fontFamily:"var(--f-mono)",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"oklch(0.55 0.01 280)"}}>Correo electrónico *</label>
                <input type="email" placeholder="maria@tunegocio.com" value={form.email} onChange={e=>update('email',e.target.value)} required style={{background:"oklch(0.18 0.01 280)",border:"1px solid oklch(0.3 0.01 280)",borderRadius:8,padding:"12px 16px",color:"var(--bg)",fontSize:15,outline:"none",fontFamily:"var(--f-sans)"}} />
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                <label style={{fontFamily:"var(--f-mono)",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"oklch(0.55 0.01 280)"}}>Nombre de tu negocio</label>
                <input type="text" placeholder="Mi Negocio, S.A." value={form.negocio} onChange={e=>update('negocio',e.target.value)} style={{background:"oklch(0.18 0.01 280)",border:"1px solid oklch(0.3 0.01 280)",borderRadius:8,padding:"12px 16px",color:"var(--bg)",fontSize:15,outline:"none",fontFamily:"var(--f-sans)"}} />
              </div>
              {elegido!==null && (
                <div style={{background:"oklch(0.2 0.05 295)",border:"1px solid oklch(0.35 0.1 295)",borderRadius:8,padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
                  <span style={{color:"var(--accent)"}}>✓</span>
                  <span style={{fontSize:14,color:"oklch(0.8 0.05 295)"}}>Estilo seleccionado: <strong>{EJEMPLOS[elegido].label} — {EJEMPLOS[elegido].sub}</strong></span>
                </div>
              )}
              <button type="submit" disabled={loading} className="btn btn--accent" style={{justifyContent:"center",textAlign:"center",fontSize:16,height:56,marginTop:8}}>
                {sent?"¡Enviado! ✓":loading?"Enviando...":"Quiero mi sitio web"} {!sent&&!loading&&<span className="arrow"><Arrow size={12} rot={-45}/></span>}
              </button>
              <p style={{textAlign:"center",fontFamily:"var(--f-mono)",fontSize:11,color:"oklch(0.45 0.01 280)"}}>También puedes escribirnos directo a <a href={WA} target="_blank" rel="noopener" style={{color:"var(--accent)"}}>WhatsApp</a></p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default function LandingEjemplos() {
  const [activo, setActivo] = React.useState(0)
  const [showTooltip, setShowTooltip] = React.useState(true)

  React.useEffect(()=>{ const t=setTimeout(()=>setShowTooltip(false),6000); return()=>clearTimeout(t) },[])

  return (
    <div style={{fontFamily:"var(--f-sans)",color:"var(--ink)",background:"var(--bg)"}}>

      {/* Header */}
      <div style={{background:"var(--ink)",color:"var(--bg)",padding:"72px 32px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 60% 50%, oklch(0.4 0.22 295 / 0.3), transparent 70%)",pointerEvents:"none"}} />
        <div style={{position:"relative",maxWidth:760,margin:"0 auto"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:12,background:"var(--accent)",borderRadius:999,padding:"10px 28px",marginBottom:24}}>
  <span style={{fontFamily:"var(--f-mono)",fontSize:14,letterSpacing:".1em",textTransform:"uppercase",color:"#fff",fontWeight:700}}>Landing Express · $3,499 MXN</span>
</div>
          <h1 style={{fontFamily:"var(--f-display)",fontSize:"clamp(36px,5vw,68px)",fontWeight:400,letterSpacing:"-0.02em",marginBottom:20,lineHeight:1.05}}>Así se ve tu sitio<br/><em>listo en 7 días.</em></h1>
          <p style={{color:"oklch(0.72 0.01 280)",fontSize:18,maxWidth:560,margin:"0 auto 40px",lineHeight:1.65}}>Diseño profesional, fotos reales, formulario de contacto y botón de WhatsApp. Todo incluido.</p>
          <div style={{display:"inline-flex",alignItems:"center",gap:12,background:"oklch(0.2 0.05 295)",border:"1px solid oklch(0.35 0.1 295)",borderRadius:"var(--r-lg)",padding:"16px 24px",marginBottom:36}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color:"var(--accent)",flexShrink:0}}><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <p style={{fontFamily:"var(--f-mono)",fontSize:12,color:"oklch(0.7 0.05 295)",margin:0,lineHeight:1.5,textAlign:"left"}}>
              Estos son sitios de <strong style={{color:"oklch(0.85 0.08 295)"}}>una sola página</strong> — incluyen secciones de inicio, servicios, galería, contacto y botón de WhatsApp. Perfectos para pymes que necesitan presencia profesional rápida.
            </p>
          </div>
          <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"}}>
            <a href="#cotizar" className="btn btn--accent" style={{display:"inline-flex",gap:8,alignItems:"center",fontSize:15,height:52,padding:"0 32px"}}>
              Quiero el mío <Arrow size={12} rot={-45} />
            </a>
            <Link to="/precios" className="btn btn--ghost" style={{display:"inline-flex",gap:8,alignItems:"center",fontSize:15,height:52,padding:"0 32px",borderColor:"oklch(0.4 0.01 280)",color:"var(--bg)"}}>
              Ver todos los paquetes
            </Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{position:"sticky",top:0,zIndex:100,background:"var(--bg-2)",borderBottom:"1px solid var(--line)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:16}}>
          <div style={{display:"flex",gap:0,overflowX:"auto",flex:1}}>
            {EJEMPLOS.map((e,i)=>(
              <button key={i} onClick={()=>setActivo(i)} style={{
                background:"transparent",border:"none",borderBottom:`2px solid ${activo===i?"var(--accent)":"transparent"}`,
                padding:"14px 20px",fontFamily:"var(--f-sans)",fontSize:13,
                color:activo===i?"var(--accent)":"var(--ink-2)",
                cursor:"pointer",whiteSpace:"nowrap",transition:"all .2s",
                display:"flex",flexDirection:"column",gap:2,alignItems:"flex-start"
              }}>
                <span style={{fontWeight:600}}>{e.label}</span>
                <span style={{fontSize:10,color:"var(--ink-3)",fontFamily:"var(--f-mono)",letterSpacing:".06em"}}>{e.sub}</span>
              </button>
            ))}
          </div>
          {showTooltip && (
            <div style={{background:"var(--accent)",color:"#fff",padding:"8px 18px",borderRadius:999,fontFamily:"var(--f-mono)",fontSize:11,letterSpacing:".08em",display:"flex",gap:8,alignItems:"center",flexShrink:0,animation:"pulse 1.5s infinite"}}>
              <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.75}}`}</style>
              ← Cambia el ejemplo
            </div>
          )}
        </div>
      </div>

      {/* Preview */}
      <div style={{margin:"32px",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",overflow:"hidden",boxShadow:"0 12px 48px rgba(0,0,0,0.12)"}}>
        <div style={{background:"var(--bg-2)",padding:"10px 16px",display:"flex",gap:8,alignItems:"center",borderBottom:"1px solid var(--line)"}}>
          <div style={{display:"flex",gap:6}}>
            {["#ff5f57","#febc2e","#28c840"].map(c=><div key={c} style={{width:12,height:12,borderRadius:"50%",background:c}} />)}
          </div>
          <div style={{flex:1,background:"var(--bg)",borderRadius:6,padding:"4px 12px",fontFamily:"var(--f-mono)",fontSize:12,color:"var(--ink-3)",textAlign:"center"}}>
            tudominio.com
          </div>
          <a href="#cotizar" style={{background:"var(--accent)",color:"#fff",padding:"10px 20px",borderRadius:6,textDecoration:"none",fontFamily:"var(--f-sans)",fontSize:14,fontWeight:700,flexShrink:0,boxShadow:"0 2px 8px rgba(0,0,0,0.2)"}}>⚡ Quiero este sitio</a>
        </div>
        {EJEMPLOS[activo].comp}
      </div>

      {/* Qué incluye */}
      <section style={{padding:"72px 32px",background:"var(--bg-2)",borderBlock:"1px solid var(--line)"}}>
        <div style={{maxWidth:1000,margin:"0 auto",textAlign:"center",marginBottom:48}}>
          <p style={{fontFamily:"var(--f-mono)",fontSize:11,letterSpacing:".15em",textTransform:"uppercase",color:"var(--accent)",marginBottom:12}}>Landing Express · $3,499 MXN</p>
          <h2 style={{fontFamily:"var(--f-display)",fontSize:"clamp(28px,3vw,44px)",fontWeight:400,letterSpacing:"-0.02em",marginBottom:16}}>¿Qué incluye tu sitio?</h2>
          <p style={{color:"var(--ink-2)",fontSize:16,maxWidth:560,margin:"0 auto"}}>Son sitios de una sola página — completos, profesionales y listos para recibir clientes.</p>
        </div>
        <div style={{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:20}}>
          {[
            ["✓","Diseño profesional a la medida","Sin plantillas genéricas. Tu negocio, tu identidad."],
            ["✓","Adaptado a celular y desktop","Se ve perfecto en cualquier dispositivo."],
            ["✓","Formulario de contacto","Los clientes pueden escribirte directo desde el sitio."],
            ["✓","Botón de WhatsApp","Acceso rápido para que te contacten al instante."],
            ["✓","Fotos profesionales incluidas","Usamos imágenes de calidad para que luzca perfecto."],
            ["✓","Hosting primer año gratis","Sin costos ocultos. El dominio corre por tu cuenta."],
            ["✓","Entrega en 7 días hábiles","Rápido, sin vueltas y con revisiones incluidas."],
            ["✓","Integración con Google Maps","Para que te encuentren fácil."],
          ].map(([icon,t,d])=>(
            <div key={t} style={{background:"var(--bg)",border:"1px solid var(--line)",borderRadius:"var(--r-md)",padding:"20px 20px",display:"flex",gap:14,alignItems:"flex-start"}}>
              <span style={{color:"var(--accent)",flexShrink:0,fontWeight:700,fontSize:16}}>{icon}</span>
              <div>
                <div style={{fontWeight:600,fontSize:14,marginBottom:4}}>{t}</div>
                <div style={{fontSize:13,color:"var(--ink-2)",lineHeight:1.5}}>{d}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",fontFamily:"var(--f-mono)",fontSize:11,color:"var(--ink-3)",marginTop:32}}>* Precios más IVA. Copys (textos) por parte del cliente. No incluye fotografía propia.</p>
      </section>

      {/* Formulario */}
      <FormularioCotizacion />

    </div>
  )
}

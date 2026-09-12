import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useAccent } from './components/chrome.jsx'
import Home from './pages/Home.jsx'
import Servicios from './pages/Servicios.jsx'
import Trabajo from './pages/Trabajo.jsx'
import Estudio from './pages/Estudio.jsx'
import Contacto from './pages/Contacto.jsx'
import WhatsApp from './components/WhatsApp.jsx'
import Popup from './components/Popup.jsx'
import Blog from './pages/Blog.jsx'
import Precios from './pages/Precios.jsx'
import Landing from './pages/Landing.jsx'
import useSEO from './components/useSEO.jsx'
import LandingEjemplos from './pages/LandingEjemplos.jsx'
import NotFound from './pages/NotFound.jsx'
import LandingCiudad, { CIUDADES } from './pages/LandingCiudad.jsx'
import BlogPost from './pages/BlogPost.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  useAccent()
  useSEO()
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/trabajo" element={<Trabajo />} />
        <Route path="/estudio" element={<Estudio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/precios" element={<Precios />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/ejemplos" element={<LandingEjemplos />} />
        
<Route path="/monterrey"         element={<LandingCiudad ciudad={CIUDADES.monterrey}          />} />
<Route path="/cancun"            element={<LandingCiudad ciudad={CIUDADES.cancun}             />} />
<Route path="/tulum"             element={<LandingCiudad ciudad={CIUDADES.tulum}              />} />
<Route path="/playa-del-carmen" element={<LandingCiudad ciudad={CIUDADES['playa-del-carmen']} />} />
<Route path="/cdmx"              element={<LandingCiudad ciudad={CIUDADES.cdmx}               />} />
<Route path="/guadalajara"       element={<LandingCiudad ciudad={CIUDADES.guadalajara}        />} />
<Route path="/tijuana"           element={<LandingCiudad ciudad={CIUDADES.tijuana}            />} />
<Route path="/chihuahua"         element={<LandingCiudad ciudad={CIUDADES.chihuahua}          />} />
<Route path="/california"        element={<LandingCiudad ciudad={CIUDADES.california}         />} />
<Route path="/texas"             element={<LandingCiudad ciudad={CIUDADES.texas}              />} />
<Route path="/ensenada"          element={<LandingCiudad ciudad={CIUDADES.ensenada}           />} />
<Route path="/los-cabos"          element={<LandingCiudad ciudad={CIUDADES['los-cabos']} />} />

 <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsApp />
      <Popup />
    </>
  )
}
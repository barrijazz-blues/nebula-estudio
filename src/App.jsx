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
      </Routes>
      <WhatsApp />
      <Popup />
    </>
  )
}
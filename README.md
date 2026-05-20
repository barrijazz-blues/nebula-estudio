# Nebula Estudio — Vite + React

## Setup (3 comandos)

```bash
# 1. Instala Node.js si no lo tienes: https://nodejs.org (descarga la versión LTS)

# 2. Entra a la carpeta del proyecto
cd nebula-estudio

# 3. Instala dependencias
npm install

# 4. Levanta el servidor local
npm run dev
```

Abre http://localhost:5173 en tu browser.

## Deploy en Netlify

```bash
# Build para producción
npm run build

# La carpeta `dist/` es lo que sube a Netlify
```

O conecta el repo de GitHub a Netlify y despliega automático en cada push.

## Estructura

```
src/
  components/
    atoms.jsx      — íconos SVG
    chrome.jsx     — Nav, Footer, hooks (useTheme, useReveal, CustomCursor)
    hero.jsx       — HeroA, HeroB
    services.jsx   — Servicios, Proceso, Casos, Logos
    extra.jsx      — Problemas, Proof, Verticales
    sections.jsx   — CTA, Gallery, Testimonios
  pages/
    Home.jsx
    Servicios.jsx
    Trabajo.jsx
    Estudio.jsx
    Contacto.jsx
  styles.css       — todos los estilos (styles.css + paginas.css unidos)
  main.jsx         — entry point
  App.jsx          — router
```

## Pendientes

- [ ] Subir imágenes reales (reemplaza los placeholders grises)
- [ ] Conectar formulario de contacto (Formspree o EmailJS)
- [ ] Agregar favicon
- [ ] Páginas individuales de casos de portafolio

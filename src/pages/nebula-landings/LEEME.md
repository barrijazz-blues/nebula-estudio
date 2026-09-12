# Nebula Estudio — Landing Pages por Ciudad

## Archivos generados

| Archivo | URL destino | Mercado |
|---|---|---|
| `monterrey.html` | nebulasestudio.com.mx/monterrey | Monterrey, NL |
| `cancun-tulum.html` | nebulasestudio.com.mx/cancun | Cancún, Tulum, QR |
| `ensenada.html` | nebulasestudio.com.mx/ensenada | Ensenada, BC |
| `california.html` | nebulasestudio.com.mx/california | Latinos en California, USA |
| `texas.html` | nebulasestudio.com.mx/texas | Latinos en Texas, USA |

## Qué incluye cada landing

- **Meta tags SEO completos**: título, descripción, keywords, Open Graph
- **Canonical URL** correcta por ciudad
- **Contenido específico** por mercado (copy, keywords locales, sector)
- **Paquetes** Arrancar / Crecer / Dominar con links directos a WhatsApp
- **Sección de servicios** adaptada al mercado
- **FAQ local** respondiendo preguntas específicas de ese mercado
- **CTA** con link a WhatsApp con mensaje pre-escrito por ciudad
- **Proceso de trabajo** explicado paso a paso
- **Testimonios** de clientes reales

## Antes de publicar — personalizar

1. **Número de WhatsApp**: Buscar `526461234567` y reemplazar con tu número real
2. **URLs de footer**: Apuntan a `nebulasestudio.com.mx/...` — verificar que existan
3. **Estadísticas del hero**: Ajustar los números reales (proyectos, ROI, etc.)
4. **Testimonios**: Cambiar o agregar testimonios reales por ciudad
5. **Precios**: Actualizar si cambian — actualmente $7,000 / $10,000 / $12,000 MXN

## Cómo agregar al sitio (React/JSX)

Si tu sitio está en React con React Router, cada archivo HTML se convierte en una página:

```
/src/pages/Monterrey.jsx
/src/pages/CancunTulum.jsx
/src/pages/Ensenada.jsx
/src/pages/California.jsx
/src/pages/Texas.jsx
```

Agrega las rutas en tu router:
```jsx
<Route path="/monterrey" element={<Monterrey />} />
<Route path="/cancun" element={<CancunTulum />} />
<Route path="/ensenada" element={<Ensenada />} />
<Route path="/california" element={<California />} />
<Route path="/texas" element={<Texas />} />
```

## SEO — próximos pasos

1. Subir las páginas al sitio
2. Crear fichas de Google Business Profile para cada ciudad o agregar áreas de servicio
3. Verificar en Search Console que Google las indexe (1-2 semanas)
4. Agregar links internos desde el home a cada landing
5. Crear 1 artículo de blog por ciudad en los siguientes 3 meses

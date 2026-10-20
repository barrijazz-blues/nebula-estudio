// Datos de las landings de servicios para campañas (/lp/:slug)
// Precios de planes: se leen de PAQUETES en Precios.jsx (una sola fuente de verdad).

// ── Promo de fin de año ─────────────────────────────────────────────
// Se apaga sola al pasar la fecha: las landings vuelven a precio normal.
export const PROMO = {
  pct: 25,
  hasta: new Date('2026-12-15T23:59:59-06:00'),
  hastaTexto: '15 de diciembre',
}
export const promoActiva = () => Date.now() < PROMO.hasta.getTime()

export const WA_NUMERO = '528135390665'
export const waLink = (msg) => `https://wa.me/${WA_NUMERO}?text=${encodeURIComponent(msg)}`

// "$7,900" → "$5,925"
export const conDescuento = (precio) => {
  const n = Number(String(precio).replace(/[^0-9.]/g, ''))
  return '$' + Math.floor(n * (1 - PROMO.pct / 100)).toLocaleString('en-US')
}

// ── Prueba social real ──────────────────────────────────────────────
export const TESTIMONIOS = {
  cesar: { quote: 'Nuestra página web nos ha permitido duplicar nuestras ventas en menos de seis meses. El diseño es limpio, rápido y ha mejorado nuestra presencia en línea.', name: 'Cesar Gutiérrez', role: 'CEO · Alia Offices' },
  alex:  { quote: 'Los servicios de Social Media nos ayudan a mantenernos activos en redes sociales. Junto con ellos creamos estrategias para crear conversiones.', name: 'Alex B.', role: 'CEO · Chemdry Regiomontana' },
  karen: { quote: 'Gracias al paquete de branding, ahora tenemos una identidad visual profesional y coherente. Definitivamente marcó la diferencia en la percepción de nuestros clientes.', name: 'Karen L.', role: 'Emprendedora' },
  daniel:{ quote: 'Nos han ayudado por más de 5 años en nuestras estrategias de Google Ads y Social Media.', name: 'Daniel M.', role: 'Jefe de Marketing' },
}

export const LOGOS = [
  { src: '/logo-mariadelmar.png', alt: 'María del Mar' },
  { src: '/logo-arthouse.png', alt: 'Arthouse Tulum' },
  { src: '/logo-pocna.png', alt: 'Pocna' },
  { src: '/logo-serna-impresos.png', alt: 'Serna Impresos' },
  { src: '/logo-italdo.png', alt: 'Italdo' },
  { src: '/logo-alia.png', alt: 'Alia Offices' },
  { src: '/logo-catrina.png', alt: 'La Catrina' },
  { src: '/logo-link2wash.png', alt: 'Link2Wash' },
  { src: '/logo-dci.png', alt: 'DCIGlobal' },
  { src: '/logo-eatbar.png', alt: 'EatBar' },
  { src: '/logo-chem.png', alt: 'Chem-Dry' },
  { src: '/logo-colibri.png', alt: 'Colibrí Boutique Hotels' },
  { src: '/logo-lazebra.png', alt: 'La Zebra Tulum' },
  { src: '/logo-nevana.png', alt: 'Nevana Tulum' },
  { src: '/logo-cubo.png', alt: 'Cubo Petroleum' },
  { src: '/logo-solcaribe.png', alt: 'Hotel Sol Caribe' },
]

// Casos reales del portafolio (/trabajo)
const CASOS = {
  pocna:      { img: '/web-pocna.jpg', tag: 'Hotel · Tulum', title: 'Hotel Pocna', desc: 'Diseño y desarrollo web del hotel.' },
  solcaribe:  { img: '/web-solcaribe.jpg', tag: 'Cabañas y restaurante', title: 'Sol Caribe', desc: 'Diseño y desarrollo web.' },
  yemaya:     { img: '/web-yemaya.jpg', tag: 'Hotel · Little Corn Island', title: 'Yemaya Reefs', desc: 'Diseño y desarrollo web del hotel.' },
  gahnos:     { img: '/web-gahnos.jpg', tag: 'Transporte de carga · Nuevo León', title: 'Gahnos', desc: 'Diseño y desarrollo web.' },
  cabal:      { img: '/web-cabal.jpg', tag: 'Desarrollo juvenil · Monterrey', title: 'Centro Cabal', desc: 'Diseño y desarrollo web.' },
  pacific:    { img: '/trabajo-pacific.png',     tag: 'Distribuidora · BC',     title: 'Pacific Best Berry', desc: 'Página web responsive para distribuidora en Ensenada.' },
  yucannabis: { img: '/trabajo-yucannabis.jpg',  tag: 'CBD · Tulum',            title: 'Yucannabis',         desc: 'Branding completo para marca de CBD en Quintana Roo.' },
  italdo:     { img: '/trabajo-italdo-social-media.jpg', tag: 'Pastelería · Tulum', title: 'Italdo Pastelería', desc: 'Manejo de redes sociales y consultoría de marketing digital.' },
  ilaria:     { img: '/trabajo-ilaria.jpg',      tag: 'Wellness · Tulum',       title: 'Ilaria Lisi',        desc: 'Identidad de marca con paleta natural y trazos suaves.' },
}

const FAQ_PROMO = {
  q: '¿Hasta cuándo aplica el 25% de descuento?',
  a: `Contratando antes del ${PROMO.hastaTexto}. En proyectos de pago único es 25% sobre el precio total (en páginas web aplica a Satélite, Nebula y Cosmos); en planes mensuales de campañas y SEO, 25% durante los primeros 3 meses; en redes sociales, el primer mes.`,
}
const FAQ_TIEMPO = { q: '¿En cuánto tiempo me responden?', a: 'En menos de 24 horas. Por WhatsApp normalmente mucho antes.' }
const FAQ_LLAMADA = { q: '¿La llamada de diagnóstico tiene costo?', a: 'No. Es una llamada sin costo ni compromiso para entender tu negocio y decirte qué te conviene. Si no somos la mejor opción para ti, te lo decimos.' }

// ── Landings ────────────────────────────────────────────────────────
export const LANDINGS = {
  'paginas-web': {
    foto: '/lp-paginas-web.jpg',
    servicio: 'Páginas web', kind: 'web', tag: 'lp-paginas-web-2026',
    titulo: 'Páginas web para negocios — Nebula Estudio',
    eyebrow: 'Diseño y desarrollo web',
    h1: ['Una página web que se ve increíble ', 'y te trae clientes', '.'],
    sub: 'Sitios rápidos, adaptados a celular y con SEO base para que tu negocio aparezca en Google y te escriban por WhatsApp. Hosting del primer año incluido.',
    desde: { precio: '$7,900', periodo: 'pago único' },
    sinPromo: ['Órbita'], // paquete de entrada: conserva su precio
    dolores: [
      { t: 'Tus clientes te buscan en línea', d: 'Hoy casi todos buscan antes de comprar. Una página actualizada y clara ayuda a que te elijan a ti.' },
      { t: 'Tienes sitio, pero quieres más mensajes', d: 'Muchas veces solo falta un camino claro para que te escriban por WhatsApp o te dejen sus datos.' },
      { t: 'Hacer cambios se volvió complicado', d: 'Si actualizar algo tarda semanas, te dejamos todo en orden, documentado y fácil de mantener.' },
    ],
    planes: 'web',
    casos: ['pocna', 'solcaribe', 'yemaya', 'gahnos', 'cabal', 'pacific'],
    testimonios: ['cesar', 'daniel', 'karen'],
    opciones: ['Órbita — Landing Express', 'Satélite — Sitio Profesional', 'Nebula — Sitio Completo', 'Cosmos — Tienda en línea', 'No sé, ayúdenme a elegir'],
    waMsg: 'Hola Nebula, vi su promo de páginas web y quiero cotizar mi sitio.',
    faq: [
      { q: '¿A qué paquetes aplica el 25% de descuento?', a: `A Satélite, Nebula y Cosmos, contratando antes del ${PROMO.hastaTexto}. Órbita ya es nuestro paquete de entrada y conserva su precio de $3,499.` },
      { q: '¿Cuánto tarda mi sitio?', a: 'Órbita en 7 días hábiles, Satélite en 15, Nebula en 21 y Cosmos en 30, a partir de que tenemos tu información.' },
      { q: '¿El hosting está incluido?', a: 'Sí, todos los paquetes incluyen el hosting del primer año.' },
      { q: '¿Ustedes hacen las fotos y los textos?', a: 'Los paquetes no incluyen toma ni edición de fotografías, y los textos los proporciona el cliente. Si necesitas apoyo con eso, lo cotizamos aparte.' },
      { q: '¿Los precios incluyen IVA?', a: 'No, los precios son más IVA.' },
      FAQ_TIEMPO,
    ],
  },

  'google-ads': {
    foto: '/lp-google-ads.jpg',
    servicio: 'Google Ads & Meta', kind: 'performance', tag: 'lp-google-ads-2026',
    titulo: 'Campañas de Google Ads y Meta Ads — Nebula Estudio',
    eyebrow: 'Campañas Google Ads & Meta',
    h1: ['Aparece justo cuando tus clientes ', 'te están buscando', '.'],
    sub: 'Configuramos, diseñamos y optimizamos tus campañas en Google y Meta cada semana, con reporte mensual de clics, conversiones y costo. Publicidad que se invierte, no que se gasta.',
    desde: { precio: '$2,800', periodo: 'al mes' },
    dolores: [
      { t: 'Quieres saber qué te regresa cada peso', d: 'Te mostramos cuántos clientes trae cada campaña, con números claros cada mes.' },
      { t: 'Ya promocionas y quieres mejores resultados', d: 'Con buena segmentación, palabras clave bien elegidas y anuncios cuidados, tu inversión llega a quien sí te va a comprar.' },
      { t: 'No tienes tiempo de estar optimizando', d: 'Las campañas se cuidan cada semana. Nosotros lo hacemos y tú ves el resultado en el reporte.' },
    ],
    planes: 'campanas',
    testimonios: ['daniel', 'alex', 'cesar'],
    opciones: ['Meta Ads', 'Google Ads', 'Full Traffic (Google + Meta)', 'No sé, ayúdenme a elegir'],
    waMsg: 'Hola Nebula, vi su promo de campañas en Google/Meta y quiero más información.',
    faq: [
      FAQ_PROMO,
      { q: '¿La inversión en anuncios está incluida?', a: 'No. El precio es por la gestión; la inversión en pauta se paga directo a Google o Meta y la definimos contigo según tus objetivos.' },
      { q: '¿Qué me reportan?', a: 'Cada mes recibes un reporte con resultados y análisis. En Google Ads incluye clics, conversiones, CTR y retorno.' },
      { q: '¿Diseñan los anuncios?', a: 'Sí. En Meta Ads el diseño gráfico de la publicidad está incluido.' },
      { q: '¿Los precios incluyen IVA?', a: 'No, los precios son más IVA.' },
      FAQ_TIEMPO,
    ],
  },

  'redes-sociales': {
    mesesPromo: 1,
    foto: '/lp-redes-sociales.jpg',
    servicio: 'Redes sociales', kind: 'social', tag: 'lp-redes-sociales-2026',
    titulo: 'Manejo de redes sociales para negocios — Nebula Estudio',
    eyebrow: 'Social media',
    h1: ['Redes sociales con estrategia ', 'y constancia', '.'],
    sub: 'Diseño profesional, copywriting y reels pensados para tu cliente, publicados con calendario. Tú te enfocas en tu negocio; tus redes se mueven solas.',
    desde: { precio: '$3,500', periodo: 'al mes' },
    dolores: [
      { t: 'Te cuesta publicar con constancia', d: 'Entre atender tu negocio y todo lo demás, es normal. Nosotros llevamos el calendario por ti.' },
      { t: 'Quieres que tu marca luzca en redes', d: 'Muchos clientes te conocen primero por lo que ven ahí. Cuidamos cada publicación.' },
      { t: 'Tienes seguidores y quieres más mensajes', d: 'Creamos contenido pensado para que te escriban, no solo para que le den like.' },
    ],
    planes: 'social',
    casos: ['italdo'],
    testimonios: ['alex', 'daniel', 'karen'],
    opciones: ['Social Media Básico', 'Social Media Video', 'Social Media + Campañas Meta', 'No sé, ayúdenme a elegir'],
    waMsg: 'Hola Nebula, vi su promo de redes sociales y quiero más información.',
    faq: [
      FAQ_PROMO,
      { q: '¿Ustedes toman las fotos y videos?', a: 'Los paquetes no incluyen toma de fotografía ni producción de video; tú nos proporcionas el material y nosotros lo diseñamos y editamos.' },
      { q: '¿La publicidad pagada está incluida?', a: 'La gestión de campañas en Meta viene en el paquete Social Media + Campañas Meta. La inversión en pauta no está incluida en ningún paquete.' },
      { q: '¿Los precios incluyen IVA?', a: 'No, los precios son más IVA.' },
      FAQ_TIEMPO,
    ],
  },

  branding: {
    foto: '/lp-branding.jpg',
    servicio: 'Branding & Diseño', kind: 'branding', tag: 'lp-branding-2026',
    titulo: 'Branding e identidad de marca — Nebula Estudio',
    eyebrow: 'Branding & diseño',
    h1: ['Una marca que se reconoce ', 'y se recuerda', '.'],
    sub: 'Identidad visual completa, tono de comunicación y manual de marca. Sistemas que funcionan igual en tu local, tu web y tus redes, no logos sueltos.',
    incluye: ['Posicionamiento y narrativa de marca', 'Identidad visual completa', 'Sistema verbal y tono de comunicación', 'Manual de marca + materiales', 'Aplicación en materiales clave'],
    cotizaPeriodo: 'pago único',
    dolores: [
      { t: 'Tu negocio creció y tu imagen se quedó atrás', d: 'Una marca a la altura de lo que ofreces hace que te valoren por algo más que el precio.' },
      { t: 'Cada material se ve distinto', d: 'Cuando redes, tarjetas, sitio y local hablan el mismo idioma, tu cliente te reconoce al instante.' },
      { t: 'Vas a abrir o a relanzar', d: 'Es el mejor momento para hacerlo bien desde el principio.' },
    ],
    casos: ['yucannabis', 'ilaria'],
    testimonios: ['karen', 'cesar', 'daniel'],
    opciones: ['Marca nueva', 'Rediseño de marca', 'Solo logotipo', 'No sé, ayúdenme a elegir'],
    waMsg: 'Hola Nebula, vi su promo de branding y quiero cotizar.',
    faq: [FAQ_PROMO, { q: '¿Cuánto cuesta?', a: 'Depende del alcance: no es lo mismo un logotipo que un sistema de marca completo. En la llamada lo definimos y te mandamos una cotización cerrada.' }, FAQ_LLAMADA, FAQ_TIEMPO],
  },

  seo: {
    foto: '/lp-seo.jpg',
    servicio: 'SEO & Contenido', kind: 'seo', tag: 'lp-seo-2026',
    titulo: 'Posicionamiento SEO para negocios — Nebula Estudio',
    eyebrow: 'SEO & contenido',
    h1: ['Clientes desde Google ', 'sin pagar por cada clic', '.'],
    sub: 'Auditoría técnica, estrategia de contenido y mejoras continuas a tu sitio para que subas en Google con las búsquedas que de verdad traen clientes.',
    incluye: ['Auditoría técnica del sitio', 'Estrategia de contenido', 'Producción editorial mensual', 'Mejoras continuas al sitio', 'Reporte de tráfico y posiciones'],
    cotizaPeriodo: 'mensual',
    dolores: [
      { t: 'Quieres aparecer cuando te buscan', d: 'Cuando alguien busca lo que vendes en tu ciudad, los primeros resultados suelen llevarse la llamada.' },
      { t: 'Quieres depender menos de los anuncios', d: 'El SEO construye visitas que se mantienen aunque pauses la publicidad.' },
      { t: 'Tu sitio puede rendir más', d: 'Velocidad, ajustes técnicos y buen contenido ayudan a que Google te muestre más seguido.' },
    ],
    testimonios: ['daniel', 'cesar', 'alex'],
    opciones: ['SEO para mi sitio actual', 'Sitio nuevo + SEO', 'Solo auditoría', 'No sé, ayúdenme a elegir'],
    waMsg: 'Hola Nebula, vi su promo de SEO y quiero más información.',
    faq: [FAQ_PROMO, { q: '¿Cuánto cuesta?', a: 'Depende del tamaño de tu sitio y tu competencia. Primero revisamos tu caso y te mandamos una cotización cerrada.' }, { q: '¿En cuánto tiempo veo resultados?', a: 'El SEO es una inversión de mediano plazo. En la llamada te explicamos qué esperar según tu sitio y tu competencia, sin promesas infladas.' }, FAQ_LLAMADA, FAQ_TIEMPO],
  },

  diagnostico: {
    foto: '/lp-diagnostico.jpg',
    servicio: 'Diagnóstico 360°', kind: 'strategy', tag: 'lp-diagnostico-2026',
    titulo: 'Diagnóstico de marketing digital — Nebula Estudio',
    eyebrow: 'Diagnóstico 360°',
    h1: ['Antes de gastar más en marketing, ', 'entiende qué está fallando', '.'],
    sub: 'Entramos a tu negocio para revisar marca, canales, resultados y competencia. Te entregamos hallazgos claros y prioridades: qué hacer primero, qué después y qué dejar de hacer.',
    incluye: ['Auditoría de marca, canales y herramientas', 'Revisión de costos, resultados y origen de clientes', 'Entrevistas con clientes y equipo', 'Análisis de la competencia', 'Documento con hallazgos y priorización'],
    cotizaPeriodo: 'pago único',
    dolores: [
      { t: 'Haces mucho y quieres saber qué funciona', d: 'Redes, anuncios, página… te ayudamos a ver cuál te está trayendo clientes.' },
      { t: 'Quieres claridad antes de invertir', d: 'Un diagnóstico honesto te da una base sólida antes de cualquier propuesta.' },
      { t: 'Quieres crecer con prioridades claras', d: 'Saber qué hacer primero te ahorra tiempo y dinero.' },
    ],
    testimonios: ['daniel', 'cesar', 'karen'],
    opciones: ['Diagnóstico 360° completo', 'Primero la llamada gratis', 'No sé, ayúdenme a elegir'],
    waMsg: 'Hola Nebula, quiero agendar mi llamada de diagnóstico.',
    faq: [FAQ_PROMO, FAQ_LLAMADA, { q: '¿Qué diferencia hay entre la llamada y el Diagnóstico 360°?', a: 'La llamada es gratis y sirve para entender tu situación. El Diagnóstico 360° es un servicio a fondo dentro de tu negocio, con un documento de hallazgos y prioridades.' }, FAQ_TIEMPO],
  },

  'marketing-digital': {
    foto: '/lp-marketing-digital.jpg',
    servicio: 'Marketing digital', kind: 'performance', tag: 'lp-marketing-digital-2026',
    titulo: 'Agencia de marketing digital — Nebula Estudio',
    eyebrow: 'Marketing digital',
    h1: ['Todo tu marketing digital ', 'con un solo equipo', '.'],
    sub: 'Página web, redes, campañas, SEO y marca trabajando juntos con una sola estrategia. Sin cinco proveedores distintos ni mensajes que no se hablan.',
    desde: { precio: '$2,800', periodo: '' },
    dolores: [
      { t: 'Trabajas con varios proveedores', d: 'Web, redes, anuncios… cuando cada quien va por su lado, cuesta ver el panorama completo.' },
      { t: 'Quieres saber qué está funcionando', d: 'Con una sola estrategia y medición central, decides con datos.' },
      { t: 'Quieres cerrar el año con más clientes', d: 'Diciembre y enero se planean desde hoy.' },
    ],
    servicios: true,
    casos: ['italdo', 'pocna', 'yucannabis'],
    testimonios: ['daniel', 'cesar', 'alex', 'karen'],
    opciones: ['Página web', 'Redes sociales', 'Google Ads / Meta', 'Branding', 'SEO', 'Varios / no sé'],
    waMsg: 'Hola Nebula, vi su promo de fin de año y quiero información de sus servicios.',
    faq: [FAQ_PROMO, FAQ_LLAMADA, { q: '¿Tengo que contratar todo junto?', a: 'No. Puedes empezar con un solo servicio y sumar otros cuando tenga sentido. En la llamada te decimos por dónde conviene empezar.' }, FAQ_TIEMPO],
  },
}

// Tarjetas para la landing general
export const SERVICIOS_GRID = [
  { slug: 'paginas-web', kind: 'web', title: 'Páginas web', desc: 'Sitios rápidos que posicionan y convierten. Desde $3,499.' },
  { slug: 'google-ads', kind: 'performance', title: 'Google Ads & Meta', desc: 'Campañas con optimización semanal y reporte mensual. Desde $2,800/mes.' },
  { slug: 'redes-sociales', kind: 'social', title: 'Redes sociales', desc: 'Contenido con estrategia, diseño y reels. Desde $3,500/mes.' },
  { slug: 'branding', kind: 'branding', title: 'Branding & Diseño', desc: 'Identidad visual, tono y manual de marca. Cotización a la medida.' },
  { slug: 'seo', kind: 'seo', title: 'SEO & Contenido', desc: 'Clientes desde Google sin pagar por clic. Cotización a la medida.' },
  { slug: 'diagnostico', kind: 'strategy', title: 'Diagnóstico 360°', desc: 'Auditoría completa y prioridades claras. Cotización a la medida.' },
]

export const getCaso = (k) => CASOS[k]

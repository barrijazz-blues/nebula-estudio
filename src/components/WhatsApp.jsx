export default function WhatsApp() {
  return (
    <a
      href="https://wa.me/528135390665"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 999,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform .2s ease, box-shadow .2s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.1)"
        e.currentTarget.style.boxShadow = "0 6px 28px rgba(37,211,102,0.55)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)"
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)"
      }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.51L4 29l7.697-1.802A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.406 16.712c-.273.768-1.59 1.47-2.188 1.56-.56.084-1.27.12-2.05-.13-.473-.15-1.08-.35-1.857-.686-3.27-1.41-5.407-4.72-5.57-4.94-.163-.22-1.33-1.77-1.33-3.376 0-1.605.84-2.394 1.14-2.72.3-.327.654-.41.872-.41.218 0 .436.002.627.01.2.01.47-.076.736.562.273.653.927 2.258 1.008 2.42.082.163.136.354.027.572-.108.218-.163.354-.326.545-.163.19-.343.425-.49.57-.163.163-.333.34-.143.667.19.327.845 1.393 1.814 2.256 1.245 1.11 2.295 1.453 2.622 1.616.327.163.517.136.708-.082.19-.218.817-.954 1.035-1.28.217-.327.435-.272.735-.163.3.108 1.905.898 2.232 1.062.327.163.545.245.626.38.082.136.082.79-.19 1.558z"/>
      </svg>
    </a>
  )
}

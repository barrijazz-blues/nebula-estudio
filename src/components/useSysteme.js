// Utilidad para enviar contactos a systeme.io
// Usar en todos los formularios del sitio

export async function sendToSysteme({ email, firstName = "", tags = [] }) {
  const apiKey = import.meta.env.VITE_SYSTEME_API_KEY
  try {
    const res = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        tags,
        fields: [],
      }),
    })
    return res.ok || res.status === 409
  } catch {
    return false
  }
}

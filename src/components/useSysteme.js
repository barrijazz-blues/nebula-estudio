export async function sendToSysteme({ email, firstName = "", tags = [], empresa = "", telefono = "", proyecto = "", budget = "", servicios = [], fuente = "" }) {
  try {
    const url = import.meta.env.DEV
      ? 'https://api.systeme.io/api/contacts'
      : 'https://nebulaestudio.com.mx/systeme-proxy.php'

    const headers = { 'Content-Type': 'application/json' }
    if (import.meta.env.DEV) {
      headers['X-API-Key'] = import.meta.env.VITE_SYSTEME_API_KEY
    }

    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, firstName, tags, empresa, telefono, proyecto, budget, servicios, fuente }),
    })
    return res.ok || res.status === 409
  } catch {
    return false
  }
}

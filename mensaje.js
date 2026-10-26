export const NUMERO = '5491112345678'

// Arma el texto de la consulta. Devuelve '' si falta el nombre o el mensaje.
export function armarMensaje({ nombre, tipo, mensaje }) {
  nombre = (nombre || '').trim()
  mensaje = (mensaje || '').trim()
  if (!nombre || !mensaje) return ''
  const tema = tipo ? ` por ${tipo.toLowerCase()}` : ''
  return `Hola, soy ${nombre} y quisiera consultar${tema}.\n\n${mensaje}`
}

export function linkWhatsapp(numero, texto) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
}

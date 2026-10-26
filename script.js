import { NUMERO, armarMensaje, linkWhatsapp } from './mensaje.js'

const form = document.getElementById('form-contacto')
const aviso = document.getElementById('aviso')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const datos = Object.fromEntries(new FormData(form))
  const texto = armarMensaje(datos)
  if (!texto) {
    aviso.textContent = 'Completá tu nombre y el mensaje para poder enviar.'
    return
  }
  aviso.textContent = ''
  window.open(linkWhatsapp(NUMERO, texto), '_blank', 'noopener')
})

document.getElementById('flotante').href = linkWhatsapp(NUMERO, 'Hola, quisiera hacer una consulta.')

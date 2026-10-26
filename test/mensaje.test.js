import test from 'node:test'
import assert from 'node:assert/strict'
import { armarMensaje, linkWhatsapp } from '../mensaje.js'

test('el mensaje incluye nombre, tipo de consulta y texto', () => {
  const m = armarMensaje({ nombre: ' Laura ', tipo: 'Monotributo', mensaje: 'Me pasé de categoría.' })
  assert.match(m, /soy Laura/)
  assert.match(m, /por monotributo/)
  assert.match(m, /Me pasé de categoría\./)
})

test('sin nombre o sin mensaje devuelve vacío', () => {
  assert.equal(armarMensaje({ nombre: '', tipo: 'Sueldos', mensaje: 'hola' }), '')
  assert.equal(armarMensaje({ nombre: 'Ana', tipo: '', mensaje: '   ' }), '')
})

test('sin tipo de consulta no queda "por" suelto', () => {
  assert.doesNotMatch(armarMensaje({ nombre: 'Ana', tipo: '', mensaje: 'hola' }), / por /)
})

test('el link de WhatsApp codifica el texto', () => {
  assert.equal(linkWhatsapp('549', 'a b\nc'), 'https://wa.me/549?text=a%20b%0Ac')
})

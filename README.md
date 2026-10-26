# Estudio Fernández & Asociados

Landing de un estudio contable ficticio de Córdoba. HTML + CSS + JavaScript simples, sin React y sin build. El formulario de contacto arma el mensaje y abre WhatsApp (`wa.me`).

Sitio de ejemplo hecho por Tomás Cataldo. Los datos y textos son inventados y no son asesoramiento contable.

## Cómo verlo

Los módulos ES no cargan desde `file://`, hay que servir la carpeta:

```
npm start        # http://localhost:5183
```

## Pruebas

```
npm test         # node --test, prueba la función que arma el mensaje
```

## Cómo adaptarlo

- Nombre, teléfono, dirección, horarios, servicios y preguntas: `index.html`.
- Número de WhatsApp y texto del mensaje: `mensaje.js` (`NUMERO` y `armarMensaje`).
- Colores y tipografías: variables al principio de `styles.css`.

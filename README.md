# Ysha Brow Studio

Propuesta de sitio editorial solicitada por el usuario. HTML, CSS y JavaScript sin compilación; archivos publicados en `dist/`.

## Reservas

El formulario prepara un mensaje local que la visitante puede copiar y enviar a `@yshabrowstudio` por Instagram, el canal elegido por el usuario. No hay almacenamiento de respuestas ni envío automático. No se ha proporcionado un tarifario ni cobertura concreta; se confirman por conversación.

## Fotografías

- Retratos y publicación antes/después: capturas aportadas por el usuario; atribuidas a Ysha Brow Studio. Las vistas de antes/después son recortes mediante CSS de la misma publicación, con sus ángulos originales.
- Referencia de Brow Code, mediante enlace a su galería: https://browcode.co/products/brow-lamination-kit .
- Referencia de HD Brows Australia, mediante enlace a su galería: https://hdbrows.com.au/pages/browsculpt-lamination-training .

Las referencias externas están marcadas como inspiración y no se presentan como trabajos de Ysha, recomendaciones clínicas ni garantía de resultado.

## Desarrollo

Servir `dist/` con cualquier servidor estático. `app.js` no depende de servicios externos. Las tipografías se solicitan a Google Fonts y tienen alternativas locales.

## Publicación independiente

El flujo `.github/workflows/pages.yml` publica únicamente `dist/` en GitHub Pages. En Settings → Pages, seleccionar GitHub Actions como fuente. No utiliza el repositorio, dominio, variables, secretos ni infraestructura de Kozotattoo. Un cambio en este repositorio solo publica este sitio.

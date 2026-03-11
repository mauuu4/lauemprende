/**
 * Script para rastrear clicks en enlaces externos.
 * Detecta elementos con [data-track-click] y envía un POST al endpoint PHP.
 * Usa navigator.sendBeacon para no bloquear la navegación.
 */

/** Busca un título descriptivo para el enlace subiendo por el DOM */
function obtenerTitulo(enlace: HTMLAnchorElement): string {
  // 1. Atributo explícito en el propio enlace
  const atributo = enlace.getAttribute('data-track-title')
  if (atributo) return atributo

  // 2. Buscar el heading o título más cercano subiendo por el DOM
  let nodo: HTMLElement | null = enlace.parentElement
  const limite = 8 // máximo de niveles a subir
  for (let i = 0; i < limite && nodo; i++) {
    // Buscar heading dentro del mismo contenedor
    const heading = nodo.querySelector('h1, h2, h3, h4, h5, h6')
    if (heading?.textContent?.trim()) return heading.textContent.trim()

    // Buscar imagen con alt (ej: en carousels)
    const img = nodo.querySelector('img[alt]')
    if (img?.getAttribute('alt')?.trim()) return img.getAttribute('alt')!.trim()

    nodo = nodo.parentElement
  }

  // 3. Fallback: texto visible del enlace
  return enlace.textContent?.trim() || ''
}

function iniciarRastreoClicks() {
  document.addEventListener('click', (e) => {
    const enlace = (e.target as HTMLElement).closest(
      'a[data-track-click]'
    ) as HTMLAnchorElement | null

    if (!enlace) return

    const url = enlace.href
    const titulo = obtenerTitulo(enlace)
    const pagina = window.location.pathname

    const datos = JSON.stringify({ url, titulo, pagina })

    // Usar sendBeacon para enviar sin bloquear la navegación
    if (navigator.sendBeacon) {
      const blob = new Blob([datos], { type: 'application/json' })
      navigator.sendBeacon('/api/track-click.php', blob)
    } else {
      // Fallback para navegadores sin sendBeacon
      fetch('/api/track-click.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: datos,
        keepalive: true,
      }).catch(() => {})
    }
  })
}

// Inicializar
iniciarRastreoClicks()

// Soporte para View Transitions de Astro
document.addEventListener('astro:page-load', iniciarRastreoClicks)

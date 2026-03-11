/**
 * Script para rastrear clicks en enlaces externos.
 * Detecta elementos con [data-track-click] y envia un POST al endpoint PHP.
 * Usa navigator.sendBeacon para no bloquear la navegacion.
 */

function initClickTracking() {
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest(
      'a[data-track-click]'
    ) as HTMLAnchorElement | null

    if (!link) return

    const url = link.href
    const label = link.textContent?.trim() || ''
    const page = window.location.pathname

    const payload = JSON.stringify({ url, label, page })

    // Usar sendBeacon para enviar sin bloquear la navegacion
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' })
      navigator.sendBeacon('/api/track-click.php', blob)
    } else {
      // Fallback para navegadores sin sendBeacon
      fetch('/api/track-click.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {})
    }
  })
}

// Inicializar
initClickTracking()

// Soporte para View Transitions de Astro
document.addEventListener('astro:page-load', initClickTracking)

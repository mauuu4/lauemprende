/**
 * Animación de contadores con IntersectionObserver
 */

const EASE_OUT_EXPO = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

function animate(element: HTMLElement, targetValue?: number) {
  const end = targetValue ?? parseInt(element.dataset.end || '0')
  const duration = parseInt(element.dataset.duration || '2000')
  const startTime = performance.now()

  function update(now: number) {
    const progress = Math.min((now - startTime) / duration, 1)
    element.textContent = Math.floor(
      end * EASE_OUT_EXPO(progress)
    ).toLocaleString('es-ES')
    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

function initCounters() {
  const staticCounters = document.querySelectorAll<HTMLElement>(
    '[data-end]:not([data-dynamic])'
  )
  const dynamicCounters = document.querySelectorAll<HTMLElement>(
    '[data-dynamic] [data-end]'
  )

  // Observer para contadores estáticos
  if (staticCounters.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    staticCounters.forEach((counter) => observer.observe(counter))
  }

  // Cargar datos para contadores dinámicos
  if (dynamicCounters.length > 0) {
    fetch('/api/stats.php')
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) return

        const statsMap: Record<string, number> = {
          'counter-last': data.lastMonth.visits,
          'counter-current': data.currentMonth.visits,
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const el = entry.target as HTMLElement
                const containerId = el.closest('[data-dynamic]')?.id
                const visits = containerId ? statsMap[containerId] : 0

                el.dataset.end = visits.toString()
                animate(el, visits)
                observer.unobserve(el)
              }
            })
          },
          { threshold: 0.5 }
        )

        dynamicCounters.forEach((counter) => observer.observe(counter))
      })
      .catch(() => {})
  }
}

// Inicializar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters)
} else {
  initCounters()
}

document.addEventListener('astro:page-load', initCounters)

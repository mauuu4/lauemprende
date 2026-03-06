/**
 * Formatea una cadena de fecha ISO al formato largo en español (Ecuador).
 * @example formatDate('2025-03-01') → 'jueves, 1 de marzo de 2025'
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('es-EC', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

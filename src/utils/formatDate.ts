/**
 * Formatea una cadena de fecha ISO al formato largo en español (Ecuador).
 * Agrega 'T00:00:00' para evitar que la fecha se interprete como UTC
 * y muestre el día anterior en zonas horarias negativas (ej. Ecuador UTC-5).
 * @example formatDate('2025-03-01') → '1 de marzo de 2025'
 */
export function formatDate(dateStr: string): string {
  const normalizedDate = dateStr.includes('T') ? dateStr : `${dateStr}T00:00:00`
  return new Date(normalizedDate).toLocaleDateString('es-EC', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

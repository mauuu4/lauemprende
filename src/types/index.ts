import type { ImageMetadata } from 'astro'

/**
 * Representa un enlace en un comunicado o curso
 */
export interface Enlace {
  texto: string
  url: string
  tipo: 'primary' | 'secondary' | 'link'
}

/**
 * Interfaz para elementos que se muestran en el carousel (cursos, comunicados, etc.)
 */
export interface ItemCarousel {
  id: number
  titulo: string
  imagen: ImageMetadata
  enlaces: Enlace[]
  activo: boolean
  fecha?: string
  descripcion?: string
}

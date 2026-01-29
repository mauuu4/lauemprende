import type { ImageMetadata } from 'astro'

export interface CategoriaGaleria {
  nombre: string
  slug: string
}

// Configuración de categorías de la galería
export const categoriasConfig: CategoriaGaleria[] = [
  { nombre: 'Auxiliares de Panadería - HIAS', slug: 'auxiliares_panaderia_hias' },
  { nombre: 'Curso de Enfermería', slug: 'curso_enfermeria' },
  { nombre: 'Curso de Panadería', slug: 'curso_panaderia' },
  { nombre: 'Desarrollo Organizacional', slug: 'desarrollo_organizacion' },
  { nombre: 'Propedéutico', slug: 'propedeutico' },
  { nombre: 'VI Congreso REDU', slug: 'vi_congreso_redu' },
]

/**
 * Carga dinámicamente las imágenes de una carpeta de galería
 */
export function loadGalleryImages() {
  const allImages = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/images/galeria/**/*.{jpg,jpeg,png,webp}',
    { eager: true }
  )

  return categoriasConfig.map((categoria) => {
    const imagenes = Object.entries(allImages)
      .filter(([path]) => path.includes(`/${categoria.slug}/`))
      .map(([, module]) => module.default)
      .sort((a, b) => a.src.localeCompare(b.src))

    return {
      nombre: categoria.nombre,
      imagenes,
    }
  })
}

/**
 * Calcula el tamaño de cada imagen en el grid
 */
export function getImageSize(index: number, total: number): string {
  if (total === 2) return ''
  if (total === 3) {
    if (index === 0) return 'col-span-2'
    return ''
  }
  if (index === 0) return 'col-span-2 row-span-2'
  if (total >= 6 && index === 3) return 'col-span-2'
  return ''
}

/**
 * Determina si una imagen debe cargarse con eager loading
 */
export function shouldLoadEager(catIndex: number, imgIndex: number): boolean {
  if (catIndex === 0) return true
  if (catIndex === 1 && imgIndex < 3) return true
  return false
}

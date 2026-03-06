import type { ImageMetadata } from 'astro'

// ---------------------------------------------------------------------------
// Navegación
// ---------------------------------------------------------------------------

/** Elemento hijo del menú de navegación */
export interface NavChild {
  href: string
  label: string
}

/** Elemento del menú de navegación principal (con o sin submenú) */
export interface NavLink {
  href?: string
  label: string
  children?: NavChild[]
}

// ---------------------------------------------------------------------------
// Módulos de acceso rápido (Hero)
// ---------------------------------------------------------------------------

/** Identificador de icono disponible en src/components/icons/modules/ */
export type ModuloIcon = 'Edit' | 'Teacher' | 'Student' | 'Briefcase' | 'Chart'

/** Módulo de acceso rápido mostrado en el Hero */
export interface Modulo {
  title: string
  subtitle: string
  href: string
  icon: ModuloIcon
}

// ---------------------------------------------------------------------------

/**
 * Representa un enlace en un comunicado o curso
 */
export interface Enlace {
  texto: string
  url: string
  tipo: 'primary' | 'secondary' | 'link'
}

/**
 * Interfaz para elementos que se muestran en el carousel (cursos, invitaciones, etc.)
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

/** Elemento de normativa legal */
export interface NormativaItem {
  titulo: string
  url: string
}

/** Categoría de legislación (Normativa Interna, Normativa General) */
export interface CategoriaLegislacion {
  nombre: string
  descripcion?: string
  items: NormativaItem[]
}

/** Informe de rendición de cuentas */
export interface InformeRendicion {
  id: number
  titulo: string
  descripcion?: string
  enlaces: Enlace[]
  imagen?: ImageMetadata
}

/** Año de rendición de cuentas con sus informes */
export interface AnioRendicion {
  anio: number
  informes: InformeRendicion[]
}

/** Noticia con imagen/video y descripción */
export interface Noticia {
  id: number
  titulo: string
  descripcion: string
  imagen?: ImageMetadata | string
  video?: string
  fecha: string
}

/** Anuncio para el grid estático */
export interface Anuncio {
  id: number
  titulo: string
  descripcion?: string
  imagen?: ImageMetadata
  enlaces: Enlace[]
  fecha: string
  activo: boolean
}

/** Información de contacto general de la institución */
export interface InfoContacto {
  direccion: string
  telefono: string
  telefonoExtension: string
  telefonoHref: string
  emailPrincipal: string
  mapsUrl: string
  redesSociales: {
    facebook: string
    youtube: string
    twitter: string
  }
}

/** Contacto de correo institucional por área */
export interface AreaContacto {
  area: string
  descripcion: string
  email: string
}

/** Persona del directorio institucional */
export interface PersonalContacto {
  cargo: string
  nombre: string
  email: string
}

/** Departamento con su personal */
export interface Departamento {
  departamento: string
  personal: PersonalContacto[]
}

/** Categoría de la galería de imágenes */
export interface CategoriaGaleria {
  nombre: string
  slug: string
}

/** Objetivo estratégico de LA UEMPRENDE EP */
export interface Objetivo {
  id: number
  texto: string
  /** Clases de Tailwind para posicionamiento en el grid de objetivos */
  gridClasses: string
}

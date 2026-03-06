import type { NavChild, NavLink } from '@/types'

/** Links de navegación principal — usados por Header.astro */
export const navLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  {
    label: 'Institución',
    children: [
      { href: '/quienes-somos', label: 'Quiénes somos' },
      { href: '/mision-vision-objetivos', label: 'Misión, Visión y Objetivos' },
      {
        href: '/estructura-organizacional',
        label: 'Estructura Organizacional',
      },
      { href: '/galeria', label: 'Galería' },
    ],
  },
  {
    label: 'Transparencia',
    children: [
      { href: '/transparencia', label: 'LOTAIP' },
      { href: '/legislacion', label: 'Legislación' },
      { href: '/rendicion-de-cuentas', label: 'Rendición de Cuentas' },
    ],
  },
  { href: '/servicios', label: 'Servicios' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/anuncios', label: 'Anuncios' },
  { href: '/contactos', label: 'Contactos' },
]

/** Links del pie de página (sección "Información legal") — usados por Footer.astro */
export const footerLinks: NavChild[] = [
  { href: '/transparencia', label: 'Portal de Transparencia' },
  { href: '/legislacion', label: 'Legislación' },
  { href: '/rendicion-de-cuentas', label: 'Rendición de Cuentas' },
  { href: '/contactos', label: 'Contactos' },
]

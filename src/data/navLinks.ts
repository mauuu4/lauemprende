import type { FooterLinkGroup, NavLink } from '@/types'

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
  { href: '/anuncios', label: 'Anuncios' },
  { href: '/contactos', label: 'Contactos' },
]

/** Grupos de links del pie de página — usados por Footer.astro */
export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Institución',
    links: [
      { href: '/quienes-somos', label: 'Quiénes somos' },
      { href: '/servicios', label: 'Servicios' },
      { href: '/anuncios', label: 'Anuncios' },
      { href: '/contactos', label: 'Contactos' },
    ],
  },
  {
    title: 'Información legal',
    links: [
      { href: '/transparencia', label: 'LOTAIP' },
      { href: '/legislacion', label: 'Legislación' },
      { href: '/rendicion-de-cuentas', label: 'Rendición de Cuentas' },
    ],
  },
]

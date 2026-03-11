import type { Modulo } from '@/types'

/** Módulos de acceso rápido mostrados en el Hero — usados por Hero.astro */
export const modulos: Modulo[] = [
  {
    title: 'Inscripciones',
    subtitle: 'Cursos y Eventos',
    href: 'https://cloud.lauemprende.com/ords/f?p=236:31:::NO:31,6::',
    icon: 'Edit',
  },
  {
    title: 'Docentes',
    subtitle: 'Portafolio Académico',
    href: 'https://cloud.lauemprende.com/ords/f?p=213:LOGIN_DESKTOP::::::',
    icon: 'Teacher',
  },
  {
    title: 'Estudiantes',
    subtitle: 'Portafolio Inglés',
    href: 'https://cloud.lauemprende.com/ords/f?p=110:LOGIN::::::',
    icon: 'Student',
  },
  {
    title: 'Servicios UEP',
    subtitle: 'Portafolio Institucional',
    href: '/uploads/portafolio_UEmprende.pdf',
    icon: 'Briefcase',
  },
  {
    title: 'Resultados de inglés',
    subtitle: 'Exámenes de Ubicación',
    href: '/uploads/RESULTADOS PRUEBA UBICACION.pdf',
    icon: 'Chart',
  },
]

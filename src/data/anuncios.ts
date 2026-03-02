import type { Anuncio } from '@/types'

/** Anuncios institucionales — agregar nuevas entradas al inicio del arreglo */
export const anuncios: Anuncio[] = [
  {
    id: 1,
    titulo: 'Próximos cursos de capacitación continua',
    descripcion:
      'LA UEMPRENDE EP prepara una nueva oferta de cursos de capacitación para el próximo periodo. Mantente atento a nuestras publicaciones oficiales.',
    enlaces: [],
    fecha: '2025-03-01',
    activo: true,
  },
  {
    id: 2,
    titulo: 'Actualización de horarios de atención',
    descripcion:
      'A partir del próximo mes se actualizarán los horarios de atención al público en las oficinas de LA UEMPRENDE EP. Los nuevos horarios serán publicados oportunamente.',
    enlaces: [],
    fecha: '2025-02-20',
    activo: true,
  },
  {
    id: 3,
    titulo: 'Convocatoria para proveedores',
    descripcion:
      'LA UEMPRENDE EP invita a proveedores interesados a registrarse para futuras adquisiciones de bienes y servicios institucionales.',
    enlaces: [],
    fecha: '2025-02-10',
    activo: true,
  },
]

import type { Anuncio, Noticia } from '@/types'

// ---------------------------------------------------------------------------
// Noticias institucionales
// ---------------------------------------------------------------------------

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: 'LA UEMPRENDE EP fortalece su oferta académica',
    descripcion:
      'La Empresa Pública LA UEMPRENDE EP continúa ampliando su catálogo de cursos y certificaciones en colaboración con la Universidad Técnica del Norte, brindando nuevas oportunidades de formación continua para la comunidad.',
    fecha: '2025-03-01',
  },
  {
    id: 2,
    titulo: 'Nuevos convenios interinstitucionales',
    descripcion:
      'Se firmaron nuevos convenios de cooperación con instituciones públicas y privadas para impulsar proyectos de desarrollo regional y capacitación profesional.',
    fecha: '2025-02-15',
  },
  {
    id: 3,
    titulo: 'Escuela de Conducción: nuevas promociones',
    descripcion:
      'La Escuela de Conducción de LA UEMPRENDE EP abre inscripciones para nuevas promociones de conductores profesionales en diversas categorías.',
    fecha: '2025-02-01',
  },
]

// ---------------------------------------------------------------------------
// Anuncios institucionales
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Servicios institucionales
// ---------------------------------------------------------------------------

export const servicios: string[] = [
  'Asesoramiento empresarial y gestión.',
  'Capacitación y enseñanza.',
  'Organización y dirección de todo tipo de eventos.',
  'Administración y ejecución de proyectos obras, bienes y servicios en todas las áreas.',
  'Administración de programas de protección ambiental.',
  'Asesoramiento empresarial en materia de gestión.',
  'Servicio de Organización de ferias, muestra de exposiciones',
  'Servicios Profesionales, científicos y técnicos',
  'Investigación de mercado y encuestas de opinión pública',
  'Servicios relacionados con actividades turísticas',
]

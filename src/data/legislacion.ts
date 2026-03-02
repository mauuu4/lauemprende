import type { CategoriaLegislacion } from '@/types'

export const legislacion: CategoriaLegislacion[] = [
  {
    nombre: 'Normativa Interna',
    descripcion:
      'Marco normativo interno de la Empresa Pública LA UEMPRENDE EP',
    items: [
      { titulo: 'Estatuto de creación de LA UEMPRENDE EP', url: '#' },
      { titulo: 'Reglamento Interno de Trabajo', url: '#' },
      { titulo: 'Código de Ética', url: '#' },
      { titulo: 'Manual de Procesos y Procedimientos', url: '#' },
      { titulo: 'Reglamento de Contratación Pública', url: '#' },
      { titulo: 'Plan Estratégico Institucional', url: '#' },
      { titulo: 'Plan Operativo Anual', url: '#' },
      { titulo: 'Reglamento de Gestión del Talento Humano', url: '#' },
    ],
  },
  {
    nombre: 'Normativa General',
    descripcion:
      'Normativa general aplicable a las empresas públicas del Ecuador',
    items: [
      { titulo: 'Constitución de la República del Ecuador', url: '#' },
      { titulo: 'Ley Orgánica de Empresas Públicas (LOEP)', url: '#' },
      {
        titulo: 'Reglamento General a la Ley Orgánica de Empresas Públicas',
        url: '#',
      },
      {
        titulo:
          'Ley Orgánica de Transparencia y Acceso a la Información Pública (LOTAIP)',
        url: '#',
      },
      {
        titulo:
          'Ley Orgánica del Sistema Nacional de Contratación Pública (LOSNCP)',
        url: '#',
      },
      {
        titulo:
          'Reglamento General a la Ley Orgánica del Sistema Nacional de Contratación Pública',
        url: '#',
      },
      {
        titulo: 'Código Orgánico de Planificación y Finanzas Públicas',
        url: '#',
      },
      { titulo: 'Ley Orgánica de la Contraloría General del Estado', url: '#' },
      {
        titulo: 'Ley Orgánica del Servicio Público (LOSEP)',
        url: '#',
      },
      { titulo: 'Código del Trabajo', url: '#' },
      { titulo: 'Ley de Seguridad Social', url: '#' },
      {
        titulo:
          'Normas de Control Interno de la Contraloría General del Estado',
        url: '#',
      },
      {
        titulo: 'Ley Orgánica de Educación Superior (LOES)',
        url: '#',
      },
      {
        titulo: 'Código Orgánico Administrativo (COA)',
        url: '#',
      },
      {
        titulo:
          'Ley Orgánica para la Optimización y Eficiencia de Trámites Administrativos',
        url: '#',
      },
    ],
  },
]

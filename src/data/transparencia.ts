import type { AnioRendicion, CategoriaLegislacion } from '@/types'

// ---------------------------------------------------------------------------
// Legislación — marco normativo aplicable a la institución
// ---------------------------------------------------------------------------

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
      {
        titulo: 'Ley Orgánica de la Contraloría General del Estado',
        url: '#',
      },
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

// ---------------------------------------------------------------------------
// Rendición de cuentas — informes anuales
// ---------------------------------------------------------------------------

export const rendicionCuentas: AnioRendicion[] = [
  {
    anio: 2025,
    informes: [
      {
        id: 1,
        titulo: 'Informe de Rendición de Cuentas 2025',
        descripcion: 'Próximamente',
        enlaces: [],
      },
    ],
  },
  {
    anio: 2024,
    informes: [
      {
        id: 2,
        titulo: 'Informe de Rendición de Cuentas 2024',
        enlaces: [
          {
            texto: 'VER INFORME',
            url: 'https://utneduec-my.sharepoint.com/:f:/g/personal/rendicioncuentas_lauemprende_com/EqXp1knMcIVMv5KI4sLU2dgBv-PbCy52j3x56dkD7Z36Jg?e=sqiBJS',
            tipo: 'primary',
          },
        ],
      },
    ],
  },
  {
    anio: 2023,
    informes: [
      {
        id: 3,
        titulo: 'Rendición de Cuentas 2023',
        enlaces: [
          {
            texto: 'VER INFORME',
            url: 'https://utneduec-my.sharepoint.com/:f:/g/personal/rendicioncuentas_lauemprende_com/EgylvZhdNd5Ony4hGeGPUy0BsmxCvuGFzZmX5Qecwhjh9Q?e=WxfwYW',
            tipo: 'primary',
          },
          {
            texto: 'REGISTRE SUS APORTES AQUÍ',
            url: 'https://forms.office.com/r/qketnc7t5A',
            tipo: 'secondary',
          },
          {
            texto: 'MIRA EL EVENTO AQUÍ',
            url: 'https://www.facebook.com/LAUEMPRENDE?mibextid=LQQJ4d',
            tipo: 'link',
          },
        ],
      },
    ],
  },
  {
    anio: 2022,
    informes: [
      {
        id: 4,
        titulo: 'Informe de Rendición de Cuentas 2022',
        enlaces: [
          {
            texto: 'VER INFORME',
            url: 'https://utneduec-my.sharepoint.com/:p:/g/personal/rendicioncuentas_lauemprende_com/EcekEs7ab3FLtZpESU2fUjwBj_zNLbq7sAQ1c52dJXauHg?e=Jt3B5K',
            tipo: 'primary',
          },
          {
            texto: 'REGISTRE SUS APORTES AQUÍ',
            url: 'https://forms.office.com/r/qketnc7t5A',
            tipo: 'secondary',
          },
          {
            texto: 'MIRA EL EVENTO AQUÍ',
            url: 'https://fb.me/e/6z63RSHPJ',
            tipo: 'link',
          },
        ],
      },
    ],
  },
]

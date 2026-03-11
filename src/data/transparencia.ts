import type { AnioRendicion, CategoriaLegislacion } from '@/types'
import irc2024 from '@/assets/images/rendicion-de-cuentas/IRC2024.png'
import rendicionCuentas2023 from '@/assets/images/rendicion-de-cuentas/Rendicion_Cuentas_web.png'
import irc2022 from '@/assets/images/rendicion-de-cuentas/IRC20222.png'

// ---------------------------------------------------------------------------
// Legislación — marco normativo aplicable a la institución
// ---------------------------------------------------------------------------

export const legislacion: CategoriaLegislacion[] = [
  {
    nombre: 'Normativa General',
    descripcion:
      'Normativa general aplicable a las empresas públicas del Ecuador',
    items: [
      {
        titulo: 'Constitución de la República del Ecuador',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/Ef7MdOtC9H1LtRnpffhbd1sBr98VqUdK2Az4nvjFRPuwbQ?e=AC21zZ',
      },
      {
        titulo: 'Ley Orgánica de Empresas Públicas',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/EUibcxDHPW1MpA1FEWrmBd4BgOVvPpmhmpHFZd5MqBZ0kQ?e=3OwNgi',
      },
      {
        titulo: 'Ley Orgánica del Servicio Público',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/Ecg4LOzD-JFOjLdSwHp4snEBTv7wX5R1w0JeVC6i6n-Hzg?e=dgwYC9',
      },
      {
        titulo: 'Ley Orgánica del Sistema Nacional de Contratación Pública',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/EXHaMNmgzk1IsfNs2XYSq-8B3LLqhbSwx1rio3A6xrQycA?e=RaO8fP',
      },
      {
        titulo: 'Código del Trabajo',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/ETMVXKlxWFlAjpj33khXuBgBJTAy9SWhodb7cr37lEmSmw?e=gGkD1Q',
      },
      {
        titulo: 'Código Orgánico Administrativo',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/EaFw1VJZ_ipCkZMQERqsN5oB5ewZqrwnGmnyhSwwNZpt8w?e=D5PUHT',
      },
      {
        titulo: 'Código Orgánico General de Procesos',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/EXa4mMxd1tVAnuOzbJ85_wABVgeF2XSrU8Znl49yv5uGrA?e=6J6aNs',
      },
      {
        titulo: 'Ley Orgánica de la Contraloría General del Estado',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/IQCbbOV3DTrQQ6y5dy5wOpwOAZbT6m-WO_DEtrlEfUXugK4?e=MmE2DS',
      },
      {
        titulo: 'Reglamento General a la Ley Orgánica del Servicio Público',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/ETaRh7uC6w9Im8dvuzVFdz0BMrX9K-Uf8tdpIcZfNm8toA?e=qA1YAf',
      },
      {
        titulo:
          'Reglamento General de la Ley Orgánica del Sistema Nacional de Contratación Pública',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/EYI7s3Wc6tlDj7JhTl-A-dwBhRWtoiWKYhRQb941Ix5jOg?e=ZWJVJt',
      },
      {
        titulo: 'Reglamento de la Ley Orgánica de la Contraloría General',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/IQD-X919a6DLTaeXzJZuw5y9AZniGChpyYHMOmxMenIpcYU?e=cGn1Wo',
      },
      {
        titulo:
          'Normativa Secundaria del Sistema Nacional de Contratación Pública - SNCP',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/ERZhbaXJyotAiO_t7tVtGaYB1G5GI830vZzcNkE8kPAHFw?e=WGBc1v',
      },
    ],
  },
  {
    nombre: 'Reglamento Interno',
    descripcion:
      'Marco normativo interno de la Empresa Pública LA UEMPRENDE EP',
    items: [
      {
        titulo:
          'Resolución de Creación de la Empresa Pública LA UEMPRENDE E.P.',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/EVxBjEA9381FuLG37v8G4oIBorVFPV7f4I1UCv0hZRR1bQ?e=OA5FHO',
      },
      {
        titulo:
          'Estatuto Orgánico Estructural y Funcional por Procesos de la Empresa Pública LA UEMPRENDE EP.',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/Ea718iRTjnpJu5eZG7jbSjkBBF3VZ37tsxRetkYSTiTsTw?e=qarHdu',
      },
      {
        titulo:
          'Reglamento Interno de Administración del Talento Humano de la Empresa Pública LA UEMPRENDE E.P.',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/IQDdHuoHTQSPQaPBo3ANvm2QAUf9sDtcaW_IsPVVW0_99Jc?e=MMYxuf',
      },
      {
        titulo:
          'Reglamento para la Administración, Uso, Control y Prestación de los Bienes e Inventarios de la Empresa Pública LA UEMPRENDE E.P.',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/IQAty8hQGTzhR55n2xAd0qQSAcnwhz4adZsX6I6VYGx6U0I?e=gWHZdK',
      },
      {
        titulo: 'Transparencia',
        url: '#',
      },
      {
        titulo:
          'Reglamento para la Administración Uso y Control de los Fondos de Reposición y a Rendir Cuentas de la Empresa Pública LA UEMPRENDE EP',
        url: 'https://utneduec-my.sharepoint.com/:b:/g/personal/transparencia_lauemprende_com/IQBTa2bUhNvwT6H87LpbYoUmAeU2ALG3lBv2sJX8Ymcmnjg?e=UcrkqB',
      },
      {
        titulo: 'Giro de Negocio',
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
        imagen: irc2024,
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
        imagen: rendicionCuentas2023,
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
        imagen: irc2022,
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

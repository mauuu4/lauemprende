import type { AnioRendicion } from '@/types'

import irc2024 from '@/assets/images/comunicados/IRC2024.png'
import rendicionCuentas2023 from '@/assets/images/comunicados/Rendicion_Cuentas_web.png'
import irc2022 from '@/assets/images/comunicados/IRC20222.png'

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

import type { ItemCarousel } from '@/types'

// ---------------------------------------------------------------------------
// Imágenes de cursos
// ---------------------------------------------------------------------------
import afiche01 from '@/assets/images/cursos/afiche-01.jpg'
import afiche03 from '@/assets/images/cursos/afiche-03.jpg'
import afiche04 from '@/assets/images/cursos/afiche-04.jpg'
import afiche05 from '@/assets/images/cursos/afiche-05.jpg'
import afiche06 from '@/assets/images/cursos/afiche-06.jpg'
import afiche07 from '@/assets/images/cursos/afiche-07.jpg'
import cambridgeQua from '@/assets/images/cursos/cambridge-qua.jpg'
import cambridge3Ene2026 from '@/assets/images/cursos/Cambridge3Ene2026.jpeg'
import fechasEnero from '@/assets/images/cursos/fechasEnero.jpg'
import traducciones from '@/assets/images/cursos/traducciones.jpg'

// ---------------------------------------------------------------------------
// Imágenes de invitaciones
// ---------------------------------------------------------------------------
import abastecimientoDisel2 from '@/assets/images/invitaciones/abastecimientoDisel2.png'
import irc2024 from '@/assets/images/invitaciones/IRC2024.png'
import giro3v3 from '@/assets/images/invitaciones/giro3v3.png'
import giro3_2 from '@/assets/images/invitaciones/giro3_2.png'
import giroNegocio3 from '@/assets/images/invitaciones/giroNegocio3.png'
import giroNegocio2_4 from '@/assets/images/invitaciones/giroNegocio2_4.png'
import rendicionCuentas2023 from '@/assets/images/invitaciones/Rendicion_Cuentas_web.png'
import irc2022 from '@/assets/images/invitaciones/IRC20222.png'
import giroNegocio5 from '@/assets/images/invitaciones/GiroNegocio5.png'

// ---------------------------------------------------------------------------
// Cursos — elementos del carousel de cursos y capacitaciones
// ---------------------------------------------------------------------------

export const cursos: ItemCarousel[] = [
  {
    id: 1,
    titulo: 'Curso - Afiche 1',
    imagen: afiche01,
    enlaces: [],
    activo: true,
  },
  {
    id: 2,
    titulo: 'Curso - Afiche 3',
    imagen: afiche03,
    enlaces: [],
    activo: true,
  },
  {
    id: 3,
    titulo: 'Curso - Afiche 4',
    imagen: afiche04,
    enlaces: [],
    activo: true,
  },
  {
    id: 4,
    titulo: 'Curso - Afiche 5',
    imagen: afiche05,
    enlaces: [],
    activo: true,
  },
  {
    id: 5,
    titulo: 'Curso - Afiche 6',
    imagen: afiche06,
    enlaces: [],
    activo: true,
  },
  {
    id: 6,
    titulo: 'Curso - Afiche 7',
    imagen: afiche07,
    enlaces: [],
    activo: true,
  },
  {
    id: 7,
    titulo: 'Traducciones',
    imagen: traducciones,
    enlaces: [],
    activo: true,
  },
  {
    id: 8,
    titulo: 'Cambridge Qualifications',
    imagen: cambridgeQua,
    enlaces: [],
    activo: true,
  },
  {
    id: 9,
    titulo: 'Cambridge Enero 2026',
    imagen: cambridge3Ene2026,
    enlaces: [],
    activo: true,
  },
  {
    id: 10,
    titulo: 'Fechas Enero',
    imagen: fechasEnero,
    enlaces: [],
    activo: true,
  },
]

// ---------------------------------------------------------------------------
// Invitaciones — procesos de contratación y rendición de cuentas (carousel)
// ---------------------------------------------------------------------------

export const invitaciones: ItemCarousel[] = [
  {
    id: 1,
    titulo: 'Abastecimiento de Diésel',
    imagen: abastecimientoDisel2,
    enlaces: [
      {
        texto: 'MÁS INFORMACIÓN',
        url: 'https://drive.google.com/drive/folders/1vwCAOdnqstuWHeYNlvchveNgmMVXSmmc?usp=sharing',
        tipo: 'primary',
      },
      {
        texto: 'AUDIENCIA DE PREGUNTAS Y RESPUESTAS',
        url: 'https://cedia.zoom.us/j/83791482582',
        tipo: 'secondary',
      },
    ],
    fecha: '2025',
    activo: true,
  },
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
    fecha: '2025',
    activo: true,
  },
  {
    id: 3,
    titulo: 'Giro de Negocio 3 - Versión 3',
    imagen: giro3v3,
    enlaces: [
      {
        texto: 'MÁS INFORMACIÓN',
        url: 'https://drive.google.com/drive/folders/1HkaYV-VeTGOu-WiFCZQ8KiZAQWrsiUwC?usp=sharing',
        tipo: 'primary',
      },
      {
        texto: 'AUDIENCIA DE PREGUNTAS Y RESPUESTAS',
        url: 'https://cedia.zoom.us/j/83109241925',
        tipo: 'secondary',
      },
    ],
    fecha: '2025',
    activo: true,
  },
  {
    id: 4,
    titulo: 'Giro de Negocio 3.2',
    imagen: giro3_2,
    enlaces: [
      {
        texto: 'MÁS INFORMACIÓN',
        url: 'https://drive.google.com/drive/folders/1MdtGzw449TRGXfr4wWZ6IheUnDqXS_W7?usp=sharing',
        tipo: 'primary',
      },
      {
        texto: 'AUDIENCIA DE PREGUNTAS Y RESPUESTAS',
        url: 'https://cedia.zoom.us/j/81843914340',
        tipo: 'secondary',
      },
    ],
    fecha: '2025',
    activo: true,
  },
  {
    id: 5,
    titulo: 'Giro de Negocio 3',
    imagen: giroNegocio3,
    enlaces: [
      {
        texto: 'MÁS INFORMACIÓN',
        url: 'https://utneduec-my.sharepoint.com/:f:/g/personal/kblliguisupap_lauemprende_com/EjrYC_WhsAZOubozDfG0QCEBDtjTm0BBE9dhe2hgUWc5pg?e=CYyn9J',
        tipo: 'primary',
      },
      {
        texto: 'AUDIENCIA DE PREGUNTAS Y RESPUESTAS',
        url: 'https://cedia.zoom.us/j/82463286311',
        tipo: 'secondary',
      },
    ],
    fecha: '2025',
    activo: true,
  },
  {
    id: 6,
    titulo: 'Giro de Negocio 2.4',
    imagen: giroNegocio2_4,
    enlaces: [
      {
        texto: 'MÁS INFORMACIÓN',
        url: 'https://utneduec-my.sharepoint.com/:f:/g/personal/kblliguisupap_lauemprende_com/EhPUMQvXZkBCgBsZfYwpNrMBGYA4w-kWcF1F8eSiVwOryQ?e=G287T1',
        tipo: 'primary',
      },
      {
        texto: 'AUDIENCIA DE PREGUNTAS Y RESPUESTAS',
        url: 'https://cedia.zoom.us/j/82735183809',
        tipo: 'secondary',
      },
    ],
    fecha: '2024',
    activo: true,
  },
  {
    id: 7,
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
    fecha: '2023',
    activo: true,
  },
  {
    id: 8,
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
    fecha: '2023',
    activo: true,
  },
  {
    id: 9,
    titulo: 'Giro de Negocio 5',
    imagen: giroNegocio5,
    enlaces: [
      {
        texto: 'MÁS INFORMACIÓN',
        url: 'https://utneduec-my.sharepoint.com/:f:/g/personal/kblliguisupap_lauemprende_com/Ek7FOwAZDWlInDVcaH2L4OIBsmUZqcT5PnKK3UrWnzpUhg?e=ivEFjj',
        tipo: 'primary',
      },
      {
        texto: 'AUDIENCIA DE PREGUNTAS Y RESPUESTAS',
        url: 'https://cedia.zoom.us/j/83279896701',
        tipo: 'secondary',
      },
    ],
    fecha: '2024',
    activo: true,
  },
]

import type { Anuncio } from '@/types'
import cambridgeQua from '@/assets/images/cursos/cambridge-qua.jpg'
import cambridge3Ene2026 from '@/assets/images/cursos/Cambridge3Ene2026.jpeg'
import fechasEnero from '@/assets/images/cursos/fechasEnero.jpg'

// ---------------------------------------------------------------------------
// Anuncios institucionales
// ---------------------------------------------------------------------------

export const anuncios: Anuncio[] = [
  {
    id: 1,
    titulo: 'Exámenes Cambridge — Reserva tu cupo',
    descripcion:
      'Reserva tu espacio para el examen oficial Cambridge Qualifications. Sesiones disponibles: B2 First, C1 Advanced y B1 Preliminary el 6 de febrero de 2026. Registro hasta el 26 de enero de 2026.',
    imagen: cambridgeQua,
    enlaces: [],
    fecha: '2026-02-06',
    activo: true,
  },
  {
    id: 2,
    titulo: 'Examen Internacional Cambridge — 13 de febrero 2026',
    descripcion:
      'Rinde el Examen Internacional de Inglés Cambridge y obtén una certificación global. Niveles disponibles: B1, B2, C1 y C2. Fecha: viernes 13 de febrero de 2026, 09h00. Centro de Idiomas LA UEMPRENDE E.P. – UTN.',
    imagen: cambridge3Ene2026,
    enlaces: [],
    fecha: '2026-02-13',
    activo: true,
  },
  {
    id: 3,
    titulo: 'Fechas de Exámenes Cambridge — Enero 2026',
    descripcion:
      'B2 First · C1 Advanced · B1 Preliminary — 6 de febrero 2026. Registra al estudiante hasta el 26 de enero 2026. Para más información: examenes@booksandbits.com.ec.',
    imagen: fechasEnero,
    enlaces: [],
    fecha: '2026-01-26',
    activo: true,
  },
]

// ---------------------------------------------------------------------------
// Anuncio destacado (se muestra como modal al entrar al sitio)
// ---------------------------------------------------------------------------

/** El primer anuncio activo se usa como anuncio emergente en la página de inicio */
export const anuncioDestacado = anuncios.find((a) => a.activo) ?? null

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

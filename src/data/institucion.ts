import type { AreaContacto, Departamento, InfoContacto } from '@/types'

// ---------------------------------------------------------------------------
// Metadata del sitio (SEO, Open Graph, títulos)
// ---------------------------------------------------------------------------

/** Configuración centralizada del sitio */
export const site = {
  /** Nombre corto para títulos y navegación */
  name: 'La UEmprende',
  /** Nombre legal / institucional completo */
  fullName: 'Empresa Pública LA UEMPRENDE EP',
  /** URL base del sitio (sin trailing slash) */
  url: 'https://prueba.lauemprende.com',
  /** Descripción por defecto para SEO */
  description:
    'Empresa Pública LA UEMPRENDE EP - Innovación y emprendimiento universitario',
  /** Imagen OG por defecto */
  ogImage: '/images/og-default.png',
  /** Locale para Open Graph */
  locale: 'es_EC',
  /** Resumen institucional de servicios (Hero, Footer, etc.) */
  tagline:
    'Diseño, gestión, implementación, operación y administración de proyectos de obras, bienes y servicios, en todas sus formas y apoyo en proyectos promovidos por la Universidad Técnica del Norte.',
}

// ---------------------------------------------------------------------------
// Información de contacto general de la institución
// ---------------------------------------------------------------------------

/**
 * Informacion de contacto centralizada de la institucion.
 * Modificar aqui para que se actualice en todo el sitio (Footer, pagina de contactos, etc.)
 */
export const infoContacto: InfoContacto = {
  direccion: 'Ibarra, Velasco 2-39 entre Salinas y Juan Montalvo',
  telefono: '+593 06 2997800',
  telefonoExtension: 'Ext: 7351',
  telefonoHref: 'tel:+59362997800',
  emailPrincipal: 'gerencia@lauemprende.com',
  mapsUrl: 'https://maps.app.goo.gl/kfvN1RnjZ928bhgj6',
  redesSociales: {
    facebook: 'https://www.facebook.com/LAUEMPRENDE/',
    youtube: 'https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A',
    twitter: 'https://x.com/LaUEmprende',
  },
}

// ---------------------------------------------------------------------------
// Correos institucionales por área
// ---------------------------------------------------------------------------

export const correosInstitucionales: AreaContacto[] = [
  {
    area: 'Centro de Idiomas',
    descripcion:
      'En caso de consultas, problemas o quejas relacionadas con cursos o ciclos regulares de inglés ofertados por la Empresa Pública.',
    email: 'directoridiomas@lauemprende.com',
  },
  {
    area: 'Escuela de Conducción',
    descripcion:
      'Para consultas sobre programas de formación de conductores profesionales.',
    email: 'conduccion@lauemprende.com',
  },
  {
    area: 'Dirección De Operaciones',
    descripcion: 'Para asuntos de carácter general o institucional.',
    email: 'direcciondeoperaciones@lauemprende.com',
  },
  {
    area: 'Dirección de Proyectos y Capacitación Continua',
    descripcion:
      'Para consultas sobre proyectos, capacitaciones y programas de formación continua.',
    email: 'directorproyectos@lauemprende.com',
  },
]

// ---------------------------------------------------------------------------
// Directorio de personal por departamento
// ---------------------------------------------------------------------------

export const directorio: Departamento[] = [
  {
    departamento: 'GERENCIA GENERAL',
    personal: [
      {
        cargo: 'Gerente General',
        nombre: 'Acosta Estrada Luis Alberto',
        email: 'gerencia@lauemprende.com',
      },
      {
        cargo: 'Asistente Gerencia',
        nombre: 'Villarreal Castillo Karen Estefanía',
        email: 'secretariagerencia@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'ASESORÍA',
    personal: [
      {
        cargo: 'Asesor De Gestión Empresarial',
        nombre: 'Argudo Pesántez Jhon Milton',
        email: 'argudo.jhon@lauemprende.com',
      },
      {
        cargo: 'Analista Jurídico',
        nombre: 'Loza Cevallos Jonathan Josué',
        email: 'juridicouep@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN DE PROYECTOS Y CAPACITACIÓN CONTINUA',
    personal: [
      {
        cargo: 'Director de Proyectos y Capacitación Continua',
        nombre: 'Ruiz Vega Wilson Patricio',
        email: 'wpruiz@lauemprende.com',
      },
      {
        cargo: 'Analista Académico',
        nombre: 'Carmona Alvarez Builla Erlen',
        email: 'ecalvarez@lauemprende.com',
      },
      {
        cargo: 'Analista Eventos y Talleres',
        nombre: 'Contreras Bolaños Gabriela Salomé',
        email: 'gscontreras@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN FINANCIERA',
    personal: [
      {
        cargo: 'Directora Financiera',
        nombre: 'Braganza Burbano María José',
        email: 'directorfinanciero@lauemprende.com',
      },
      {
        cargo: 'Analista de Presupuesto',
        nombre: 'Chamorro Rhea María Fernanda',
        email: 'mfchamorror@lauemprende.com',
      },
      {
        cargo: 'Tesorera',
        nombre: 'Imbaquingo Simbaña Evelin Gabriela',
        email: 'egimbaquingos@lauemprende.com',
      },
      {
        cargo: 'Contador',
        nombre: 'Nogales Tabango Rosalba',
        email: 'rnogales@lauemprende.com',
      },
      {
        cargo: 'Recaudador',
        nombre: 'Erazo Cárdenas Juan Francisco',
        email: 'jferazo@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN ADMINISTRATIVA',
    personal: [
      {
        cargo: 'Directora Administrativa',
        nombre: 'Ibarra Lascano Carla Alexandra',
        email: 'directoradministrativo@lauemprende.com',
      },
      {
        cargo: 'Analista de Talento Humano',
        nombre: 'Angulo Vega Daniela Fernanda',
        email: 'dfangulo@lauemprende.com',
      },
      {
        cargo: 'Analista de Servicios Generales',
        nombre: 'Estévez Acosta Rocío del Carmen',
        email: 'rcestevez@lauemprende.com',
      },
      {
        cargo: 'Analista de Compras Públicas',
        nombre: 'Flores Proaño Julio Cesar',
        email: 'compraspublicasep@lauemprende.com',
      },
      {
        cargo: 'Analista de Tecnología e Innovación',
        nombre: 'Lliguisupa Ponce Kevin Brayan',
        email: 'kblliguisupap@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN DE OPERACIONES',
    personal: [
      {
        cargo: 'Director de Operaciones',
        nombre: 'Galarza García Diego Fernando',
        email: 'direcciondeoperaciones@lauemprende.com',
      },
      {
        cargo: 'Técnico de Operaciones',
        nombre: 'Mena Asanza Kelly Jassira',
        email: 'jkmena@lauemprende.com',
      },
      {
        cargo: 'Técnico de Operaciones',
        nombre: 'Pozo Criollo Luis Felipe',
        email: 'lfpozo@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'ESCUELA DE CONDUCCIÓN',
    personal: [
      {
        cargo: 'Director de General Administrativo',
        nombre: 'Vásquez Vaca Segundo Widian',
        email: 'vasquez.segundo@lauemprende.com',
      },
      {
        cargo: 'Secretaria',
        nombre: 'Zumárraga Ortiz Lupe Beatriz',
        email: 'lbzumarragao@lauemprende.com',
      },
      {
        cargo: 'Coordinador Académico',
        nombre: 'Paredes Moran Marco Aníbal',
        email: 'paredes.marco@lauemprende.com',
      },
      {
        cargo: 'Evaluador Psicológico',
        nombre: 'Morales Delgado Nathaly Julissa',
        email: 'njmorales@lauemprende.com',
      },
      {
        cargo: 'Asesor Educación y Seguridad Vial',
        nombre: 'Loyo Puedmag Franklin Eduardo',
        email: 'loyo.franklin@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN DE IDIOMAS',
    personal: [
      {
        cargo: 'Directora Centro de Idiomas',
        nombre: 'Vallejo Vázquez Vanessa Nathaly',
        email: 'directoridiomas@lauemprende.com',
      },
      {
        cargo: 'Asistente Centro de Idiomas UTN',
        nombre: 'Pérez Jácome Johanna Maribel',
        email: 'jmperezj@lauemprende.com',
      },
      {
        cargo: 'Asistente Centro de Idiomas UTN',
        nombre: 'Mejía Bolaños María Paula',
        email: 'mpmejiab@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DOCENTES CENTRO DE IDIOMAS',
    personal: [
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Dávila Eskola Oscar German',
        email: 'ogdavilae@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Echeverría Chávez Carmita Emperatriz',
        email: 'ceecheverria@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Eskola Almeida Andrea Salomé',
        email: 'aseskolaa@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Guevara Andrade Ana María',
        email: 'amguevara@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Morocho Orozco María José',
        email: 'mjmorocho@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Paredes Meneses Gabriel',
        email: 'gparedes@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Paspuezán Soto Luis Alfonso',
        email: 'lapaspuezan@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Pérez Pozo Pablo Andrés',
        email: 'paperez@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Ramos Cháchalo Sonia Eulalia',
        email: 'seramosc1@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Rodríguez Amaya Sheyla Alejandra',
        email: 'rodriguezasa@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Rosero Hurtado María Augusta',
        email: 'marosero@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Sotelo López Joffre Wladimir',
        email: 'jwsotelo@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Vaca Rueda Roberto Alejandro',
        email: 'ravaca@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas UTN',
        nombre: 'Valdez Perugachi Paul Jefferson',
        email: 'pjvaldez@lauemprende.com',
      },
    ],
  },
]

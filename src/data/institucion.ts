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
  url: 'https://www.lauemprende.com',
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
    area: 'Gerencia',
    descripcion: 'Para asuntos de carácter general o institucional.',
    email: 'gerencia@lauemprende.com',
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
        email: 'acosta.luis@lauemprende.com',
      },
      {
        cargo: 'Asistente Ejecutivo',
        nombre: 'Villarreal Castillo Karen Estefanía',
        email: 'villarreal.karen@lauemprende.com',
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
        email: 'loza.jonathan@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN DE PROYECTOS Y CAPACITACIÓN',
    personal: [
      {
        cargo: 'Director de Proyectos y Capacitación',
        nombre: 'Ruiz Vega Wilson Patricio',
        email: 'ruiz.wilson@lauemprende.com',
      },
      {
        cargo: 'Analista Académico',
        nombre: 'Carmona Alvarez Builla Erlen',
        email: 'carmona.builla@lauemprende.com',
      },
      {
        cargo: 'Promotor de Eventos y Talleres',
        nombre: 'Contreras Bolaños Gabriela Salomé',
        email: 'contreras.gabriela@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN FINANCIERA',
    personal: [
      {
        cargo: 'Directora Financiera',
        nombre: 'Braganza Burbano María José',
        email: 'braganza.maria@lauemprende.com',
      },
      {
        cargo: 'Analista de Presupuesto',
        nombre: 'Chamorro Rhea María Fernanda',
        email: 'chamorro.maria@lauemprende.com',
      },
      {
        cargo: 'Recaudación / Vendedor Almacén',
        nombre: 'Erazo Cárdenas Juan Francisco',
        email: 'erazo.juan@lauemprende.com',
      },
      {
        cargo: 'Contadora',
        nombre: 'Nogales Tabango Rosalba',
        email: 'nogales.rosalba@lauemprende.com',
      },
      {
        cargo: 'Tesorera',
        nombre: 'Imbaquingo Simbaña Evelin Gabriela',
        email: 'imbaquingo.evelin@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN ADMINISTRATIVA',
    personal: [
      {
        cargo: 'Directora Administrativa',
        nombre: 'Ibarra Lascano Carla Alexandra',
        email: 'ibarra.carla@lauemprende.com',
      },
      {
        cargo: 'Analista de Talento Humano',
        nombre: 'Angulo Vega Daniela Fernanda',
        email: 'angulo.daniela@lauemprende.com',
      },
      {
        cargo: 'Analista de Servicios Generales',
        nombre: 'Estévez Acosta Rocío del Carmen',
        email: 'estevez.rocio@lauemprende.com',
      },
      {
        cargo: 'Analista de Compras Públicas',
        nombre: 'Flores Proaño Julio Cesar',
        email: 'flores.julio@lauemprende.com',
      },
      {
        cargo: 'Asistente de Tecnología e Innovación',
        nombre: 'Lliguisupa Ponce Kevin Brayan',
        email: 'lliguisupa.kevin@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DIRECCIÓN DE OPERACIONES',
    personal: [
      {
        cargo: 'Director de Operaciones',
        nombre: 'Galarza García Diego Fernando',
        email: 'galarza.diego@lauemprende.com',
      },
      {
        cargo: 'Técnico de Operaciones',
        nombre: 'Martínez Valle Lorena Jacqueline',
        email: 'martinez.lorena@lauemprende.com',
      },
      {
        cargo: 'Técnico de Operaciones',
        nombre: 'Mena Asanza Kelly Jassira',
        email: 'mena.kelly@lauemprende.com',
      },
      {
        cargo: 'Técnico de Operaciones',
        nombre: 'Ortega Juca René Orlando',
        email: 'ortega.rene@lauemprende.com',
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
        email: 'zumarraga.lupe@lauemprende.com',
      },
      {
        cargo: 'Coordinador Académico',
        nombre: 'Paredes Moran Marco Aníbal',
        email: 'paredes.marco@lauemprende.com',
      },
      {
        cargo: 'Evaluador Psicológico',
        nombre: 'Michilena Játiva Marcia Lisbeth',
        email: 'michilena.marcia@lauemprende.com',
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
        cargo: 'Directora de Idiomas',
        nombre: 'Vallejo Vázquez Vanessa Nathaly',
        email: 'vallejo.vanessa@lauemprende.com',
      },
      {
        cargo: 'Asistente Centro de Idiomas UTN',
        nombre: 'Pérez Jacome Johanna Maribel',
        email: 'perez.johanna@lauemprende.com',
      },
      {
        cargo: 'Asistente Centro de Idiomas UTN',
        nombre: 'Mejía Bolaños María Paula',
        email: 'mejia.maria@lauemprende.com',
      },
    ],
  },
  {
    departamento: 'DOCENTES CENTRO DE IDIOMAS',
    personal: [
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Dávila Eskola Oscar German',
        email: 'davila.oscar@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Echeverria Chávez Carmita Emperatriz',
        email: 'echeverria.carmita@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Eskola Almeida Andrea Salomé',
        email: 'eskola.andrea@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Guevara Andrade Ana María',
        email: 'guevara.ana@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Morocho Orozco María José',
        email: 'morocho.maria@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Paredes Meneses Gabriel',
        email: 'paredes.gabriel@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Paspuezán Soto Luis Alfonso',
        email: 'paspuezan.luis@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Pérez Pozo Pablo Andrés',
        email: 'perez.pablo@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Ramos Cháchalo Sonia Eulalia',
        email: 'ramos.sonia@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Rodríguez Amaya Sheyla Alejandra',
        email: 'rodriguez.sheyla@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Rosero Hurtado María Augusta',
        email: 'rosero.maria@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Sotelo López Joffre Wladimir',
        email: 'sotelo.joffre@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Vaca Rueda Roberto Alejandro',
        email: 'vaca.roberto@lauemprende.com',
      },
      {
        cargo: 'Capacitador Centro de Idiomas',
        nombre: 'Valdez Perugachi Paul Jefferson',
        email: 'valdez.paul@lauemprende.com',
      },
    ],
  },
]

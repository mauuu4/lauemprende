export const internetSectionNav = [
  { href: '#planes', label: 'Planes' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#atencion', label: 'Atención' },
  { href: '#normativa', label: 'Normativa' },
]

export const internetHighlights = [
  {
    value: 'Hogar',
    label: 'Internet para estudiar, trabajar y disfrutar en familia.',
  },
  {
    value: 'Negocio',
    label: 'Conectividad para atender clientes y operar mejor.',
  },
  {
    value: 'Soporte',
    label: 'Atención cercana por canales institucionales.',
  },
]

export const internetPlans = [
  {
    name: 'Plan Hogar',
    audience: 'Residencial',
    description:
      'Ideal para familias que necesitan internet para clases, teletrabajo, videollamadas, redes sociales y entretenimiento diario.',
    features: [
      'Revisión de cobertura antes de la instalación.',
      'Orientación para elegir la opción adecuada.',
      'Condiciones y valores confirmados antes de contratar.',
    ],
  },
  {
    name: 'Plan Emprendedor',
    audience: 'Negocios y oficinas',
    description:
      'Pensado para comercios, profesionales y emprendimientos que dependen de una conexión estable para vender, comunicarse y trabajar.',
    features: [
      'Atención para necesidades de negocios y oficinas.',
      'Acompañamiento desde la solicitud inicial.',
      'Propuesta según disponibilidad en el sector.',
    ],
  },
  {
    name: 'Plan Institucional',
    audience: 'Entidades y proyectos',
    description:
      'Una alternativa para instituciones, proyectos o espacios que requieren una solución de conectividad adaptada a su operación.',
    features: [
      'Revisión del punto donde se requiere el servicio.',
      'Propuesta ajustada al alcance solicitado.',
      'Coordinación para una implementación ordenada.',
    ],
  },
]

export const coverageSteps = [
  {
    title: 'Cuéntanos dónde necesitas internet',
    text: 'Comparte tu dirección, referencia del sector o ubicación aproximada para iniciar la revisión.',
  },
  {
    title: 'Revisamos si podemos llegar a tu zona',
    text: 'Nuestro equipo confirma si existe cobertura y cuáles son las condiciones para instalar el servicio.',
  },
  {
    title: 'Recibe una propuesta clara',
    text: 'Te indicamos la alternativa disponible, valores, requisitos y pasos para continuar.',
  },
]

export const coverageChecks = [
  'Si el servicio está disponible en tu sector.',
  'Qué se necesita para instalar en tu domicilio, local u oficina.',
  'Qué alternativa se ajusta mejor a tu necesidad.',
  'Valores, requisitos y condiciones antes de contratar.',
]

export const internetBenefits = [
  {
    title: 'Internet para tu día a día',
    text: 'Conexión para estudiar, trabajar, vender, comunicarte y acceder a servicios digitales sin complicaciones.',
    icon: 'target',
  },
  {
    title: 'Asesoría antes de contratar',
    text: 'Te orientamos sobre cobertura, requisitos y opciones disponibles para que tomes una decisión informada.',
    icon: 'file',
  },
  {
    title: 'Atención cercana',
    text: 'Puedes consultar, solicitar información o reportar novedades por canales institucionales claros.',
    icon: 'megaphone',
  },
  {
    title: 'Opciones según tu necesidad',
    text: 'Contamos con alternativas referenciales para hogares, negocios e instituciones, sujetas a disponibilidad.',
    icon: 'trend',
  },
]

export const regulatoryLinks = [
  {
    title: 'Servicio de Acceso a Internet (SAI)',
    description:
      'Información oficial de ARCOTEL sobre el servicio de acceso a internet en Ecuador.',
    href: 'https://www.arcotel.gob.ec/servicio-de-acceso-a-internet-sai/',
  },
  {
    title: 'Reclamos de servicios de telecomunicaciones',
    description:
      'Canal oficial para reclamos ante ARCOTEL cuando el usuario lo requiera.',
    href: 'https://www.gob.ec/arcotel/tramites/atencion-reclamos-servicios-telecomunicaciones',
  },
]

interface NormativeDocument {
  title: string
  href?: string
  external?: boolean
}

export const normativeDocuments: NormativeDocument[] = [
  {
    title: 'Reforma al Reglamento General',
    href: '/uploads/reforma-al-reglamento-general.pdf',
    external: true,
  },
  {
    title: 'Ley del Adulto Mayor',
    href: '/uploads/ley-del-adulto-mayor.pdf',
    external: true,
  },
  {
    title: 'Reglamento del Adulto Mayor',
    href: '/uploads/reglamento-del-adulto-mayor.pdf',
    external: true,
  },
  {
    title: 'Guía de control parental',
    href: '/uploads/guia-de-control-parental.pdf',
    external: true,
  },
  {
    title: 'Norma SVA',
    href: '/uploads/norma-sva.pdf',
    external: true,
  },
  {
    title: 'Reglamento de abonados',
    href: '/uploads/reglamento-de-abonados.pdf',
    external: true,
  },
]

export const contractorCommitments = [
  'Información clara sobre el plan, valores y condiciones antes de contratar.',
  'Confirmación de cobertura antes de iniciar la instalación.',
  'Canales de atención para consultas, soporte y seguimiento.',
  'Orientación para escoger una alternativa acorde al uso del hogar, negocio o institución.',
  'Atención de novedades del servicio mediante canales institucionales.',
]

export const attentionNotes = [
  'Para consultar cobertura, envía tu dirección y una referencia del sector.',
  'Para soporte, describe la novedad e incluye un número de contacto.',
  'Para contratar, solicita primero la propuesta vigente del servicio.',
]

export const internetFaqs = [
  {
    question: '¿Qué plan me conviene contratar?',
    answer:
      'Depende de si necesitas internet para hogar, negocio o institución. Nuestro equipo puede orientarte según tu ubicación y el uso que esperas darle al servicio.',
  },
  {
    question: '¿La cobertura está disponible en todos los sectores?',
    answer:
      'La cobertura se confirma según la ubicación. Antes de contratar, revisamos si podemos instalar el servicio en tu zona.',
  },
  {
    question: '¿Cómo solicito información o cobertura?',
    answer:
      'Puedes comunicarte por teléfono, escribir a internet@lauemprende.com o acercarte a nuestras oficinas. Incluye dirección, referencia del sector y un número de contacto.',
  },
  {
    question: '¿Los precios y condiciones ya están definidos?',
    answer:
      'Los valores, requisitos y condiciones se informan en la propuesta vigente antes de contratar. No se publican precios referenciales para evitar confusiones.',
  },
  {
    question: '¿Qué hago si tengo una novedad con el servicio?',
    answer:
      'Puedes reportarla por los canales de atención de La UEmprende EP para que sea registrada y revisada.',
  },
]

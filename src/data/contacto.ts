import type { InfoContacto } from '@/types'

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

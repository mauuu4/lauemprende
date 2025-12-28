export interface Curso {
  id: number;
  titulo: string;
  imagen: string;
  urlInscripcion?: string;
  descripcion?: string;
  fecha?: string;
  activo: boolean;
}

export const cursos: Curso[] = [
  {
    id: 1,
    titulo: "Seminario de Fútbol",
    imagen: "/images/cursos/seminario-futbol.jpg",
    urlInscripcion: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4355",
    activo: true
  },
  {
    id: 2,
    titulo: "CCNA3 - Certificación Cisco",
    imagen: "/images/cursos/afiche-ccna3-v2.jpg",
    urlInscripcion: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4349",
    activo: true
  },
  {
    id: 3,
    titulo: "Tipo D Convalidada",
    imagen: "/images/cursos/tipo-d-convalidada.jpg",
    urlInscripcion: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4346",
    activo: true
  },
  {
    id: 4,
    titulo: "Cursos Intensivos",
    imagen: "/images/cursos/info-intensivos.png",
    urlInscripcion: "https://cloud.lauemprende.com/ords/f?p=236:31:::NO:31,6::",
    activo: true
  },
  {
    id: 5,
    titulo: "Segunda Sesión Cambridge",
    imagen: "/images/cursos/segunda-sesion-cambridge-2.png",
    activo: true
  },
  {
    id: 6,
    titulo: "Certificación B1/B2",
    imagen: "/images/cursos/certificacion-b1-b2.jpg",
    urlInscripcion: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4331",
    activo: true
  },
  {
    id: 7,
    titulo: "Traducciones",
    imagen: "/images/cursos/traducciones.jpg",
    activo: true
  },
  {
    id: 8,
    titulo: "Cambridge Qualifications",
    imagen: "/images/cursos/cambridge-qua.jpg",
    activo: true
  },
  {
    id: 9,
    titulo: "Intensivos Octubre",
    imagen: "/images/cursos/intensivos-octubre.jpg",
    activo: true
  },
  {
    id: 10,
    titulo: "Curso - Afiche 1",
    imagen: "/images/cursos/afiche-01.jpg",
    activo: true
  },
  {
    id: 11,
    titulo: "Curso - Afiche 2",
    imagen: "/images/cursos/afiche-02.jpg",
    activo: true
  },
  {
    id: 12,
    titulo: "Curso - Afiche 3",
    imagen: "/images/cursos/afiche-03.jpg",
    activo: true
  },
  {
    id: 13,
    titulo: "Curso - Afiche 4",
    imagen: "/images/cursos/afiche-04.jpg",
    activo: true
  },
  {
    id: 14,
    titulo: "Curso - Afiche 5",
    imagen: "/images/cursos/afiche-05.jpg",
    activo: true
  },
  {
    id: 15,
    titulo: "Curso - Afiche 6",
    imagen: "/images/cursos/afiche-06.jpg",
    activo: true
  },
  {
    id: 16,
    titulo: "Curso - Afiche 7",
    imagen: "/images/cursos/afiche-07.jpg",
    activo: true
  },
  {
    id: 17,
    titulo: "Hackathon 2025",
    imagen: "/images/cursos/hackaton.jpg",
    urlInscripcion: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4353",
    activo: true
  }
];

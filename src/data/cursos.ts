import type { ImageMetadata } from "astro";

// Importar imágenes
import seminarioFutbol from "@/assets/images/cursos/seminario-futbol.jpg";
import aficheCcna3 from "@/assets/images/cursos/afiche-ccna3-v2.jpg";
import tipoDConvalidada from "@/assets/images/cursos/tipo-d-convalidada.jpg";
import infoIntensivos from "@/assets/images/cursos/info-intensivos.png";
import segundaSesionCambridge from "@/assets/images/cursos/segunda-sesion-cambridge-2.png";
import certificacionB1B2 from "@/assets/images/cursos/certificacion-b1-b2.jpg";
import traducciones from "@/assets/images/cursos/traducciones.jpg";
import cambridgeQua from "@/assets/images/cursos/cambridge-qua.jpg";
import intensivosOctubre from "@/assets/images/cursos/intensivos-octubre.jpg";
import afiche01 from "@/assets/images/cursos/afiche-01.jpg";
import afiche02 from "@/assets/images/cursos/afiche-02.jpg";
import afiche03 from "@/assets/images/cursos/afiche-03.jpg";
import afiche04 from "@/assets/images/cursos/afiche-04.jpg";
import afiche05 from "@/assets/images/cursos/afiche-05.jpg";
import afiche06 from "@/assets/images/cursos/afiche-06.jpg";
import afiche07 from "@/assets/images/cursos/afiche-07.jpg";
import hackaton from "@/assets/images/cursos/hackaton.jpg";

export interface Enlace {
  texto: string;
  url: string;
  tipo: 'principal';
}

export interface Curso {
  id: number;
  titulo: string;
  imagen: ImageMetadata;
  enlaces: Enlace[];
  descripcion?: string;
  fecha?: string;
  activo: boolean;
}

export const cursos: Curso[] = [
  {
    id: 1,
    titulo: "Seminario de Fútbol",
    imagen: seminarioFutbol,
    enlaces: [
      {
        texto: "INSCRÍBETE AQUÍ",
        url: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4355",
        tipo: "principal"
      },
    ],
    activo: true
  },
  {
    id: 2,
    titulo: "CCNA3 - Certificación Cisco",
    imagen: aficheCcna3,
    enlaces: [
      {
        texto: "INSCRÍBETE AQUÍ",
        url: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4349",
        tipo: "principal"
      }
    ],
    activo: true
  },
  {
    id: 3,
    titulo: "Tipo D Convalidada",
    imagen: tipoDConvalidada,
    enlaces: [
      {
        texto: "INSCRÍBETE AQUÍ",
        url: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4346",
        tipo: "principal"
      }
    ],
    activo: true
  },
  {
    id: 4,
    titulo: "Cursos Intensivos",
    imagen: infoIntensivos,
    enlaces: [
      {
        texto: "INSCRÍBETE AQUÍ",
        url: "https://cloud.lauemprende.com/ords/f?p=236:31:::NO:31,6::",
        tipo: "principal"
      }
    ],
    activo: true
  },
  {
    id: 5,
    titulo: "Segunda Sesión Cambridge",
    imagen: segundaSesionCambridge,
    enlaces: [],
    activo: true
  },
  {
    id: 6,
    titulo: "Certificación B1/B2",
    imagen: certificacionB1B2,
    enlaces: [
      {
        texto: "INSCRÍBETE AQUÍ",
        url: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4331",
        tipo: "principal"
      }
    ],
    activo: true
  },
  {
    id: 7,
    titulo: "Traducciones",
    imagen: traducciones,
    enlaces: [],
    activo: true
  },
  {
    id: 8,
    titulo: "Cambridge Qualifications",
    imagen: cambridgeQua,
    enlaces: [],
    activo: true
  },
  {
    id: 9,
    titulo: "Intensivos Octubre",
    imagen: intensivosOctubre,
    enlaces: [],
    activo: true
  },
  {
    id: 10,
    titulo: "Curso - Afiche 1",
    imagen: afiche01,
    enlaces: [],
    activo: true
  },
  {
    id: 11,
    titulo: "Curso - Afiche 2",
    imagen: afiche02,
    enlaces: [],
    activo: true
  },
  {
    id: 12,
    titulo: "Curso - Afiche 3",
    imagen: afiche03,
    enlaces: [],
    activo: true
  },
  {
    id: 13,
    titulo: "Curso - Afiche 4",
    imagen: afiche04,
    enlaces: [],
    activo: true
  },
  {
    id: 14,
    titulo: "Curso - Afiche 5",
    imagen: afiche05,
    enlaces: [],
    activo: true
  },
  {
    id: 15,
    titulo: "Curso - Afiche 6",
    imagen: afiche06,
    enlaces: [],
    activo: true
  },
  {
    id: 16,
    titulo: "Curso - Afiche 7",
    imagen: afiche07,
    enlaces: [],
    activo: true
  },
  {
    id: 17,
    titulo: "Hackathon 2025",
    imagen: hackaton,
    enlaces: [
      {
        texto: "INSCRÍBETE AQUÍ",
        url: "https://cloud.lauemprende.com/ords/f?p=236:6:::NO:RP,6:P6_ID_EVENTO_AUX:4353",
        tipo: "principal"
      }
    ],
    activo: true
  }
];

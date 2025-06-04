import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { TaekwondoCard } from "@/lib/types/globals";
import { TaekwondoHistoryTimeLine } from "@/lib/types/globals";
import { TaekwondoMeaningItem } from "@/lib/types/globals";
import { ValueItem } from "@/lib/types/globals";
import { BeltItem } from "@/lib/types/globals";

import {
  FaRegHandshake,
  FaBalanceScale,
  FaFireAlt,
  FaBrain,
  FaFistRaised,
} from "react-icons/fa";

import { FaSeedling, FaSun, FaSunPlantWilt, FaSkyatlas } from "react-icons/fa6";
import { MdDangerous, MdSportsMartialArts } from "react-icons/md";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/*Used in TaekwondoInfoSection*/

export const taekwondoCards: TaekwondoCard[] = [
  {
    title: "Historia del Taekwondo",
    description:
      "El Taekwondo tiene raíces antiguas en Corea, evolucionando a través del tiempo hasta convertirse en un arte marcial reconocido globalmente.",
    image: "/history.jpg",
    link: "/history",
  },
  {
    title: "Filosofía del Taekwondo",
    description:
      "Basado en valores como la cortesía, integridad, perseverancia y autocontrol, el Taekwondo forma tanto el cuerpo como la mente del practicante.",
    image: "/principles.png",
    link: "/philosophy",
  },
  {
    title: "Sistema de cinturones",
    description:
      "Los cinturones en el Taekwondo representan el progreso del estudiante, desde el blanco de principiante hasta el negro.",
    image: "/belts.jpg",
    link: "/belts",
  },
];
/*Used in TaekwondoCompetitionSection*/

export const taekwondoCompetitionsCards: TaekwondoCard[] = [
  {
    title: "Combate Individual",
    description:
      "El combate en Taekwondo, también llamado Kyorugi, es una competencia cuerpo a cuerpo donde dos atletas se enfrentan aplicando técnicas de ataque y defensa.",
    image: "/combat.png",
    link: "/combate-individual",
  },
  {
    title: "Combate por Equipos",
    description:
      "Esta modalidad reúne a equipos de varios atletas que se enfrentan en rondas alternadas. Requiere coordinación táctica, estrategia grupal y adaptación rápida al ritmo del combate.",
    image: "/combatTeam.png",
    link: "/combate-equipos",
  },
  {
    title: "Poomsae",
    description:
      "El Poomsae es una serie de movimientos preestablecidos que simulan combates imaginarios. Evalúa la técnica, precisión, fuerza, ritmo y expresión del arte marcial.",
    image: "/poomsae.png",
    link: "/poomsae",
  },
];

/*Used in Taekwondo guide section*/

export const poomsaeGuideCards: TaekwondoCard[] = [
  {
    title: "Poomsae para Principiantes",
    description:
      "Dirigido a estudiantes de cintas blancas a verdes, esta guía cubre los fundamentos de Poomsae, incluyendo posturas básicas, movimientos simples y la correcta respiración.",
    image: "/poomsaebeginner.png",
    link: "/poomsae/principiantes",
  },
  {
    title: "Poomsae Avanzado",
    description:
      "Enfocado en estudiantes intermedios (cintas azules a rojas), esta sección detalla técnicas complejas, giros, y la fluidez entre movimientos con aplicación marcial.",
    image: "/poomsaeadvanced.png",
    link: "/poomsae/avanzado",
  },
  {
    title: "Poomsae para Cinturones Negros",
    description:
      "Guía especializada para cinturones negros. Incluye poomsaes superiores, aplicaciones técnicas profundas y los estándares de competición nacional e internacional.",
    image: "/poomsaeblackbelts.png",
    link: "/poomsae/cinturones-negros",
  },
];

/*Used for the History time line seciton*/
export const taekwondohistoryTimeLine: TaekwondoHistoryTimeLine[] = [
  {
    year: "1955",
    description:
      'Se adopta oficialmente el nombre "Taekwondo" y se establece la Asociación Coreana de Taekwondo.',
  },
  {
    year: "1966",
    description:
      "Fundación de la Federación Internacional de Taekwondo (ITF) por el General Choi Hong Hi para difundir el arte a nivel mundial.",
  },
  {
    year: "1973",
    description:
      "Se funda la Federación Mundial de Taekwondo (WT), centrada en el deporte de competencia. También se inaugura el Kukkiwon, sede global del Taekwondo.",
  },
  {
    year: "1988",
    description:
      "El Taekwondo debuta como deporte de exhibición en los Juegos Olímpicos de Seúl.",
  },
  {
    year: "2000",
    description:
      "El Taekwondo se convierte en deporte oficial en los Juegos Olímpicos de Sídney.",
  },
  {
    year: "Actualidad",
    description:
      "El Taekwondo es practicado por millones de personas en más de 200 países como arte marcial, disciplina deportiva y estilo de vida.",
  },
];

/*Used for the taekwondoMeaning seciton*/

export const taekwondoMeaning: TaekwondoMeaningItem[] = [
  {
    term: "Tae",
    korean: "태",
    definition:
      "Acción de pisar o golpear con el pie. Representa las técnicas de patadas o el uso de los pies.",
  },
  {
    term: "Kwon",
    korean: "권",
    definition:
      "significa puño o golpear con el puño. Representa el uso de las manos o puños en combate.",
  },
  {
    term: "Do",
    korean: "도",
    definition:
      "significa camino, disciplina o modo de vida. Es un concepto filosófico que implica un camino de desarrollo personal y autodisciplina.",
  },
];
/*Used for the taekwondo Value section*/

export const fundamentalValuesData: ValueItem[] = [
  {
    icon: FaRegHandshake,
    title: "Cortesía",
    description: "Respeto hacia el maestro, los compañeros y uno mismo.",
    color: "text-blue-500",
  },
  {
    icon: FaBalanceScale,
    title: "Integridad",
    description:
      "Actuar con honestidad, incluso cuando no hay nadie que te vea.",
    color: "text-yellow-600",
  },
  {
    icon: FaFireAlt,
    title: "Perseverancia",
    description: "Persistir y no rendirse ante los desafíos.",
    color: "text-red-500",
  },
  {
    icon: FaBrain,
    title: "Autocontrol",
    description: "Dominar impulsos y emociones, mantener la calma.",
    color: "text-purple-500",
  },
  {
    icon: FaFistRaised,
    title: "Coraje",
    description: "Afrontar los miedos con valentía y determinación.",
    color: "text-green-600",
  },
];

export const tkdBeltItems: BeltItem[] = [
  {
    title: "Cinturón Blanco",
    image: "/white-belt.svg",
    icon: FaSeedling,
    iconColorClass: "text-gray-400 dark:text-white ",
    description:
      "El cinturón blanco representa pureza e inocencia. Los estudiantes en esta etapa se enfocan en aprender técnicas básicas y entender los principios del Taekwondo. Marca el inicio de su camino en las artes marcales.",
  },
  {
    title: "Cinturón Amarillo",
    icon: FaSun,
    image: "/yellow-belt.png",
    iconColorClass: "text-yellow-500",
    description:
      "El cinturón amarillo simboliza los primeros rayos de sol que dan vida a la semilla. Los estudiantes comienzan a aprender movimientos más complejos y construyen una base sólida en Taekwondo.",
  },
  {
    title: "Cinturón Verde",
    icon: FaSunPlantWilt,
    image: "/green-belt.svg",
    iconColorClass: "text-green-500",
    description:
      "El cinturón verde representa crecimiento, como el de las plantas que se elevan hacia el sol. Los estudiantes desarrollan mejores técnicas y una comprensión más profunda de la práctica.",
  },
  {
    title: "Cinturón Azul",
    icon: FaSkyatlas,
    image: "/blue-belt.svg",
    iconColorClass: "text-blue-500",
    description:
      "El cinturón azul simboliza el cielo, hacia donde crece la planta, alcanzando nuevas alturas. Los estudiantes comienzan a perfeccionar sus técnicas y ganan más confianza en sus habilidades.",
  },
  {
    title: "Cinturón Rojo",
    icon: MdDangerous,
    image: "/red-belt.svg",
    iconColorClass: "text-red-500",
    description:
      "El cinturón rojo representa peligro y precaución, recordando a los estudiantes que deben tener control y disciplina en su entrenamiento. Se enfatiza el dominio de técnicas avanzadas.",
  },
  {
    title: "Cinturón Negro",
    icon: MdSportsMartialArts,
    image: "/black-belt.svg",
    iconColorClass: "text-black ",
    description:
      "El cinturón negro es la meta final, simbolizando un alto nivel de competencia y entendimiento. Representa la culminación del entrenamiento constante y el comienzo de una nueva etapa en las artes marciales.",
  },
];

{
  /*Copyright: Karpov Konstantin - poomsae begginer 
    Copyright::tkd-cambridge- Poomsae advanced
    Copyright: taekwondonation Poomsae black belts
    Copyright: taekwondo history - https://itftkd.sport/
  */
}

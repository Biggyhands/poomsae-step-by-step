import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { TaekwondoCard } from "@/lib/types/globals";

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
    link: "/historia",
  },
  {
    title: "Filosofía del Taekwondo",
    description:
      "Basado en valores como la cortesía, integridad, perseverancia y autocontrol, el Taekwondo forma tanto el cuerpo como la mente del practicante.",
    image: "/principles.png",
    link: "/filosofia",
  },
  {
    title: "Sistema de cinturones",
    description:
      "Los cinturones en el Taekwondo representan el progreso del estudiante, desde el blanco de principiante hasta el negro.",
    image: "/belts.jpg",
    link: "/cinturones",
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
{
  /*Copyright: Karpov Konstantin - poomsae begginer 
    Copyright::tkd-cambridge- Poomsae advanced
    Copyright: taekwondonation Poomsae black belts
  */
}

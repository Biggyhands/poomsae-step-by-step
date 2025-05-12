import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { TaekwondoCard } from "@/lib/types/globals";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
    title: "Cinturones del Taekwondo",
    description:
      "El sistema de cinturones representa el progreso del estudiante, desde el blanco de principiante hasta el negro.",
    image: "/belts.jpg",
    link: "/cinturones",
  },
];

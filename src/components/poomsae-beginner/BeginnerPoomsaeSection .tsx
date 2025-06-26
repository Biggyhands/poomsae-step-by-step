import React from "react";
import Link from "next/link";

import { FaCloudSun, FaFire } from "react-icons/fa6";
import { GiStrong } from "react-icons/gi";

const poomsaeCardsData = [
  {
    title: "Il Jang",
    Icon: FaCloudSun,
    meaning:
      "Representa el cielo y la luz (Keon). Sus movimientos son básicos y estables, simbolizando el comienzo y la creación.",
    iconColor: "text-sky-500",
    path: "/poomsae/taeguk-il-jang",
  },
  {
    title: "I Jang",
    Icon: GiStrong,
    meaning:
      "Representa el lago (Tae). Simboliza la alegría y la fuerza interior. Introduce defensas altas y patadas frontales.",
    iconColor: "text-black-500",
    path: "/poomsae/taeguk-i-jang",
  },
  {
    title: "Sam Jang",
    Icon: FaFire,
    meaning:
      "Representa el fuego y el sol (Ri). Sus movimientos son enérgicos y apasionados, enfocados en la agilidad y combinaciones rápidas.",
    iconColor: "text-red-500",
    path: "/poomsae/taeguk-sam-jang",
  },
];

function BeginnerPoomsaeSection() {
  return (
    // Contenedoaar principal con el padding superior reducido
    <section className="pt-12 pb-24 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Taeguk{" "}
        </h2>
      </div>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* --- Contenedor de las Tarjetas (Grid Responsivo) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poomsaeCardsData.map((card) => (
            <Link href={card.path} key={card.title}>
              <div className="hover:cursor-pointer bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-transparent dark:border-gray-800 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 h-full">
                {/* Icono */}
                <card.Icon className={`h-16 w-16 mb-6 ${card.iconColor}`} />

                {/* Título de la tarjeta */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>

                {/* Significado */}
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {card.meaning}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeginnerPoomsaeSection;

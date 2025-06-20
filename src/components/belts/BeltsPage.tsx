"use client";
import React from "react";
import Image from "next/image";
import BeltsCarousel from "./BeltsCarousel";
import BeltLevelsTable from "./BeltsLevelsTable";
import BeltsFAQ from "./BeltsFAQ";
import ButtonBack from "../main/ButtonBack";

function BeltsPage() {
  return (
    <section className="py-12 px-4 bg-white dark:bg-gray-900">
      {/*Title*/}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Sistema de Cinturones en Taekwondo
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Descubre el significado de cada cinturón en el Taekwondo, desde los
          inicios llenos de inocencia hasta el dominio representado por el
          cinturón negro. Cada color simboliza una etapa de crecimiento físico,
          mental y espiritual.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/*Image*/}

        <div className="flex justify-center h-[280px]">
          <Image
            src="/poomsaebeginner.png"
            alt="Grupo de taekwondistas"
            width={500}
            height={300}
            className="rounded-lg shadow-md object-cover w-auto h-auto"
          />
        </div>
        {/*Description*/}

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            ¿Qué representan los cinturones?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            En el Taekwondo, los cinturones no solo marcan el nivel técnico del
            practicante, sino que también representan su crecimiento personal y
            dedicación. Desde el blanco, que representa pureza, hasta el negro,
            que simboliza maestría, cada cinturón es un paso hacia una mejor
            versión de uno mismo.
          </p>
        </div>
        {/*Belt carousel*/}

        <section className="md:col-span-2 flex justify-center w-full mt-8 md:mt-12">
          <BeltsCarousel />
        </section>
        {/*Belts table*/}

        <section className="md:col-span-2 flex justify-center w-full mt-8 md:mt-12">
          <BeltLevelsTable />
        </section>
        {/*FAQ*/}

        <section
          className="md:col-span-2 flex justify-center w-full mt-8 md:mt-12
"
        >
          <BeltsFAQ />
        </section>
        <section className="md:col-span-2 flex justify-center w-full mt-8 md:mt-12">
          <ButtonBack />
        </section>
      </div>
    </section>
  );
}

export default BeltsPage;

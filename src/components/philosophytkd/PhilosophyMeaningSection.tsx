import React from "react";
import { taekwondoMeaning } from "@/lib/utils";

function PhilosophyMeaningSection() {
  return (
    <section className="mb-16 sm:mb-20">
      <h2 className="text-3xl  font-semibold text-gray-900 dark:text-white mb-8 text-center sm:text-left">
        ¿Qué significa Taekwondo?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
        {taekwondoMeaning.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {item.term}
            </h3>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-3 font-medium">
              ({item.korean})
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              {item.definition}
            </p>
          </div>
        ))}
      </div>
      <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed text-center bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
        <strong>Taekwondo</strong> significa “el camino del pie y del puño” —
        una filosofía de vida, no solo una técnica de combate.
      </p>
    </section>
  );
}

export default PhilosophyMeaningSection;

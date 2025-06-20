import React from "react";

export default function BeginnerPoomsaeIntro() {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-white-700 bg-gray-200 dark:text-gray-200 dark:bg-gray-950/50 rounded-full">
          NIVEL PRINCIPIANTE
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Poomsae para Principiantes
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Esta serie de Poomsaes está diseñada como una introducción fundamental
          al arte del Taekwondo. Con movimientos sencillos y posturas básicas,
          son la base perfecta para construir una técnica sólida.
        </p>

        <div className="mt-8">
          <h2 className="text-base font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-widest">
            Orientado para cinturones:
          </h2>
          <div className="flex justify-center items-center space-x-2 mt-3">
            <span className="px-3 py-1 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm">
              Blanco
            </span>
            <span className="px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 border border-yellow-300 rounded-md shadow-sm">
              Amarillo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

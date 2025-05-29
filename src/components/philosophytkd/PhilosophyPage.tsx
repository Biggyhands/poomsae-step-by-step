"use client";

import React from "react";
// import Image from "next/image";
import {
  FaRegHandshake,
  FaBalanceScale,
  FaFireAlt,
  FaBrain,
  FaFistRaised,
} from "react-icons/fa";

// ShadCN/UI Components
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function PhilosophyPage() {
  const values = [
    {
      icon: FaRegHandshake,
      title: "Cortesía",
      description: "Respeto hacia el maestro, los compañeros y uno mismo.",
      color: "text-blue-500",
    },
    {
      icon: FaBalanceScale,
      title: "Integridad",
      description: "Actuar con honestidad, incluso cuando nadie te ve.",
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

  const taekwondoMeanings = [
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

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnLastSnap: true }) // Aumentado delay un poco
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ">
      <section className="text-center mb-16 sm:mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Filosofía del Taekwondo
        </h1>
        <blockquote className="relative text-xl sm:text-2xl italic text-gray-600 dark:text-gray-300 max-w-3xl mx-auto p-4 border-l-4 border-gray-700 bg-gray-50 dark:bg-gray-800/30 rounded-r-md">
          "El objetivo último del Taekwondo no es vencer al oponente, sino
          vencer nuestros propios límites."
        </blockquote>
      </section>

      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl  font-semibold text-gray-900 dark:text-white mb-8 text-center sm:text-left">
          ¿Qué significa Taekwondo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {taekwondoMeanings.map((item, index) => (
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
          <strong>Taekwondo</strong> significa "el camino del pie y del puño" —
          una filosofía de vida, no solo una técnica de combate.
        </p>
      </section>

      {/* Valores con íconos - Carrusel mostrando 1 en móvil, 3 en md+ */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12 text-center">
          Valores Fundamentales
        </h2>
        <Carousel
          plugins={[autoplayPlugin.current]}
          // El ancho del carrusel ahora debe ser suficiente para 3 tarjetas en md+
          className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.reset()}
          opts={{
            align: "start", // 'start' es bueno cuando no es loop y tienes múltiples items
            loop: false,
            // slidesToScroll: 1, // Por defecto es 1. Si muestras 3 y quieres que avance de 3 en 3, pon 3.
            // Pero para 5 items, avanzar de 1 en 1 es más fluido.
          }}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {" "}
            {/* Ajustar margen según el padding del item */}
            {values.map((value, index) => (
              <CarouselItem
                key={index}
                // CAMBIO CLAVE AQUÍ:
                className="pl-3 md:pl-4 basis-full md:basis-1/3"
                // basis-full por defecto (móvil, 1 item)
                // md:basis-1/3 para pantallas md y mayores (3 items)
              >
                <div className="p-1 h-full">
                  {" "}
                  {/* h-full para intentar igualar alturas si el contenido varía */}
                  <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden h-full">
                    {/* h-full en Card también */}
                    <CardContent className="flex flex-col items-center justify-center text-center p-3 sm:p-4 min-h-[230px] sm:min-h-[250px]">
                      {/* Mantenemos una min-h para consistencia, pero la altura se ajustará más con h-full */}
                      <value.icon
                        className={`${value.color} text-3xl sm:text-4xl mb-6 sm:mb-8 flex-shrink-0`}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-100 mb-1 sm:mb-1.5 leading-tight">
                        {value.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-snug line-clamp-3 sm:line-clamp-4">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-10px] sm:left-[-15px] md:left-[-20px] top-1/2 -translate-y-1/2 disabled:opacity-30 cursor-pointer z-10" />{" "}
          {/* z-10 para asegurar visibilidad */}
          <CarouselNext className="absolute right-[-10px] sm:right-[-15px] md:right-[-20px] top-1/2 -translate-y-1/2 disabled:opacity-30 cursor-pointer z-10" />
        </Carousel>
      </section>

      {/* Resto del contenido (sin cambios) */}
      <div className="space-y-16 sm:space-y-20">
        {/* ... secciones ... */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            El Saludo y la Disciplina
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            El saludo en Taekwondo es una expresión de cortesía, confianza y
            respeto entre alumno y profesor. Al iniciar la clase, el maestro
            saluda a la bandera y luego los alumnos se saludan entre ellos como
            muestra de respeto mutuo y preparación mental.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            El Significado del Uniforme
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            El uniforme tradicional, conocido como <strong>dobok</strong>, es de
            color blanco porque se basa en el color de fondo de la bandera de
            Corea. Este simboliza pureza, elegancia y respeto por la práctica.
            Es importante mantenerlo limpio y llevarlo con orgullo como símbolo
            del compromiso con uno mismo y con la disciplina.
          </p>
        </section>
      </div>
    </div>
  );
}

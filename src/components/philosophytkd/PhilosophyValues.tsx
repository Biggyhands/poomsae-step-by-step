import React from "react";

import { fundamentalValuesData } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function PhilosophyValues() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnLastSnap: true }) // Aumentado delay un poco
  );

  return (
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
          {fundamentalValuesData.map((value, index) => (
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
                      className={`${value.color} text-5xl sm:text-6xl mb-6 sm:mb-8 flex-shrink-0`}
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
  );
}

export default PhilosophyValues;

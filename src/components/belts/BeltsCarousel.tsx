"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { tkdBeltItems } from "@/lib/utils";

export default function BeltCarousel() {
  const autoplay = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnLastSnap: false })
  );

  return (
    <section className="my-16 sm:my-20">
      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900 dark:text-white">
        Progresión de Cinturones
      </h2>
      <Carousel
        plugins={[autoplay.current]}
        opts={{
          align: "start",
        }}
        className="w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {tkdBeltItems.map((belt, index) => {
            const IconComponent = belt.icon;

            return (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3"
              >
                <Card className="w-full h-full flex flex-col rounded-2xl shadow-lg text-center bg-white dark:bg-gray-800 group">
                  <CardContent className="p-6 flex flex-col items-center flex-grow">
                    <div className="w-24 h-24 mb-4 relative">
                      <Image
                        src={belt.image}
                        alt={belt.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center justify-center gap-2">
                      {belt.title}
                    </h3>
                    {IconComponent && (
                      <IconComponent
                        className={`
                          text-5xl my-2 cursor-pointer
                          ${belt.iconColorClass} 
                          transition-all duration-300 ease-in-out 
                          group-hover:-translate-y-1 group-hover:scale-105 
                        `}
                      />
                    )}
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-pretty">
                      {belt.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </section>
  );
}

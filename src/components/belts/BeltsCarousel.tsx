// BeltCarousel.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { GiBlackBelt } from "react-icons/gi";
import Image from "next/image";

const belts = [
  {
    title: "Cinturón Blanco",
    image: "/white-belt.svg",
    description:
      "El cinturón blanco representa pureza e inocencia. Los estudiantes en esta etapa se enfocan en aprender técnicas básicas y entender los principios del Taekwondo. Marca el inicio de su camino en las artes marciales.",
  },
  {
    title: "Cinturón Amarillo",
    image: "/yellow-belt.png",
    description:
      "El cinturón amarillo simboliza los primeros rayos de sol que dan vida a la semilla. Los estudiantes comienzan a aprender movimientos más complejos y construyen una base sólida en Taekwondo.",
  },
  {
    title: "Cinturón Verde",
    image: "/green-belt.svg",
    description:
      "El cinturón verde representa crecimiento, como el de las plantas que se elevan hacia el sol. Los estudiantes desarrollan mejores técnicas y una comprensión más profunda de la práctica.",
  },
  {
    title: "Cinturón Azul",
    image: "/blue-belt.svg",
    description:
      "El cinturón azul simboliza el cielo, hacia donde crece la planta, alcanzando nuevas alturas. Los estudiantes comienzan a perfeccionar sus técnicas y ganan más confianza en sus habilidades.",
  },
  {
    title: "Cinturón Rojo",
    image: "/red-belt.svg",
    description:
      "El cinturón rojo representa peligro y precaución, recordando a los estudiantes que deben tener control y disciplina en su entrenamiento. Se enfatiza el dominio de técnicas avanzadas.",
  },
  {
    title: "Cinturón Negro",
    image: "/black-belt.svg",
    description:
      "El cinturón negro es la meta final, simbolizando un alto nivel de competencia y entendimiento. Representa la culminación del entrenamiento constante y el comienzo de una nueva etapa en las artes marciales.",
  },
];

export default function BeltCarousel() {
  return (
    <div className="w-full max-w-md mx-auto py-10">
      <Carousel>
        <CarouselContent>
          {belts.map((belt, index) => (
            <CarouselItem key={index} className="p-4">
              <Card className="rounded-3xl shadow-xl p-6 bg-white flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 relative">
                  <Image
                    src={belt.image}
                    alt={belt.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 text-xl font-bold">
                  <span>{belt.title}</span>
                  <GiBlackBelt size={24} className="text-gray-700" />
                </div>
                <p className="text-gray-600 text-sm">{belt.description}</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between mt-4 px-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}

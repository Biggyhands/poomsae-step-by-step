// components/TaekwondoInfoSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Historia del Taekwondo",
    description:
      "El Taekwondo tiene raíces antiguas en Corea, evolucionando a través de los siglos hasta convertirse en un arte marcial moderno reconocido globalmente.",
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
      "El sistema de cinturones representa el progreso del estudiante, desde el blanco de principiante hasta el negro, símbolo de maestría y responsabilidad.",
    image: "/belts.jpg",
    link: "/cinturones",
  },
];

const TaekwondoInfoSection = () => {
  return (
    <section className="py-10 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Link href={card.link} key={index}>
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 8px 24px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-lg overflow-hidden cursor-pointer"
            >
              <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <CardContent className="p-5">
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TaekwondoInfoSection;

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

import { taekwondoCards } from "@/lib/utils";

const TaekwondoInfoSection = () => {
  {
    /*the app maps an array and display some basic info  */
  }

  return (
    <section className="py-10 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {taekwondoCards.map((card, index) => (
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
              <Card className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md pt-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full aspect-[4/3] object-cover rounded-lg"
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

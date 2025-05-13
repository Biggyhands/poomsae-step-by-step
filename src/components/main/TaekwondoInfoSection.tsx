// components/TaekwondoInfoSection.tsx
"use client";

import { taekwondoCards } from "@/lib/utils";
import MainSeparator from "./MainSeparator";
import CardsGrid from "./CardsGrid";

const TaekwondoInfoSection = () => {
  {
    /*the app maps an array and display some basic info  */
  }

  return (
    <section className="py-10 px-4 bg-gray-100 dark:bg-gray-900">
      {/*I realised that this is the best way to reduce tons of repetitive code, just type in the prop the name of the section*/}
      <MainSeparator title="Generalidades" />
      <CardsGrid cards={taekwondoCards} />
    </section>
  );
};

export default TaekwondoInfoSection;

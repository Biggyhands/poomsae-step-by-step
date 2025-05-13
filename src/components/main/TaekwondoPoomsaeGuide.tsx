"use client";
import MainSeparator from "./MainSeparator";
import CardsGrid from "./CardsGrid";
import { poomsaeGuideCards } from "@/lib/utils";

function TaekwondoPoomsaeGuide() {
  return (
    <section className="py-10 px-4 bg-gray-100 dark:bg-gray-900">
      <MainSeparator title="Guía de Poomsae" />
      <CardsGrid cards={poomsaeGuideCards} />
    </section>
  );
}

export default TaekwondoPoomsaeGuide;

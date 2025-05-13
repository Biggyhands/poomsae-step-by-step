"use client";
import React from "react";
import CardsGrid from "./CardsGrid";

import { taekwondoCompetitionsCards } from "@/lib/utils";
import MainSeparator from "./MainSeparator";

function TaekwondoCompetitionSection() {
  return (
    <section className="py-10 px-4 bg-gray-100 dark:bg-gray-900">
      <MainSeparator title="Competencias" />
      <CardsGrid cards={taekwondoCompetitionsCards} />
    </section>
  );
}

export default TaekwondoCompetitionSection;

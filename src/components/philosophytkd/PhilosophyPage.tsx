"use client";

import React from "react";

import PhilosophyTitle from "./PhilosophyTitle";
import GreetingsPhylosophy from "./GreetingsPhylosophy";
import UniformPhilosophy from "./UniformPhilosophy";
import PhilosophyMeaningSection from "./PhilosophyMeaningSection";
import PhilosophyValues from "./PhilosophyValues";

export default function PhilosophyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ">
      {/*Title*/}

      <PhilosophyTitle />

      {/* Taekwondo meaning section */}

      <PhilosophyMeaningSection />

      {/* Values section*/}

      <PhilosophyValues />

      {/* Bottom section */}

      <div className="space-y-16 sm:space-y-20">
        {/* ... Greeting section ... */}

        <GreetingsPhylosophy />

        {/* ... Uniform meaning section ... */}

        <UniformPhilosophy />
      </div>
    </div>
  );
}

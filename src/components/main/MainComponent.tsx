import React from "react";
import Hero from "./Hero";
import TaekwondoInfoSection from "./TaekwondoInfoSection";
import TaekwondoCompetitionSection from "./TaekwondoCompetitionSection";

function MainComponent() {
  return (
    <main>
      <Hero />
      <TaekwondoInfoSection />
      <TaekwondoCompetitionSection />
    </main>
  );
}

export default MainComponent;

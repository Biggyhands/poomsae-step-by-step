import React from "react";
import Hero from "./Hero";
import TaekwondoInfoSection from "./TaekwondoInfoSection";
import TaekwondoCompetitionSection from "./TaekwondoCompetitionSection";
import TaekwondoPoomsaeGuide from "./TaekwondoPoomsaeGuide";

function MainComponent() {
  return (
    <main>
      <Hero />
      <TaekwondoInfoSection />
      <TaekwondoCompetitionSection />
      <TaekwondoPoomsaeGuide />
    </main>
  );
}

export default MainComponent;

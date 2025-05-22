import React from "react";
import Hero from "./Hero";
import TaekwondoInfoSection from "./TaekwondoInfoSection";
import TaekwondoCompetitionSection from "./TaekwondoCompetitionSection";
import TaekwondoPoomsaeGuide from "./TaekwondoPoomsaeGuide";
import MainNav from "@/components/navbar/MainNav";
import Footer from "@/components/navbar/Footer";

function MainComponent() {
  return (
    <main>
      <MainNav />
      <Hero />
      <TaekwondoInfoSection />
      <TaekwondoCompetitionSection />
      <TaekwondoPoomsaeGuide />
      <Footer />
    </main>
  );
}

export default MainComponent;

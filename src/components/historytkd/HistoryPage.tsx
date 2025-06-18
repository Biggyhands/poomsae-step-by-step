"use client";

import React from "react";

import TitleHistory from "./TitleHistory";
import OriginHistory from "./OriginHistory";
import AdittionalHistoryContext from "./AdittionalHistoryContext";
import TimeLineHistory from "./TimeLineHistory";
import ButtonBack from "../main/ButtonBack";

export default function HistoryPage() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto max-w-6xl">
        {/* Main Title */}
        <TitleHistory />
        {/* Origin */}
        <OriginHistory />
        {/* Time Line */}
        <TimeLineHistory />
        {/* Additional history context  */}
        <AdittionalHistoryContext />
        {/* Back to home button */}
        <ButtonBack />
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import TitleHistory from "./TitleHistory";
import OriginHistory from "./OriginHistory";
import AdittionalHistoryContext from "./AdittionalHistoryContext";
import TimeLineHistory from "./TimeLineHistory";

const MotionLink = motion(Link);

export default function HistoryPage() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
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
        <div className="text-center mt-16">
          <MotionLink
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-900 transition"
          >
            Volver al inicio
          </MotionLink>
        </div>
      </div>
    </section>
  );
}

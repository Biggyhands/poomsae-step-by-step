"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        {/* Reemplaza esta imagen por la tuya */}
        <div className="w-16 h-16 bg-black dark:bg-white rounded-md" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800 dark:text-gray-100"
      >
        Mejora tu conocimiento en <br className="hidden sm:block" />
        taekwondo
      </motion.h1>
    </section>
  );
}

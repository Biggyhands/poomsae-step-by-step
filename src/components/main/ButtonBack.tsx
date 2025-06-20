import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

function ButtonBack() {
  return (
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
  );
}

export default ButtonBack;

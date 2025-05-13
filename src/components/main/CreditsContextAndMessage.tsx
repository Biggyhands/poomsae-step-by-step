import React from "react";
import { GraduationCap, Heart } from "lucide-react";

export default function CreditsContextAndMessage() {
  return (
    <div className="space-y-6 text-center  text-gray-700 dark:text-gray-300">
      {/* Contexto académico */}
      <div className="flex items-center justify-center gap-2 text-lg font-medium text-gray-800 dark:text-gray-200">
        <GraduationCap className="w-7 h-7" />
        Proyecto de práctica
      </div>
      <p className="text-sm max-w-xl mx-auto text-gray-600 dark:text-gray-400">
        Como{" "}
        <strong className="text-gray-800 dark:text-gray-200">
          Ingeniero de Software
        </strong>{" "}
        y desarrollador{" "}
        <strong className="text-gray-800 dark:text-gray-200">Front-End</strong>,
        tuve la oportunidad de practicar y aplicar mis conocimientos creando
        esta aplicación web, diseñada para ayudar a los practicantes de
        Taekwondo a aprender y reforzar sus{" "}
        <strong className="text-gray-800 dark:text-gray-200">poomsae</strong>,
        además de brindarles acceso a información útil sobre el arte marcial.
      </p>

      {/* Mensaje final */}
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
        Hecha con <Heart className="inline text-red-500 w-4 h-4" /> para mejorar
        como desarrollador.
      </p>
    </div>
  );
}

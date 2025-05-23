import React from "react";
import Image from "next/image";
import {
  FaHandPeace,
  FaBalanceScale,
  FaFireAlt,
  FaBrain,
  FaFistRaised,
} from "react-icons/fa";

export default function PhilosophyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Filosofía del Taekwondo
      </h1>

      {/* Frase destacada */}
      <blockquote className="italic text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
        "El objetivo último del Taekwondo no es vencer al oponente, sino vencer
        nuestros propios límites."
      </blockquote>

      {/* Significado del nombre */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          ¿Qué significa Taekwondo?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          <strong>Tae (태):</strong> acción de golpear con el pie. <br />
          <strong>Kwon (권):</strong> acción de golpear con el puño. <br />
          <strong>Do (도):</strong> camino, vía o disciplina.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Taekwondo es entonces "el camino del pie y del puño" — una filosofía
          de vida, no solo una técnica de combate.
        </p>
      </div>

      {/* Valores con íconos */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Valores fundamentales</h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <FaHandPeace className="text-blue-500 mt-1" />
            <span>
              <strong>Cortesía:</strong> Respeto hacia el maestro, los
              compañeros y uno mismo.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaBalanceScale className="text-yellow-600 mt-1" />
            <span>
              <strong>Integridad:</strong> Actuar con honestidad, incluso cuando
              nadie te ve.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaFireAlt className="text-red-500 mt-1" />
            <span>
              <strong>Perseverancia:</strong> Persistir y no rendirse ante los
              desafíos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaBrain className="text-purple-500 mt-1" />
            <span>
              <strong>Autocontrol:</strong> Dominar impulsos y emociones,
              mantener la calma.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <FaFistRaised className="text-green-600 mt-1" />
            <span>
              <strong>Coraje:</strong> Afrontar los miedos con valentía y
              determinación.
            </span>
          </li>
        </ul>
      </div>

      {/* Ritual de saludo */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          El saludo y la disciplina
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          El saludo en Taekwondo es una expresión de cortesía, confianza y
          respeto entre alumno y profesor. Al iniciar la clase, el maestro
          saluda a la bandera y luego los alumnos se saludan entre ellos como
          muestra de respeto mutuo y preparación mental.
        </p>
      </div>

      {/* Significado del uniforme */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          El significado del uniforme
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          El uniforme tradicional, conocido como <strong>dobok</strong>, es de
          color blanco porque se basa en el color de fondo de la bandera de
          Corea. Este simboliza pureza, elegancia y respeto por la práctica. Es
          importante mantenerlo limpio y llevarlo con orgullo como símbolo del
          compromiso con uno mismo y con la disciplina.
        </p>
      </div>

      {/* Sección sobre la mente y el cuerpo */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Una práctica del cuerpo y la mente
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Antes de cada práctica, el alumno respira profundamente, se centra y
          se conecta con su propósito. El Taekwondo no solo entrena el cuerpo,
          sino también la mente: la atención, la paciencia, la calma y la
          reflexión son partes esenciales del proceso de aprendizaje.
        </p>
      </div>

      {/* CTA final */}
      <div className="mt-12 bg-blue-100 dark:bg-blue-900 p-6 rounded-lg text-center">
        <h3 className="text-xl font-semibold mb-2">
          Practicar Taekwondo es más que entrenar el cuerpo.
        </h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Es caminar un camino de respeto, fuerza interior y crecimiento
          constante.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Descubre tu potencial
        </button>
      </div>
    </div>
  );
}

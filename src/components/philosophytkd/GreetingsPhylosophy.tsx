import React from "react";
import Image from "next/image";

function GreetingsPhylosophy() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          El Saludo y la Disciplina
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          El saludo en Taekwondo es una expresión de cortesía, confianza y
          respeto entre alumno y profesor. Al iniciar la clase, el maestro
          saluda a la bandera y luego los alumnos se saludan entre ellos como
          muestra de respeto mutuo y preparación mental.
        </p>
      </div>

      <div className="md:w-1/2">
        <Image
          width={500}
          height={500}
          src="/greeting-taekwondo.png"
          alt="Saludo en Taekwondo"
          className="w-full rounded-lg shadow-md object-cover"
        />
      </div>
    </section>
  );
}

export default GreetingsPhylosophy;

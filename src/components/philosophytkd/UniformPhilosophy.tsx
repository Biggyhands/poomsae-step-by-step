import React from "react";
import Image from "next/image";

function UniformPhilosophy() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="order-1 md:order-2 md:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          El Significado del Uniforme
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          El uniforme tradicional, conocido como <strong>dobok</strong>, es de
          color blanco porque se basa en el color de fondo de la bandera de
          Corea. Este simboliza pureza, elegancia y respeto por la práctica. Es
          importante mantenerlo limpio y llevarlo con orgullo como símbolo del
          compromiso con uno mismo y con la disciplina.
        </p>
      </div>

      <div className="order-2 md:order-1 md:w-1/2">
        <Image
          width={500}
          height={500}
          src="/uniform-taekwondo.png"
          alt="Dobok tradicional de Taekwondo"
          className="rounded-lg shadow-md w-full object-cover max-h-[400px]"
        />
      </div>
    </section>
  );
}

export default UniformPhilosophy;

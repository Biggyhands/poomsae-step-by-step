import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-50 dark:bg-gray-900 ">
      <h1 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
        Mejora tu conocimiento en Taekwondo
      </h1>
      <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
        <img
          src="/tkd.png"
          alt="Taekwondo ilustración"
          className="w-full h-full object-contain rounded-full bg-white"
        />
      </div>
      <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
        Aprende los pasos de cada poomsae y mejora tu técnica.
      </p>
    </section>
  );
}

export default Hero;

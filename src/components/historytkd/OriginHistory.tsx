import React from "react";
import Image from "next/image";

function OriginHistory() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
      <div>
        <h2 className="text-2xl font-bold mb-4">Orígenes y desarrollo</h2>
        <p className="text-gray-700 dark:text-gray-300">
          El Taekwondo tiene sus raíces en Corea, influenciado por antiguas
          artes marciales como el <strong>Taekkyeon</strong> y el{" "}
          <strong>Subak</strong>, además de influencias de artes marciales
          chinas y japonesas durante el siglo XX. Tras la liberación de Corea en
          1945, varios maestros comenzaron a unificar estilos y técnicas, lo que
          eventualmente llevó a la creación del Taekwondo como una disciplina
          moderna. En 1955, el general <strong>Choi Hong Hi</strong> propuso
          oficialmente el nombre &quot;Taekwondo&quot;, que significa &quot;el
          camino del pie y la mano&quot;.
        </p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          A lo largo de los años, el Taekwondo ha evolucionado de un arte
          marcial tradicional a un deporte olímpico reconocido
          internacionalmente, combinando técnicas de defensa personal,
          disciplina mental y desarrollo físico.
        </p>
      </div>

      <div className="rounded-lg overflow-hidden">
        <Image
          src="/taekwondo-history.png"
          alt="Historia del Taekwondo"
          width={600}
          height={400}
          className="rounded-xl shadow-md object-cover w-full"
        />
      </div>
    </div>
  );
}

export default OriginHistory;

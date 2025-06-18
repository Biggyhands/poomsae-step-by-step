import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const historyItems = [
  {
    id: "history-1",
    title: "Influencia japonesa y ocupación (1910–1945)",
    content: (
      <>
        <p>
          Durante la ocupación japonesa de Corea, las artes marciales
          tradicionales fueron prohibidas. Los coreanos se vieron obligados a
          practicar disciplinas japonesas como el <strong>karate</strong> o el{" "}
          <strong>judo</strong>. Estas influencias técnicas se reflejaron más
          tarde en las primeras escuelas (<em>kwans</em>) que darían origen al
          Taekwondo moderno.
        </p>
      </>
    ),
  },
  {
    id: "history-2",
    title: "Etapas previas a la unificación",
    content: (
      <>
        <p>
          Después de la liberación de Corea, surgieron diversas escuelas de
          artes marciales como <strong>Chung Do Kwan</strong>,{" "}
          <strong>Moo Duk Kwan</strong> y <strong>Song Moo Kwan</strong>. Cada
          una tenía técnicas únicas, y el gobierno coreano promovió su
          unificación bajo el nombre de Taekwondo.
        </p>
      </>
    ),
  },
  {
    id: "history-3",
    title: "Creación del Kukkiwon (1972–1973)",
    content: (
      <>
        <p>
          El <strong>Kukkiwon</strong>, conocido como la sede mundial del
          Taekwondo, se construyó en Seúl en 1972. Desde entonces, se encarga de
          la estandarización técnica, la certificación de grados y la promoción
          global del Taekwondo como deporte y arte marcial.
        </p>
      </>
    ),
  },
  {
    id: "history-4",
    title: "Disputa entre ITF y WT",
    content: (
      <>
        <p>
          En los años 70 surgieron dos ramas principales: la{" "}
          <strong>ITF</strong> (fundada por el General Choi Hong Hi) y la{" "}
          <strong>WT</strong> (reconocida por el COI). Ambas difieren en formas,
          reglas y estilo, pero promueven valores comunes del Taekwondo.
        </p>
      </>
    ),
  },
  {
    id: "history-5",
    title: "Taekwondo en la actualidad",
    content: (
      <>
        <p>
          Hoy, el Taekwondo cuenta con más de{" "}
          <strong>80 millones de practicantes</strong> en todo el mundo. Es un
          deporte olímpico, una disciplina formativa y una herramienta para el
          desarrollo físico y mental de millones de personas.
        </p>
      </>
    ),
  },
];

function AdittionalHistoryContext() {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Más sobre la Historia del Taekwondo
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {historyItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-white dark:bg-gray-700 shadow-sm rounded-lg"
            >
              <AccordionTrigger className="text-left hover:no-underline px-6 py-4 font-medium text-gray-800 dark:text-gray-100 cursor-pointer">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default AdittionalHistoryContext;

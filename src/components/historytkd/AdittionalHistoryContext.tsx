import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AdittionalHistoryContext() {
  return (
    <section className="mt-20 px-4 sm:px-8 lg:px-16 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-10">
        Más sobre la Historia del Taekwondo
      </h2>

      <Accordion type="single" collapsible className="space-y-4 ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer">
            Influencia japonesa y ocupación (1910–1945)
          </AccordionTrigger>
          <AccordionContent>
            Durante la ocupación japonesa de Corea, las artes marciales
            tradicionales fueron prohibidas. Los coreanos se vieron obligados a
            practicar disciplinas japonesas como el <strong>karate</strong> o el{" "}
            <strong>judo</strong>. Estas influencias técnicas se reflejaron más
            tarde en las primeras escuelas (<em>kwans</em>) que darían origen al
            Taekwondo moderno.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer">
            Etapas previas a la unificación
          </AccordionTrigger>
          <AccordionContent>
            Después de la liberación de Corea, surgieron diversas escuelas de
            artes marciales como <strong>Chung Do Kwan</strong>,{" "}
            <strong>Moo Duk Kwan</strong> y <strong>Song Moo Kwan</strong>. Cada
            una tenía técnicas únicas, y el gobierno coreano promovió su
            unificación bajo el nombre de Taekwondo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer">
            Creación del Kukkiwon (1972–1973)
          </AccordionTrigger>
          <AccordionContent>
            El <strong>Kukkiwon</strong>, conocido como la sede mundial del
            Taekwondo, se construyó en Seúl en 1972. Desde entonces, se encarga
            de la estandarización técnica, la certificación de grados y la
            promoción global del Taekwondo como deporte y arte marcial.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="cursor-pointer">
            Disputa entre ITF y WT
          </AccordionTrigger>
          <AccordionContent>
            En los años 70 surgieron dos ramas principales: la{" "}
            <strong>ITF</strong>
            (fundada por el General Choi Hong Hi) y la <strong>WT</strong>
            (reconocida por el COI). Ambas difieren en formas, reglas y estilo,
            pero promueven valores comunes del Taekwondo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="cursor-pointer">
            Taekwondo en la actualidad
          </AccordionTrigger>
          <AccordionContent>
            Hoy, el Taekwondo cuenta con más de{" "}
            <strong>80 millones de practicantes</strong> en todo el mundo. Es un
            deporte olímpico, una disciplina formativa y una herramienta para el
            desarrollo físico y mental de millones de personas.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default AdittionalHistoryContext;

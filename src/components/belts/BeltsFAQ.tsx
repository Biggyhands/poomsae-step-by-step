import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Asegúrate que la ruta sea correcta

const beltFaqs = [
  {
    id: "faq-1",
    question: "¿Qué tan seguido se puede ascender de cinturón?",
    answer: (
      <>
        <p>
          El tiempo entre ascensos de cinturón (GUP) varía significativamente
          según la escuela, la dedicación del estudiante y su progreso
          individual. Generalmente:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Cinturones iniciales (blanco a verde/azul):</strong> Suele
            ser entre 3 a 6 meses de entrenamiento constante por cada grado.
          </li>
          <li>
            <strong>Cinturones avanzados (azul/rojo a negro):</strong> El tiempo
            se incrementa, pudiendo ser de 6 meses a 1 año o más por grado.
          </li>
        </ul>
        <p className="mt-2">
          La decisión final siempre recae en el instructor, quien evalúa si el
          estudiante está listo técnica, física y mentalmente.
        </p>
      </>
    ),
  },
  {
    id: "faq-2",
    question:
      "¿Cuáles son los aspectos que se evalúan en los exámenes de ascenso?",
    answer: (
      <>
        <p>
          Los exámenes de Taekwondo son comprensivos y evalúan diversas áreas:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>Técnicas básicas (Kibon Donjak):</strong> Precisión,
            potencia y balance en patadas, golpes, bloqueos y posturas.
          </li>
          <li>
            <strong>Formas (Poomsae / Hyong / Tul):</strong> Memorización,
            secuencia correcta, ritmo, concentración, expresión de energía y
            comprensión de las aplicaciones.
          </li>
          <li>
            <strong>Combate (Kyorugi / Matsogi):</strong> Puede incluir combate
            libre, combate a un paso (Ilbo Kyorugi), combate a tres pasos (Sambo
            Kyorugi) o combate preestablecido. Se evalúa la aplicación de
            técnicas, estrategia, control y espíritu combativo.
          </li>
          <li>
            <strong>Defensa Personal (Hosinsool):</strong> Aplicación de
            técnicas para defenderse de agarres o ataques comunes.
          </li>
          <li>
            <strong>Rompimientos (Kyokpa):</strong> (Opcional según la escuela y
            el nivel) Demostración de potencia, precisión y enfoque.
          </li>
          <li>
            <strong>Conocimiento Teórico:</strong> Terminología coreana,
            historia del Taekwondo, filosofía y significado de las formas.
          </li>
          <li>
            <strong>Actitud y Espíritu Marcial:</strong> Respeto, disciplina,
            perseverancia, autocontrol y cortesía demostrados durante el examen
            y en clase.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "faq-3",
    question: "¿Cuánto tiempo toma llegar a cinturón negro?",
    answer: (
      <p>
        Llegar a cinturón negro (1er Dan) es un logro significativo que
        generalmente toma entre 3 y 5 años de entrenamiento constante y
        dedicado. Sin embargo, esto es una estimación y puede variar mucho según
        la escuela, la frecuencia de entrenamiento del individuo, su habilidad
        natural y su compromiso. Lo importante es el viaje y el aprendizaje
        continuo, no solo alcanzar un color de cinturón.
      </p>
    ),
  },
  {
    id: "faq-4",
    question: "¿Qué significa ser cinturón negro?",
    answer: (
      <>
        <p>
          Alcanzar el cinturón negro no es el final del camino en Taekwondo,
          sino más bien un nuevo comienzo. Significa que el estudiante ha
          dominado los fundamentos y está listo para un aprendizaje más profundo
          y especializado. Se espera de un cinturón negro:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Un alto nivel de competencia técnica.</li>
          <li>Madurez, responsabilidad y liderazgo.</li>
          <li>Humildad y deseo de seguir aprendiendo.</li>
          <li>Ser un ejemplo para los estudiantes de menor grado.</li>
          <li>
            Comprensión y vivencia de los principios del Taekwondo (cortesía,
            integridad, perseverancia, autocontrol, espíritu indomable).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "faq-5",
    question: "¿Existen cinturones intermedios o 'puntas'?",
    answer: (
      <p>
        Sí, muchas escuelas utilizan "puntas" (franjas de color en el extremo
        del cinturón) o incluso cinturones con dos colores (ej. blanco con punta
        amarilla) para marcar el progreso entre los grados GUP completos. Esto
        es especialmente común en programas para niños, ya que proporciona metas
        más cortas y frecuentes, ayudando a mantener la motivación y a reconocer
        el esfuerzo constante. La estructura exacta varía entre escuelas y
        organizaciones.
      </p>
    ),
  },
  // Puedes añadir más preguntas aquí
];

function BeltsFAQ() {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-800 w-full">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Preguntas Frecuentes sobre Cinturones
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {beltFaqs.map((faq) => (
            <AccordionItem
              value={faq.id}
              key={faq.id}
              className="bg-white dark:bg-gray-700 shadow-sm rounded-lg"
            >
              <AccordionTrigger className="text-left hover:no-underline px-6 py-4 font-medium text-gray-800 dark:text-gray-100 cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default BeltsFAQ;

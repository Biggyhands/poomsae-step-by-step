import React from "react";

const beltLevelsData = [
  {
    category: "Principiante",
    belts: "Blanco, Amarillo, verde ",
  },

  {
    category: "Avanzado",
    belts: " Azul, Rojo",
  },
  {
    category: "Cinturón Negro",
    belts: "1er DAN en adelante",
  },
];

const BeltLevelsTable = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div className="font-bold text-gray-700 dark:text-gray-200">
            Categoría General
          </div>
          <div className="font-bold text-gray-700 dark:text-gray-200">
            Grados
          </div>

          <div className="col-span-2 border-t border-gray-200 dark:border-gray-700 my-2"></div>

          {beltLevelsData.map((level) => (
            <React.Fragment key={level.category}>
              <div className="font-semibold text-gray-800 dark:text-white">
                {level.category}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {level.belts}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeltLevelsTable;

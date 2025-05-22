import React from "react";
import { taekwondohistoryTimeLine } from "@/lib/utils";
import { motion } from "framer-motion";

function TimeLineHistory() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8">
        Línea de tiempo de hitos importantes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {taekwondohistoryTimeLine.map((event, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {event.year}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {event.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TimeLineHistory;

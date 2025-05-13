import React from "react";
import { MainSeparatorProps } from "@/lib/types/globals";

function MainSeparator({ title }: MainSeparatorProps) {
  return (
    <>
      {/*I realised that this is the best way to reduce tons of repetitive code, just type in the prop the name of the section*/}

      <div className="text-center py-5">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <div className="w-24 h-1 mx-auto mt-2 bg-gray-950 dark:bg-white rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"></div>
    </>
  );
}

export default MainSeparator;

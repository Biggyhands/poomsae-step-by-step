import React from "react";
import { Code, Wind, Component, Smile } from "lucide-react";
import { TechnologyInfo } from "@/lib/types/globals";

export const technologies: TechnologyInfo[] = [
  {
    name: "Next.js",
    icon: <Code className="w-5 h-5 text-gray-700 dark:text-white" />,
  },
  {
    name: "React.js",
    icon: <Code className="w-5 h-5 text-gray-700 dark:text-white" />,
  },
  {
    name: "Tailwind CSS",
    icon: <Wind className="w-5 h-5 text-gray-700 dark:text-white" />,
  },
  {
    name: "Shadcn/ui",
    icon: <Component className="w-5 h-5 text-gray-700 dark:text-white" />,
  },
  {
    name: "Lucide",
    icon: <Smile className="w-5 h-5 text-gray-700 dark:text-white" />,
  },
];

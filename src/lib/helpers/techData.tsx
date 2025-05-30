import React from "react";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiLucide,
  SiTypescript,
  SiReact,
} from "react-icons/si";

import { TechnologyInfo } from "@/lib/types/globals";

export const technologies: TechnologyInfo[] = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" />,
  },
  {
    name: "React.js",
    icon: <SiReact className="w-5 h-5 text-sky-500" />,
  },
  {
    name: "Typescript",
    icon: <SiTypescript className="w-5 h-5 text-sky-700" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-5 h-5 text-sky-600" />,
  },
  {
    name: "Shadcn/ui",
    icon: <SiShadcnui className="w-5 h-5 text-gray-700 dark:text-gray-300" />,
  },
  {
    name: "Lucide",
    icon: <SiLucide className="w-5 h-5 text-orange-500" />,
  },
  {
    name: "React-icons",
    icon: <SiReact className="w-5 h-5 text-red-500" />,
  },
];

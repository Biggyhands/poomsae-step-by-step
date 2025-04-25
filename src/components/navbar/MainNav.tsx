"use client";
{
  /*Frame-motion needs to be run in the browser, thats why this componente has to be CSR*/
}
import { motion } from "framer-motion";
import SwitchAndToogles from "./SwitchAndToogles";
import { useTheme } from "@/lib/context/ThemeContext";

import AppTitle from "./AppTitle";
import DropDownMenu from "./DropDownMenu";

export default function MainNav() {
  const { darkMode } = useTheme();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow-md transition-colors duration-500`}
    >
      {/* Motion its used to animate the navbar at the header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/*Logo and App title*/}
        <AppTitle />

        {/* Drop down menu / display navigation options */}
        <DropDownMenu />

        {/* Lenguage and Dark mode toggles*/}
        <SwitchAndToogles />
      </div>
    </motion.header>
  );
}

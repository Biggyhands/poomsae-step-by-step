import React from "react";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/context/ThemeContext";

import { SwitchAndTooglesProps } from "@/lib/types/globals";

export default function SwitchAndToogles() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center space-x-4">
      {/* Dark mode toggle */}
      <div className="flex items-center space-x-1 ">
        <Sun size={16} />
        <Switch
          className="cursor-pointer"
          checked={darkMode}
          onCheckedChange={() => toggleDarkMode()}
        />
        <Moon size={16} />
      </div>

      {/* Lenguage Switch */}
      <div className="flex space-x-2">
        <button className="text-lg">🇪🇸</button>
        <button className="text-lg">🇬🇧</button>
      </div>
    </div>
  );
}

import React from "react";

function AppTitle() {
  return (
    <div className="flex items-center space-x-3">
      <img
        src="/tkdicon.png"
        className="w-8 h-8 rounded-full"
        alt="Poomsae Step by Step Logo"
      />
      {/*the app title switches with the width of the device */}
      <span className="text-lg font-bold">
        <span className="block md:hidden">Poomsae SbS</span>
        <span className="hidden md:block">Poomsae Step by Step</span>
      </span>
    </div>
  );
}

export default AppTitle;

import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function DropDownMenu() {
  return (
    <nav className="hidden md:flex space-x-6">
      {/*Navigation Options*/}

      {/*Generalities Option */}

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 hover:underline cursor-pointer">
          <span>Generalidades</span>
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/history">Historia del Taekwondo</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/philosophy">Filosofía (Valores)</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/belts">Cinturones y sus significados</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/*Competitive Option */}

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 hover:underline cursor-pointer">
          <span>Competencia</span>
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/kyorugi">Kyorugi y sus reglas</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/poomsae">Poomsae y sus reglas</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/*Poomsae Guide Option */}

      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center space-x-1 hover:underline cursor-pointer">
          <span>Guía de Poomsae</span>
          <ChevronDown size={16} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/principiantes">Poomsae principiantes</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/avanzados">Poomsae avanzados</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/cinturones-negros">Poomsae cinturones negros</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

export default DropDownMenu;

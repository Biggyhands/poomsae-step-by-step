import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  BookOpenText,
  PersonStanding,
  BookMarked,
  Languages,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function MainNav() {
  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link href={href} legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {children}
      </NavigationMenuLink>
    </Link>
  );

  return (
    <>
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink href="/">
                <Home className="h-4 w-4 mr-1" /> Inicio
              </NavLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BookOpenText className="h-4 w-4 mr-1" /> Generalidades
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/docs/general/historia" title="Historia">
                    Orígenes y evolución del Taekwondo.
                  </ListItem>
                  <ListItem
                    href="/docs/general/filosofia"
                    title="Filosofía y Valores"
                  >
                    Principios fundamentales del Taekwondo.
                  </ListItem>
                  <ListItem
                    href="/docs/general/reglas-combate"
                    title="Reglas de Combate"
                  >
                    Normas para el Kyorugi.
                  </ListItem>
                  <ListItem
                    href="/docs/general/reglas-poomsae"
                    title="Reglas de Poomsae"
                  >
                    Directrices para la ejecución de Poomsae.
                  </ListItem>
                  <ListItem
                    href="/docs/general/cinturones"
                    title="Cinturones y Significados"
                  >
                    Significado de los colores de los cinturones.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <PersonStanding className="h-4 w-4 mr-1" /> Poomsae
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem
                    href="/docs/poomsae/principiantes"
                    title="Poomsae Principiantes"
                  >
                    Introducción a los Poomsae básicos.
                  </ListItem>
                  <ListItem
                    href="/docs/poomsae/avanzados"
                    title="Poomsae Avanzados"
                  >
                    Poomsae para niveles intermedios y avanzados.
                  </ListItem>
                  <ListItem
                    href="/docs/poomsae/cintas-negras"
                    title="Poomsae Cintas Negras"
                  >
                    Poomsae para practicantes avanzados.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BookMarked className="h-4 w-4 mr-1" /> Recursos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem
                    href="/docs/recursos/vocabulario"
                    title="Diccionario de Vocabulario"
                  >
                    Términos comunes en Taekwondo.
                  </ListItem>
                  <ListItem
                    href="/docs/recursos/movimientos"
                    title="Guía de Movimientos"
                  >
                    Descripción de ataques, defensas y posturas.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="outline" size="icon" className="ml-auto">
          <Languages className="h-4 w-4" />
        </Button>
      </div>

      <div className="md:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-4 text-lg font-medium mt-6">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" /> Inicio
              </Link>
              <Link
                href="/docs/general/historia"
                className="flex items-center gap-2 pl-4"
              >
                Historia
              </Link>
              <Link
                href="/docs/general/filosofia"
                className="flex items-center gap-2 pl-4"
              >
                Filosofía y Valores
              </Link>
              <Link
                href="/docs/general/reglas-combate"
                className="flex items-center gap-2 pl-4"
              >
                Reglas de Combate
              </Link>
              <Link
                href="/docs/general/reglas-poomsae"
                className="flex items-center gap-2 pl-4"
              >
                Reglas de Poomsae
              </Link>
              <Link
                href="/docs/general/cinturones"
                className="flex items-center gap-2 pl-4"
              >
                Cinturones y Significados
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Button variant="outline" size="icon" className="ml-auto">
          <Languages className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

export default MainNav;

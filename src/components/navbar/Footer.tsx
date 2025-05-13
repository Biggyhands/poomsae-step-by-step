import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Credits */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
              Créditos
            </h3>
            <p className="text-sm text-gray-700 dark:text-white leading-relaxed">
              Este sitio es un proyecto personal creado con fines educativos
              como desarrollador frontend.
            </p>
          </div>

          {/* Legal warnings*/}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
              Aviso Legal
            </h3>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-white ">
              No poseo derechos sobre los assets utilizados. Todo el contenido
              es recopilado con fines informativos y educativos.
            </p>
          </div>

          {/* About the project */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
              Sobre el Proyecto
            </h3>
            <p className="text-sm ">
              <Link href="/about" className="text-blue-500 hover:underline">
                Más detalles aquí
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          {/* network*/}
          <p className="mb-2">
            <strong className="text-black dark:text-white">
              Redes / Portafolio:
            </strong>{" "}
            <Link
              href="https://www.linkedin.com/in/robertmanotas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </Link>{" "}
            |{" "}
            <Link
              href="https://github.com/Biggyhands"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </Link>{" "}
            |{" "}
            <Link href="/" className="text-blue-500 hover:underline">
              Correo
            </Link>
          </p>

          {/*Project date*/}
          <p className="text-gray-500">
            © 2025 - Proyecto Poomsae Step by Step
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

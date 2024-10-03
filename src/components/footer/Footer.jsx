import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer con enlaces del Navbar */}
      <footer className="bg-navbar py-4 text-base-content">
        <ul className="flex justify-center gap-4 mb-4 text-light">
          <li>
            <Link href="#inicio" className="hover:text-secondary">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#info_pago" className="hover:text-secondary">
              Info. Pago
            </Link>
          </li>
          <li>
            <Link href="#productos" className="hover:text-secondary">
              Productos y servicios
            </Link>
          </li>
          <li>
            <Link href="#curriculum" className="hover:text-secondary">
              CV
            </Link>
          </li>
        </ul>
      </footer>

      {/* Footer actual */}
      <footer className="text-center p-spacing-1 bg-footer text-sm text-base-content">
        <p className="text-size-1 sm:text-size-2 text-secondary">
          &copy; 2024 Anvetcorp SAS. All rights reserved.
        </p>
      </footer>
    </>
  );
}

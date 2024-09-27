

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Obtén la ruta actual

  return (
    <div className="navbar bg-dark text-size-3 px-4 flex items-center justify-between relative z-50">
      <div className="flex items-center space-x-4">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-bg-primary text-primary lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-spacing-1"
            >
              <path
                fillRule="evenodd"
                d="M2 2.75A.75.75 0 0 1 2.75 2h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 2.75Zm0 10.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2 6.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.25Zm0 3.5A.75.75 0 0 1 2.75 9h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-light rounded-box w-64 gap-2">
            <li>
              <Link className="text-primary" href="#inicio">
                Inicio
              </Link>
            </li>
            
            <li>
              <Link className="text-primary" href="#info_pago">
                Info. Pago
              </Link>
            </li>
            <li>
              <Link className="text-primary" href="#productos">
                Productos y servicios
              </Link>
            </li>
            <li>
              <Link className="text-primary" href="#curriculum">
                CV
              </Link>
            </li>
          </ul>
        </div>
        <Image
          src="/assets/images/logo.png"
          width={80}
          height={80}
          alt="Logo de Coop. Sup"
          suppressHydrationWarning
        />
        
      </div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal text-size-2 font-semibold px-1 gap-2">
          <li>
            <Link
              className={`nav-link ${pathname === "/" ? "text-terciary" : "text-primary"}`}
              href="#inicio"
            >
              Inicio
            </Link>
          </li>
          
          <li>
            <Link
              className={`nav-link ${pathname === "/faqs" ? "text-terciary" : "text-primary"}`}
              href="#info_pago"
            >
              Info. Pago
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${
                pathname === "/simulador-credito" ? "text-terciary" : "text-primary"
              }`}
              href="#productos"
            >
              Productos y servicios
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link ${pathname === "/contacto" ? "text-terciary" : "text-primary"}`}
              href="#curriculum"
            >
              CV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

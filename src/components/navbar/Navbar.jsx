import React from "react";
import Wendy from "../../../public/wendycarré.png";
import Link from "next/link";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "A propos", url: "/about" },
  { id: 3, title: "Projets", url: "/projects" },
  { id: 1, title: "Mon entreprise", url: "/wendev" },
  { id: 1, title: "Contact", url: "/contact" },
];
const Navbar = () => {
  return (
    <div>
      <nav
        role="navigation"
        aria-label="Barre de navigation"
        className="bg-slate-50 border-slate-100 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
      >
        <div className="container flex items-center justify-between mx-auto">
          <Link
            href="/"
            className="flex"
            alt="redirection vers la page d'accueil"
          >
            {/* <img src={Wendy} className="h-6 mr-3 sm:h-9" alt="Wendy Baqué" /> */}
            <span className="text-xl text-sky-800 self-center font-semibold whitespace-nowrap dark:text-white">
              Wendy Baqué
            </span>
          </Link>
          <div
            className="drop-shadow-2xl hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="flex p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li >
                {links.map((link) => (
                  <Link key={link.id} href={link.url} className="text-lg py-2 pl-3 pr-4 text-sky-800 dark:text-white">
                    {link.title}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

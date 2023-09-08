import React from "react";
import Wendy from "../../../public/wendycarré.png";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

function Footer() {
  return (
    <footer aria-label="Pied de page" className="p-4 bg-slate-50 sm:p-6 dark:bg-gray-900">
      <div className="md:flex md:justify-between">
        <Link
          href="/"
          className="flex items-center"
          alt="Retour en haut de la page"
        >
          {/* <img src={Wendy} className="h-8 mr-3" alt="Wendy Baqué" /> */}
          <span className="text-l text-sky-800 sm:text-center dark:text-gray-400">
            Made with ❤️ by {" "}
            <a href="https://linktr.ee/wendybaque" className="hover:underline" alt="Linktree de Wendy Baqué">
              Wendy Baqué © 2023
            </a>
          </span>
        </Link>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/AntiigoneWB"
              alt="Facebook de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
              className="text-sky-800 hover:text-gray-900 dark:hover:text-white"
            >
              <FacebookIcon />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/wendybqe/"
              alt="Instagram de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
              className="text-sky-800 hover:text-gray-900 dark:hover:text-white"
            >
             <InstagramIcon />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
              alt="LinkedIn de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
              className="text-sky-800 hover:text-gray-900 dark:hover:text-white"
            >
              <LinkedInIcon />
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a
              href="https://github.com/wendybaque"
              alt="Github de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
              className="text-sky-800 hover:text-gray-900 dark:hover:text-white"
            >
              <GitHubIcon />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

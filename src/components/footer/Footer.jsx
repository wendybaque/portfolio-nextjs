import React from "react";
import styles from "./footer.module.css";
import Wendy from "../../../public/wendycarré.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";

function Footer() {
  return (
    <footer
      aria-label="Pied de page"
    >
      <div>
      Made with ❤️ by
        <Link
            href="https://linktr.ee/wendybaque"
            alt="Linktree de Wendy Baqué"
          >
            Wendy Baqué © 2023
          </Link>

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/AntiigoneWB"
              alt="Facebook de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/wendybqe/"
              alt="Instagram de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
              alt="LinkedIn de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/wendybaque"
              alt="Github de Wendy Baqué"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

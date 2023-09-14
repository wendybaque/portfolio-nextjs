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
    <footer aria-label="Pied de page" className={styles.container}>
      <div>
        Made with ❤️ by {" "}
        <Link className={styles.icon} href="https://linktr.ee/wendybaque" alt="Linktree de Wendy Baqué">
          Wendy Baqué © 2023
        </Link>
      </div>
      <div className={styles.social}>
        <Link
          href="https://www.facebook.com/AntiigoneWB"
          alt="Facebook de Wendy Baqué"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://www.instagram.com/wendybqe/"
          alt="Instagram de Wendy Baqué"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
          alt="LinkedIn de Wendy Baqué"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <LinkedInIcon />
        </Link>
        <Link
          href="https://github.com/wendybaque"
          alt="Github de Wendy Baqué"
          target="_blank"
          rel="noreferrer"
          className={styles.icon}
        >
          <GitHubIcon />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;

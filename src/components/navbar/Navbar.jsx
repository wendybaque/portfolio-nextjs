import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "A propos", url: "/about" },
  { id: 3, title: "Projets", url: "/projects" },
  { id: 4, title: "Mon entreprise", url: "/wendev" },
  { id: 5, title: "Contact", url: "/contact" },
];
const Navbar = () => {
  return (
    <nav
      role="navigation"
      aria-label="Barre de navigation"
      className={styles.container}
    >
      <Link
        href="/"
        alt="redirection vers la page d'accueil"
        className={styles.logo}
      >
        <Image src="/wendycarré.png" alt="Wendy Baqué, développeuse web freelance" width={100} height={100}/>
        Wendy Baqué, développeuse web front-end en freelance
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

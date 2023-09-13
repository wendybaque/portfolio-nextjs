/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Wendev from "public/wendev.png";
import { Button } from "@mui/material";
export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Wendy Baqué</h1>
        <h2 className={styles.title2}>
          Développeuse front-end en freelance et no code friendly !
        </h2>
        <p className={styles.desc}>
          💻 A la suite de ma formation à la Wild Code School et un stage très
          enrichissant chez Fedmind et de bénévolat chez O Media et Nelixair,
          j'ai créé WenDev, ma propre entreprise qui vous proposera des
          solutions numériques personnalisées, modernes et adaptées à vos
          besoins.
        </p>
        <Button url="/projects" text="Voir mes projects" alt="Redirection vers la page des projets" aria-label="Redirection vers la page des projets"/>
      </div>
      <div className={styles.item}>
        <Image
          src={Wendev}
          className={styles.img}
          alt="Wendy Baqué by Marwan Usman"
          aria-label="Wendy Baqué by Marwan Usman"
        />
      </div>
    </main>
  );
}

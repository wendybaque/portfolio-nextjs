/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.texts}>
        <h1>Wendy Baqué</h1>
        <h2>Développeuse front-en en freelance et no code friendly !</h2>
        <p>
          💻 A la suite de ma formation à la Wild Code School et un stage très
          enrichissant chez Fedmind et de bénévolat chez O Media et Nelixair,
          j'ai créé WenDev, ma propre entreprise qui vous proposera des
          solutions numériques personnalisées, modernes et adaptées à vos
          besoins.
        </p>
      </div>
      <div className={styles.imgContainer}></div>
      <Image
        src="/wendev.png"
        width={100}
        height={100}
        alt="Wendy Baqué by Marwan Usman"
        aria-label="Wendy Baqué by Marwan Usman"
      />
    </main>
  );
}

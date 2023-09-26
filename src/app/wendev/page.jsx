/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import Logo from "/public/logonoir.png"
const Wendev = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mon entreprise</h1>
      <Image src={Logo}
          fill={true}
          alt=""
          aria-label=""
          className={styles.img}/>
      <p className={styles.desc}>
        En 2023, j'ai créé WenDev, ma micro entreprise de création de solutions
        numériques sur mesure. Grâce à mes compétences en code et en no-code, je
        peux à présent proposer un large panel de services à mes clients, avec
        qui je favorise une relation de confiance grâce à l'écoute active et à
        mon empathie.
      </p>
      <div>
        <Button url="https://www.wendev.fr/OffreSite" text="Création et refonte de sites internet" />
        <Button url="https://www.wendev.fr/OffrePortfolio" text="Portfolios" />
        <Button url="https://www.wendev.fr/OffreMaquette" text="Maquettes pour le web" />
      </div>
      <div className={styles.text}>
        J'ai également pour ambition d'être un média de référence pour les
        novices en code, en proposant du contenu adapté à leurs besoins pour se
        lancer, sur mes différents réseaux sociaux.
        <Button url="https://www.instagram.com/wendevweb/" text="Me rejoindre sur Instagram" />
      </div>
      <div className={styles.text}>
        Enfin, je propose une offre spéciale pour mes collègues auteurs afin de
        leur offrir une meilleure visibilité et l'opportunité de toucher de
        nouveaux lecteurs grâce au web, avec un tarif adapté à leur budget.
        <Button url="https://www.wendev.fr/Offreauteurs" text="Découvrir l'offre" />
      </div>
    </div>
  );
};

export default Wendev;

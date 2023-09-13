/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Banniere from "/public/bannière.png";
import Link from "next/link";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.imgContainer}>
        <Image
          src={Banniere}
          fill={true}
          alt=""
          aria-label=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1>A propos de Wendy Baqué</h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h2 className={styles.title}>Soft Skills & more...</h2>
          <p className={styles.desc}>
            ✨ Je suis une personne rigoureuse, ce qui me permet de mener à bien
            mes projets et activités confiées de A à Z et de bien gérer mon
            temps de travail. Je fais également preuve de créativité et
            d'imaginativité, ce qui me pousse à trouver des solutions innovantes
            et originales pour répondre aux besoins des clients.
            <br />
            ✨Soucieuse d’améliorer ma pratique dans un monde en constante
            évolution, je sais faire preuve d’adaptabilité, comme le prouve ma
            reconversion professionnelle dans un domaine totalement nouveau pour
            moi.
            <br />✨ Etre autonome dans ma pratique est important pour moi afin
            d'envisager tous les possibles qui s'offrent à moi et repose avant
            tout sur un climat de confiance établi avec le client. Lui être
            utile apparaît aussi primordial pour donner un sens à mon travail.{" "}
            <br />
            ✨ Enfin, ma curiosité me donne un goût certain pour l'apprentissage
            et l'actualisation de mes acquis dans un monde en constante
            évolution.
            <br />
            🎯 Ainsi, mon objectif est de m'épanouir dans un métier porteur
            d'avenir et de sens, me permettant de mettre à profit mes points
            forts au service de mes clients, de mes collaborateurs et de votre
            entreprise.
            <br />
            🚀 Les valeurs les plus importantes dans le monde du travail sont,
            selon moi, l’entraide, l’écoute, l’expression de soi,
            l’épanouissement et la réussite.
            <br />
            📚 Je suis aussi auteure de 4 romans contemporains sur des
            thématiques qui me tiennent à coeur : la santé mentale,
            l'acceptation de soi, la quête de sens, la Vie, la musique et la fin
            de vie. Cela me permet de développer des compétences
            organisationnelles, de maîtriser les normes rédactionnelles et,
            surtout, d'être à l' avec le storytelling lorsque j' un projet à
            présenter aux clients et collaborateurs.
            <button>
              {" "}
              <Link href="" alt="" aria-label="">
                Voir mon site d'auteure
              </Link>
            </button>
            <br />
            <br />➕ Mon petit plus ?Je suis développeuse, mais aussi
            psychologue ! Ainsi, tout naturellement, je suis attirée par l' UX
            et l' UI. C'est un domaine qui me parle, et qui me tient toujours à
            cœur. Mon regard est un bonus : 100% user first et centrage sur
            l'accessibilité !
            <br />➕ Mon autre petit plus ? Je suis no code friendly ! Face à la
            demande croissante sur des outils de solutions en ligne clés en
            mains, je me suis formée au no-code et te propose des solutions pour
            augmenter ta productivité et ton efficacité !
            <br /> 🗺️ Habituée au télétravail et résidant vers Tours (37), cela
            reste l'une de mes priorités.
          </p>
        </div>
        <div className={styles.item}>
          <Image src="" fill={true} alt="" aria-label="" />
          <Button url="" text="Télécharger mon CV" />
        </div>
      </div>
      <div className={styles.skills}>HARD SKILLS</div>
    </div>
  );
};

export default About;

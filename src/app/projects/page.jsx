import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const projects = [
  {
    id: 1,
    name: "Site internet de WenDev",
    alt: "Site internet de WenDev",
    desc: "Site de mon entreprise, avec intégration de modules no-code, outils de statistiques des données et hébergement référencé.",
    img: "https://i.goopics.net/4p556l.png",
    code: "https://github.com/wendevweb/site-wendev",
    site: "https://www.wendev.fr",
  },
  {
    id: 2,
    name: "Site internet de Farah D., auteure",
    alt: "Site internet de Farah D., auteure",
    desc: "Création du site web de l'auteure, offre Premium de WenDev",
    img: "https://i.goopics.net/hs4kvq.png",
    code: "https://www.farahdauteure.com/about-zcJz_2",
    site: "https://farahdauteure.com/",
  },
  {
    id: 3,
    name: "Site internet d'Alexandra Roch, auteure",
    alt: "Site internet d'Alexandra Roch, auteure",
    desc: "Création du site web de l'auteure, offre Premium de WenDev",
    img: "https://i.goopics.net/oknuk0.png",
    code: "https://www.alexandraroch.com/a-propos",
    site: "https://www.alexandraroch.com/",
  },
  {
    id: 4,
    name: "Site internet de CINOS Consulting",
    alt: "Site internet de CINOS Consulting",
    desc: "Création du site web du cabinet de consulting CINOS, offre site vitrine no-code de WenDev",
    img: "https://i.goopics.net/4q91su.png",
    code: "https://cinosconsulting.com/a-propos2",
    site: "https://cinosconsulting.com/",
  },
  {
    id: 5,
    name: "Site internet de mes activités d'auteure de livres",
    alt: "Site internet de mes activités d'auteure de livres",
    desc: "Création de mon site d'auteure pour présenter mes romans et mon parcours littéraire",
    img: "https://i.goopics.net/cmhter.png",
    code: "https://github.com/wendybaque/site-auteure",
    site: "https://wendybaqueauteure.wendev.fr/",
  },
  {
    id: 6,
    name: "Site web front-end - Association Nelixair",
    alt: "Site web front-end - Association Nelixair",
    desc: "Mission bénévole chez Nelixair, une association mettant en avant l'aviation virtuelle. En charge de la partie front-end et de l'interface web.",
    img: "https://i.goopics.net/1jx1qj.png",
    code: "https://github.com/wendybaque/Nelixair-website-front-end-copy",
    site: "https://nelixair-website-front-end-copy-elgelhh6m-wendybaque.vercel.app/",
  },
  {
    id: 7,
    name: "Learning Next.js",
    alt: "Learning Next.js",
    desc: "Projet fullstack pour apprendre Next.js grâce au tutoriel de Lamadev.",
    img: "https://i.goopics.net/x1c499.png",
    code: "https://github.com/wendybaque/tutonextjs-lamadev",
    site: "https://tutonextjs-lamadev.vercel.app/",
  },
];
const Projects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projets réalisés</h1>
      <div className={styles.cards}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.img}
                src={project.img}
                alt={project.alt}
                aria-label="test"
                fill={true}
              />
            </div>

            <h2 className={styles.projectTitle}>{project.name}</h2>
            <p className={styles.projectDesc}>{project.desc}</p>
            <Button url={project.code} text="voir le code" />
            <Button url={project.site} text="voir le site" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

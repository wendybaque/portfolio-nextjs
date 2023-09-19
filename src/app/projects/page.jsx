import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const projects = [
  {
    id: 1,
    name: "test",
    desc: "test",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    code: "https://github.com/wendybaque/portfolio-nextjs",
    site: "https://portfolio-nextjs-nu-three.vercel.app/",
  },
  {
    id: 2,
    name: "test2",
    desc: "test2",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    code: "https://github.com/wendybaque/portfolio-nextjs",
    site: "https://portfolio-nextjs-nu-three.vercel.app/",
  },
  {
    id: 3,
    name: "test3",
    desc: "test3",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    code: "https://github.com/wendybaque/portfolio-nextjs",
    site: "https://portfolio-nextjs-nu-three.vercel.app/",
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
                alt="test"
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

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
      Projects
      <h1 className={styles.title}></h1>
      <div>
        {" "}
        className={styles.cards}
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <Image
              className={styles.img}
              src={project.img}
              alt=""
              aria-label=""
              fill={true}
            />
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.desc}>{project.desc}</p>
            <Button url={code} text="voir le code" />
            <Button url={site} text="voir le site" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

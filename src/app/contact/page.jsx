/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Fusée from "/public/contact.png";
import Jotform from "@/components/jotform/Jotform";

const Contact = () => {
 
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <h2 className={styles.title2}>
        Un projet ? Une mission ? Une question ?
      </h2>
      <p className={styles.desc}>
        N'hésitez pas à me contacter sur Linkedin ou via le formulaire
        ci-dessous. <br /> Je vous répondrai dans les plus brefs délais.
      </p>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={Fusée}
            alt=""
            aria-label=""
            fill={true}
            className={styles.img}
          />
        </div>
        <form
          action=""
          className={styles.form}
        >
         <Jotform />
        </form>
      </div>
    </div>
  );
};

export default Contact;

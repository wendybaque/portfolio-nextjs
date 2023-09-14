/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import styles from "./page.module.css";
import Image from "next/image";
import Fusée from "/public/contact.png";

const Contact = () => {
  const notify = () =>
    toast("Merci pour votre message. Je vous répondrai au plus vite.");
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ijptha3",
        "template_7xuccag",
        formRef.current,
        "-F7_Yn5YXZZOlGfoZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className={styles.label} htmlFor="name">
            Votre nom
            <input
              type="text"
              placeholder="Ex: Bouchard"
              className={styles.input}
              name="user_name"
              required
              aria-required="true"
              autoComplete="on"
              style={{ caretColor: "blue" }}
            />
          </label>

          <label className={styles.label} htmlFor="phone">
            Votre numéro de téléphone
            <input
              type="tel"
              placeholder="ex: 0612345678"
              name="user_phone"
              required
              aria-required="true"
              autoComplete="on"
              style={{ caretColor: "blue" }}
              className={styles.input}
            />
          </label>

          <label className={styles.label} htmlFor="email">
            Votre adresse e-mail
            <input
              type="email"
              placeholder="ex : exemple@gmail.com"
              name="user_email"
              required
              aria-required="true"
              autoComplete="on"
              style={{ caretColor: "blue" }}
              className={styles.input}
            />
          </label>

          <label className={styles.label} htmlFor="subject">
            Le sujet de votre message
            <input
              type="text"
              placeholder="ex: J'ai une mission tech à vous proposer !"
              name="user_subject"
              required
              aria-required="true"
              autoComplete="off"
              style={{ caretColor: "blue" }}
              className={styles.input}
            />
          </label>

          <label className={styles.label} htmlFor="message">
            Votre message
            <textarea
              className={styles.textArea}
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              required
              aria-required="true"
              style={{ caretColor: "blue" }}
            ></textarea>
          </label>
          <button
            type="submit"
            onClick={notify}
            aria-pressed="false"
            className={styles.button}
          >
            Envoyer
          </button>
          {done && <ToastContainer />}
        </form>
      </div>
    </div>
  );
};

export default Contact;

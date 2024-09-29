import React from "react";
import styles from "./index.module.scss";

export default function index() {
  return (
    <div className={styles["contact"]}>
      <div className={styles["page-hero"]}>
        <div className={styles["bg-hero"]} />
        <p className={styles["page-header"]}>Get in Touch</p>
        <p className={styles["page-header"]}>with Ecoventure</p>
        <p className={styles["page-subtitle"]}>
          Have questions or need assistance? Reach out to us, and we’ll help you
          plan your perfect visit to Bakhawan Ecopark.
        </p>
      </div>
      <div className={styles["contact__form"]}>
        <div className={styles["contact-container"]}>
          <p className={styles["sectionHeader"]}>Contact Us</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.649856865932!2d122.38640507592855!3d11.719193388492744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a59dc7b8b177b3%3A0x3b08773ab4b2803d!2sBakhawan%20Ecopark!5e0!3m2!1sen!2sph!4v1727607176886!5m2!1sen!2sph"
            loading="lazy"
          ></iframe>
          <form action="" className={styles["form-container"]}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

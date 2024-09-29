import React from "react";
import styles from "./index.module.scss";

//icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <div className={styles["header"]}>
          <div className={styles["header__logo"]}>
            <p>Ecoventure</p>
          </div>
        </div>
        <div style={{ border: "1px solid gray", width: "100%" }} />
        <div className={styles["grid"]}>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Get in Touch</p>
            <div className={styles["grid__item__content"]}>
              {/* <p className={styles["footerSubHeader"]}>
                We’d love to hear from you! Whether you have questions,
                feedback, or need assistance, feel free to reach out. Contact us
                and we’ll respond as soon as possible.
              </p> */}
              <p className={styles["footerSubHeader"]}>
                Bakhawan Eco Park in Barangay New Buswang, Kalibo, Aklan,
                Philippines,
              </p>
              <div className={styles["contacts"]}>
                <p className={styles["footerSubHeader"]}>
                  <b>Phone:</b> +62 888-888-8888
                </p>
                <p className={styles["footerSubHeader"]}>
                  <b>Email:</b> info@ecoventure.com
                </p>
                <p className={styles["footerSubHeader"]}>
                  <b>Website:</b> www.ecoventure.com
                </p>
              </div>
            </div>
          </div>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Navigation</p>
            <div className={styles["grid__item__content"]}>
              <div className={styles["contacts"]}>
                <a className={styles["footerSubHeader"]} href="/">
                  Home
                </a>
                <a className={styles["footerSubHeader"]} href="/tour">
                  Virtual Tour
                </a>
                <a className={styles["footerSubHeader"]} href="/gallery">
                  Gallery
                </a>
                <a className={styles["footerSubHeader"]} href="/about">
                  About Us
                </a>
                <a className={styles["footerSubHeader"]} href="/contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Ecoventure</p>
            <div className={styles["grid__item__content"]}>
              <p className={styles["footerSubHeader"]}>
                Discover the natural wonders of Bakhawan Ecopark, where lush
                mangroves, thriving wildlife, and serene landscapes await. Join
                us in preserving the beauty of nature and experience the harmony
                of the environment up close.
              </p>
              <div className={styles["socials"]}>
                <FaFacebook />
                <FaInstagram />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Find Us Here</p>
            <div className={styles["grid__item__content"]}>
              <div className={styles["contacts"]}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.649856865932!2d122.38640507592855!3d11.719193388492744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a59dc7b8b177b3%3A0x3b08773ab4b2803d!2sBakhawan%20Ecopark!5e0!3m2!1sen!2sph!4v1727607176886!5m2!1sen!2sph"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["licensing"]}>
        <div className={styles["licensing__wrapper"]}>
          <p className={styles["footerLogoText"]}>
            © 2024. Ecoventure All Rights Reserved
          </p>
          <p className={styles["footerLogoText"]}>Ecoventure</p>
        </div>
      </div>
    </div>
  );
}

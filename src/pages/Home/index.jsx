import React from "react";
import styles from "./index.module.scss";
import bg_hero from "../../assets/landing_hero.webp";

export default function index() {
  return (
    <div className={styles["home"]}>
      <div className={styles["home__hero"]}>
        <img src="bg_hero" alt="bg_hero" />
        <p>Welcome to </p>
        <p>Ecoventure</p>
        <p>brings together nature and adventure.</p>
      </div>
      <div className={styles["home__welcome"]}>
        <div className={styles["home__welcome__header"]}>
          <p>BAKHAWAN ECO PARK</p>
          <p>
            Exploring Bakhawan Eco Park lets you stroll through lush mangroves
            on bamboo boardwalks, surrounded by diverse wildlife. It's a serene
            spot for eco-tourism and nature appreciation.
          </p>
        </div>
        <div className={styles["home__welcome__info"]}>
          <div className={styles["home__welcome__info__img"]} />
          <div className={styles["home__welcome__info__text"]}>
            <div className={styles["home__welcome__info__text-title"]}>
              <p>Welcome to </p>
              <p>Bakhawan Eco Park</p>
            </div>
            <p>
              Bakhawan Eco-Park, a 220-hectare mangrove forest in Kalibo, Aklan,
              Philippines, was established in 1990 as a reforestation project to
              protect the community from floods and storm surges.
            </p>
            <p>
              Operated by the Kalibo Save the Mangroves Association (KASAMA), it
              is considered the country's most successful mangrove reforestation
              effort. The word "bakhawan" means "mangrove" in the local dialect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

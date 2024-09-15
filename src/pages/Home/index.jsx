import React from "react";
import styles from "./index.module.scss";

export default function index() {
  return (
    <div className={styles["home"]}>
      <div className={styles["sectionDivider"]}>
        <div className={styles["bg-hero"]} />
        <p className={styles["page-title"]}>Welcome to </p>
        <p className={styles["page-header"]}>Ecoventure</p>
        <p className={styles["page-subtitle"]}>
          brings together nature and adventure.
        </p>
      </div>
      <div className={styles["home__welcome"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["header-container"]}>
            <p className={styles["sectionHeader"]}>BAKHAWAN ECO PARK</p>
            <p className={styles["sectionInfo"]}>
              Exploring Bakhawan Eco Park lets you stroll through lush mangroves
              on bamboo boardwalks, surrounded by diverse wildlife. It's a
              serene spot for eco-tourism and nature appreciation.
            </p>
          </div>
          <div className={styles["info-container"]}>
            <div className={styles["info-container__img"]} />
            <div className={styles["info-container__text"]}>
              <p className={styles["sectionSubHeader"]}>
                Welcome to Bakhawan Eco Park
              </p>
              <p className={styles["sectionInfo"]}>
                Bakhawan Eco-Park, a 220-hectare mangrove forest in Kalibo,
                Aklan, Philippines, was established in 1990 as a reforestation
                project to protect the community from floods and storm surges.
              </p>
              <p className={styles["sectionInfo"]}>
                Operated by the Kalibo Save the Mangroves Association (KASAMA),
                it is considered the country's most successful mangrove
                reforestation effort. The word "bakhawan" means "mangrove" in
                the local dialect.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["home__view-point"]}>
        <div className={styles["wrapper"]}>
          <p className={styles["sectionHeader"]}>View Point</p>
          <div className={styles["home__view-point__img-container"]}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles["home__view-point__info"]}>
            <p className={styles["sectionInfo"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vel
              praesentium expedita dignissimos accusantium sapiente quis commodi
              aliquid accusamus sunt provident inventore nihil eos consectetur
              quibusdam delectus perferendis, atque natus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

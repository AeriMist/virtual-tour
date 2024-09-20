import React from "react";
import styles from "./index.module.scss";

export default function index() {
  return (
    <div className={styles["tour"]}>
      <div className={styles["sectionDivider"]}>
        <div className={styles["bg-hero"]} />
        <p className={styles["page-header"]}>Bakhawan's</p>
        <p className={styles["page-header"]}>Gallery</p>
        <p className={styles["page-subtitle"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum ratione suscipit dignissimos, dolor exercitationem quasi. Modi quam ducimus distinctio debitis sit laboriosam, corporis dolor delectus deleniti veniam ea quasi atque fuga ut voluptas! Repellat at praesentium ad atque quibusdam?
        </p>
      </div>
      <div className={styles["tour__map"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["header-container"]}>
            <p className={styles["sectionHeader"]}>MAP</p>
            <p className={styles["sectionInfo"]}>
              Exploring Bakhawan Eco Park lets you stroll through lush mangroves
              on bamboo boardwalks, surrounded by diverse wildlife. It's a
              serene spot for eco-tourism and nature appreciation.
            </p>
          </div>
          <div className={styles["dynamic-map"]}></div>
        </div>
      </div>
    </div>
  );
}

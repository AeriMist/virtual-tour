import React from "react";
import styles from "./index.module.scss";

export default function index() {
  return (
    <div className={styles["tour"]}>
      <div className={styles["page-hero"]}>
        <div className={styles["bg-hero"]} />
        <p className={styles["page-header"]}>Explore</p>
        <p className={styles["page-header"]}>Bakhawan</p>
        <p className={styles["page-subtitle"]}>
          Take a virtual journey through our breathtaking mangroves, diverse
          wildlife, and serene landscapes—right from the comfort of your home.
        </p>
      </div>
    </div>
  );
}

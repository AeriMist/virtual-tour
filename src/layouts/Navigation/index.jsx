import React from "react";
import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";

export default function index() {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["navigation"]}>
        <div className={styles["navigation__nav"]}>
          <div className={styles["navigation__nav__logo"]}></div>
          <div className={styles["navigation__nav__links"]}>
            <a href="/">Home</a>
            <a href="tour">Virtual Tour</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contacts">Contacts</a>
          </div>
        </div>
      </div>
      <div className={styles["outlet"]}>
        <Outlet />
      </div>
    </div>
  );
}

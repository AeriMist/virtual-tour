import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles["main-container"]}>
      <div className={styles["navigation"]}>
        <div className={styles["navigation__nav"]}>
          <div className={styles["navigation__nav__logo"]}></div>
          <div className={styles["navigation__nav__links"]}>
            <NavLink
              to="/"
              exact
              className={clsx(
                styles["nav-link"],
                location.pathname === "/" && styles["active-link"]
              )}
            >
              Home
            </NavLink>
            <NavLink
              to="/tour"
              className={clsx(
                styles["nav-link"],
                location.pathname === "/tour" && styles["active-link"]
              )}
            >
              Virtual Tour
            </NavLink>
            <NavLink
              to="/shop"
              className={clsx(
                styles["nav-link"],
                location.pathname === "/shop" && styles["active-link"]
              )}
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={clsx(
                styles["nav-link"],
                location.pathname === "/about" && styles["active-link"]
              )}
            >
              About
            </NavLink>
            {/* <NavLink
              to="/contact"
              className={clsx(
                styles["nav-link"],
                location.pathname === "/contact" && styles["active-link"]
              )}
            >
              Contacts
            </NavLink> */}
            <button
              style={{
                padding: "8px 16px",
                borderRadius: "4px",
                border: "none",
              }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className={styles["outlet"]}>
        <Outlet />
      </div>
    </div>
  );
}

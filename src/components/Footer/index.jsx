import React from "react";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer__container"]}>
        <div className={styles["header"]}>
          <div className={styles["header__logo"]}>
            <p>Ecoventure</p>
          </div>
          <div className={styles["header__socials"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div style={{ border: "1px solid gray", width: "100%" }} />
        <div className={styles["grid"]}>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Get In Touch</p>
            <div className={styles["grid__item__content"]}>
              <p className={styles["footerSubHeader"]}>
                Street 238,52 tempor Donec ultricies mattis nulla, suscipit
                risus tristique utmattis nulla.
              </p>
              <div className={styles["contacts"]}>
                <p className={styles["footerSubHeader"]}>
                  Phone: +62 888-888-8888
                </p>
                <p className={styles["footerSubHeader"]}>
                  Email: info@ecoventure.com
                </p>
                <p className={styles["footerSubHeader"]}>
                  Website: www.ecoventure.com
                </p>
              </div>
            </div>
          </div>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Get In Touch</p>
            <div className={styles["grid__item__content"]}>
              <p className={styles["footerSubHeader"]}>
                Street 238,52 tempor Donec ultricies mattis nulla, suscipit
                risus tristique utmattis nulla.
              </p>
              <div className={styles["contacts"]}>
                <p className={styles["footerSubHeader"]}>
                  Phone: +62 888-888-8888
                </p>
                <p className={styles["footerSubHeader"]}>
                  Email: info@ecoventure.com
                </p>
                <p className={styles["footerSubHeader"]}>
                  Website: www.ecoventure.com
                </p>
              </div>
            </div>
          </div>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Get In Touch</p>
            <div className={styles["grid__item__content"]}>
              <p className={styles["footerSubHeader"]}>
                Street 238,52 tempor Donec ultricies mattis nulla, suscipit
                risus tristique utmattis nulla.
              </p>
              <div className={styles["contacts"]}>
                <p className={styles["footerSubHeader"]}>
                  Phone: +62 888-888-8888
                </p>
                <p className={styles["footerSubHeader"]}>
                  Email: info@ecoventure.com
                </p>
                <p className={styles["footerSubHeader"]}>
                  Website: www.ecoventure.com
                </p>
              </div>
            </div>
          </div>
          <div className={styles["grid__item"]}>
            <p className={styles["footerHeader"]}>Get In Touch</p>
            <div className={styles["grid__item__content"]}>
              <p className={styles["footerSubHeader"]}>
                Street 238,52 tempor Donec ultricies mattis nulla, suscipit
                risus tristique utmattis nulla.
              </p>
              <div className={styles["contacts"]}>
                <p className={styles["footerSubHeader"]}>
                  Phone: +62 888-888-8888
                </p>
                <p className={styles["footerSubHeader"]}>
                  Email: info@ecoventure.com
                </p>
                <p className={styles["footerSubHeader"]}>
                  Website: www.ecoventure.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["licensing"]}>
        <div className={styles["licensing__wrapper"]}>
          <p className={styles["footerLogoText"]}>
            © Copyright 2024. Nature All Rights Reserved
          </p>
          <p className={styles["footerLogoText"]}>Ecoventure</p>
        </div>
      </div>
    </div>
  );
}

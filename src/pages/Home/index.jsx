import React from "react";
import styles from "./index.module.scss";

export default function index() {
  return (
    <div className={styles["home"]}>
      <div className={styles["home__hero"]}>
        <div className={styles["bg-hero"]} />
        <p>Welcome to </p>
        <p>Ecoventure</p>
        <p>brings together nature and adventure.</p>
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
      <div className={styles["sectionDivider"]}>
        <div className={styles["topBar"]}>
          <div className={styles["topBar__wrapper"]}>
            <div>
              <div></div>
              <p className={styles["logo-text"]}>Ecoventure</p>
            </div>
          </div>
        </div>
        <div className={styles["bg-hero"]} />
        <p>About</p>
        <p>Bakhawan</p>
        <p>Eco Park</p>
        <p>Things to know more about Bakhawan Eco Park</p>
      </div>
      <div className={styles["home__dyk"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["header-container"]}>
            <p className={styles["sectionHeader"]}>Did you know?</p>
          </div>
          <div className={styles["flex-reverse-container"]}>
            <div className={styles["info-container"]}>
              <div className={styles["info-container__img"]} />
              <div className={styles["info-container__text"]}>
                <p className={styles["sectionSubHeader"]}>
                  Founder of Bakhawan Eco Park Kalibo
                </p>
                <p className={styles["sectionInfo"]}>
                  Bakhawan Eco-Park, a 220-hectare mangrove forest in Kalibo,
                  Aklan, Philippines, was established in 1990 as a reforestation
                  project to protect the community from floods and storm surges.
                </p>
                <p className={styles["sectionInfo"]}>
                  Operated by the Kalibo Save the Mangroves Association
                  (KASAMA), it is considered the country's most successful
                  mangrove reforestation effort. The word "bakhawan" means
                  "mangrove" in the local dialect.
                </p>
              </div>
            </div>
            <div className={styles["info-container"]}>
              <div className={styles["info-container__img"]} />
              <div className={styles["info-container__text"]}>
                <p className={styles["sectionSubHeader"]}>
                  Lorem ipsum dolor sit amet
                </p>
                <p className={styles["sectionInfo"]}>
                  Bakhawan Eco-Park, a 220-hectare mangrove forest in Kalibo,
                  Aklan, Philippines, was established in 1990 as a reforestation
                  project to protect the community from floods and storm surges.
                </p>
                <p className={styles["sectionInfo"]}>
                  Operated by the Kalibo Save the Mangroves Association
                  (KASAMA), it is considered the country's most successful
                  mangrove reforestation effort. The word "bakhawan" means
                  "mangrove" in the local dialect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["home__direction"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["header-container"]}>
            <p className={styles["sectionHeader"]}>HOW TO GET THERE?</p>
          </div>
          <div className={styles["info-container"]}>
            <div className={styles["info-container__img"]} />
            <div className={styles["info-container__text"]}>
              <p className={styles["sectionSubHeader"]}>Tickets and entry</p>
              <p className={styles["sectionInfo"]}>
                The entrance fee for regular tourists is PhP 120, but if you are
                a student, a person with a disability, or a senior citizen, you
                only need to pay PhP 60. Aklanons only need to pay PhP 60 as
                well, and Aklanon students, persons with disabilities, and
                senior citizens will only be charged PhP 40.
              </p>
              <p className={styles["sectionSubHeader"]}>Best time to visit</p>
              <p className={styles["sectionInfo"]}>
                BakPark operating hours are from 7 AM to 5 PM. To have a better
                chance of fair weather during your visit, schedule it during the
                dry months of November to May.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["sectionDivider"]}>
        <div className={styles["topBar"]}>
          <div className={styles["topBar__wrapper"]}>
            <div>
              <div></div>
              <p className={styles["logo-text"]}>Ecoventure</p>
            </div>
          </div>
        </div>
        <div className={styles["bg-hero"]} />
        <p></p>
        <p>Bakhawan's</p>
        <p>Gallery</p>
        <p>Etiam at nisl faucibus felis ornare convallis. </p>
      </div>
      <div className={styles["home__map"]}>
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

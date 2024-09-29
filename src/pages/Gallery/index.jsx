import React from "react";
import styles from "./index.module.scss";

//Carousel Image
import carousel1 from "../../../public/GalleryAssets/carousel1.png";
import carousel2 from "../../../public/GalleryAssets/carousel2.png";
import carousel3 from "../../../public/GalleryAssets/carousel3.png";
import carousel4 from "../../../public/GalleryAssets/carousel4.png";

//Carousel component
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function index() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
  };

  return (
    <div className={styles["gallery"]}>
      <div className={styles["page-hero"]}>
        <div className={styles["bg-hero"]} />
        <p className={styles["page-header"]}>Bakhawan's</p>
        <p className={styles["page-header"]}>Gallery</p>
        <p className={styles["page-subtitle"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          laborum ratione suscipit dignissimos, dolor exercitationem quasi. Modi
          quam ducimus distinctio debitis sit laboriosam, corporis dolor
          delectus deleniti veniam ea quasi atque fuga ut voluptas! Repellat at
          praesentium ad atque quibusdam?
        </p>
      </div>
      <div className={styles["gallery__map"]}>
        <div className={styles["width-wrapper"]}>
          <div className={styles["header-container"]}>
            <p className={styles["sectionHeader"]}>Find Your Way</p>
            <p className={styles["sectionInfo"]}>
              Exploring Bakhawan Eco Park lets you stroll through lush mangroves
              on bamboo boardwalks, surrounded by diverse wildlife. It's a
              serene spot for eco-tourism and nature appreciation.
            </p>
          </div>
          <div className={styles["dynamic-map"]}>
            <iframe
              width="100%"
              height="640"
              frameborder="0"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowfullscreen
              src="https://www.3dvista.com/samples/animated_panorama.html"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={styles["gallery__carousel"]}>
        <div className={styles["width-wrapper"]}>
          <div className={styles["header-container"]}>
            <p className={styles["sectionHeader"]}>Capture the Beauty</p>
            <p className={styles["sectionInfo"]}>
              Browse through stunning photos of our lush landscapes, vibrant
              wildlife, and unforgettable experiences.
            </p>
          </div>
          <div className={styles["carousel-container"]}>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={true}
              containerClass={styles["carousel"]}
              draggable
              focusOnSelect={false}
              infinite
              itemClass={styles["carousel__item"]}
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              slidesToSlide={1}
              swipeable
            >
              <div className={styles["card-container"]}>
                <div className={styles["card-overlay"]}></div>
                <div className={styles["card-img"]}>
                  <img src={carousel1} alt="card image" />
                </div>
                <div className={styles["card-info-container"]}>
                  <p>Entrance</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, recusandae.
                  </p>
                </div>
              </div>
              <div className={styles["card-container"]}>
                <div className={styles["card-overlay"]}></div>
                <div className={styles["card-img"]}>
                  <img src={carousel2} alt="card image" />
                </div>
                <div className={styles["card-info-container"]}>
                  <p>Entrance</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, recusandae.
                  </p>
                </div>
              </div>
              <div className={styles["card-container"]}>
                <div className={styles["card-overlay"]}></div>
                <div className={styles["card-img"]}>
                  <img src={carousel3} alt="card image" />
                </div>
                <div className={styles["card-info-container"]}>
                  <p>Entrance</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, recusandae.
                  </p>
                </div>
              </div>
              <div className={styles["card-container"]}>
                <div className={styles["card-overlay"]}></div>
                <div className={styles["card-img"]}>
                  <img src={carousel4} alt="card image" />
                </div>
                <div className={styles["card-info-container"]}>
                  <p>Entrance</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia, recusandae.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

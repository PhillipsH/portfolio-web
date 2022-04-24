import { useState } from "react";
import AboutStyle from "../styles/Skills.module.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import reactLogo from "../assets/React-icon.svg";
import nodeLogo from "../assets/nodejs-logo.svg";
import reduxLogo from "../assets/redux.png";
import gitLogo from "../assets/Git-logo.svg";
import expressLogo from "../assets/express-logo.png";
import dockerLogo from "../assets/docker.png";
import awsLogo from "../assets/aws.svg";
import mongodbLogo from "../assets/mongodb.svg";
import SwiperButtons from "./SwiperButtons";

const Technologies = () => {
  return (
    <div className={AboutStyle.technologies}>
      <div className={AboutStyle.technologiesContent}>
        <h2>What I can Bring</h2>
      </div>
      <div className={AboutStyle.technologiesContainer}>
        <Swiper
          className={AboutStyle.swiperContainer}
          // spaceBetween={2}
          // justifyContent={"center"}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={nodeLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={reduxLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={reactLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={awsLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={dockerLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={gitLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={mongodbLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={AboutStyle.slide}>
            <div className={AboutStyle.technologyItem}>
              <div className={AboutStyle.logoContainer}>
                <img className={AboutStyle.logoImg} src={expressLogo}></img>
              </div>
            </div>
          </SwiperSlide>
          <SwiperButtons></SwiperButtons>
        </Swiper>
      </div>
    </div>
  );
};
export default Technologies;

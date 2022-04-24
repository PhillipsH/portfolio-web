import { useSwiper } from "swiper/react";
import AboutStyle from "../styles/About.module.scss";

const SwiperButtonPrev = ({ children }: any) => {
  const swiper = useSwiper();
  console.log(swiper);
  return (
    <>
      <button
        className={`swiper-button-next ${AboutStyle.swiperButton}`}
        onClick={() => swiper.slideNext()}
      >
        {children}
      </button>
      <button
        className={`swiper-button-prev ${AboutStyle.swiperButton}`}
        onClick={() => swiper.slidePrev()}
      >
        {children}
      </button>
    </>
  );
};

export default SwiperButtonPrev;

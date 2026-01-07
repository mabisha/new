import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./ThreeDCorousel.css";

// import required modules
import { EffectCards, Autoplay } from "swiper/modules";

export default function ThreeDCorousel({
  imagesForCrousal,
  enableAutoPlay,
  duration = 2000,
}) {
  const AUTO_PLAY = enableAutoPlay
    ? {
        delay: 500,
        disableOnInteraction: false,
      }
    : false;
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className="mySwiper2 w-[600px] rounded-lg bg-transparent"
      loop={true}
      autoplay={AUTO_PLAY}
      speed={enableAutoPlay ? duration : 0}
    >
      {imagesForCrousal?.imagelink.map((item, idx) => (
        <SwiperSlide
          className="mySwiper-slide-2 w-full h-full object-cover shadow-md shadow-matte/40"
          key={idx}
        >
          <img
            src={item?.url}
            className="md:min-w-[640px] min-h-[420px] object-cover "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

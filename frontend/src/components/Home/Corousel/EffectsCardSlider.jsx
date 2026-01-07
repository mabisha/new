import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./EffectsCardSlider.css"; // Custom CSS file for styling

// Import required modules
import { EffectCoverflow, Pagination, Autoplay, History } from "swiper/modules";

// Import images
import img from "../../../assets/principal.jpg";
import img2 from "../../../assets/students.jpg";
import img3 from "../../../assets/principal.jpg";
import img4 from "../../../assets/principal.jpg";

export default function EffectsCardSlider() {
  const dummyImages = [img, img2, img3, img4];

  return (
    <div className="swiper-container">
      <Swiper
        rewind={true}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={false}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay, History]}
        className="mySwiper"
      >
        {dummyImages?.map((image, idx) => (
          <SwiperSlide key={idx} className="swiper-slider">
            <img
              src={image}
              alt={`Slide ${idx + 1}`}
              className="swiper-slide-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const SimpleSlider = ({
  images,
  showPagination = true,
  showNavigation = false,
  containImage = false,
  enableAutoPlay = false,
  axis = "horizontal",
  reverseDirection = false,
  speed = 2000,
  getCurrentSwiperInstance,
  handleImageClick,
}) => {
  const AUTO_PLAY = enableAutoPlay
    ? {
        delay: 500,
        disableOnInteraction: false,
        reverseDirection: reverseDirection ? false : true,
      }
    : false;

  const handleSwiper = (swiper) => {
    getCurrentSwiperInstance(swiper);
  };
  return (
    <>
      <Swiper
        direction={axis}
        onSlideChange={getCurrentSwiperInstance && handleSwiper}
        style={{
          "--swiper-navigation-color": `${
            showNavigation ? "white" : "transparent"
          }`,
          "--swiper-pagination-color": `${
            showNavigation ? "white" : "transparent"
          }`,
        }}
        speed={speed}
        parallax={true}
        pagination={
          showPagination
            ? {
                clickable: true,
                bulletColor: "red",
                bulletActiveColor: "blue",
              }
            : false
        }
        autoplay={AUTO_PLAY}
        loop={true}
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper12"
      >
        <div className="swiper-button-prev">
          <KeyboardBackspaceIcon className={`hover:fill-secondary`} />
        </div>
        <div className="swiper-button-next">
          <KeyboardBackspaceIcon
            className={`hover:fill-secondary rotate-180`}
          />
        </div>
        {images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              onClick={() => handleImageClick(image.imagelink)}
              src={image.imagelink}
              className={`h-full w-full ${
                containImage ? "object-contain" : "object-cover"
              } absolute`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SimpleSlider;

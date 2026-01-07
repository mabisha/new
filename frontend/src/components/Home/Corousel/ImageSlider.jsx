import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
//dummy images
import img from "../../../assets/exercise.jpg";
import img2 from "../../../assets/cultural-dress-kids.jpg";
import img5 from "../../../assets/events.jpg";
import flagSchool from "../../../assets/flag-school.jpg";
import sports from "../../../assets/slide12.jpg";

const ImageSlider = () => {
  const homePageImages = [
    {
      image: img5,
      subtitleFirst: "Rosebud School ",
      subtitleSecond: " Where Education Blossoms.",
      titleFirst: "Igniting Minds,",
      titleSecond: " Empowering Futures.",
    },
    {
      image: img2,
      subtitleFirst: "Rosebud School",
      subtitleSecond: " Where Learning Never Ends.",
      titleFirst: "Dream.",
      titleSecond: "Discover. Do.",
    },
    {
      image: flagSchool,
      subtitleFirst: "Rosebud School",
      subtitleSecond: " Where Education Meets Excellence.",
      titleFirst: "Educating ",
      titleSecond: "Hearts and Minds",
    },
    {
      image: sports,
      subtitleFirst: "Rosebud School",
      subtitleSecond: " Where Every Student Shines.",
      titleFirst: "Education for a ",
      titleSecond: "Brighter Tomorrow",
    },
    {
      image: img,
      subtitleFirst: "Rosebud School",
      subtitleSecond: " Where Knowledge Meets Opportunity.",
      titleFirst: "Believe.",
      titleSecond: "Achieve. Succeed.",
    },
  ];
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "white",
        "--swiper-pagination-color": "white",
      }}
      speed={2000}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <div className="swiper-button-prev">
        <KeyboardBackspaceIcon className={`hover:fill-secondary`} />
      </div>
      <div className="swiper-button-next">
        <KeyboardBackspaceIcon className={`hover:fill-secondary rotate-180`} />
      </div>
      {homePageImages.map((image, idx) => (
        <SwiperSlide key={idx}>
          <div className="image-slider-cover"></div>
          <img
            className="imageSliderImg"
            src={image.image ? image.image : image}
          />
          <div className="slider-text-container z-[3] flex w-full lg:w-[90%] -left-2 sm:left-0 relative tracking-[1px] h-[90%] sm:h-auto flex-col sm:pl-[40px] top-20 sm:top-0">
            <div
              className="font-black text-white/90 text-5xl"
              data-swiper-parallax="-300"
            >
              {image?.titleFirst}
            </div>
            <div
              className="font-black text-white/90 text-5xl md:text-[65px]"
              data-swiper-parallax="-300"
            >
              {image?.titleSecond}
            </div>
            <div
              className="font-extrabold text-xl mt-3"
              data-swiper-parallax="-200"
            >
              <span className=" text-secondary flex gap-2 items-center justify-start">
                <span className="bg-secondary text-black p-1 rounded-md px-4">
                  <span className="text-white font-extrabold ">Rosebud </span>
                  <span> School</span>
                </span>
                <span className="text-white"> {image?.subtitleSecond}</span>
              </span>
            </div>
            <div
              className="text w-full flex font-[16px]"
              data-swiper-parallax="-100"
            ></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;

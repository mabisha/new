import ReactPlayer from "react-player";
import NotificationModal from "../Forms/NotificationModal";
import VideoButton from "../VideoButton/VideoButton";
import ImageSlider from "../Corousel/ImageSlider";
import { useEffect, useState } from "react";
import { RiPlayCircleFill } from "react-icons/ri";
import { getAllNotice } from "../../../utils/apiRequest";
import { useQuery } from "@tanstack/react-query";
import { AiOutlinePauseCircle } from "react-icons/ai";
const Hero = () => {
  //   const navigate = useNavigate();
  const updateShowNotification = () => {
    setOpenNotification((prev) => !prev);
    setPauseVideo(true);
  };

  const [openNotification, setOpenNotification] = useState(false);
  const [pauseVideo, setPauseVideo] = useState(true);
  const [showVideo, setShowVideo] = useState(true);
  const [volume, setVolume] = useState(0);

  const {
    data: notification,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["notification"],
    queryFn: getAllNotice,
  });
  useEffect(() => {
    setVolume(0.1);
  }, []); //effects to cache the notification data on localstorage

  useEffect(() => {
    const notificationTimeout = setTimeout(() => {
      setOpenNotification(true);

      return () => {
        clearTimeout(notificationTimeout);
      };
    }, 7000);

    return () => clearTimeout(notificationTimeout);
  }, []);
  //   const screen = useWindowSize();
  const hasNotification = notification?.length;

  const getNotification = () => {
    if (isLoading) {
      return null;
    }
    if (error) {
      return null;
    }
    if (hasNotification > 0) {
      return (
        <NotificationModal
          // pdfLink={entrance}
          showNotification={openNotification}
          updateShowNotification={updateShowNotification}
          data={notification}
        />
      );
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setVolume(0);
      } else if (window.scrollY < 500) {
        setVolume(0.1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="w-full">
      {getNotification()}
      <div className="h-[90vh] w-full flex justify-center items-center relative left-0">
        <div
          className="bg-white absolute h-full w-full z-[11] -bottom-[0.2rem] md:-bottom-[1rem]"
          style={{ clipPath: "ellipse(57% 10% at 50% 100%)" }}
        ></div>
        {!showVideo && <ImageSlider />}
        <div className="w-auto h-auto absolute left-[58px] sm:left-[80px] bottom-[10rem] sm:bottom-[8.5rem]">
          <VideoButton
            open={showVideo}
            onClick={() => {
              setShowVideo(!showVideo);
            }}
            title={showVideo ? "Stop Video" : "View Video"}
            icon={
              showVideo ? (
                <AiOutlinePauseCircle size={35} />
              ) : (
                <RiPlayCircleFill size={36} />
              )
            }
          />
        </div>

        {showVideo && (
          <div className="w-full absolute z-[10] top-0 h-[90vh] overflow-hidden left-0 flex justify-center items-center">
            <div className="w-full h-full bg-[#00000066] z-[10] absolute top-0 left-0"></div>

            <div className=" z-[13] flex w-full lg:w-[90%] left-[3rem] sm:left-[8.1rem] absolute tracking-[1px] h-[90%] sm:h-auto flex-col sm:pl-[40px] top-[20.5%] sm:top-[37.7%]">
              <div
                className="font-black text-white/90 text-5xl"
                data-swiper-parallax="-300"
              >
                Nurturing Minds
              </div>
              <div
                className="font-black text-white/90 text-5xl md:text-[65px]"
                data-swiper-parallax="-300"
              >
                Cultivating Futures
              </div>
              <div
                className="font-extrabold text-xl mt-3  "
                data-swiper-parallax="-200"
              >
                <span className=" text-secondary">
                  <span className="bg-secondary text-black p-1 rounded-md px-4">
                    <span className="text-white font-extrabold ">Rosebud</span>{" "}
                    School
                  </span>
                  <span className="text-white"> Where Education blossoms.</span>
                </span>
              </div>
              <div
                className="text w-full flex font-[16px]"
                data-swiper-parallax="-100"
              ></div>
            </div>

            <div className="react-video  w-full h-full overflow-hidden relative flex justify-center items-center">
              <div className="w-full h-full absolute top-0 left-0 z-[20] "></div>{" "}
              <ReactPlayer
                // muted={muted}
                url={"https://www.youtube.com/watch?v=2AhSnWC45Tw"}
                playing={pauseVideo}
                width={"120%"}
                height={"129%"}
                loop={true}
                controls={false}
                pip={true}
                rel={0}
                showinfo={false}
                autoPlay={pauseVideo}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
                volume={volume}
                className="z-0 min-w-[120vw]"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

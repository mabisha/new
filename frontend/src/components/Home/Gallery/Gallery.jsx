import "./Gallery.css";
import imageItem from "../../../assets/extraOrdinary.jpg";
import imageItem1 from "../../../assets/students.jpg";
import imageItem2 from "../../../assets/sports-kids.jpg";
import imageItem3 from "../../../assets/children-plants.jpg";
import imageItem4 from "../../../assets/uniform-sweater.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { useContext, useEffect, useState } from "react";
import DataContext from "../../../contexts/Datacontext";
import { Link, useNavigate } from "react-router-dom";
import ThreeDCorousel from "../Corousel/ThreeDCorousel";
const Gallery = ({ data }) => {
  const navigate = useNavigate();

  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    if (data) {
      setGalleryData(data);
    }
  }, [data]);
  const [openGallery, setOpenGallery] = useState(false);
  const [currentGalleryData, setCurrentGalleryData] = useState(false);
  const handleRoserBudMoments = (data) => {
    setCurrentGalleryData(data);
    setOpenGallery((prev) => !prev);
  };
  useEffect(
    (data) => {
      if (openGallery) {
        document.documentElement.classList.add("hide-overflow");
        document.body.classList.add("hide-overflow");
      } else {
        document.documentElement.classList.remove("hide-overflow");
        document.body.classList.remove("hide-overflow");
      }
    },
    [openGallery]
  );
  const { setSelectedData } = useContext(DataContext);

  const handleCardClick = (data) => {
    setSelectedData(data);
    navigate(`/rosebud-moments/${data.id}`);
  };

  const newData = [
    {
      title: "Sports",
      description: "Rosebud school . Rosebud School",
      imagelink: imageItem1,
    },
    {
      title: "Library",
      description: "Rosebud school . Rosebud School",
      imagelink: imageItem2,
    },
    {
      title: "Sustainability Efforts",
      description: "Rosebud school . Rosebud School",
      imagelink: imageItem3,
    },
  ];
  const galleryHoverCard = (data) => {
    return (
      <div
        onClick={() => handleRoserBudMoments(data)}
        className="group cursor-pointer first-corousel relative top-0 transition-width duration-[900ms] ease sm:hover:w-full w-full sm:w-[50%] h-full"
      >
        <div className="h-[20rem] w-full overflow-hidden rounded-sm   relative right-0 flex justify-center items-center">
          <div className="w-full absolute h-full bg-matte/30 z-[2]"></div>

          <div className="absolute left-0  w-[550px] h-full z-[3] flex flex-col justify-center items-start p-10 gap-2 text-white">
            <span className="font-extrabold text-white text-2xl pr-[2px] pt-2 ">
              {data?.title}
            </span>
            <p className="px-0 w-full overflow-hidden text-xl leading-[26px] md:leading-[28px] capitalize font-semibold text-white relative top-8 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-[top,opacity] duration-[900ms] ease ">
              {data?.description}
            </p>
          </div>
          <img
            src={data?.imagelink[0]?.url}
            alt="rosebud moments"
            className="h-full w-full object-cover absolute top-0 left-0 z-0"
          />
        </div>
      </div>
    );
  };
  return (
    <>
      {openGallery && (
        <div className="fixed w-full min-h-screen  z-[100] bg-black/90 flex justify-center items-center">
          <div
            className="w-full h-full absolute "
            onClick={handleRoserBudMoments}
          ></div>
          <div className="absolute w-full h-[20rem] ">
            <ThreeDCorousel
              imagesForCrousal={currentGalleryData}
              isOpen={openGallery}
              toggleFunction={handleRoserBudMoments}
              duration={5500}
              enableAutoPlay={true}
            />
          </div>
        </div>
      )}
      <section className=" bg-white relative flex gap-5 flex-col p-0 justify-start w-full h-full items-center flex-1  pb-5 ">
        <section className="flex flex-col w-full justify-start items-center md:h-full lg:min-h-screen px-0 py-5 gap-2 lg:gap-5">
          <div className="flex flex-col w-full justify-center items-center gap-7 h-[12rem]">
            <div className="flex w-full font-bold text-3xl sm:text-5xl justify-center items-center gap-2">
              <span className=" text-matte whitespace-nowrap">Rosebud</span>
              <span className=" text-secondary">Moments</span>
            </div>
            <span className="font-semibold text-center text-lg flex justify-center w-full ">
              We ensure that our children are taught by cream of the crop.
            </span>
          </div>

          <div className="w-full  h-auto relative flex flex-col overflow-hidden gap-5">
            <div className="first-div  w-full flex gap-5 h-full  flex-col sm:flex-row">
              <div className="image-div h-[20rem]  sm:w-[70%] w-full overflow-hidden rounded-sm">
                <img
                  src={imageItem}
                  alt=""
                  className="h-full w-full object-cover bg-top"
                />
              </div>
              {galleryHoverCard(data[2])}
            </div>
            <div className="second-div  w-full flex gap-5  sm:gap-5  flex-col sm:flex-row">
              {galleryHoverCard(data[0])}
              {galleryHoverCard(data[1])}
            </div>
          </div>
        </section>
        {/* <div className="w-auto relative h-[10rem] items-center justify-center font-bold  flex flex-col  px-9 pl-0 gap-2">
          <div className="text-4xl mobile:text-5xl h-[5rem] sm:h-[2.2rem]  text-black font-bold w-full flex  justify-center items-center gap-2 flex-wrap">
            <span className="capitalize">Rosebud </span>
            <span className="text-secondary"> Moments</span>
          </div>
        </div>
        <div className=" flex gap-5 px-9 flex-1 h-auto flex-wrap justify-center min-w-[90%]">
          {Object.values(data)
            .slice(0, 3)
            .map((item, idx) => (
              <GalleryCard
                key={idx}
                title={item.title}
                description={item.description}
                image={item.imagelink}
                handler={handleRoserBudMoments}
              />
            ))}
        </div>
        {Object.values(data).length > 3 && (
          <Link
            to="/rosebud-moments"
            className=" group absolute -bottom-10 right-0  text-secondary   flex justify-center items-center w-36  gap-5 cursor-pointer font-bold"
          >
            <span> View All</span>
            <span className="relative -left-1 group-hover:left-0 duration-[500ms] transition-[left] ease">
              <KeyboardBackspaceIcon
                className="rotate-180"
                sx={{ fontSize: 26 }}
              />
            </span>
          </Link>
        )} */}

        {galleryData?.length > 3 && (
          <Link
            to="/rosebud-moments"
            className=" group absolute -bottom-10 right-0  text-secondary   flex justify-center items-center w-36  gap-5 cursor-pointer font-bold"
          >
            <span> View All</span>
            <span className="relative -left-1 group-hover:left-0 duration-[500ms] transition-[left] ease">
              <KeyboardBackspaceIcon
                className="rotate-180"
                sx={{ fontSize: 26 }}
              />
            </span>
          </Link>
        )}
      </section>
    </>
  );
};

export default Gallery;

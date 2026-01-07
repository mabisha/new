import { useEffect, useState } from "react";
import { ClearIcon } from "@mui/x-date-pickers";
import SimpleSlider from "../Corousel/SimpleSlider";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function NotificationModal({
  showNotification,
  updateShowNotification,
  data,
  pdfLink,
}) {
  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentData, setCurrentData] = useState({
    title: "",
    description: "",
  });

  const getCurrentSwiperInstance = (instance) => {
    setCurrentIndex(instance.activeIndex);
  };

  const handleImageClick = (imageUrl) => {
    setPreviewImageUrl(imageUrl);
  };

  const handleClosePreview = () => {
    setPreviewImageUrl(null);
  };

  useEffect(() => {
    setCurrentData({
      title: data[currentIndex].title,
      description: data[currentIndex].description,
    });
  }, [currentIndex]);

  return (
    <>
      {previewImageUrl && (
        <div
          className="fixed top-0 left-0 z-[99999999] w-full h-full bg-black bg-opacity-90 flex justify-center items-center"
          onClick={handleClosePreview}
        >
          <img
            src={previewImageUrl}
            className="w-[50%] h-[80%] object-contain"
          />
        </div>
      )}
      <div
        className={`group w-screen overflow-hidden h-full fixed left-0 duration-[600ms] eaese  z-[99999] flex justify-center items-center transition-[opacity,top] ${
          showNotification
            ? "flex top-0 opacity-100"
            : "none -top-10 opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={updateShowNotification}
          className={`${
            showNotification ? "opacity-100" : "opacity-0"
          } w-full ease absolute h-full bg-matte/40 z-0`}
        ></div>

        <div className="group/image w-[80%] sm:w-[40%] h-[80%] sm:h-[90vh] bg-white overflow-auto z-10 relative flex flex-col justify-start items-start pt-10 rounded-[2px]">
          <ClearIcon
            onClick={updateShowNotification}
            className=" cursor-pointer absolute top-2 right-1 hover:text-secondary uppercase gap-1"
          />

          <div className=" relative min-h-[10rem] w-full h-[65vh] overflow-hidden p-4  ">
            <SimpleSlider
              images={data}
              getCurrentSwiperInstance={getCurrentSwiperInstance}
              containImage={true}
              handleImageClick={handleImageClick}
            />
            {pdfLink && (
              <a
                className="absolute h-10 w-10 bottom-2 opacity-0 group-hover/image:opacity-100 z-[30] right-2  fill-secondary transition-all duration-[600ms] ease"
                href={pdfLink}
                download={"Entrance Examination Result 2080 Grade Two to six"}
                target="_blank"
              >
                <FileDownloadIcon
                  sx={{ fontSize: 30 }}
                  className="hover:fill-black fill-secondary text-secondary"
                />
              </a>
            )}
          </div>
          <div className="flex flex-col justify-center items-start w-full py-5 px-4">
            <p className="w-full flex justify-center items-center h-10 font-bold text-xl">
              {currentData?.title}
            </p>
            <p className="w-full flex justify-center items-center text-center sm:text-justify">
              {currentData?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

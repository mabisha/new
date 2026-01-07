import { useState } from "react";
import aboutImg from "../../assets/uniform.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
import GalleryCard from "../../components/Home/Cards/GalleryCard";
import ImageGallery from "../../components/Home/Corousel/ImageGallery";
import { Link } from "react-router-dom";
import { getAllGallery } from "../../utils/apiRequest";
import { useQuery } from "@tanstack/react-query";
import PreLoader from "../../components/Home/Loading/PreLoader";

const Gallery = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);

  const {
    data: gallery,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["gallery"],
    queryFn: getAllGallery,
  });

  if (isLoading) {
    return <PreLoader />;
  }
  if (error) {
    return (
      <GallerLayoutPage>
        <div className="w-full flex flex-col justify-center items-center py-10">
          <p className="text-lg text-red-600 mb-4">
            Failed to load notifications. Please try again later.
          </p>
          <Link
            className="flex items-center gap-1 rounded-full border border-[#d92732] px-5 py-2.5 hover:text-[#d92732] hover:bg-white duration-300 bg-[#d92732] text-white"
            to="/"
          >
            Go to Home
          </Link>
        </div>
      </GallerLayoutPage>
    );
  }
  const handleRosebudMoments = (data) => {
    setCurrentGalleryImages(data);
    setOpenGallery(true);
  };
  return (
    <>
      {openGallery && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-90 flex justify-center items-center">
          <div
            className="absolute w-full h-full"
            onClick={() => setOpenGallery(false)}
          ></div>
          <div className="absolute w-full h-[80vh] max-w-[80vw]">
            <ImageGallery images={currentGalleryImages} />
          </div>
        </div>
      )}
      <GallerLayoutPage>
        {gallery?.length === 0 ? (
          <div className="text-center text-gray-500 text-xl font-bold p-20 w-full">
            No moment available at the moment.
            <div className="w-full flex justify-center items-center p-10">
              <Link
                className="flex w-36 items-center gap-1 rounded-full border border-[#d92732] px-5 py-2.5 hover:text-[#d92732] hover:bg-white duration-300 bg-[#d92732] text-white text-base font-medium"
                to="/"
              >
                Go to Home
              </Link>
            </div>
          </div>
        ) : (
          gallery.map((item, idx) => (
            <GalleryCard
              key={idx}
              title={item.title}
              description={item.description}
              image={item.imagelink[0]?.url}
              onClick={() => handleRosebudMoments(item)}
              driveLink={item.public_id}
            />
          ))
        )}
      </GallerLayoutPage>
    </>
  );
};

export default Gallery;

const GallerLayoutPage = ({ children }) => {
  return (
    <PagesLayout
      img={aboutImg}
      breadCrumb={"Rosebud Moments"}
      seoTitle={"Rosebud Moments"}
      metaContent={`Welcome to Rosebud Moments:
    Where Every Petal Tells a Story,
    And Every Bloom a Memory.`}
    >
      <div className="w-full flex flex-col justify-start items-center py-9">
        <div className="text-4xl sm:text-5xl md:text-6xl text-black font-bold mb-5">
          <span>Rosebud</span>
          <span className="text-secondary">Moments</span>
        </div>
        <div className="w-full flex justify-start flex-wrap items-start gap-10 px-20">
          {children}
        </div>
      </div>
    </PagesLayout>
  );
};

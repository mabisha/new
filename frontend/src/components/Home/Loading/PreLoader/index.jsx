import image from "../../../../../public/rosebud-favicon.png";
import "../../../../styles/preloader.css";
const PreLoader = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-white z-[999999999] flex-col">
      <div className="h-[125px] w-[140px]">
        <img src={image} alt="image" />
      </div>
      <span className="loader-text text-secondary w-full">Rosebud School</span>
      <div className="loader">
        <span className="load"></span>
      </div>
    </div>
  );
};

export default PreLoader;

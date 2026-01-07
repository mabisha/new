import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { PiLinkDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
const GalleryCard = ({ driveLink, image, title, description, ...props }) => {
  return (
    <div className="group   md:max-h-[20rem] bg-gray-200/40 hover:shadow-md cursor-pointer overflow-hidden relative min-w-[20rem] flex-1 rounded-sm gap-4">
      <div
        className={`w-full ${
          description.length ? "h-[12rem]" : "h-[12rem]"
        } relative`}
        {...props}
      >
        <div className="w-full absolute h-full bg-default/40"></div>
        <img
          src={image}
          alt="image"
          className="z-[0] top-0 w-full h-full object-cover object-center"
        />
      </div>
      <div
        className={`z-[5] group-hover:text-secondary  text-white absolute w-full ${
          description.length ? "top-[30%]" : "bottom-0"
        } flex justify-between items-center h-16 lg:h-20 px-5`}
      >
        <span className="font-extrabold text-2xl">{title}</span>
        <span className="relative -left-2 group-hover:left-0 duration-[500ms] transition-[left] ease">
          <KeyboardBackspaceIcon className="rotate-180" sx={{ fontSize: 30 }} />
        </span>
      </div>
      <p className="flex relative p-1 py-2 h-full min-h-20 flex-1 px-5 overflow-hidden leading-[28px]">
        {description}
      </p>

      {driveLink ? (
        <Link
          to={`https://drive.google.com/file/d/${driveLink}/view`}
          target="_blank"
          className="absolute bottom-5 right-4"
        >
          <PiLinkDuotone />
        </Link>
      ) : null}
    </div>
  );
};

export default GalleryCard;

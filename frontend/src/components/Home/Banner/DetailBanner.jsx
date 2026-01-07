import { Link } from "react-router-dom";
import csp from "../../../assets/csp.jpg";
const DetailBanner = ({
  buttonLink = "/",
  buttonText = "Learn more",
  listItemOne = "Kinesthetic Development",
  listItemTwo = "Emotional Development",
  listItemThree = "Intellectual Development",
  bannerImage = csp,
  titleOne = "Complete",
  titleTwo = "school",
  titleThree = "Program(CSP)",
  description = "The Complete Schooling Program (CSP) aims to help every student attain his or her full potential. It believes in holistic development by focusing on three distinct but critical areas of child development.",
}) => {
  return (
    <div className="w-full h-[70rem] sm:h-[50rem] lg:h-[30rem] bg-secondary flex lg:flex-row flex-col justify-center items-center mt-0 ">
      <div className="flex-1 flex justify-center items-start text-white flex-col  h-full  gap-4 pb-0 p-10 sm:p-10 pr-3 xl:p-16 xl:pr-16">
        <div className="w-full pr-5 sm:pr-0 flex flex-col gap-5 font-bold text-5xl">
          <span className="text-black capitalize"> {titleOne}</span>
          <div className="flex capitalize gap-5 sm:gap-3 sm:flex-row flex-col flex-wrap">
            <span>{titleTwo}</span>
            <span> {titleThree}</span>
          </div>
        </div>
        <p className="w-[80%] flex">{description}</p>

        <Link
          to={buttonLink}
          className="h-10 hover:bg-matte hover:text-white transition-all duration-[600ms] ease bg-white w-[8rem] cursor-pointer hover:shadow-md font-bold rounded-sm flex justify-center items-center text-black"
        >
          {buttonText}
        </Link>
      </div>
      <div className="flex flex-1 min-w-[35%] p-10 xl:pl-10 pl-10 lg:pl-0 pr-5 sm:pr-10  overflow-hidden h-full relative flex-col sm:flex-row pt-8 lg:flex-col gap-4 w-full">
        <div className="h-[50%] sm:h-[90%] lg:h-[50%] w-full sm:w-[50%] lg:w-[70%] relative">
          <div className="absolute w-full h-full bg-white/20 rounded-sm -top-[6px] -right-2 lg:-right-[70px]"></div>
          <img
            src={bannerImage}
            className="h-full w-full object-cover relative lg:-right-16 rounded-sm"
          />
        </div>
        <div
          className="relative  lg:-right-16 flex-1 w-full flex flex-col gap-5 text-lg sm:text-2xl justify-center items-start overflow-hidden pt-5"
          style={{ listStyleType: "square" }}
        >
          <li className="w-full font-semibold text-white">{listItemOne}</li>
          <li className="w-full font-semibold text-white ">{listItemTwo}</li>
          <li className="w-full font-semibold text-white ">{listItemThree}</li>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;

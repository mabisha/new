import csp from "../../../assets/csp.jpg";
import csp1 from "../../../assets/kung-fu.jpg";
import csp2 from "../../../assets/eq.jpg";
import csp3 from "../../../assets/creative.jpg";
import { Link } from "react-router-dom";
const DetailedImageCard = () => {
  return (
    <div className="w-[85%] h-[95rem] lg:h-[40rem] flex  flex-col lg:flex-row justify-center items-center overflow-hidden">
      {/* left */}
      <div className="w-full lg:max-w-[40%] lg:min-w-[3%] min-h-[20rem] lg:h-full rounded-sm overflow-hidden">
        <img src={csp} alt="" className="h-full w-full object-cover" />
      </div>
      {/* right */}
      <div className="flex flex-col justify-between flex-1 w-full h-auto sm:pl-14 pt-20 pb-0 sm:pr-5 lg:h-full gap-10 ">
        {/* right-top */}
        <div className="w-full flex flex-col gap-6">
          <div className="font-extrabold text-2xl text-black flex flex-col">
            <span>Complete</span>
            <span className="text-secondary"> Schooling Program(CSP)</span>
          </div>
          <p className="font-normal text-md">
            The Complete Schooling Program (CSP) aims to help every student
            attain his or her full potential. It believes in holistic
            development by focusing on three distinct but critical areas of
            child development.
          </p>
        </div>
        {/* right-bottom */}
        <div className="w-full flex justify-between flex-col md:flex-row gap-8 items-center  h-[35rem] flex-1">
          <Link
            to="/csp"
            className="relative flex min-w-[5rem] sm:min-w-[10rem] lg:min-w-[13rem]  h-full rounded-sm overflow-hidden group cursor-pointer justify-center items-center"
          >
            <div className="absolute bg-beetroot/70 z-[1] top-0 left-0 h-full w-full"></div>
            <span className="absolute text-white z-[4] font-bold w-[80%] h-auto text-center">
              Intellectual Development
            </span>
            <img
              src={csp3}
              alt=""
              className="z-0 h-full w-full  object-cover group-hover:scale-125 transition-transform duration-[600ms] ease "
            />
          </Link>
          <Link
            to="/csp"
            className="relative flex min-w-[5rem] sm:min-w-[10rem] lg:min-w-[13rem]  h-full rounded-sm overflow-hidden group cursor-pointer justify-center items-center"
          >
            <div className="absolute bg-default/70 z-[1] top-0 left-0 h-full w-full"></div>
            <span className="absolute text-white z-[4] font-bold w-[80%] h-auto text-center">
              Emotional Development
            </span>
            <img
              src={csp2}
              alt=""
              className="z-0 h-full w-full  object-cover group-hover:scale-125 transition-transform duration-[600ms] ease "
            />
          </Link>

          {/*  */}
          <Link
            to="/csp"
            className="relative flex min-w-[5rem] sm:min-w-[10rem] lg:min-w-[13rem]  h-full rounded-sm overflow-hidden group cursor-pointer justify-center items-center"
          >
            <div className="absolute bg-matte/70 z-[1] top-0 left-0 h-full w-full"></div>
            <span className="absolute text-white z-[4] font-bold w-[80%] h-auto text-center">
              Kinesthetic Development
            </span>
            <img
              src={csp1}
              alt=""
              className="z-0 h-full w-full  object-cover group-hover:scale-125 transition-transform duration-[600ms] ease "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailedImageCard;

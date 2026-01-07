import { Link } from "react-router-dom";
import principal from "../../../assets/principal.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const MessageFrom = () => {
  return (
    <Link
      to="/from-principal"
      className="px-0 w-full  relative py-5 gap-2 flex flex-col justify-center items-start"
    >
      <div className="w-full">
        <div className=" group min-h-[24rem] md:min-h-[30rem] w-full  flex flex-1 relative rounded- overflow-hidden">
          <div className=" h-full w-full bg-default/30 absolute top-0 left-0 z-10"></div>
          <img
            src={principal}
            className="z-0 object-right-top group-hover:scale-110  transition-transform duration-[800ms] transform-gpu scale-100  absolute  h-full w-full object-cover ease"
            alt=""
          />

          <div className=" w-full text-white h-[80%] px-5 flex flex-col bottom-0 absolute z-10 gap-2  tracking-wide sm:pl-14">
            <div className="font-medium text-4xl flex flex-col items-start w-[50%] cursor-pointer hover: justify-start gap-2 text-white">
              From a Fine <span className=" tracking-wide">Mind</span>
            </div>
            <div className="font-medium text-4xl flex flex-col items-start w-[50%] cursor-pointer hover: justify-start gap-2 text-secondary">
              To a good <span className="tracking-wide">Heart.</span>
            </div>
          </div>
          <div className=" w-auto cursor-pointer text-white h-[30%] px-5 sm:pl-14 flex flex-col sm:bottom-0 -bottom-10 right-1 sm:right-auto absolute z-10">
            <div className="font-medium text-sm items-center flex w-full cursor-pointer hover: justify-start gap-3">
              {`Message From Principal`}
              <KeyboardBackspaceIcon
                fontSize="small"
                className={`group-hover:fill-secondary rotate-180`}
              />
            </div>
            <span className="font-bold text-xl">Meet the Principal</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

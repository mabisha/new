import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

const SmallPublicationCard = ({
  pdfUrl,
  firstName,
  lastName,

  imagelink,
}) => {
  return (
    <div className="group relative cursor-pointer w-[20rem] rounded-md shadow-sm h-[15rem] border-[1px] border-gray-100 overflow-hidden ease text-white flex">
      <img
        src={imagelink ?? ""}
        alt=""
        className="w-full z-0 h-full object-cover"
      />
      <Link
        to={`https://drive.google.com/file/d/${pdfUrl}/view`}
        target="_blank"
        className="absolute group-hover:top-0 -top-40 sm:absolute z-[100] transition-[top,opacity] duration-[600ms] ease text-xl flex  min-w-full flex-col justify-center overflow-hidden items-start p-5 gap-1 font-extrabold  flex-1"
      >
        <div className="w-full gap-1 flex items-center flex-col justify-center ">
          <div className="text-secondary w-full text-[16px] h-4">
            {firstName}
          </div>
          {lastName && (
            <div className="text-secondary w-full text-[14px]">{lastName}</div>
          )}
        </div>
      </Link>
      <div className="absolute w-full h-full group-hover:bg-matte/30 z-[1]"></div>
      <div className="w-full md:w-[50%] h-full overflow-hidden z-[10000] text-sm"></div>
      <Link
        to={`https://drive.google.com/file/d/${pdfUrl}/view`}
        target="_blank"
        className="absolute opacity-0 group-hover:opacity-100 z-[3] bottom-2 left-4  fill-secondary transition-all duration-[600ms] ease right-2"
      >
        <RemoveRedEyeIcon
          sx={{ fontSize: 24 }}
          className="hover:fill-black fill-secondary text-secondary"
        />
      </Link>
    </div>
  );
};

export default SmallPublicationCard;

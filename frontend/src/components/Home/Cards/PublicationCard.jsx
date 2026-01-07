import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

const PublicationCard = ({ pdfUrl, firstName, lastName, year, imagelink }) => {
  return (
    <div className="group relative cursor-pointer w-full rounded-md shadow-sm h-[20rem] border-[1px] border-gray-100 overflow-hidden ease text-white flex">
      <Link
        to={`https://drive.google.com/file/d/${pdfUrl}/view`}
        target="_blank"
        className="absolute sm:relative transition-[top,opacity] duration-[600ms] ease text-xl flex w-[50%] flex-col justify-center overflow-hidden items-start p-5 gap-1 font-extrabold z-[2] flex-1"
      >
        <div className="w-full gap-1 flex items-center flex-col justify-center ">
          <div className="text-secondary w-full">{firstName}</div>
          <div className="text-secondary w-full text-[16px]">{lastName}</div>
        </div>
        <div className="text-sm w-full text-secondary">{year}</div>
      </Link>

      <div className="absolute w-full h-full group-hover:bg-matte/10 z-[1]"></div>
      <div className="w-full md:w-[50%] h-full overflow-hidden text-sm">
        <img src={imagelink} alt="" className="w-full h-full object-cover" />
      </div>
      <Link
        to={`https://drive.google.com/file/d/${pdfUrl}/view`}
        target="_blank"
        className="absolute opacity-0 group-hover:opacity-100 z-[3] bottom-2 left-4  fill-secondary transition-all duration-[600ms] ease right-2"
      >
        <RemoveRedEyeIcon
          sx={{ fontSize: 20 }}
          className="hover:fill-black fill-secondary text-secondary"
        />
      </Link>
    </div>
  );
};

export default PublicationCard;

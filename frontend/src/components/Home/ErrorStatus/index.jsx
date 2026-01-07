import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const ErrorStatus = ({ title, description, image }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-white">
      <div className="container py-10 flex justify-center items-center bg-white">
        <div
          className="mx-auto grid max-w-sm
          grid-cols-1 items-center gap-10 rounded-md md:max-w-3xl md:grid-cols-[auto_fr] bg-white"
        >
          <img className="mx-auto block w-[300px] lg:w-[350px]" src={image} />
          <div className="text-center md:text-left flex justify-center items-center flex-col">
            <h1 className="mb-2 text-2xl font-semibold text-matte/80">
              {title}
            </h1>
            <p className="mb-5 text-gray-500 text-sm md:text-[16px]">{description}</p>
            <div className="flex items-center justify-center gap-2 text-xs">
              <button
                className="flex items-center gap-1 rounded-full border border-[#d92732] bg-[#d92732] px-5 py-2.5 font-medium text-white duration-300 hover:bg-white hover:text-[#d92732]"
                onClick={goBack}
              >
                <MdKeyboardBackspace />
                Go Back
              </button>
              <Link
                className="flex items-center gap-1 rounded-full border border-[#d92732] px-5 py-2.5 text-[#d92732] duration-300 hover:bg-[#d92732] hover:text-white"
                to="/"
              >
                <IoHomeOutline /> Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorStatus;

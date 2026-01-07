import { Link } from "react-router-dom";
import welcome from "../../../assets/welcome.jpg";
import Banner from "../Banner/Banner";
import "./welcome.css";
import SouthIcon from "@mui/icons-material/South";

const Welcome = ({ handleExploreClick }) => {
  return (
    <section
      id={"welcome-section"}
      className="  relative top-0 mobile:-top-[4rem] md:min-h-[100vh] bg-white w-full flex flex-col justify-center items-center md:gap-[3.8rem]"
    >
      <div
        onClick={handleExploreClick}
        className={`explore-container w-30 -top-[80px] sm:-top-[5px] xl:-top-[20px] flex flex-col gap-3 hover:text-secondary cursor-pointer transition-all duration-[1s] ease align-end justify-center items-center absolute   h-[5rem]  z-[11]`}
      >
        <span className="explore-text font-semibold text-md"> Explore</span>
        <div className="explore-icon">
          <SouthIcon fontSize="large" />
        </div>
      </div>
      <Banner title={"From"} subtitle={"Dusk to Dawn"} />

      <div className="w-full flex h-full  gap-10 lg:gap-0 justify-center lg:justify-start items-center lg:items-start pl-2 sm:pl-5 lg:pl-0 pr-2 sm:pr-5 flex-wrap lg:flex-nowrap">
        <div className="h-[20rem]  w-[90%] lg:min-w-[45%]  xl:min-w-[40%] min-h-[10rem] md:h-full flex flex-col px-0 md:px-0 relative -bottom-14 left-5 lg:left-5 lg:bottom-6">
          <img
            className="h-[20rem] md:h-[25rem] w-full object-cover rounded-[12px]"
            src={welcome}
            alt="Welcome to Rosebud School"
          />
        </div>
        <div className="group overflow-hidden  h-auto w-[90%] lg:w-auto min-h-[25rem] flex flex-col justify-start items-start p-7 gap-0 sm:gap-2 pl-10 sm:pl-14 text-md text-black/70 pr-10 bg-gray-100 rounded-3xl">
          <div className="text-2xl flex-wrap flex justify-start  flex-col sm:flex-row items-start gap-1 sm:items-center sm:gap-2 font-bold text-black w-full  ">
            <div className="flex sm:flex-nowrap flex-wrap justify-start sm:items-center gap-1 sm:gap-2">
              <span className="text-start whitespace-nowrap">Welcome to</span>
              <span className="text-secondary font-extrabold text-start mobile:whitespace-nowrap">
                Rosebud School
              </span>
            </div>

            <div className="h-auto text-start text-[17px] sm:text-xl mobile:whitespace-nowrap">
              - educational experiences
            </div>
          </div>
          <span className="h-[2px] w-0 transition-all duration-[900ms]  ease group-hover:w-[43%] bg-secondary"></span>
          <p className="text-ellipsis overflow-hidden leading-7 text-justify font-Montserrat  max-h-[26rem] sm:max-h-auto">
            A beacon of educational excellence since 1993 (2049 B.S). Nestled in
            the heart of Kathmandu city, our co-educational institute is
            committed to fostering a child-centered learning environment. With a
            mission to unlock the full potential of each student, we go beyond
            academics, providing a holistic and all-encompassing educational
            experience through our Complete Schooling Program (CSP). Join us on
            the journey of intellectual, physical, and emotional growth as we
            prepare every student for success in a rapidly changing world. At
            Rosebud, we believe in nurturing minds and cultivating futures –
            where education truly blossoms.
          </p>

          <Link
            to="/about-Us"
            className="relative top-5 min-h-10 bg-secondary hover:bg-black transition-all duration-[600ms] ease text-white w-[8rem] cursor-pointer hover:shadow-md font-bold rounded-sm flex justify-center items-center"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

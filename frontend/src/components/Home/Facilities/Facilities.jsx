import { Link } from "react-router-dom";
import HoverCard from "../Cards/HoverCard";
import { useContext } from "react";
import DataContext from ".././../../contexts/Datacontext";
import { useNavigate } from "react-router-dom";
import { getAllFacility } from "../../../utils/apiRequest";
import { useQuery } from "@tanstack/react-query";

const Facilities = () => {
  const { setSelectedData } = useContext(DataContext);
  const {
    data: facility,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["facility"],
    queryFn: getAllFacility,
  });
  const navigate = useNavigate();
  const handleCardClick = (data) => {
    setSelectedData(data);
    localStorage.setItem("slug-data", JSON.stringify(data));
    navigate(`/facilities/${data.id}`);
    // navigate(`/facilities-activities`);
  };
  if (isLoading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!facility || facility.length === 0) {
    return null;
  }
  return (
    <div className="w-full pb-12 flex justify-center items-center overflow-hidden ">
      <div className="relative h-full  w-[85%] flex flex-col lg:flex-row gap-6 justify-center items-center  p-0">
        <div className="h-full px-5 sm:px-10 py-5 rounded-xl bg-[#f5f5f5] w-auto min-w-full lg:min-w-[36%] md:w-auto flex-col flex justify-center items-center gap-5">
          <div className="">
            <div className="font-semibold text-black text-4xl mobile:text-5xl">
              Facilities <span className="text-gray-400"> &</span>
            </div>
            <span className="relative left-16 font-semibold text-secondary text-4xl mobile:text-5xl ">
              Activities
            </span>
          </div>
          <p className="lg:max-w-[20rem]  max-w-full px-5 mobile:px-10 lg:px-0 py-5 lg:py-0">
            Rosebud provides a student-centered learning environment with
            innovative teaching methods and the students go beyond the classroom
            teachings, reading and discussions. The rigorous course curriculum
            is a combination of theory, research, field work, site-visits,
            assignments, seminars and other practical applications.
          </p>
          <Link
            to={"/facilities-activities"}
            className="h-10 top-10 bg-secondary hover:bg-matte hover:text-white transition-colors duration-[500ms] ease w-[8rem] cursor-pointer hover:shadow-md font-bold rounded-sm flex justify-center items-center text-white"
          >
            View All
          </Link>
        </div>
        <div className="flex-1 gap-5 h-full  overflow-hidden flex-wrap flex flex-col md:flex-row justify-evenly items-start md:items-center">
          {facility?.slice(0, 3).map((item, idx) => (
            <HoverCard
              key={idx}
              hoverDescription={item.description}
              hoverTitle={item.title}
              hoverImage={item.imagelink}
              handler={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;

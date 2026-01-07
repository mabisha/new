import { Link } from "react-router-dom";

const EventsCard = ({ data }) => {
  const startDate = new Date(data.start);
  const day = startDate.getDate();
  const month = startDate.toLocaleDateString("en-US", { month: "long" });
  const dayName = startDate.toLocaleDateString("en-US", { weekday: "long" });
  return (
    <Link
      to="/events"
      className="min-w-[16rem] sm:min-w-[12rem] w-[18%] overflow-hidden max-w-[22rem]  border-[1px] border-gray-100 hover:border-gray-200/80 transition-all duration-[500ms] ease cursor-pointer  h-[12rem] flex flex-col justify-between items-start p-5 rounded-md gap-4"
    >
      <div className="w-full  flex justify-start items-start text-xl text-secondary flex-col h-auto flex-1 gap-1">
        <span className="text-5xl font-bold">{day}</span>
        <span className="w-full text-sm font-semibold text-matte/50 ">
          {month}, {dayName}
        </span>
      </div>
      <div className=" flex justify-start  text-start items-start text-md font-bold leading-[26px] capitalize text-black min-h-20  w-full overflow-hidden">
        {data.description}
      </div>
    </Link>
  );
};

export default EventsCard;

import { Link } from "react-router-dom";

const OverviewCard = ({ title, desc, icon, bgColor, path }) => {
  return (
    <Link
      to={path ? path : "#"}
      className={`flex cursor-pointer hover:shadow-md items-center gap-3 rounded-lg px-5 py-7 sm:gap-4 ${bgColor}`}
    >
      <div className="text-2xl sm:text-3xl">{icon}</div>
      <div>
        <h2 className="text-2xl font-semibold text-[#2d2d2d]">{title}</h2>
        <p className="text-xs text-[#3d3d3d] sm:text-sm">{desc}</p>
      </div>
    </Link>
  );
};

export default OverviewCard;

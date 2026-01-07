import { RiMenu3Line } from "react-icons/ri";
import { Link, useOutletContext } from "react-router-dom";
import Avatar from "../../../../../public/avatar.jpg";
import { useStore } from "../../../../store";
const DashboardHeader = ({ title, desc }) => {
  const [_sidebarOpen, setSidebarOpen] = useOutletContext();

  const user = useStore((state) => state.user);
  const userDetail = JSON.parse(localStorage.getItem("userprofile"));
  const photo = (user?.photo || userDetail?.photo) ?? Avatar;
  const name = user?.username ?? userDetail?.name;
  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="flex h-16 items-center gap-2 border-b border-[#eee]/70 bg-white px-3 sm:h-20 sm:gap-3 sm:px-5 xl:px-10">
      <button
        className="flex aspect-square w-7 items-center justify-center rounded-md border border-primary/10 bg-matte text-white sm:w-8 lg:hidden"
        onClick={toggleSidebar}
      >
        <span className="text-2xl">
          <RiMenu3Line />
        </span>
      </button>
      <div>
        <p className="mb-0.5 text-lg font-semibold text-[#1d1d1d] sm:text-xl">
          {title}
        </p>
        <p className="hidden text-sm font-light leading-tight text-gray-400 sm:block">
          {desc}
        </p>
      </div>

      <Link to="../profile" className="group ml-auto flex items-center gap-2">
        <div className="aspect-square w-10 overflow-hidden rounded-full bg-gray-100 sm:w-11">
          <img src={photo} className="h-full w-full object-cover" alt={name} />
        </div>
        <div className="hidden flex-col sm:flex">
          <h4 className="font-medium leading-tight text-[#1d1d1d]">{name}</h4>
          <p className="text-xs text-primary group-hover:underline">
            Visit Profile
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DashboardHeader;

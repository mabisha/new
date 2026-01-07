import { PiShieldWarningDuotone } from "react-icons/pi";
import { NavLink, Outlet } from "react-router-dom";
import DashboardHeader from "../../AdminComponents/AdminTopBar/DashboardHeader";
import { PiUserDuotone } from "react-icons/pi";
import PerfectScrollbar from "react-perfect-scrollbar";
const styles = {
  link: "flex flex-col items-center gap-1 border-b-2 border-white duration-100 hover:border-primary text-[#808080] hover:bg-matte/5 px-5 pb-2 pt-2.5 text-sm sm:text-base  [&.active]:border-primary [&.active]:text-white [&.active]:bg-[#d92732]",
};

const Profile = () => {
  return (
    <>
      <DashboardHeader
        title="Profile"
        desc="Manage your profile effortlessly"
      />
      <PerfectScrollbar className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-gray-200/70 bg-white">
          <div className="flex gap-0.5 border-b border-gray-200/70">
            <NavLink className={styles.link} to="/admin/profile/general">
              <span className="text-xl">
                <PiUserDuotone />
              </span>
              General
            </NavLink>
            <NavLink className={styles.link} to="/admin/profile/security">
              <span className="text-xl">
                <PiShieldWarningDuotone />
              </span>
              Security
            </NavLink>
          </div>
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </PerfectScrollbar>
    </>
  );
};

export default Profile;

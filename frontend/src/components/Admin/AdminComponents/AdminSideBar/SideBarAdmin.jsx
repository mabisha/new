import React, { useEffect, useState } from "react";
import logo from "../../../../assets/rosebud-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { PiUserPlusDuotone } from "react-icons/pi";
import { Box, Modal, Typography } from "@mui/material";
import logoutImage from "../../../../assets/clock.png";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { PiSignOutDuotone } from "react-icons/pi";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import toast from "react-hot-toast";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { LuFileClock } from "react-icons/lu";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { PiGooglePhotosLogoDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { logout } from "../../../../utils/apiRequest";
import { PiUsersDuotone } from "react-icons/pi";
import { useStore } from "../../../../store";
import { PiUserSquareDuotone } from "react-icons/pi";
import { PiBookDuotone } from "react-icons/pi";
import { PiBellDuotone } from "react-icons/pi";
import { MdOutlineRateReview } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import Spinner from "../Elements/Spinner";
import { useCookies } from "react-cookie";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 440,
  height: 480,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
};
const logoutInnerBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "40%",
};
const MenuLink = ({ path, title, icon }) => (
  <NavLink
    to={`${path}`}
    className={
      "dashboardMenu flex items-center gap-3 border-white px-8 py-3  text-matte/70 font-normal hover:bg-[#d927320d] hover:text-[#d92732] sm:py-3.5 sm:text-base [&.active]:border-r-4 [&.active]:border-transparent [&.active]:bg-[#d927320d] [&.active]:text-[#d92732]"
    }
  >
    <span className="text-lg sm:text-xl">{icon}</span>
    <span className="text-xs sm:text-sm">{title}</span>
  </NavLink>
);
function SideBar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const [, , removeCookie] = useCookies(["userToken", "accessToken"]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false); // const user = useStore((state) => state.user);
  const setLogoutDirection = useStore((state) => state.setLogoutDirection);
  const menuItems = [
    {
      title: "Overview",
      path: "overview",
      icon: <MdDashboard />,
    },
    {
      title: "Notification",
      path: "notification",
      icon: <PiBellDuotone />,
    },

    {
      title: "Publication",
      path: "publication",
      icon: <PiBookDuotone />,
    },

    {
      title: "Gallery",
      path: "gallery",
      icon: <PiGooglePhotosLogoDuotone />,
    },
    {
      title: "Facility",
      path: "facility",
      icon: <PiBuildingOfficeDuotone />,
    },

    {
      title: "Calendar",
      path: "calendar",
      icon: <PiCalendarDotsDuotone />,
    },
    {
      title: "Users",
      path: "userSetup",
      icon: <PiUsersDuotone />,
    },
    {
      title: "Approve",
      path: "approve",
      icon: <LuFileClock />,
    },
    {
      title: "Vacancy",
      path: "vacancy",
      icon: <PiUserPlusDuotone />,
    },
    {
      title: "Teacher",
      path: "teacher",
      icon: <PiChalkboardTeacherDuotone />,
    },

    {
      title: "Add Projects",
      path: "projects",
      icon: <PiTreeStructureDuotone className="rotate-90" />,
    },
    {
      title: "Send Sms",
      path: "send-sms",
      icon: <MdOutlineRateReview />,
    },
  ];

  //logout handler
  const handleLogout = async () => {
    setLogoutDirection(true);
    const cookieName = "userToken";
    document.cookie =
      cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    setIsLoggingOut(true);
    await logout().finally(() => {
      toast.success("Logged Out!");
      navigate("/login");
      removeCookie("userToken", { path: "/" });
      removeCookie("access_token", { path: "/" });
      localStorage.clear();
      setIsLoggingOut(false);
    });
    navigate("/login");
  };

  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  return (
    <div
      className={`group invisible fixed left-0 top-0 z-50 h-full w-full bg-black/10 opacity-0 backdrop-blur-[2px] duration-300 lg:visible lg:static lg:opacity-100 [&.active]:visible [&.active]:opacity-100 [&.active]:duration-100 ${
        sidebarOpen ? "active" : ""
      }`}
      onClick={(e) => e.target.classList.contains("group") && closeSidebar()}
    >
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={logoutImage}
            alt=""
            style={{ width: "90%", height: "60%", objectFit: "cover" }}
          />
          <Box sx={logoutInnerBoxStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h4"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <p className="text-xl font-semibold"> Comback Soon !</p>
            </Typography>
            <Typography id="modal-modal-title">
              <p className="text-[15px] font-normal w-full">
                Are you sure you want to logout?
              </p>
            </Typography>
          </Box>

          <div className="w-full max-w-xl p-3  sm:p-8 md:max-w-3xl">
            <div className="text-center w-full">
              <button
                onClick={handleLogout}
                type="submit"
                className="mt- inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
                disabled={isLoggingOut}
              >
                {" "}
                {isLoggingOut ? (
                  <Spinner width="w-5" height="h-5" />
                ) : (
                  <span className="text-xl">
                    <PiSignOutDuotone className="rotate-180" />
                  </span>
                )}
                Logout
              </button>
            </div>
          </div>
        </Box>
      </Modal>

      <aside className="sidebar h-full w-64 -translate-x-full bg-white duration-300 group-[&.active]:-translate-x-0 lg:w-full lg:-translate-x-0 lg:border-r lg:border-[#eee]/70">
        <div className="flex items-center justify-start h-16  w-full  overflow-hidden border-b border-[#eee]/70 pl-2 pr-8 sm:h-20">
          <NavLink
            to="/"
            className="logo-title  h-full pl-0 p-3 w-[150px] flex justify-start"
          >
            <img
              className="h-full w-full object-contain"
              src={logo}
              alt="Admin Panel"
            />
          </NavLink>
        </div>

        <div className="sidebarContent h-[calc(100vh-64px)] overflow-y-auto pb-5 sm:h-[calc(100vh-80px)] sm:pb-10">
          <PerfectScrollbar>
            {/* {user && ( */}
            <>
              <p className="px-8 py-4 text-xs font-medium uppercase text-matte/70">
                Menu
              </p>
              <nav className="flex flex-col gap-1 sm:gap-1.5">
                {menuItems.map(({ title, path, icon }, index) => (
                  <MenuLink path={path} title={title} icon={icon} key={index} />
                ))}
                <hr className="border-gray-200/70" />
                <MenuLink
                  path="profile"
                  title="Profile"
                  icon={<PiUserSquareDuotone />}
                />

                <button
                  className="flex items-center gap-3 px-8 py-3 text-[#808080] hover:text-red-400"
                  onClick={handleOpen}
                >
                  <span className="text-xl">
                    <PiSignOutDuotone className="rotate-180" />
                  </span>
                  <span className="text-sm ">Logout</span>
                </button>
              </nav>
            </>
            {/* )} */}
            {/* {!user && (
            <div className="flex h-full items-center justify-center">
              <Spinner />
            </div>
          )} */}
          </PerfectScrollbar>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;

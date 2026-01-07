import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/rosebud.svg";
import logo2 from "../../../assets/rosebud.png";
import { NAV_BAR_LISTS } from "../../../constants/NavBarConstants";
import useWindowSize from "../../../hooks/useWindowSize";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PopOverButton from "../Button/PopOverButton";
const Navbar = ({ updateContactFormState }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [navColoredImage, setNavColoredImage] = useState(logo2);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuContainerRef = useRef(null);
  const prevScrollY = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  //rrd
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpenDrawer((prev) => !prev);
    setHideNavbar(false);
    setShowNavbar(true);
  };

  const screen = useWindowSize();

  //effects
  useEffect(() => {
    const container = menuContainerRef.current;

    if (container) {
      const containerIsOverflowing =
        container.scrollHeight > container.clientHeight;
      setIsOverflowing(containerIsOverflowing);
    }
  }, [openDrawer, screen]);

  useEffect(() => {
    if (screen.width < 550 && openDrawer) {
      document.documentElement.classList.add("hide-overflow");
      document.body.classList.add("hide-overflow");
    }

    if ((screen.width < 550 && !openDrawer) || screen.width > 550) {
      document.documentElement.classList.remove("hide-overflow");
      document.body.classList.remove("hide-overflow");
    }
  }, [isOverflowing, openDrawer, screen]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 800);
    setOpenDrawer(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsSticky(true);
      }
      if (currentScrollY < 100) {
        setIsSticky(false);
      }
      if (currentScrollY > 500 && currentScrollY > prevScrollY.current) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, window.scrollY, screen.width]);

  useEffect(() => {
    if (logo2) {
      setNavColoredImage(logo2);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const messageBottom =
        document.getElementById("message-from-principal")?.offsetTop +
        document.getElementById("message-from-principal")?.offsetHeight;
      if (scrollPosition >= messageBottom - 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={` ${
          !showNavbar
            ? "-top-[50rem] md:-top-40 transition-all py-11 h-24 duration-[600ms] ease-out bg-white "
            : isSticky
            ? `bg-white h-24 text-black  ${
                !openDrawer
                  ? "shadow-sm shadow-black/20"
                  : "shadow-transparent border-b-[0px]"
              }`
            : openDrawer
            ? "bg-white h-24  shadow-transparent"
            : "bg-transparent h-[5rem] text-white"
        }  w-full fixed top-0  transition-all duration-[600ms] ease   left-0 flex justify-between z-[100] px-2 sm:px-10 items-center ease `}
      >
        <div
          className="cursor-pointer w-40 h-12 pt-[2px] relative flex justify-center items-center"
          onClick={() => navigate("/")}
        >
          <div
            style={{
              backgroundImage: `url(${
                isSticky || openDrawer || hovered ? navColoredImage : logo
              })`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "48px",
              width: "160px",
            }}
          >
            &nbsp;
          </div>
        </div>

        <div
          className={`flex justify-end  gap-4 font-semibold items-center flex-1 `}
        >
          {!location.pathname.includes("notifications") && (
            <Link
              to="/notifications"
              className="cursor-pointer hover:text-secondary hidden mobile:flex"
            >
              Notifications
            </Link>
          )}
          {!location.pathname.includes("contact-us") && (
            <span
              className="cursor-pointer hover:text-secondary hidden mobile:flex"
              onClick={updateContactFormState}
            >
              Get In touch
            </span>
          )}
          <div
            className={`group focus:outline-none    burger-icon ${
              openDrawer
                ? "active bg-black [&>*]:bg-black"
                : isSticky
                ? "[&>*]:bg-black"
                : "[&>*]:bg-white"
            }`}
            onClick={handleMenuClick}
          >
            <span className={`bar group-hover:bg-secondary`}></span>
            <span className={`bar group-hover:bg-secondary `}></span>
            <span className={`bar  group-hover:bg-secondary `}></span>
          </div>
        </div>
      </nav>
      <div
        ref={menuContainerRef}
        className={`${
          (hideNavbar || !showNavbar) &&
          "-top-[50rem] md:-top-40  py-11 h-24  ease-out"
        } menu-container   shadow-md border-t-[1px] z-[99] fixed flex overflow-auto mobile:overflow-visible justify-center items-start  mobile:items-center mobile:justify-evenly  left-0 bg-white  p-2 mobile:p-5 mobile:pl-12 h-screen mobile:h-[12rem] md:h-[8rem] lg:h-[6rem] w-full  ease ${
          openDrawer
            ? "top-24 transition-[top] duration-[650ms]"
            : `-top-[85rem] sm:-top-[65rem] transition-[top] duration-[500ms]`
        }`}
      >
        <ul className="order-1 menu-body flex flex-col items-start mobile:flex-row justify-start lg:justify-center  flex-wrap gap-5 overflow-x-hidden overflow-y-auto mobile:items-center w-full  px-10 py-4">
          {NAV_BAR_LISTS.map((item, idx) => {
            if (item[0] === "About us") {
              return (
                <PopOverButton key={idx} menuItem={item[1]} title={item[0]} />
              );
            } else {
              return (
                <Link
                  onClick={() => setOpenDrawer(false)}
                  to={item[1].toLocaleLowerCase()}
                  key={idx}
                  className="group/link relative flex justify-center items-center text-base  font-semibold cursor-pointer capitalize hover:text-secondary"
                >
                  <span className="w-0 group-hover/link:w-full absolute bottom-0 h-[2px] bg-secondary border-transparent transition-[width] duration-[500ms]"></span>
                  {item[0]}
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

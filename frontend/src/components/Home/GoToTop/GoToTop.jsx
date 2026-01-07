import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    const scrolling = document.getElementsByClassName("lenis-scrolling");

    if (scrolling?.length === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (scrolling?.length > 0) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 1500);
    }
  };
  useEffect(() => {
    // Scroll to top when the component mounts
    scrollToTop();
  }, [location]);

  return (
    <div
      onClick={scrollToTop}
      className={`group overflow-hidden transition-opacity duration-[1200ms] ease-out w-[2.8rem] overflow ${
        isVisible ? "opacity-100" : "opacity-0"
      } cursor-pointer hover:shadow-md bg-default  text-white h-[2.8rem] z-[999] rounded-sm fixed bottom-5 right-[30px] justify-center items-center`}
    >
      <div
        className={`submitButton flex flex-col justify-start transition-all linear duration-500 items-center h-[80%] w-[100%] gap-4 
        group-hover:translate-y-[-3rem] delay-200"
        `}
      >
        <span className="capitalize">
          <KeyboardArrowUpIcon sx={{ height: "45px", width: "30px" }} />
        </span>
        <span className="tracking-wider capitalize text-sm font-bold">top</span>
      </div>
    </div>
  );
};

export default GoToTop;

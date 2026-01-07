import { useEffect, useRef, useState } from "react";
import { PiGlobeDuotone } from "react-icons/pi";

const CustomDropdown = ({ selectLanguage, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-matte border text-matte/70 border-gray-300 hover:bg-gray-100 bg-white  font-medium rounded-full text-sm px-3 py-2 text-center inline-flex items-center "
        type="button"
      >
        <span className="flex gap-1 justify-start items-center">
          <PiGlobeDuotone className="w-5 h-5 " size={30} />{" "}
          {language === "ad" ? "English" : "नेपाली"}
        </span>
        <svg
          className={`w-2.5 h-2.5 ms-1  ${
            isOpen ? "transform rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="z-10 p-1 pt-0 pb-0 select-none absolute top-10 -left-4 bg-white divide-y divide-gray-200 border border-gray-100 rounded-lg shadow-md w-[160px] text-matte">
          <ul
            className="py-1 text-[12px] font-semibold text-matte/70"
            aria-labelledby="dropdownDefaultButton"
          >
            <li
              onClick={() => {
                selectLanguage("ad");
                setIsOpen(false);
              }}
            >
              <span className="rounded-md px-4 py-2 cursor-pointer  hover:bg-gray-100 flex justify-start items-center w-full">
                Gregorian Date (AD)
              </span>
            </li>
            <li
              onClick={() => {
                selectLanguage("bs");
                setIsOpen(false);
              }}
            >
              <span className="rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-start items-center w-full">
                Bikram Sambat (ने)
              </span>
            </li>

            {/* <li
              onClick={() => {
                selectLanguage("np");
                setIsOpen(false);
              }}
            >
              <span className="rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-center items-center w-full">
                BS - नेपाली
              </span>
            </li> */}
            <li
              onClick={() => {
                selectLanguage("en");
                setIsOpen(false);
              }}
            >
              <span className="rounded-md px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-start items-center w-full">
                Bikram Sambat (En)
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

import logo from "../../../assets/rosebud.svg";
import Csplogo from "../../../assets/CSP-Logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./Footer.css";
import {
  EMAIL,
  LOCATION,
  PHONE_NUMBER,
  SOCIAL_URL,
} from "../../../constants/InformationConstants";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, YouTube } from "@mui/icons-material";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col  justify-between items-center">
      {/* maps and links */}
      <div className="flex flex-1 p-5 py-14 w-[90%] gap-7 lg:flex-row flex-col shadow-md min-h-[28rem]">
        <iframe
          className="w-full lg:w-2/5 rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9695407751537!2d85.3225644756103!3d27.687336276194007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9f4c8754b%3A0x5b73ef603bef6a2c!2sRosebud%20School!5e0!3m2!1sen!2snp!4v1685870641255!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="flex-1  max-w-full sm:max-w-[20rem] 2xl:max-w-[30rem]  h-full w-full p-5 px-14 sm:p-0 sm:px-0 sm:w-auto flex flex-col justify-start items-center gap-2">
          <p className="font-bold capitalize text-[14px] w-full flex justify-center sm:justify-start">
            Find Us
          </p>
          <ul className="w-full h-auto flex gap-2 flex-col justify-center text-[13px] font-semibold text-gray-700 ">
            <li className="w-full flex justify-start items-start gap-2">
              <LocationOnIcon fontSize="small" sx={{ height: "17px" }} />
              <div className="w-auto flex flex-1 flex-wrap gap-1 relative -top-[2px] ">
                {LOCATION.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </li>
            <li className="w-full flex justify-start items-start gap-2">
              <EmailIcon fontSize="small" sx={{ height: "17px" }} />
              <div className="w-auto flex flex-1 flex-wrap gap-1 relative -top-[2px] ">
                {EMAIL}
              </div>
            </li>
            <li className="w-full flex justify-start items-start gap-2">
              <LocalPhoneIcon fontSize="small" sx={{ height: "17px" }} />
              <div className="w-auto flex flex-1 flex-wrap gap-1 relative -top-[2px] ">
                {PHONE_NUMBER.map((item, idx) => (
                  <div key={idx}>{item}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 flex-1">
          <div className="w-full flex-1 bg-secondary text-white rounded-md  p-5 flex flex-col justify-between">
            <p className="capitalize font-semibold text-2xl">Plan Your visit</p>
            <Link
              target="_blank"
              to="https://www.google.com/maps/place/Rosebud+School/@27.6873363,85.3225645,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19b9f4c8754b:0x5b73ef603bef6a2c!8m2!3d27.6873363!4d85.3251394!16s%2Fm%2F076fpw8?entry=ttu"
              className="uppercase font-normal text-sm underline underline-offset-4"
            >
              Maps & Directions
            </Link>
          </div>
          <div className="w-full flex-1 bg-default text-white rounded-md  p-5 flex flex-col justify-between">
            <p className="capitalize font-semibold text-2xl">
              Careers At Rosebud
            </p>
            <Link
              to="/career"
              className="uppercase font-normal text-sm underline underline-offset-4"
            >
              Vacancies at Rosebud
            </Link>
          </div>
        </div>
      </div>
      {/* footer logo and contact information */}
      <footer className="bg-gray-950 text-white py-12 p-[2rem]">
        <div className=" mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative h-12 w-12">
                  <img src={logo} className="max-w-40 h-18 object-cover" />
                </div>
              </div>
              <p className="text-gray-400 mb-4 !text-start text-sm">
                Nurturing minds and cultivating futures since 1993 (2049 B.S).
                Where education truly blossoms.
              </p>
              <div className="flex space-x-4">
                <Link
                  to={SOCIAL_URL?.facebook?.link}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  to={SOCIAL_URL?.instagram?.link}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  to={SOCIAL_URL?.youtube?.link}
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <YouTube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Link
                to="/csp"
                className="w-[8rem] h-[8rem] sm:h-full  p-1 flex justify-center items-center flex-col"
              >
                <img src={Csplogo} className="w-full h-full object-contain" />
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 pl-2">
                <li>
                  <Link
                    to="/csp"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    CSP
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/facilities-activities"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rosebud-moments"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Rosebud Moments
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <LocationOnIcon
                    fontSize="small"
                    className="h-5 w-5 text-primary mr-3 flex-shrink-0"
                  />
                  <span className="text-gray-400 text-sm !text-start flex flex-wrap gap-1">
                    {LOCATION.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))}
                  </span>
                </li>
                <li className="flex">
                  <Mail
                    fontSize="small"
                    className="h-5 w-5 text-primary mr-3 flex-shrink-0"
                  />
                  <span className="text-gray-400  text-sm !text-start">
                    {EMAIL}
                  </span>
                </li>
                <li className="flex">
                  <Phone
                    fontSize="small"
                    className="h-5 w-5 text-primary mr-3 flex-shrink-0"
                  />
                  <span className="text-gray-400  text-sm !text-start flex gap-1 flex-wrap">
                    {PHONE_NUMBER.map((item, idx) => (
                      <div key={idx}>{item}</div>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              <Link to="/events" className="hover:text-white transition-colors">
                Events
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/academic"
                className="hover:text-white transition-colors"
              >
                Academic
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/admission"
                className="hover:text-white transition-colors"
              >
                Admission
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                to="/contact-us"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/login" className="hover:text-white transition-colors">
                Login
              </Link>
            </div>
          </div>

          <div className="text-center text-sm mt-8">
            © Rosebud School, {currentYear}. All rights reserved.
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;

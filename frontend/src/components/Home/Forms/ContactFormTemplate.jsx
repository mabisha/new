import ClearIcon from "@mui/icons-material/Clear";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { EMAIL } from "../../../constants/InformationConstants";
import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
const ContactFormTemplate = ({updateContactFormState}) => {
  // const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [subject, setSubject] = useState("");
  return (
    <div className=" w-full h-full flex justify-center items-center p-2">
      <div className="bg-white w-[60%] h-[80%] rounded-md z-10 p-2  overflow-hidden ">
        <div className="w-full relative h-10 flex items-center justify-center border-b-[1px] border-b-gray-200">
          <span className="Capitalize font-semibold text-xl">Contact</span>
          <ClearIcon
            onClick={updateContactFormState}
            className=" cursor-pointer absolute top-2 right-1 hover:text-secondary uppercase gap-1"
          />
        </div>

        <div className="h-[92%] overflow-x-auto overflow-y-auto xl:px-5 flex-col xl:flex-row flex flex-1 justify-start xl:justify-center gap-5">
          <div className="w-full flex-col justify-evenly xl:w-[40%] bg-white flex py-2 pl-2 xl:pl-0 pr-2 xl:pr-4 gap-2">
            {/* card */}
            <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
              <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
                <MyLocationIcon sx={{ height: "18px" }} />
              </div>
              <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
                <span className="font-semibold text-lg">Location :</span>
                <span className="text-sm font-medium">
                  Thapathali, Kathmandu
                </span>
              </div>
            </div>
            <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
              <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
                <EmailIcon sx={{ height: "18px" }} />
              </div>
              <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
                <span className="font-semibold text-lg">Email :</span>
                <span className="text-sm font-medium">{EMAIL}</span>
              </div>
            </div>
            <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
              <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
                <LocalPhoneIcon sx={{ height: "18px" }} />
              </div>
              <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
                <span className="font-semibold text-lg">Call :</span>
                <span className="text-sm font-medium">+977 9847269877</span>
              </div>
            </div>
            <div className="h-28 bg-secondary cursor-pointer text-white rounded-md  gap-4 flex justify-between px-3 items-center">
              <div className="bg-gray-200/40 p-[2px] px-1 h-10 w-12 rounded-lg flex justify-center items-center">
                <ScheduleIcon sx={{ height: "18px" }} />
              </div>
              <div className="overflow-hidden h-[80%] flex-col w-full flex justify-center items-start">
                <span className="font-semibold text-lg">Open Hours :</span>
                <span className="text-sm font-medium">Sun-Fri: 10AM - 6PM</span>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[55%] pl-2 xl:pl-0 pr-2 xl:pr-0">
            <form className="php-email-form py-4 flex flex-col justify-evenly gap-5">
              <div className="w-full flex justify-between items-center gap-5">
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  placeholder="Your Name"
                  required
                  className="flex flex-1"
                />
                <TextField
                  type="email"
                  label="Your Email"
                  variant="outlined"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex flex-1"
                />
              </div>

              <div className="w-full flex justify-between items-center gap-5">
                <TextField
                  type="text"
                  label="Subject"
                  variant="outlined"
                  name="Contact Number:"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="flex flex-1"
                />
              </div>
              <div className="w-full flex justify-between items-center gap-5">
                <TextField
                  type="text"
                  label="Subject"
                  variant="outlined"
                  name="Contact Number:"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="flex flex-1"
                />
              </div>
              <div className="w-full flex justify-between items-center gap-5">
                <TextField
                  className="border-[1px] w-full outline-none p-2 border-gray-400/70 rounded-[4px] focus:border-[2px] hover:border-black focus:border-blue-500"
                  name="message"
                  placeholder="Message"
                  required
                  multiline
                  rows={4}
                  value={subject}
                  variant="outlined"
                />
              </div>
              <div className="contact-form-submit-button-container" style={{}}>
                <Button type="submit" variant="outlined" size="medium">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormTemplate;

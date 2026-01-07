import img from "../../assets/career.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";

import Button from "@mui/material/Button";
import { useState } from "react";
import TextField from "@mui/material/TextField";
const CareerPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <PagesLayout
      img={img}
      breadCrumb="Career"
      seotTitle={"Careers"}
      metaContent={`We are committed to bringing world-class, passionate professionals
      together to provide quality education.`}
    >
      <div className="w-full h-auto flex justify-center items-center gap-2 flex-col p-10">
        <span className="font-bold text-2xl flex justify-center items-center h-20 md:text-5xl w-full">
          Be Part of our mission
        </span>
        <p>
          We are committed to bringing world-class, passionate professionals
          together to provide quality education.
        </p>
      </div>

      <div className=" w-full h-full flex flex-row  justify-center items-center relative p-9 py-13 gap-10">
        <form className="php-email-form py-0 flex-1 flex flex-col justify-evenly gap-5 max-w-[50%]">
          <div className="w-full flex justify-between items-center gap-5">
            <TextField
              id="outlined-basic"
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
              variant="outlined"
              name="Position"
              id="Position"
              placeholder="Position"
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
    </PagesLayout>
  );
};

export default CareerPage;

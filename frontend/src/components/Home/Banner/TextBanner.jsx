import { useState } from "react";

const TextBanner = ({ title }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group w-full flex justify-center items-center flex-col gap-10 py-5 bg-[#f5f5f5] h-[40rem] sm:h-[25rem]"
    >
      <p className="font-bold text-3xl sm:text-4xl uppercase relative">
        {title}
        <span className="h-[4px] w-0 transition-all duration-[900ms] absolute bottom-0 left-0  ease group-hover:w-[200px] bg-secondary"></span>
      </p>

      <p className="w-[70%] sm:w-[40%] text-lg">
        We aim to help every student attain his or her full potential. It
        believes in holistic development by focusing on three distinct but
        critical areas of child development. At the same time, by allowing the
        separation of school and home activities, our CSP makes the process of
        learning and development enjoyable to both the students and the parents.
      </p>
    </div>
  );
};

export default TextBanner;

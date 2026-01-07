import VerifiedIcon from "@mui/icons-material/Verified";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
const InfoBanner = ({
  years,
  yearsText,
  teachers,
  teachersText,
  students,
  studentsText,
  alumni,
  alumniText,
}) => {
  return (
    <div className="max-w-[87%]  h-full lg:h-[18rem] flex-1 flex-col lg:flex-row flex-wrap py-5 lg:py-3 bg-secondary text-white flex justify-evenly items-center rounded-xl ">
      {/* div 1 */}
      <div className="h-full flex-1 min-w-[25%]  flex p-4 flex-col justify-center">
        <div className="flex flex-2 flex-col gap-1">
          <span className="w-full flex-1 flex h-full justify-center items-center">
            <VerifiedIcon sx={{ fontSize: 55 }} />
          </span>
          <span className="w-full  font-bold text-3xl capitalize flex-1 flex h-full justify-center items-center">
            {years}
          </span>
        </div>
        <span className="w-full font-bold text-xl  h-10 flex justify-center items-center">
          {yearsText}
        </span>
      </div>
      {/* div 2 */}
      <div className="h-full flex-1 min-w-[25%] flex p-4 flex-col justify-center">
        <div className="flex flex-2 flex-col gap-1">
          <span className="w-full flex-1 flex h-full justify-center items-center">
            <AssignmentIndIcon sx={{ fontSize: 55 }} />
          </span>
          <span className="w-full  font-bold text-3xl capitalize flex-1 flex h-full justify-center items-center">
            {teachers}
          </span>
        </div>
        <span className="w-full font-bold text-xl  h-10 flex justify-center items-center">
          {teachersText}
        </span>
      </div>
      {/* div 3 */}
      <div className="h-full flex-1 min-w-[25%] flex p-4 flex-col justify-center">
        <div className="flex flex-2 flex-col gap-1">
          <span className="w-full flex-1 flex h-full justify-center items-center">
            <SchoolIcon sx={{ fontSize: 55 }} />
          </span>
          <span className="w-full  font-bold text-3xl capitalize flex-1 flex h-full justify-center items-center">
            {students}
          </span>
        </div>
        <span className="w-full font-bold text-xl  h-10 flex justify-center items-center">
          {studentsText}
        </span>
      </div>
      {/* div 3 */}
      <div className="h-full flex-1 min-w-[25%] flex p-4 flex-col justify-center">
        <div className="flex flex-2 flex-col gap-1">
          <span className="w-full flex-1 flex h-full justify-center items-center">
            <EmojiEventsIcon sx={{ fontSize: 55 }} />
          </span>
          <span className="w-full  font-bold text-3xl capitalize flex-1 flex h-full justify-center items-center">
            {alumni}
          </span>
        </div>
        <span className="w-full font-bold text-xl  h-10 flex justify-center items-center">
          {alumniText}
        </span>
      </div>
    </div>
  );
};

export default InfoBanner;

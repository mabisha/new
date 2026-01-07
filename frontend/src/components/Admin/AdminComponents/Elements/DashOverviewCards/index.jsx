import OverviewCard from "./OverviewCard";
import { PiChalkboardTeacherDuotone, PiUserPlusDuotone } from "react-icons/pi";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { PiGooglePhotosLogoDuotone } from "react-icons/pi";
import { PiUsersDuotone } from "react-icons/pi";
import { PiBookDuotone } from "react-icons/pi";
import { PiBellDuotone } from "react-icons/pi";
const DashOverviewCards = ({ overview }) => {
  const {
    totalCalendar,
    totalFacility,
    totalGallery,
    totalNotice,
    totalTeacher,
    totalUser,
    totalVacancy,
    totalPublication,
  } = overview || {};
  return (
    <div className="grid grid-cols-1 mobile:grid-cols-2 gap-3 p-3 sm:gap-5 sm:p-5 md:grid-cols-3 2xl:grid-cols-4">
      <OverviewCard
        title={totalNotice}
        desc="Total Notification"
        path="/admin/notification"
        icon={<PiBellDuotone className="text-[#d498c6]" />}
        bgColor="bg-[#fef2e2]"
      />
      <OverviewCard
        title={totalCalendar}
        desc="Total Events"
        path="/admin/calendar"
        icon={<PiCalendarDotsDuotone className="text-[#41C385]" />}
        bgColor="bg-[#daffea]"
      />
      <OverviewCard
        title={totalGallery}
        desc="Total Gallery"
        path="/admin/gallery"
        icon={<PiGooglePhotosLogoDuotone className="text-[#1F77FA]" />}
        bgColor="bg-[#E9F1FF]"
      />
      <OverviewCard
        title={totalFacility}
        desc="Total Facility"
        path="/admin/facility"
        icon={<PiBuildingOfficeDuotone className="text-[#b92eff]" />}
        bgColor="bg-[#f7e8ff]"
      />
      <OverviewCard
        title={totalTeacher}
        desc="Total Teachers"
        path="/admin/teacher"
        icon={<PiChalkboardTeacherDuotone className="text-[#79ea4f]" />}
        bgColor="bg-[#eeffe8]"
      />
      <OverviewCard
        title={totalVacancy}
        desc="Total Vacancies"
        path="/admin/vacancy"
        icon={<PiUserPlusDuotone className="text-[#547572]" />}
        bgColor="bg-[#eaf7d8]"
      />
      <OverviewCard
        title={totalUser}
        desc="Total Users"
        path="/admin/userSetup"
        icon={<PiUsersDuotone className="text-[#c679b4]" />}
        bgColor="bg-[#f9f8e5]"
      />
      <OverviewCard
        title={totalPublication}
        desc="Total Publications"
        path="/admin/publication"
        icon={<PiBookDuotone className="text-matte/30" />}
        bgColor="bg-[#eaf7d8]"
      />
    </div>
  );
};

export default DashOverviewCards;

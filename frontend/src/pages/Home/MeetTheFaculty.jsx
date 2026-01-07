import PagesLayout from "../../components/Home/layout/PagesLayout";
import MeetTheFacultyCard from "../../components/Home/MeetTheFacultyCard/MeetTheFacultyCard";
import about from "../../assets/parents.jpg";
const MeetTheFaculty = () => {
  return (
    <PagesLayout
      img={about}
      breadCrumb={'Our Team'}
      seotTitle={"Meet the Faculty"}
      metaContent={`Meet the brilliant minds behind our institution.`}
    >
      <div className="w-full flex justify-center items-center h-full">
        <MeetTheFacultyCard />
      </div>
    </PagesLayout>
  );
};

export default MeetTheFaculty;

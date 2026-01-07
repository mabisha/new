import MeetTheFacultyCard from "../../components/Home/MeetTheFacultyCard/MeetTheFacultyCard";
import image from "../../assets/career.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
const OurTeam = () => {
  return (
    <PagesLayout
      img={image}
      seotTitle={"Our Team"}
      breadCrumb={"Our Team"}
      metaContent={`Meet the brilliant minds behind our institution.`}
    >
      <div className="w-full flex justify-center items-center">
        <MeetTheFacultyCard />
      </div>
    </PagesLayout>
  );
};

export default OurTeam;

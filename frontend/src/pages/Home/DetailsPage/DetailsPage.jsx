import aboutImg from "../../../assets/speech.jpg";
import rosebudSchool from "../../../assets/Rose-Bud-Secondary-School.jpg";
import PagesLayout from "../../../components/Home/layout/PagesLayout";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import DataContext from "../../../contexts/Datacontext";
const DetailsPage = () => {
  const params = useParams();
  const { selectedData } = useContext(DataContext);
  const [locaData, setLocalData] = useState(selectedData);
  const navigate = useNavigate();

  useEffect(() => {
    const slugData = JSON.parse(localStorage.getItem("slug-data"));
    setLocalData(slugData);
    if (!params.slug || !slugData || params?.id != slugData?.id) {
      navigate("/");
    }
  }, [selectedData]);
  return (
    <PagesLayout img={aboutImg}>
      <div className="w-full flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-[80%]  gap-5 flex-col lg:flex-col h-[40rem] lg:h-[20rem] pt-10 justify-start items-start px-9">
          <div className="w-full h-full flex flex-col justify-start items-start px-9 pl-0">
            <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem]  text-secondary font-bold w-full flex  justify-start items-center gap-3">
              <span className="capitalize">{locaData?.title}</span>
            </div>
          </div>
          <p className="relative  w-full flex-col lg:flex-row  justify-between items-center lg:items-start h-full gap-10 flex font-normal text-default/60 text-md top-2">
            {locaData?.description}
            <span className="min-h-[6rem] max-h-full h-[10rem] md:h-[25rem] min-w-[15rem] lg:min-w-[25rem]  relative right-0">
              <img
                src={locaData?.imagelink ?? rosebudSchool}
                alt=""
                className="h-[90%] w-full relative object-cover z-[1] rounded-xl"
              />
              <span className="w-full h-[90%] absolute -top-3 -right-4 bg-gray-200/70 rounded-xl"></span>
            </span>
          </p>
        </div>
        {/* divs */}
      </div>
    </PagesLayout>
  );
};

export default DetailsPage;

import { useEffect } from "react";
import aboutImg from "../../assets/academic.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
import { useNavigate } from "react-router-dom";
import SmallPublicationCard from "../../components/Home/Cards/SmallPublicationCard";
import { getAllPublications } from "../../utils/apiRequest";
import { useQuery } from "@tanstack/react-query";

const Publications = () => {
  const navigate = useNavigate();

  const { data: publication, error } = useQuery({
    queryKey: ["publication"],
    queryFn: getAllPublications,
  });

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);
  if (error) {
    navigate(-1);
    return null;
  }
  if (!publication || Object.values(publication).length === 0) {
    navigate(-1);
    return null;
  }

  return (
    <PagesLayout
      img={aboutImg}
      breadCrumb={"Our Publications"}
      seotTitle={"Our Publications"}
      metaContent={`Stay informed and connected.`}
    >
      <div className="w-full relative flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-full pl-20 gap-5 flex-col lg:flex-col sm:h-[6rem] pt-10 justify-start items-start px-8">
          <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem] text-black font-bold w-full flex justify-start items-center gap-0">
            <span>Our</span>
            <span className="text-secondary">&nbsp;Publications</span>
          </div>
        </div>
      </div>
      <div className="w-full py-0 flex justify-start items-center gap-10 p-20 flex-wrap">
        {Object.values(publication).map((item, idx) => (
          <SmallPublicationCard
            key={idx}
            imagelink={item?.imagelink}
            pdfUrl={item.public_id}
            firstName={item.title}
            lastName={item.description}
          />
        ))}
      </div>
    </PagesLayout>
  );
};

export default Publications;

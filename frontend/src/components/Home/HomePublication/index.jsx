import { Link } from "react-router-dom";
import PublicationCard from "../Cards/PublicationCard";
import { getAllPublications } from "../../../utils/apiRequest";
import { useQuery } from "@tanstack/react-query";

const HomePublication = () => {
  const {
    data: publications,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["publication"],
    queryFn: getAllPublications,
  });

  if (isLoading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!publications || publications.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex md:flex-row flex-col gap-5">
      <div className="parallax-section relative flex-1 min-h-[300px] md:min-h-[15rem] flex justify-center items-center w-full md:w-[40%] overflow-hidden">
        <div className="w-full absolute flex-1 min-h-full bg-matte/50 flex justify-center items-center flex-col z-0"></div>
        <div className="w-full px-10 flex-col justify-center text-white z-[1] flex items-center gap-10">
          <div className="text-xl lg:text-3xl font-extrabold leading-[30px]">
            Our Publications
          </div>
          <Link
            to="/our-publications"
            className="w-36 h-10 p-3 cursor-pointer transition-width duration-[300ms] ease flex justify-center rounded-sm items-center text-xl font-bold border-[1px] border-white"
          >
            View More
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[60%] items-center flex justify-center flex-col gap-7 px-10 pr-0">
        {publications.slice(0, 2).map((publication) => (
          <PublicationCard
            key={publication.public_id}
            pdfUrl={publication.public_id}
            imagelink={publication.imagelink}
            firstName={publication.title}
            lastName={publication.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePublication;

import aboutImg from "../../assets/academic.jpg";
import PagesLayout from "../../components/Home/layout/PagesLayout";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllNotice } from "../../utils/apiRequest";
import PreLoader from "../../components/Home/Loading/PreLoader";
import NotificationCard from "../../components/Home/Cards/notification-card";
const NotificationPage = () => {
  const {
    data: notice,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["notification"],
    queryFn: getAllNotice,
  });

  if (isLoading) {
    return <PreLoader />;
  }
  if (error) {
    return (
      <NotificationPageLayout>
        <div className="w-full flex flex-col justify-center items-center py-10">
          <p className="text-lg text-red-600 mb-4">
            Failed to load notifications. Please try again later.
          </p>
          <Link
            className="flex items-center gap-1 rounded-full border border-[#d92732] px-5 py-2.5 hover:text-[#d92732] hover:bg-white duration-300 bg-[#d92732] text-white"
            to="/"
          >
            Go to Home
          </Link>
        </div>
      </NotificationPageLayout>
    );
  }

  return (
    <NotificationPageLayout>
      {notice?.length === 0 ? (
        <div className="text-center text-gray-500 text-xl font-bold pb-20">
          No notifications available at the moment.
          <div className="w-full flex justify-center items-center p-10">
            <Link
              className="flex w-36 items-center gap-1 rounded-full border border-[#d92732] px-5 py-2.5 hover:text-[#d92732] hover:bg-white duration-300 bg-[#d92732] text-white text-base font-medium"
              to="/"
            >
              Go to Home
            </Link>
          </div>
        </div>
      ) : (
        (Object.values(notice) ?? [])?.map((item, idx) => (
          <NotificationCard
            key={idx}
            title={item.title}
            description={item.description}
            image={item.imagelink}
          />
        ))
      )}
    </NotificationPageLayout>
  );
};

export default NotificationPage;

const NotificationPageLayout = ({ children }) => {
  return (
    <PagesLayout
      img={aboutImg}
      breadCrumb="Notifications"
      seotTitle="Notifications"
      metaContent="Stay informed and connected."
    >
      <div className="w-full relative flex-1 flex gap-10 flex-col justify-start items-center py-9">
        <div className="flex w-full pl-20  gap-5 flex-col lg:flex-col  sm:h-[6rem] pt-10 justify-start items-start px-8  ">
          <div className="text-2xl sm:text-4xl md:text-5xl h-[1rem] sm:h-[2rem]  text-black font-bold w-full flex  justify-start items-center gap-0">
            <span>Notifi</span>
            <span className="text-secondary">cations</span>
          </div>
        </div>
      </div>
      <div className="w-full  py-0 grid sm:grid-cols-2 xl:grid-cols-3 gap-10 p-20">
        {children}
      </div>
    </PagesLayout>
  );
};

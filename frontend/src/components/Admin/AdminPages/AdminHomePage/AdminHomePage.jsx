import PerfectScrollbar from "react-perfect-scrollbar";
import DashboardHeader from "../../../../components/Admin/AdminComponents/AdminTopBar/DashboardHeader";
import { useQuery } from "@tanstack/react-query";
import { overview } from "../../../../utils/apiRequest";
import Spinner from "../../../../components/Admin/AdminComponents/Elements/Spinner";
import DashOverviewCards from "../../../../components/Admin/AdminComponents/Elements/DashOverviewCards";

const AdminHomePage = () => {
  const overviewQuery = useQuery({
    queryKey: ["overview"],
    queryFn: overview,
  });

  return (
    <>
      <DashboardHeader />
      <PerfectScrollbar className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10 flex flex-col gap-5">
        {/* <div className="mt-6 mb-3 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0">
          <div
            className="flex p-4 mb-4 col-span-2 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">
                User will be automatically logged out after 35 minutes for
                safety reasons.
              </span>
            </div>
          </div>
        </div> */}
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {overviewQuery?.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Overview Loading...
              </p>
            </div>
          )}
          {overviewQuery?.isError && (
            <p>Error: {overviewQuery.error.message}</p>
          )}
          {!overviewQuery?.isLoading &&
            !overviewQuery?.isError &&
            overviewQuery?.data && (
              <>
                <DashOverviewCards overview={overviewQuery?.data ?? []} />
              </>
            )}
        </div>
      </PerfectScrollbar>
    </>
  );
};

export default AdminHomePage;

import { useQuery } from "@tanstack/react-query";
import { getAllEvent } from "../../../../utils/apiRequest";
import Spinner from "../../AdminComponents/Elements/Spinner";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../AdminComponents/AdminTopBar/DashboardHeader";
import DashCalendarTable from "../../AdminComponents/AdminTable/DashCalendarTable";
import PerfectScrollbar from "react-perfect-scrollbar";
function CalendarComponent() {
  const publicationsQuery = useQuery({
    queryKey: ["calendar"],
    queryFn: () => getAllEvent(),
  });

  return (
    <>
      <Outlet />
      <DashboardHeader title="Calendar" desc="Manage your events" />

      <PerfectScrollbar className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl  bg-transparent">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20 bg-white">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Events Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashCalendarTable data={publicationsQuery.data} />
          )}
        </div>
      </PerfectScrollbar>
    </>
  );
}
export default CalendarComponent;

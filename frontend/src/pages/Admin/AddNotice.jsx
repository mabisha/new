import DashNoticeTable from "../../components/Admin/AdminComponents/AdminTable/DashNoticeTable";
import { useQuery } from "@tanstack/react-query";
import { getAllNotice } from "../../utils/apiRequest";
import Spinner from "../../components/Admin/AdminComponents/Elements/Spinner";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/Admin/AdminComponents/AdminTopBar/DashboardHeader";
import PerfectScrollbar from "react-perfect-scrollbar";
function AddNotice() {
  const publicationsQuery = useQuery({
    queryKey: ["notice"],
    queryFn: () => getAllNotice(),
  });

  return (
    <>
      <Outlet />
      <DashboardHeader title="Notice" desc="Manage your Notice" />

      <PerfectScrollbar className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Notice Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashNoticeTable data={publicationsQuery.data} />
          )}
        </div>
      </PerfectScrollbar>
    </>
  );
}
export default AddNotice;

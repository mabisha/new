import DashPublicationsTable from "../../components/Admin/AdminComponents/AdminTable/DashPublicationsTable";
import { useQuery } from "@tanstack/react-query";
import { getAllPublications } from "../../utils/apiRequest";
import Spinner from "../../components/Admin/AdminComponents/Elements/Spinner";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../components/Admin/AdminComponents/AdminTopBar/DashboardHeader";
import PerfectScrollbar from "react-perfect-scrollbar";

function AddPublications() {
  const publicationsQuery = useQuery({
    queryKey: ["publications"],
    queryFn: () => getAllPublications(),
  });

  return (
    <>
      <Outlet />
      <DashboardHeader title="Publication" desc="Manage your publications" />

      <PerfectScrollbar className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Publications Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashPublicationsTable data={publicationsQuery.data} />
          )}
        </div>
      </PerfectScrollbar>
    </>
  );
}
export default AddPublications;

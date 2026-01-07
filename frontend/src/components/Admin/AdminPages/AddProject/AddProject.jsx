import DashProjectTable from "../../AdminComponents/AdminTable/DashProjectTable";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../../../../utils/apiRequest";
import Spinner from "../../AdminComponents/Elements/Spinner";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../AdminComponents/AdminTopBar/DashboardHeader";
import PerfectScrollbar from "react-perfect-scrollbar";
function AddProject() {
  const publicationsQuery = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProjects(),
  });

  return (
    <>
      <Outlet />
      <DashboardHeader title="Project" desc="Manage your projects" />

      <PerfectScrollbar className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10">
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Projects Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashProjectTable data={publicationsQuery.data} />
          )}
        </div>
      </PerfectScrollbar>
    </>
  );
}
export default AddProject;

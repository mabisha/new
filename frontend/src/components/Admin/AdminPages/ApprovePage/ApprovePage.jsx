import DashApproveTable from "../../AdminComponents/AdminTable/DashApproveTable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  approveActivity,
  getAllUnapproved,
} from "../../../../utils/apiRequest";
import Spinner from "../../AdminComponents/Elements/Spinner";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../../AdminComponents/AdminTopBar/DashboardHeader";
import toast from "react-hot-toast";
import PerfectScrollbar from "react-perfect-scrollbar";
function ApprovePage() {
  const queryClient = useQueryClient();
  const publicationsQuery = useQuery({
    queryKey: ["approve"],
    queryFn: () => getAllUnapproved(),
  });

  const updateMutation = useMutation({
    mutationFn: (formData) => approveActivity(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["approve"]);
      toast.success("Facility updated successfully!", { id: "success" });
    },
    onError: () => {
      toast.error("Cannot update facility!", { id: "error" });
    },
  });
  const {
    calendar,
    facilities,
    image,
    notice,
    publications,
    teachers,
    // vacancy,
  } = publicationsQuery?.data || {};
  return (
    <>
      <Outlet />
      <DashboardHeader title="Approve" desc="Approve your activity" />

      <PerfectScrollbar className="h-[calc(100vh-80px)] overflow-y-auto p-3 sm:p-5 xl:p-10 flex flex-col gap-10">
        {/* F a c i l i t y*/}
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Facility Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashApproveTable
              data={facilities}
              modelName={"facility"}
              updateFn={updateMutation}
              title={"Facility"}
            />
          )}
        </div>
        {/* G a l l e r y */}
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Gallery Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashApproveTable
              data={image}
              title={"Gallery"}
              modelName="Image"
              updateFn={updateMutation}
            />
          )}
        </div>
        {/* N o t i c e */}
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Notices Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashApproveTable
              data={notice}
              title={"Notice"}
              modelName={"Notice"}
              updateFn={updateMutation}
            />
          )}
        </div>

        {/*p u b l i c a t i o n s*/}
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
            <DashApproveTable
              data={publications}
              title={"Publications"}
              modelName={"Post"}
              updateFn={updateMutation}
            />
          )}
        </div>

        {/* T e a c h e r s */}
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Teachers Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashApproveTable
              data={teachers}
              title={"Teachers"}
              modelName={"Teachers"}
              updateFn={updateMutation}
            />
          )}
        </div>
        {/* v a c a n c y -- Currently, the vacancy does not have an approve feature in the backend.*/}
        {/* <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Vacancy Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashApproveTable
              data={vacancy}
              modelName={"Vacancy"}
              title={"Vacancy"}
              updateFn={updateMutation}
            />
          )}
        </div> */}
        {/* c a l e n d a r*/}
        <div className="rounded-xl border border-gray-200/70 bg-white">
          {publicationsQuery.isLoading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Spinner color="fill-gray-400" />
              <p className="mt-2 font-medium text-gray-500">
                Calendar Loading...
              </p>
            </div>
          )}
          {publicationsQuery.isError && (
            <p>Error: {publicationsQuery.error.message}</p>
          )}
          {!publicationsQuery.isLoading && !publicationsQuery.isError && (
            <DashApproveTable
              data={calendar}
              title={"Calendar"}
              modelName={"Calender"}
              updateFn={updateMutation}
            />
          )}
        </div>
      </PerfectScrollbar>
    </>
  );
}
export default ApprovePage;

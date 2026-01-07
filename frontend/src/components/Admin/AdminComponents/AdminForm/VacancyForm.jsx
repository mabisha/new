import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaStarOfLife } from "react-icons/fa6";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  getVacancyById,
  addVacancy,
  deleteVacancy,
  updateVacancy,
  getAllVacancy,
} from "../../../../utils/apiRequest";
import Spinner from "../Elements/Spinner";
import { AiTwotoneDelete } from "react-icons/ai";
import { PiUserPlusDuotone } from "react-icons/pi";
import moment from "moment";

const VacancyForm = () => {
  const { vacancyId } = useParams();
  const location = useLocation();
  const isDelete = location.pathname.includes("delete");
  const isEdit = location.pathname.includes("edit");

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const eventByIdQuery = useQuery({
    queryKey: ["vacancy", vacancyId],
    queryFn: () => {
      if (vacancyId && isEdit) {
        return getVacancyById(vacancyId);
      }
    },
  });

  const mutation = useMutation({
    mutationFn: addVacancy,
    onSuccess: () => {
      queryClient.invalidateQueries(["vacancy"]);
      getAllEventQuery.refetch();
      toast.success("Calendar Event added successfully!");
      navigate(-1);
    },
  });
  const getAllEventQuery = useQuery({
    queryKey: ["vacancy"],
    queryFn: () => getAllVacancy(),
  });

  const deleteEventQuery = useMutation({
    mutationFn: (id) => {
      return deleteVacancy(id);
    },
    onSuccess: () => {
      getAllEventQuery.refetch();
      queryClient.invalidateQueries(["vacancy"]);
      toast.success("Vacancy deleted successfully!");
      navigate(-1);
    },
    onError: () => {
      toast.error("Failed to delete Vacancy.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (formData) => updateVacancy(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["vacancy", vacancyId]);
      toast.success("Vacancy updated successfully!");
      navigate(-1);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onPublicationSubmit = async (data) => {
    const { startDate, endDate, status, title, description } = data;
    // const toastId = toast.loading("Adding Event");
    // Parse the dates directly using Date constructor
    const parseDate = (dateStr) => {
      return new Date(dateStr);
    };

    const start = parseDate(startDate);
    const end = parseDate(endDate);

    // Check if end date is before start date
    if (end < start) {
      toast.error("End date cannot be before the start date.", {
        id: "submit",
      });
      return;
    }

    const eventData = {
      status: status,
      fromdate: startDate,
      todate: endDate,
      title,
      description,
    };
    if (!vacancyId && !isEdit) {
      return mutation.mutate(eventData);
    } else {
      return updateMutation.mutate({ vacancyId, data: eventData });
    }
  };
  useEffect(() => {
    if (eventByIdQuery.data && Object.keys(eventByIdQuery.data)) {
      const { title, status, fromdate, todate, description } =
        eventByIdQuery.data;

      reset({
        title,
        status,
        startDate: moment(fromdate).format("YYYY-MM-DD"),
        endDate: moment(todate).format("YYYY-MM-DD"),
        description,
      });
    }
  }, [eventByIdQuery.data, reset, vacancyId]);

  if (isDelete) {
    return (
      <div className="w-full max-w-xl p-3  sm:p-8 md:max-w-3xl">
        <div className="text-center w-full">
          <button
            onClick={() => deleteEventQuery.mutate(vacancyId)}
            type="submit"
            className="mt- inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
            disabled={deleteEventQuery?.isUploading}
          >
            {deleteEventQuery?.isPending ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              <span className="text-xl">
                <AiTwotoneDelete />
              </span>
            )}
            Delete
          </button>
        </div>
      </div>
    );
  }
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;

    return `${year}-${month}-${day}`;
  };
  return (
    <div className="w-[calc(100vw-20px)] max-w-xl p-3 relative sm:w-[calc(100vw-40px)] sm:p-8 md:max-w-3xl">
      <form onSubmit={handleSubmit(onPublicationSubmit)}>
        <div className="grid grid-cols-2 items-start gap-6 md:grid-cols-[auto_fr]">
          <div>
            <label
              htmlFor="title"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Title
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              id="title"
              name="title"
              placeholder="Enter vacancy title"
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
            />
            {errors.title && (
              <span className="mt-1 block text-xs text-red-400">
                {errors.title.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="status"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Event Type
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <select
              {...register("status", { required: "Status is required" })}
              id="status"
              name="status"
              className="block w-full cursor-pointer rounded-md border p-3.5 text-sm focus:outline-none sm:text-base"
              defaultValue={1}
              required
            >
              <option value={1}>Active</option>
              <option value={0}>InActive</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="startDate"
              className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-gray-400"
            >
              Start Date
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <input
              {...register("startDate")}
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Enter Start Date"
              min={getTodayDate()}
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="mb-1 inline-flex gap-1 items-center text-xs font-medium text-gray-400"
            >
              End Date
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <input
              {...register("endDate")}
              type="date"
              id="endDate"
              name="endDate"
              placeholder="Enter End date"
              min={getTodayDate()}
              className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base"
            />
          </div>
        </div>
        {/* </div> */}
        <div className="mt-5 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0">
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="mb-1 flex justify-start items-center gap-1 text-xs font-medium text-gray-400"
            >
              Description
              <span className="text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              type="text"
              id="description"
              name="description"
              placeholder="Enter vacancy description"
              className="block h-32 w-full resize-none rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
            ></textarea>
            {errors.description && (
              <span className="mt-1 block text-xs text-red-400">
                {errors.description.message}
              </span>
            )}
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-6 inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
            disabled={updateMutation?.isUploading || mutation?.isUploading}
          >
            {updateMutation?.isPending || mutation?.isPending ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              <span className="text-xl">
                <PiUserPlusDuotone />
              </span>
            )}
            {vacancyId ? "Update Vacancy" : "Add Vacancy"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default VacancyForm;

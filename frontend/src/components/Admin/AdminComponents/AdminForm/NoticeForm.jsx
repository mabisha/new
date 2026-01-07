import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaStarOfLife } from "react-icons/fa6";
import { TbBookUpload } from "react-icons/tb";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  updateFacility,
  deleteFacility,
  addFacility,
  getFacilityById,
} from "../../../../utils/apiRequest";
import UploadImage from "../Elements/UploadImage";
import Spinner from "../Elements/Spinner";
import { uploadSingleImage } from "../../../../utils/ImageUploader/SingleImageUploader";
import { AiTwotoneDelete } from "react-icons/ai";
const NoticeForm = () => {
  const { facilityId } = useParams();
  const location = useLocation();
  const isDelete = location.pathname.includes("delete");
  const isEdit = location.pathname.includes("edit");

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [coverImg, setCoverImg] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const publicationByIdQuery = useQuery({
    queryKey: ["notification", facilityId],
    queryFn: () => {
      if (facilityId && isEdit) {
        return getFacilityById(facilityId);
      }
    },
  });

  const mutation = useMutation({
    mutationFn: addFacility,
    onSuccess: () => {
      queryClient.invalidateQueries(["notification"]);
      toast.success("Notification added successfully!");
      navigate(-1);
    },
  });

  const deletePublicationQuery = useMutation({
    mutationFn: (id) => {
      return deleteFacility(id);
    },
    onSuccess: () => {
      setIsUploading(false);
      queryClient.invalidateQueries(["notification"]);
      toast.success("Notification deleted successfully!");
      navigate(-1);
    },
    onError: (error) => {
      setIsUploading(false);
      console.error("Error deleting facility:", error);
      toast.error("Failed to delete facility.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (formData) => updateFacility(formData),
    onSuccess: () => {
      setIsUploading(false);
      queryClient.invalidateQueries(["notification", facilityId]);
      toast.success("Notification updated successfully!");
      navigate(-1);
    },
    onError: (error) => {
      setIsUploading(false);
      console.log(error);
    },
  });

  const onPublicationSubmit = async (data) => {
    setIsUploading(true);
    if (!coverImg && !facilityId) {
      setIsUploading(false);
      return toast.error("Please upload Notice cover image");
    }

    const uploadedImage = await uploadSingleImage(coverImg, "notice");
    const publicationData = {
      ...data,
      public_id: uploadedImage?.data?.public_id,
      imagelink: "",
    };
    if (!facilityId && !isEdit) {
      publicationData.imagelink = uploadedImage?.data?.url;
      return mutation.mutate(publicationData);
    } else {
      if (coverImg) publicationData.imagelink = uploadedImage?.data?.url;
      return updateMutation.mutate({ facilityId, data: publicationData });
    }
  };
  useEffect(() => {
    if (publicationByIdQuery.data && Object.keys(publicationByIdQuery.data)) {
      const {
        imagelink: publicationImg,
        title,
        status,
        public_id: file,
        imagelink,
        description,
      } = publicationByIdQuery.data;

      reset({
        title,
        file,
        status,
        imagelink,
        description,
      });

      setCoverImg(publicationImg);
    }
  }, [publicationByIdQuery.data, reset, facilityId]);

  if (isDelete) {
    return (
      <div className="w-full max-w-xl p-3  sm:p-8 md:max-w-3xl">
        <div className="text-center w-full">
          <button
            onClick={() => deletePublicationQuery.mutate(facilityId)}
            type="submit"
            className="mt- inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
            disabled={isUploading || deletePublicationQuery?.isUploading}
          >
            {isUploading || deletePublicationQuery?.isPending ? (
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

  return (
    <div className="w-[calc(100vw-20px)] max-w-xl p-3 relative sm:w-[calc(100vw-40px)] sm:p-8 md:max-w-3xl">
      <form onSubmit={handleSubmit(onPublicationSubmit)}>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[auto_1fr]">
          <UploadImage
            coverImg={coverImg}
            setCoverImg={setCoverImg}
            setIsUploading={setIsUploading}
            isUpdate={!!facilityId}
          />
          <div className="grid grid-cols-2 gap-6 md:grid-cols-[auto_1fr] items-start content-start">
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
                placeholder="Enter Notice title"
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
                Status
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
            </div>{" "}
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
                placeholder="Enter Notice description"
                className="block h-32 w-full resize-none rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
              ></textarea>
              {errors.description && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.description.message}
                </span>
              )}
            </div>
          </div>{" "}
        </div>
        <div className="mt-5 grid-cols-2 gap-x-6 gap-y-5 space-y-5 md:grid md:space-y-0"></div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-6 inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base"
            disabled={isUploading || mutation?.isUploading}
          >
            {isUploading || mutation?.isPending ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              <span className="text-xl">
                <TbBookUpload />
              </span>
            )}
            {facilityId ? "Update Notice" : "Add Notice"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoticeForm;

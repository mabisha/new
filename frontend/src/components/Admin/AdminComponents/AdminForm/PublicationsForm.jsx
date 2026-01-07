import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaStarOfLife } from "react-icons/fa6";
import { TbBookUpload } from "react-icons/tb";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoFileTrayOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import {
  addPublication,
  getPublicationById,
  updatePublication,
  deletePublication,
} from "../../../../utils/apiRequest";
import UploadToGoogleDrive from "../../../../utils/UploadToGoogle";
import UploadImage from "../Elements/UploadImage";
import Spinner from "../Elements/Spinner";
import { uploadSingleImage } from "../../../../utils/ImageUploader/SingleImageUploader";
import { AiTwotoneDelete } from "react-icons/ai";
import { uploadFile } from "../../../../utils/UploadToDrive";
import { useCookies } from "react-cookie";
const PublicationsForm = () => {
  const { publicationId } = useParams();
  const location = useLocation();
  const isDelete = location.pathname.includes("delete");
  const isEdit = location.pathname.includes("edit");

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [coverImg, setCoverImg] = useState("");
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  //access token for ggl drive
  const [cookies] = useCookies(["userToken", "accessToken"]);
  const [accessToken, setAccessToken] = useState(cookies["access_token"]);
  const getAccessToken = (token) => {
    setAccessToken(token);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const publicationByIdQuery = useQuery({
    queryKey: ["publications", publicationId],
    queryFn: () => {
      if (publicationId && isEdit) {
        return getPublicationById(publicationId);
      }
    },
  });

  const mutation = useMutation({
    mutationFn: addPublication,
    onSuccess: () => {
      queryClient.invalidateQueries(["publications"]);
      toast.success("Publication added successfully!");
      navigate("/admin/publication");
    },
  });

  const deletePublicationQuery = useMutation({
    mutationFn: (id) => {
      return deletePublication(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["publications"]);
      toast.success("Publication deleted successfully!");
      navigate("/admin/publication");
    },
    onError: () => {
      toast.error("Failed to delete publication.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (formData) => updatePublication(formData),
    onSuccess: () => {
      queryClient.invalidateQueries(["publications", publicationId]);
      toast.success("Publication updated successfully!");
      navigate("/admin/publication");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onPublicationSubmit = async (data) => {
    try {
      if (!coverImg && !publicationId)
        return toast.error("Please upload publication cover image");

      if (!file && !publicationId)
        return toast.error("Please upload the publication file");

      let fileId = null;
      if (file && !data?.file) {
        setIsUploading(true);
        fileId = await uploadFile(file, accessToken);
      }

      const sameImage = coverImg === data?.imagelink;
      let uploadedImage;
      if (!sameImage) {
        uploadedImage = await uploadSingleImage(coverImg, "Publications");
      }

      const publicationData = {
        ...data,
        public_id: data?.file ? data.file : fileId,
        imagelink: "",
      };
      if (!publicationId && !isEdit) {
        publicationData.imagelink = uploadedImage?.data?.url;
        return mutation.mutate(publicationData);
      } else {
        if (sameImage) {
          publicationData.imagelink = data?.imagelink;
        }
        if (coverImg && !sameImage)
          publicationData.imagelink = uploadedImage?.data?.url;
        return updateMutation.mutate({ publicationId, data: publicationData });
      }
    } catch (err) {
      setIsUploading(false);
      toast.error(err);
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
  }, [publicationByIdQuery.data, reset, publicationId]);

  if (isDelete) {
    return (
      <div className="w-full max-w-xl p-3  sm:p-8 md:max-w-3xl">
        <div className="text-center w-full">
          <button
            onClick={() => deletePublicationQuery.mutate(publicationId)}
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
    <div
      className={`w-[calc(100vw-20px)] max-w-xl p-3 relative sm:w-[calc(100vw-40px)] sm:p-8 md:max-w-3xl`}
    >
      {!accessToken && (
        <div className="text-center w-full  h-[100dvh+100px] z-10 bg-white absolute top-0 left-0">
          <UploadToGoogleDrive getAccessToken={getAccessToken} />
        </div>
      )}

      <form onSubmit={handleSubmit(onPublicationSubmit)}>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[auto_1fr]">
          <UploadImage
            coverImg={coverImg}
            setCoverImg={setCoverImg}
            setIsUploading={setIsUploading}
            isUpdate={!!publicationId}
          />
          <div className="space-y-5">
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
                placeholder="Enter Publication title"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
              />
              {errors.title && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div>
              <div className="w-full flex items-center gap-1">
                Publication File
                <span className="text-[10px] text-red-400">
                  <FaStarOfLife />
                </span>
              </div>
              <label
                htmlFor="publicationFile"
                className="mb-1 cursor-pointer w-full inline-flex items-center gap-1 text-xs font-medium text-gray-400"
              >
                <div className="flex relative cursor-pointer justify-center items-center p-3 gap-4 w-full h-full rounded-md border-2 border-dashed bg-[#F8F9FB]">
                  {file?.name ? (
                    <>
                      <span className="text-3xl text-gray-400">
                        <AiOutlineFileDone />
                      </span>
                      <span className="w-auto whitespace-nowrap overflow-hidden text-ellipsis max-w-[220px]">
                        {file?.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl text-gray-400">
                        <IoFileTrayOutline />
                      </span>
                      <p className="text-sm text-[#4d91ff] group-hover:underline">
                        Click to upload file
                      </p>
                    </>
                  )}
                  <input
                    onChange={(e) => {
                      setFile(e?.target.files[0]);
                    }}
                    type="file"
                    accept=".pdf"
                    id="publicationFile"
                    name="publicationFile"
                    className="w-full absolute hidden"
                  />
                </div>
              </label>
              {errors.file && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.file.message}
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
                className="block w-full cursor-pointer rounded-md border p-3 text-sm focus:outline-none sm:text-base"
                defaultValue={1}
                required
              >
                <option value={1}>Active</option>
                <option value={0}>InActive</option>
              </select>
            </div>
          </div>
        </div>
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
              placeholder="Enter publication description"
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
            disabled={isUploading || mutation?.isUploading}
          >
            {isUploading || mutation?.isPending ? (
              <Spinner width="w-5" height="h-5" />
            ) : (
              <span className="text-xl">
                <TbBookUpload />
              </span>
            )}
            {publicationId ? "Update Publication" : "Add Publication"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublicationsForm;

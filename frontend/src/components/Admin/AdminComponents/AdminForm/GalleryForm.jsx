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
  addGallery,
  getGalleryById,
  deleteGallery,
  updateGallery,
} from "../../../../utils/apiRequest";
import UploadToGoogleDrive from "../../../../utils/UploadToGoogle";
import UploadMultipleImage from "../Elements/UploadMultipleImage";
import Spinner from "../Elements/Spinner";
import { MultipleImageUpload } from "../../../../utils/ImageUploader/MultipleImageUpload";
import { AiTwotoneDelete } from "react-icons/ai";
import { uploadFile } from "../../../../utils/UploadToDrive";
import { useCookies } from "react-cookie";
const GalleryForm = () => {
  const { galleryId } = useParams();
  const location = useLocation();
  const isDelete = location.pathname.includes("delete");
  const isEdit = location.pathname.includes("edit");
  const isViewMode = location.pathname.includes("view");

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
    queryKey: ["gallery", galleryId],
    queryFn: () => {
      if (galleryId && (isEdit || isViewMode)) {
        return getGalleryById(galleryId);
      }
    },
  });

  const mutation = useMutation({
    mutationFn: addGallery,
    onSuccess: () => {
      setIsUploading(false);
      queryClient.invalidateQueries(["gallery"]);
      toast.success("Gallery added successfully!");
      navigate("/admin/gallery");
    },
  });

  const deletePublicationQuery = useMutation({
    mutationFn: (id) => {
      return deleteGallery(id);
    },
    onSuccess: () => {
      setIsUploading(false);
      queryClient.invalidateQueries(["gallery"]);
      toast.success("Gallery deleted successfully!");
      navigate("/admin/gallery");
    },
    onError: () => {
      setIsUploading(false);
      // console.error("Error deleting gallery:", error);
      toast.error("Failed to delete gallery.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: (formData) => updateGallery(formData),
    onSuccess: () => {
      setIsUploading(false);
      queryClient.invalidateQueries(["gallery", galleryId]);
      toast.success("Gallery updated successfully!");
      navigate("/admin/gallery");
    },
    onError: (error) => {
      setIsUploading(false);
      console.log(error);
    },
  });
  const onPublicationSubmit = async (data) => {
    setIsUploading(true);
    if (!coverImg && !galleryId) {
      setIsUploading(false);
      return toast.error("Please upload gallery cover image");
    }

    let fileId = null;
    if (file) {
      setIsUploading(true);
      fileId = await uploadFile(file, accessToken);
    }
    if (file && !fileId) {
      setIsUploading(true);
      toast.dismiss();
      toast.error("Invalid Google Credentials.");
      return;
    }
    let uploadedImage = null;
    try {
      uploadedImage = await MultipleImageUpload(coverImg, "Gallery");
    } catch (error) {
      setIsUploading(false);
      toast.error("Failed to upload image. Please try again.");
      return;
    }
    const publicationData = {
      ...data,
      public_id: fileId ?? "public_id",
      imagelink: "",
    };

    if (!galleryId && !isEdit) {
      publicationData.imagelink = uploadedImage?.data;
      return mutation.mutate(publicationData);
    } else {
      if (coverImg) publicationData.imagelink = uploadedImage?.data;
      return updateMutation.mutate({ galleryId, data: publicationData });
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

      if (!isEdit) {
        setCoverImg(publicationImg);
      }
    }
  }, [publicationByIdQuery.data, reset, galleryId, isViewMode]);

  if (isViewMode && galleryId) {
    return (
      <div className="w-[calc(100vw-20px)] max-w-xl p-3 relative sm:w-[calc(100vw-40px)] sm:p-8 md:max-w-3xl">
        <form onSubmit={handleSubmit(onPublicationSubmit)}>
          <div className="mt-5 flex w-full  justify-center items-center">
            <UploadMultipleImage
              coverImgs={coverImg}
              setCoverImgs={setCoverImg}
              setIsUploading={setIsUploading}
              isUpdate={!!galleryId}
              isViewMode={isViewMode}
            />
          </div>
        </form>
      </div>
    );
  }
  if (isDelete) {
    return (
      <div className="w-full max-w-xl p-3  sm:p-8 md:max-w-3xl">
        <div className="text-center w-full">
          <button
            onClick={() => deletePublicationQuery.mutate(galleryId)}
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
      {!accessToken && (
        <div className="text-center h-[calc(100vh+145px)] w-full z-10 bg-white absolute top-0 left-0">
          <UploadToGoogleDrive getAccessToken={getAccessToken} />
        </div>
      )}
      <form onSubmit={handleSubmit(onPublicationSubmit)}>
        <div className="mt-5 flex w-full  justify-center items-center">
          <UploadMultipleImage
            coverImgs={coverImg}
            setCoverImgs={setCoverImg}
            setIsUploading={setIsUploading}
            isUpdate={!!galleryId}
          />
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[auto_fr]">
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
                required
                placeholder="Enter Gallery title"
                className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-matte/40"
              />
              {errors.title && (
                <span className="mt-1 block text-xs text-red-400">
                  {errors.title.message}
                </span>
              )}
            </div>
            <div>
              <div className="w-full flex items-center gap-1 text-gray-400">
                Gallery File
              </div>
              <label
                htmlFor="publicationFile"
                className="mb-1 cursor-pointer mt-1 w-full inline-flex items-center gap-1 text-xs font-medium text-gray-400"
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
              required
              id="description"
              name="description"
              placeholder="Enter gallery description"
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
            {galleryId ? "Update Gallery" : "Add Gallery"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GalleryForm;

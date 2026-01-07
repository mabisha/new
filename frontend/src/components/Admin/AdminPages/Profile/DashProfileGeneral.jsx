import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useStore } from "../../../../store";
import { updateUsername } from "../../../../utils/apiRequest";
import UserAvatarUpload from "../../AdminComponents/Elements/UploadImage/UserAvatarUpload";
import Avatar from "../../../../../public/avatar.jpg";
import { getProfilePhotoUrl } from "../../../../utils/Firebase/firebaseFunctions";
import { encryptEmail } from "../../../../utils/Firebase/fireBaseEncryptEmail";
import { isValidUrl } from "../../../../utils/validationFunc";

const DashProfileGeneral = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const userDetail = JSON.parse(localStorage.getItem("userprofile"));
  const [photo, setPhoto] = useState(userDetail?.photo);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const mutation = useMutation({
    mutationFn: updateUsername,
  });

  const onUpdate = async (data) => {
    const toastId = toast.loading("Updating profile...");
    toast.dismiss();
    try {
      if (enableEdit)
        return mutation.mutate(
          { newName: data?.name, userId: user?.userId ?? userDetail?.userId },
          {
            onSuccess: (data) => {
              setEnableEdit(false);
              if (data.status === "success") {
                toast.success("Profile updated successfully", { id: toastId });

                reset({ name: data?.data?.username });
              } else {
                toast.error(data.message, { id: toastId });
              }
            },
            onError: (error) => {
              setEnableEdit(false);
              toast.error(error.message, { id: toastId });
            },
          }
        );

      setEnableEdit(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile", { id: toastId });
    }
  };

  useEffect(() => {
    async function getUserPhoto() {
      if (userDetail) {
        const ggmail = encryptEmail(userDetail?.email);
        reset({ name: userDetail.name, email: userDetail.email });
        const userPhoto = await getProfilePhotoUrl(ggmail);

        if (isValidUrl(userPhoto)) {
          const newUser = { ...userDetail, photo: userPhoto };
          setUser(newUser);
          setPhoto(userPhoto ?? userDetail?.photo);
          localStorage.setItem("userprofile", JSON.stringify(newUser));
        } else {
          const newUser = { ...userDetail, photo: Avatar };
          setUser(newUser);
          setPhoto(userDetail?.photo);
        }
      }
    }
    getUserPhoto();
  }, []);

  return (
    <form
      className="mx-auto max-w-md space-y-5"
      onSubmit={handleSubmit(onUpdate)}
      aria-disabled={isUploading || mutation.isPending}
    >
      <div className="space-y-3">
        <UserAvatarUpload
          photo={photo}
          setPhoto={setPhoto}
          setIsUploading={setIsUploading}
          userDetail={userDetail}
        />
      </div>
      <div>
        <label
          htmlFor="name"
          className="mb-1 inline-block text-xs font-medium text-gray-400"
        >
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          id="name"
          onChange={() => {
            setEnableEdit(true);
          }}
          name="name"
          placeholder="Enter your name"
          className="block w-full rounded-md border p-3 text-sm focus:outline-none sm:text-base focus:border-gray-300"
        />
        {errors.name && (
          <span className="mt-1 block text-xs text-red-400">
            {errors.name.message}
          </span>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1 inline-block text-xs font-medium text-gray-400"
        >
          Email
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          className="pointer-events-none block w-full rounded-md border bg-gray-100/50 p-3 text-sm text-[#999] focus:outline-none sm:text-base"
          readOnly
        />
      </div>
      <div
        className={`flex justify-center items-center ${
          !enableEdit ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <button
          type="submit"
          disabled={!enableEdit}
          className={` mt-6 inline-flex w-full max-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-matte/20 bg-black p-3.5 text-center text-sm font-medium text-white duration-300 hover:bg-white hover:text-matte/50 disabled:pointer-events-none disabled:opacity-60 sm:max-w-[260px] sm:text-base`}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default DashProfileGeneral;

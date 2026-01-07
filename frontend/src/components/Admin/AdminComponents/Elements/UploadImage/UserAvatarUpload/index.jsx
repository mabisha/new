import { useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { TbPhotoUp } from "react-icons/tb";
import {
  uploadFirebaseUserPhoto,
  deleteFirebaseUserPhoto,
} from "../../../../../../utils/Firebase/firebaseFunctions";
import { encryptEmail } from "../../../../../../utils/Firebase/fireBaseEncryptEmail";

const UserAvatarUpload = ({ photo, setPhoto, setIsUploading, userDetail }) => {
  const [image, setImage] = useState(null);
  const handleImageUpload = async (imageFile) => {
    const localImageUrl = URL.createObjectURL(imageFile);
    setImage(localImageUrl);

    const toastId = toast.loading("Image is uploading...");
    setIsUploading(true);
    try {
      const encodedEmail = encryptEmail(userDetail.email);

      uploadFirebaseUserPhoto(imageFile, encodedEmail).finally(() => {
        setIsUploading(false);
        toast.dismiss();
      });
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Image upload failed! Please try again", { id: toastId });
      setImage(null);
      setIsUploading(false);
    }
  };

  const handleDeletePhoto = async () => {
    const encodedEmail = encryptEmail(userDetail.email);
    deleteFirebaseUserPhoto(encodedEmail).finally(() => {
      setIsUploading(false);
      toast.dismiss();
      toast.success("Proile photo deleted!");
      setImage(null);
      setPhoto(null);
    });
  };
  return (
    <div className="mx-auto aspect-square w-[200px] overflow-hidden rounded-lg border-2 border-dashed bg-[#F8F9FB]">
      {!image && !photo && (
        <label
          className="group flex h-full cursor-pointer flex-col items-center justify-center p-5 text-center"
          htmlFor="photo"
        >
          <span className="text-3xl text-gray-400">
            <TbPhotoUp />
          </span>
          <p className="mb-1 mt-6 text-sm text-[#4d91ff] group-hover:underline">
            Click to upload image
          </p>
          <span className="text-xs text-gray-400">( Less than 4 MB )</span>
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        name="photo"
        id="photo"
        className="hidden"
        onChange={async (e) => {
          const imageFile = e.target?.files[0];
          if (!imageFile) return;

          if (imageFile.size > 4 * 1024 * 1024)
            return toast.error("Image size should be less than 4MB");

          await handleImageUpload(imageFile);
        }}
      />
      {(image || photo) && (
        <div className="relative h-full w-full">
          <img
            src={photo || image}
            alt="User Avatar"
            className="h-full w-full rounded-md object-cover"
          />
          <button
            className="absolute right-3 top-3 rounded-md bg-white/90 p-1.5 text-xl text-red-500"
            onClick={handleDeletePhoto}
          >
            <MdDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAvatarUpload;

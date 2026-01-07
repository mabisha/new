import { useState } from "react";
import toast from "react-hot-toast";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa6";
import { TbPhotoUp } from "react-icons/tb";

const UploadImage = ({ coverImg, setCoverImg, setIsUploading, isUpdate }) => {
  const [image, setImage] = useState(null);
  const handleImageUpload = async (imageFile) => {
    setIsUploading(true);
    setCoverImg(imageFile);
    setImage(URL.createObjectURL(imageFile));
    setIsUploading(false);
  };

  return (
    <div className="aspect-[5/6] w-[240px] overflow-hidden rounded-lg border-2 border-dashed bg-[#F8F9FB]">
      {!image && !coverImg && (
        <label
          className="group flex h-full cursor-pointer flex-col items-center justify-center p-5 text-center"
          htmlFor="coverImg"
        >
          <span className="text-3xl text-gray-400">
            <TbPhotoUp />
          </span>
          <p className="mb-1 mt-6 text-sm text-[#4d91ff] group-hover:underline">
            Click to upload image
            {!isUpdate && (
              <span className="ml-1 inline-block text-[10px] text-red-400">
                <FaStarOfLife />
              </span>
            )}
          </p>
          <span className="text-xs text-gray-400">( Less than 5 MB )</span>
          {isUpdate && (
            <p className="mt-5 text-sm text-red-400">
              {`PS: If you don't want to change the cover, don't select
              anything`}
            </p>
          )}
        </label>
      )}
      <input
        type="file"
        accept="image/*"
        name="coverImg"
        id="coverImg"
        className="hidden"
        onChange={async (e) => {
          const imageFile = e.target?.files[0];
          if (!imageFile) return;

          if (imageFile.size > 5 * 1024 * 1024)
            return toast.error("Image size should be less than 4MB");

          return await handleImageUpload(imageFile);
        }}
      />
      {(image || coverImg) && (
        <div className="relative h-full w-full p-2">
          <img
            src={image ? image : coverImg}
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
          <button
            className="absolute right-3 top-3 rounded-md bg-white/90 p-1.5 text-xl hover:text-red-500"
            onClick={() => {
              setImage(null);
              setCoverImg("");
            }}
          >
            <AiTwotoneDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadImage;

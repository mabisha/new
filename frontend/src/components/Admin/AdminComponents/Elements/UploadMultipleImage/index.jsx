import { useState } from "react";
import toast from "react-hot-toast";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaStarOfLife } from "react-icons/fa6";
import { TbPhotoUp } from "react-icons/tb";

const UploadMultipleImage = ({
  coverImgs,
  setCoverImgs,
  setIsUploading,
  isUpdate,
  isViewMode = false,
}) => {
  const [images, setImages] = useState([]);
  const handleImageUpload = async (imageFiles) => {
    if (coverImgs.length + imageFiles.length > 20) {
      toast.error("You can upload a maximum of 20 images");
      return;
    }

    setIsUploading(true);

    const newImages = [];
    const newCoverImgs = [];

    for (let i = 0; i < imageFiles.length; i++) {
      const imageFile = imageFiles[i];
      if (imageFile.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        continue;
      }
      newImages.push(URL.createObjectURL(imageFile));
      newCoverImgs.push(imageFile);
    }

    setCoverImgs((prev) => [...prev, ...newCoverImgs]);
    setImages((prev) => [...prev, ...newImages]);
    setIsUploading(false);
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setCoverImgs(coverImgs.filter((_, i) => i !== index));
  };

  return (
    <div className="mb-5">
      <div className="w-full justify-start items-center flex flex-wrap gap-8">
        {isViewMode ? (
          coverImgs &&
          coverImgs.map((image, index) => (
            <div
              key={index}
              className="aspect-[5/6] w-[200px] overflow-hidden rounded-lg border-0 bg-[#F8F9FB] relative"
            >
              <img
                src={image?.url}
                alt=""
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          ))
        ) : (
          <>
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-[5/6] w-[200px] overflow-hidden rounded-lg border-2 border-dashed bg-[#F8F9FB] relative"
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full rounded-md object-cover"
                />
                <button
                  className="absolute right-3 top-3 rounded-md bg-white/90 p-1.5 text-xl hover:text-red-500"
                  onClick={() => handleDeleteImage(index)}
                >
                  <AiTwotoneDelete />
                </button>
              </div>
            ))}
          </>
        )}

        {!isViewMode && images.length < 20 && (
          <label
            className="aspect-[5/6] w-[200px] cursor-pointer overflow-hidden rounded-lg border-2 border-dashed bg-[#F8F9FB] flex flex-col items-center justify-center p-5 text-center"
            htmlFor="coverImgs"
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
            <span className="text-xs text-gray-400">
              ( Less than 5 MB each )
            </span>
            {isUpdate && (
              <p className="mt-5 text-sm text-red-400">
                {`PS: If you don't want to change the cover, don't select anything`}
              </p>
            )}
          </label>
        )}

        <input
          type="file"
          accept="image/*"
          name="coverImgs"
          id="coverImgs"
          className="hidden"
          multiple
          onChange={async (e) => {
            const imageFiles = Array.from(e.target.files);
            if (imageFiles.length === 0) return;
            await handleImageUpload(imageFiles);
          }}
        />
      </div>
    </div>
  );
};

export default UploadMultipleImage;

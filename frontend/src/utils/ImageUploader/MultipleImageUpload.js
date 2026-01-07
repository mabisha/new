import { CLOUDINARY_USER_PRESET } from "../cloudinary-presets";
import { CLOUDINARY_USER_Name } from "../cloudinary-presets";
import axios from "axios";

export const MultipleImageUpload = async (images, folder) => {
  try {
    if (!images || images.length === 0) {
      console.error("No files selected");

      return [];
    }

    const filteredImage = images.filter((item) => !item.url);
    const uploadedImages = [];

    for (let i = 0; i < filteredImage.length; i++) {
      const formData = new FormData();
      formData.append("file", filteredImage[i]);
      formData.append("upload_preset", CLOUDINARY_USER_PRESET);
      formData.append("folder", folder);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_USER_Name}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: false,
        }
      );

      if (response.data && response.data.secure_url) {
        uploadedImages.push({
          url: response.data.secure_url,
          public_id: response.data.public_id,
        });
      } else {
        throw new Error.message("Error uploading images!");
      }
    }
    return { flag: true, message: "success", data: uploadedImages };
  } catch (error) {
    console.error("Error uploading images:", error);
    return [];
  }
};

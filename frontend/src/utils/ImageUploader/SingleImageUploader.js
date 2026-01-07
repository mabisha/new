import { CLOUDINARY_USER_PRESET } from "../cloudinary-presets";
import { CLOUDINARY_USER_Name } from "../cloudinary-presets";
import axios from "axios";
export const uploadSingleImage = async (image, folder) => {
  try {
    if (!image) {
      return { flag: false, message: "No file selected" };
    }

    const formData = new FormData();
    formData.append("file", image);
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
      return { flag: true, message: "success", data: response.data };
    } else {
      return { flag: false, message: "failed" };
    }
  } catch (error) {
    console.error(
      "Upload error:",
      error.response ? error.response.data : error.message
    );
    return {
      flag: false,
      message:
        "Upload failed: " +
        (error.response ? error.response.data.message : error.message),
    };
  }
};

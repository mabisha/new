import axios from "axios";
import toast from "react-hot-toast";
const uploadFile = async (file, accessToken) => {
  // 1. Verify token first
  const tokenValid = await axios
    .get("https://www.googleapis.com/oauth2/v1/tokeninfo", {
      params: { access_token: accessToken },
    })
    .catch(() => false);

  if (!tokenValid) {
    toast.error("Invalid token - please reauthenticate");
    return null;
  }

  // 2. Proceed with upload
  const metadata = {
    name: file.name,
    mimeType: file.type,
  };

  const form = new FormData();
  form.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" })
  );
  form.append("file", file);

  try {
    const response = await axios.post(
      "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      form,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": `multipart/related; boundary=${form._boundary}`,
        },
      }
    );
    return response.data.id;
  } catch (error) {
    console.error("Full error:", error.response?.data);
    toast.error(
      `Upload failed: ${error.response?.data?.error?.message || "Server error"}`
    );
    return null;
  }
};

const setFilePermissions = async (fileId, accessToken) => {
  const permission = {
    type: "anyone",
    role: "reader",
  };

  try {
    await axios.post(
      `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
      permission,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error setting file permissions:", error);
    toast.error("Error setting file permissions.");
  }
};

export { uploadFile, setFilePermissions };

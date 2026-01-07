import { toastMessageContainer } from "../Toaster";

export const checkImageSize = (image) => {
  const maxFileSize = 5 * 1024 * 1024; // 10 MB in bytes
  if (image.size > maxFileSize) {
    toastMessageContainer("error", "File size exceeds 5MB");
    return;
  }
};

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { roseStorage } from "./firebase";
async function uploadFirebaseUserPhoto(file, userId) {
  const storageRef = ref(roseStorage, `profile_photos/${userId}/photo.jpg`);
  try {
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading photo:", error);
    throw error;
  }
}
async function getProfilePhotoUrl(userId) {
  const storageRef = ref(roseStorage, `profile_photos/${userId}/photo.jpg`);
  try {
    const downloadURL = await getDownloadURL(storageRef);
 
    return downloadURL;
  } catch (error) {
    console.error("Error getting profile photo URL:", error);
    throw error;
  }
}
async function deleteFirebaseUserPhoto(userId) {
  const storageRef = ref(roseStorage, `profile_photos/${userId}/photo.jpg`);
  try {
    await deleteObject(storageRef);

    return true;
  } catch (error) {
    console.error("Error deleting photo:", error);
    return false;
  }
}
export { uploadFirebaseUserPhoto, getProfilePhotoUrl, deleteFirebaseUserPhoto };

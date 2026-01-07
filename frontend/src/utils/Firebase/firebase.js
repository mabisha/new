import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyCIj6bFpuDsoKlNWO7m-XeESrB5cP2VU",
  authDomain: "rosebud-ggl-drive.firebaseapp.com",
  projectId: "rosebud-ggl-drive",
  storageBucket: "rosebud-ggl-drive.appspot.com",
  messagingSenderId: "499590248008",
  appId: "1:499590248008:web:b8a099b02774ca4eb40a7d",
  measurementId: "G-SDNKSF4SGV",
};

const roseApp = initializeApp(firebaseConfig);
const roseFirestoreDb = getFirestore(roseApp);
const roseFirestoreAuth = getAuth(roseApp);
roseFirestoreAuth.languageCode = "en";
const roseStorage = getStorage(roseApp);
const roseFirestoreUpdateUser = updateProfile(roseApp);
export {
  roseFirestoreAuth,
  roseFirestoreDb,
  roseStorage,
  roseFirestoreUpdateUser,
};

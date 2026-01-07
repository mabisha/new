import useDrivePicker from "react-google-drive-picker";
import GOOGLE from "../utils/google.json";
import { useState } from "react";

const useGoogleDrivePicker = () => {
  const [openPicker] = useDrivePicker();
  const [driveData, setDriveData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const handleOpenPicker = (accessToken) => {
    openPicker({
      developerKey: GOOGLE.API_KEY,
      clientId: GOOGLE.CLIENT_ID,
      discoveryDocs: GOOGLE.DISCOVERY_DOCS,
      scope: GOOGLE.SCOPES,
      token: accessToken ?? GOOGLE.TOKEN,
      showUploadView: true,
      showUploadFolders: false,
      supportDrives: false,
      multiselect: false,
      viewId: "DOCS",
      customScopes: ["https://www.googleapis.com/auth/drive.readonly"],
      relayURL: "http://localhost:7896/",
      callbackFunction: (data) => {
        if (data?.docs) {
          setFileUploaded(true);
          setDriveData(data?.docs);
        } else {
          setFileUploaded(false);
        }
      },
    });
  };

  return {
    handleOpenPicker,
    driveData,
    fileUploaded,
    setDriveData,
  };
};

export default useGoogleDrivePicker;

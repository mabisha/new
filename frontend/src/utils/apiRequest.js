import { HTTPCALLS } from "../services/API/HTTPRequests";
import { decrypt } from "./crypto";
import { extractUrlFromImagelink } from "./extractUrlFromString";

// Publications
export const getAllPublications = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallpublication`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const addPublication = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/createpublication`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const deletePublication = async (publicationId) => {
  try {
    const res = await HTTPCALLS.post(`/deletepublication/${publicationId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updatePublication = async ({ publicationId, data }) => {
  try {
    const res = await HTTPCALLS.post(
      `/updatepublication/${publicationId}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          maxRedirects: 0,
        },
      }
    );
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getPublicationById = async (publicationId) => {
  try {
    const res = await HTTPCALLS.get(`/getpublicationbyid/${publicationId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const logout = async () => {
  const res = await HTTPCALLS.post("/logout");
  return res.data;
};

//users
export const getAllUsers = async () => {
  try {
    const res = await HTTPCALLS.get(`/getalluser`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const addUser = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/reguser`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return {
      message: error?.response?.data.message,
      status: error?.response?.data?.status,
    };
  }
};

export const deleteUser = async (userId) => {
  try {
    const res = await HTTPCALLS.deleteData(`/deleteuser/${userId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updateUser = async ({ userId, data }) => {
  try {
    const res = await HTTPCALLS.post(`/updateUser/${userId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getUserById = async (userId) => {
  try {
    const res = await HTTPCALLS.get(`/getuserbyid/${userId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

// Events
export const getAllEvent = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallevent`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const addEvent = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/createevent`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const res = await HTTPCALLS.post(`/deleteevent/${eventId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updateEvent = async ({ calendarId, data }) => {
  try {
    const res = await HTTPCALLS.post(`/updateevent/${calendarId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getEventById = async (eventId) => {
  try {
    const res = await HTTPCALLS.get(`/geteventbyid/${eventId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

// facility
export const getAllFacility = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallfacility`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const addFacility = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/createfacility`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const deleteFacility = async (facilityId) => {
  try {
    const res = await HTTPCALLS.post(`/deletefacility/${facilityId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updateFacility = async ({ facilityId, data }) => {
  try {
    const res = await HTTPCALLS.post(`/updatefacility/${facilityId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getFacilityById = async (facilityId) => {
  try {
    const res = await HTTPCALLS.get(`/getfacilitybyid/${facilityId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

// notice
export const getAllNotice = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallnotice`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const addNotice = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/createnotice`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const deleteNotice = async (noticeId) => {
  try {
    const res = await HTTPCALLS.deleteData(`/deletenotice/${noticeId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updateNotice = async ({ noticeId, data }) => {
  try {
    const res = await HTTPCALLS.post(`/updatenotice/${noticeId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getNoticeById = async (noticeId) => {
  try {
    const res = await HTTPCALLS.get(`/getnoticebyid/${noticeId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

// vacancy
export const getAllVacancy = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallvacancy`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const addVacancy = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/createvacancy`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const deleteVacancy = async (vacancyId) => {
  try {
    const res = await HTTPCALLS.post(`/deletevacancy/${vacancyId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updateVacancy = async ({ vacancyId, data }) => {
  try {
    const res = await HTTPCALLS.post(`/updatevacancy/${vacancyId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getVacancyById = async (vacancyId) => {
  try {
    const res = await HTTPCALLS.get(`/getvacancybyid/${vacancyId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

// project
export const getAllProjects = async () => {
  try {
    const res = [];
    // const res = await HTTPCALLS.get(`/getallactiveproject`);
    return res;
  } catch (error) {
    return [];
  }
};
// teacher
export const getAllTeacher = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallteacher`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const addTeacher = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/createteacher`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const deleteTeacher = async (teacherId) => {
  try {
    const res = await HTTPCALLS.deleteData(`/deleteteacher/${teacherId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updateTeacher = async ({ teacherId, data }) => {
  try {
    const res = await HTTPCALLS.post(`/updateteacher/${teacherId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getTeacherById = async (teacherId) => {
  try {
    const res = await HTTPCALLS.get(`/getteacherbyid/${teacherId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
// gallery
export const getAllGallery = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallgallery`);

    const DATA = decrypt(res.data.data)?.map((content) => {
      const urls = extractUrlFromImagelink(content?.imagelink);
      const galleryData = { ...content, imagelink: urls };
      return galleryData;
    });
    return DATA;
  } catch (error) {
    return [];
  }
};
export const addGallery = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/creategallery`, data);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const deleteGallery = async (galleryId) => {
  try {
    const res = await HTTPCALLS.post(`/deletegallery/${galleryId}`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const updateGallery = async ({ galleryId, data }) => {
  try {
    const res = await HTTPCALLS.post(`/updategallery/${galleryId}`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

export const getGalleryById = async (galleryId) => {
  try {
    const res = await HTTPCALLS.get(`/getgallerybyid/${galleryId}`);

    const DATA = decrypt(res.data.data);
    const urls = extractUrlFromImagelink(DATA?.imagelink);
    const galleryByIdData = { ...DATA, imagelink: urls };
    return galleryByIdData;
  } catch (error) {
    return [];
  }
};
//approve

export const getAllUnapproved = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallunapproved`);
    const unApprovedData = decrypt(res.data.data);
    const galleryData = unApprovedData?.image?.map((content) => {
      const urls = extractUrlFromImagelink(content?.imagelink);
      const galleryContent = { ...content, imagelink: urls };
      return galleryContent ?? [];
    });
    return { ...unApprovedData, image: galleryData };
  } catch (error) {
    return [];
  }
};
export const getAllApproved = async () => {
  try {
    const res = await HTTPCALLS.get(`/getallapproved`);
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};
export const approveActivity = async (data) => {
  const { approveId, modelName } = data;
  try {
    const res = await HTTPCALLS.post(`/approveactivity/${approveId}`, {
      approve: 1,
      modelName,
    });
    return decrypt(res.data.data);
  } catch (error) {
    return [];
  }
};

//overview
export const overview = async () => {
  try {
    const res = await HTTPCALLS.get(`/overview`);
    return decrypt(res.data.data);
  } catch (error) {
    return {
      totalCalendar: 0,
      totalFacility: 0,
      totalGallery: 0,
      totalNotice: 0,
      totalTeacher: 0,
      totalUser: 0,
      totalVacancy: 0,
      totalPublication: 0,
    };
  }
};

//authenticaion
export const login = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/login`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });
    return { token: res.data.token, data: decrypt(res.data.data) };
  } catch (error) {
    return [];
  }
};

export const updateMyPassword = async (data) => {
  const { newPassword, currentPassword, userId } = data;
  try {
    const res = await HTTPCALLS.post(
      `/updatemypassword/${userId}`,
      { newPassword, currentPassword },
      {
        headers: {
          "Content-Type": "application/json",
          maxRedirects: 0,
        },
      }
    );
    return res.data;
  } catch (error) {
    return [];
  }
};

export const updateUsername = async (data) => {
  const { newName, userId } = data;
  try {
    const res = await HTTPCALLS.post(
      `/updateme/${userId}`,
      { newName },
      {
        headers: {
          "Content-Type": "application/json",
          maxRedirects: 0,
        },
      }
    );

    return { ...res.data, data: decrypt(res.data?.data) };
  } catch (error) {
    return [];
  }
};

//send mail
export const sendMail = async (data) => {
  try {
    const res = await HTTPCALLS.post(`/send-mail`, data, {
      headers: {
        "Content-Type": "application/json",
        maxRedirects: 0,
      },
    });

    return res.data
  } catch (error) {
    return { message: "Failed to send message", status: "fail" };
  }
};

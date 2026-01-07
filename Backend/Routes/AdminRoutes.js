const router = require("express").Router();
const {
  getall,
  signUp,
  Login,
  deleteUser,
  GetAllUser,
  editUser,
  GetUserById,
  updatePassword,
  updateUsername,
} = require("../Controller/UserController");
const { verifyToken, clearCookies } = require("../Middleware/Auth");
const {
  GetAllUnApproved,
  GetAllApproved,
  AprroveActivity,
} = require("../Controller/ApproveController");
const {
  createActivity,
  UpdateActivity,
  GetActivityById,
  DeleteActivity,
  GetAllActiveActivity,
  GetAllActivity,
} = require("../Controller/ActivityController");
const {
  createFacility,
  UpdateFacility,
  GetFacilityById,
  DeleteFacility,
  GetAllActiveFacility,
  GetAllFacility,
} = require("../Controller/FacilityController");
const {
  createNotice,
  GetAllNotice,
  GetNoticeById,
  DeleteNotice,
  UpdateNotice,
  GetAllActiveNotice,
} = require("../Controller/CreateNotice");
const {
  PostImage,
  GetAllImage,
  GetPhotoById,
  DeleteImage,
  UpdatePhoto,
} = require("../Controller/GalleryController");
const {
  GetVacancyById,
  UpdateVacancy,
  GetAllActiveVacancy,
  CreateVacancy,
  GetAllVacancy,
  DeleteVacancy,
} = require("../Controller/VacancyController");
const {
  GetTeacherById,
  UpdateTeacher,
  AddTeacher,
  GetAllTeacher,
  GetAllActiveTeacher,
  DeleteTeacher,
} = require("../Controller/TeacherController");

const {
  GetEventById,
  UpdateEvent,
  AddEvent,
  GetAllEvent,
  DeleteEvent,
} = require("../Controller/CalenderEventController");
const { SendEmail, sendEmail } = require("../Controller/EmailController");
const { GetAllOverview } = require("../Controller/OverViewController");

//overview
router.route("/overview").get(GetAllOverview);
//user login singup routes
router.route("/reguser").post(verifyToken, signUp);
router.route("/updatemypassword/:id").post(verifyToken, updatePassword);
router.route("/getalluser").get(verifyToken, GetAllUser);
router.route("/deleteuser/:id").delete(verifyToken, deleteUser);
router.route("/getuserbyid/:id").get(verifyToken, GetUserById);
router.route("/updateuser/:id").post(verifyToken, editUser);
router.route("/updateme/:id").post(verifyToken, updateUsername);
router.route("/login").post(Login);
router.route("/logout").post(clearCookies);

//notice routes
router.route("/createnotice").post(verifyToken, createNotice);
router.route("/getallnotice").get(GetAllNotice);
router.route("/getallactivenotice").get(GetAllActiveNotice);
router.route("/getnoticebyid/:id").get(verifyToken, GetNoticeById);
router.route("/deletenotice/:id").delete(verifyToken, DeleteNotice);
router.route("/updatenotice/:id").post(verifyToken, UpdateNotice);

//teacher routes
router.route("/createteacher").post(AddTeacher);
router.route("/updateteacher/:id").post(UpdateTeacher);
router.route("/getteacherbyid/:id").get(GetTeacherById);
router.route("/deleteteacher/:id").delete(DeleteTeacher);
router.route("/getallteacher").get(GetAllTeacher);
router.route("/getallactiveteacher").get(GetAllActiveTeacher);

//gallery routes
router.route("/creategallery").post(PostImage);
router.route("/getallgallery").get(GetAllImage);
router.route("/getgallerybyid/:id").get(GetPhotoById);
router.route("/deletegallery/:id").post(DeleteImage);
router.route("/updategallery/:id").post(UpdatePhoto);

//publication routes
router.route("/getallpublication").get(GetAllActivity);
router.route("/getallactivepublication").get(GetAllActiveActivity);
router.route("/getpublicationbyid/:id").get(GetActivityById);
router.route("/deletepublication/:id").post(DeleteActivity);
router.route("/createpublication").post(createActivity);
router.route("/updatepublication/:id").post(UpdateActivity);

//Facility routes
router.route("/getallfacility").get(GetAllFacility);
router.route("/getallactivefacility").get(GetAllActiveFacility);
router.route("/getfacilitybyid/:id").get(GetFacilityById);
router.route("/deletefacility/:id").post(DeleteFacility);
router.route("/createfacility").post(createFacility);
router.route("/updatefacility/:id").post(UpdateFacility);

//Vacancy routes
router.route("/deletevacancy/:id").post(DeleteVacancy);
router.route("/createvacancy").post(CreateVacancy);
router.route("/getallvacancy").get(GetAllVacancy);
router.route("/getvacancybyid/:id").get(GetVacancyById);
router.route("/updatevacancy/:id").post(UpdateVacancy);
router.route("/getallactivevacancy").get(GetAllActiveVacancy);

//Event  routes
router.route("/deleteevent/:id").post(DeleteEvent);
router.route("/createevent").post(AddEvent);
router.route("/getallevent").get(GetAllEvent);
router.route("/geteventbyid/:id").get(GetEventById);
router.route("/updateevent/:id").post(UpdateEvent);
// approve
router.route("/getallunapproved").get(GetAllUnApproved);
router.route("/getallapproved").get(GetAllApproved);
router.route("/approveactivity/:id").post(AprroveActivity);

//email route
router.route("/send-mail").post(sendEmail);
module.exports = router;

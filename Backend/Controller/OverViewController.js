const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const Notice = db.notice;
const Gallery = db.image;
const Facility = db.facility;
const Calendar = db.calender;
const Teacher = db.teachers;
const User = db.users;
const Vacancy = db.vacancy;
const Publication = db.post;
exports.GetAllOverview = async (req, res) => {
  try {
    const totalNotice = await Notice.count();
    const totalGallery = await Gallery.count();
    const totalFacility = await Facility.count();
    const totalCalendar = await Calendar.count();
    const totalTeacher = await Teacher.count();
    const totalUser = await User.count();
    const totalVacancy = await Vacancy.count();
    const totalPublication = await Publication.count();

    // the total count object
    const totalCount = {
      totalNotice,
      totalGallery,
      totalFacility,
      totalCalendar,
      totalTeacher,
      totalUser,
      totalVacancy,
      totalPublication,
    };

    return res.send({
      status: 200,
      data: encrypt(totalCount),
    });
  } catch (err) {
    console.log(err);
    return res.send({ status: 501, data: "error" });
  }
};

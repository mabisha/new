const cloudinary = require("cloudinary").v2;
const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const Teacher = db.teachers;

cloudinary.config({
  cloud_name: "dnpwitaw1",
  api_key: "252358372712499",
  api_secret: "SWHVmjanXI_k427Ndl-_BdU5aXg",
});

exports.AddTeacher = async (req, res) => {
  try {
    const user = await Teacher.create(req.body);
    res.send({ status: 201, data: encrypt(user) });
  } catch (err) {
    console.log(err);
  }
};
exports.GetAllTeacher = async (req, res) => {
  try {
    const notices = await Teacher.findAll({ raw: true });
    return res.send({ status: 200, data: encrypt(notices) });
  } catch (err) {
    console.log(err);
    return res.send({ status: 501, data: "error" });
  }
};
exports.GetAllActiveTeacher = async (req, res) => {
  try {
    const notices = await Teacher.findAll({ raw: true, where: { status: 1 } });
    return res.send({ status: 200, data: encrypt(notices) });
  } catch (err) {
    console.log(err);
    return res.send({ status: 501, data: "error" });
  }
};

exports.DeleteTeacher = async (req, res) => {
  try {
    const row = await Teacher.findOne({
      where: { id: req.params.id },
    });

    if (row) {
      await row.destroy(); // deletes the row
    }
    return res.send({ status: 200, Message: "Delete sucessfully" });
  } catch (ex) {
    console.log(ex);
    return res.send({ status: 501, Message: "Error: Cannot delete !" });
  }
};

exports.UpdateTeacher = async (req, res) => {
  try {
    var public_id;
    const { status, name, designation } = req.body;
    var { imagelink } = req.body;
    if (imagelink == null) {
      const project = await Teacher.findByPk(req.params.id);
      if (project !== null) {
        imagelink = project.imagelink;
        public_id = project.public_id;
      }
    }
    const updatedRows = await Teacher.update(
      {
        status: status,
        name: name,
        designation: designation,
        imagelink: imagelink,
        public_id: public_id,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send({ status: 200, Message: "successful" });
  } catch (ex) {
    res.send({ Status: 501, Message: "Cannot update!" });
  }
};

exports.GetTeacherById = async (req, res) => {
  const project = await Teacher.findByPk(req.params.id);
  console.log(project);
  if (project === null) {
    console.log("Not found!");
    return res.send({ status: 501 });
  } else {
    return res.send({ status: 200, data: encrypt(project) });
  }
};

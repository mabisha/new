const cloudinary = require("cloudinary").v2;

const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const Post = db.facility;
exports.createFacility = async (req, res) => {
  try {
    const user = await Post.create(req.body);
    res.send({ status: 201, data: encrypt(user), message: "success" });
  } catch (err) {
    console.log(err);
  }
};

exports.GetFacilityById = async (req, res) => {
  const project = await Post.findByPk(req.params.id);
  if (project === null) {
    console.log("Not found!");
    return res.send({ status: 501, message: "failure" });
  } else {
    return res.send({
      status: 200,
      data: encrypt(project),
      message: "success",
    });
  }
};

exports.DeleteFacility = async (req, res) => {
  try {
    const row = await Post.findOne({
      where: { id: req.params.id },
    });

    if (row) {
      await row.destroy(); // deletes the row
    }

    return res.send({ status: 200, message: "success" });
  } catch (ex) {
    console.log(ex);
    return res.send({ status: 501, Message: "Error: Cannot delete !" });
  }
};
exports.GetAllFacility = async (req, res) => {
  try {
    const user = await Post.findAll({ raw: true });
    console.log(user);
    return res.send({ status: 200, data: encrypt(user) });
  } catch (err) {
    console.log(err);
  }
};

exports.GetAllActiveFacility = async (req, res) => {
  try {
    const user = await Post.findAll({ raw: true, where: { status: 1 } });
    console.log(user);
    return res.send({ status: 200, data: encrypt(user) });
  } catch (err) {
    console.log(err);
  }
};

exports.UpdateFacility = async (req, res) => {
  try {
    var tblimg;
    var public_id;
    const { status, title, description } = req.body;
    var { imagelink } = req.body;
    if (imagelink == null) {
      const project = await Post.findByPk(req.params.id);
      if (project !== null) {
        imagelink = project.imagelink;
        public_id = project.public_id;
      }
    }
    const updatedRows = await Post.update(
      {
        title: title,
        description: description,
        status: status,
        imagelink: imagelink,
        public_id: public_id,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send({ status: 200, message: "success" });
  } catch (ex) {
    console.log(ex);
    res.send({ Status: 501, Message: "Cannot update!" });
  }
};

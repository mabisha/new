const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const Notice = db.notice;

exports.createNotice = async (req, res) => {
  try {
    const user = await Notice.create(req.body);
    res.send({ status: 201, data: encrypt(user) });
  } catch (err) {
    console.log(err);
  }
};

exports.GetAllNotice = async (req, res) => {
  try {
    const notices = await Notice.findAll({ raw: true });
    return res.send({ status: 200, data: encrypt(notices) });
  } catch (err) {
    console.log(err);
    return res.send({ status: 501, data: "error" });
  }
};

exports.GetAllActiveNotice = async (req, res) => {
  try {
    const notices = await Notice.findAll({ raw: true, where: { status: 1 } });
    return res.send({
      status: 200,
      data: encrypt(notices),
      message: "success",
    });
  } catch (err) {
    console.log(err);
    return res.send({ status: 501, data: "error" });
  }
};

exports.GetNoticeById = async (req, res) => {
  try {
    const project = await Notice.findByPk(req.params.id);
    if (project === null) {
      console.log("Not found!");
      return res.send({ status: 501 });
    } else {
      return res.send({
        status: 200,
        data: encrypt(project),
        message: "success",
      });
    }
  } catch (ex) {
    console.log(ex);
    res.send({ Status: 501, Message: "Cannot get!" });
  }
};

exports.DeleteNotice = async (req, res) => {
  try {
    const row = await Notice.findOne({
      where: { id: req.params.id },
    });

    if (row) {
      await row.destroy(); // deletes the row
    }
    return res.send({
      status: 200,
      Message: "Delete sucessfully",
      message: "success",
    });
  } catch (ex) {
    console.log(ex);
    return res.send({ status: 501, Message: "Error: Cannot delete !" });
  }
};

exports.UpdateNotice = async (req, res) => {
  try {
    var public_id;
    const { status, title, description } = req.body;
    var { imagelink } = req.body;
    if (imagelink == null) {
      const project = await Notice.findByPk(req.params.id);
      if (project !== null) {
        imagelink = project.imagelink;
        public_id = project.public_id;
      }
    }
    const updatedRows = await Notice.update(
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
    res.send({ status: 200, Message: "successful", message: "success" });
  } catch (ex) {
    console.log(ex);
    res.send({ Status: 501, Message: "Cannot update!" });
  }
};

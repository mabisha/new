const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const Calender = db.calender;

exports.AddEvent = async (req, res) => {
  try {
    const user = await Calender.create(req.body);
    console.log(user);
    res.send({ status: 201, data: encrypt(user), message: "success" });
  } catch (err) {
    console.log(err);
  }
};
exports.GetAllEvent = async (req, res) => {
  try {
    const notices = await Calender.findAll({ raw: true });
    console.log("notices", notices);
    const { id, title, description, enddate, start, event, type } = notices;

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

exports.DeleteEvent = async (req, res) => {
  try {
    const row = await Calender.findOne({
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

exports.UpdateEvent = async (req, res) => {
  try {
    const { status, title, description, start, event, type, enddate } =
      req.body;
    const updatedRows = await Calender.update(
      {
        title: title,
        description: description,
        start: start,
        event: event,
        type: type,
        enddate: enddate,
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

exports.GetEventById = async (req, res) => {
  const project = await Calender.findByPk(req.params.id);
  if (project === null) {
    return res.send({ status: 501 });
  } else {
    return res.send({ status: 200, data: encrypt(project) });
  }
};

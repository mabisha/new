const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const Vacancy = db.vacancy;
exports.CreateVacancy = async (req, res) => {
  try {
    const user = await Vacancy.create(req.body);
    res.send({ status: 201, data: encrypt(user), message: "success" });
  } catch (err) {
    res.send({ status: 501, message: "Unable to create vacancy" });
  }
};

exports.GetAllVacancy = async (req, res) => {
  try {
    const Vacancys = await Vacancy.findAll({ raw: true });
    return res.send({
      status: 200,
      data: encrypt(Vacancys),
      message: "success",
    });
  } catch (err) {
    return res.send({ status: 501, data: "error" });
  }
};

exports.GetAllActiveVacancy = async (req, res) => {
  try {
    const Vacancys = await Vacancy.findAll({ raw: true, where: { status: 1 } });
    return res.send({
      status: 200,
      data: encrypt(Vacancys),
      message: "success",
    });
  } catch (err) {
    return res.send({ status: 501, data: "error" });
  }
};

exports.DeleteVacancy = async (req, res) => {
  try {
    const row = await Vacancy.findOne({
      where: { id: req.params.id },
    });
    if (row) {
      await row.destroy(); // deletes the row
    }
    return res.send({ status: 200, message: "success" });
  } catch (ex) {
    return res.send({ status: 501, Message: "Error: Cannot delete !" });
  }
};

exports.UpdateVacancy = async (req, res) => {
  try {
    const { status, title, description, fromdate, todate } = req.body;
    await Vacancy.update(
      {
        title: title,
        description: description,
        status: status,
        fromdate: fromdate,
        todate: todate,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send({ status: 200, message: "success" });
  } catch (ex) {
    res.send({ Status: 501, Message: "Cannot update!" });
  }
};

exports.GetVacancyById = async (req, res) => {
  // console.log(req.params.id);
  const project = await Vacancy.findByPk(req.params.id);
  if (project === null) {
    console.log("Not found!");
    return res.send({ status: 501 });
  } else {
    return res.send({ status: 200, data: encrypt(project) });
  }
};

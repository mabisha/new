const cloudinary = require("cloudinary").v2;
const db = require("../Schemas");
const Post = db.post;
const Notice = db.notice;
const Image = db.image;
const Teachers = db.teachers;
const Vacancy = db.vacancy;
const Calender = db.calender;
const facility = db.facility;
const Sequelize = require("sequelize");
const { encrypt } = require("../utils/crypto");

const Op = Sequelize.Op;
exports.GetAllUnApproved = async (req, res) => {
  try {
    const publications = await Post.findAll({
      raw: true,
      where: {
        approved: {
          [Op.or]: [null, 0],
        },
      },
    });
    const notice = await Notice.findAll({
      raw: true,
      where: { approved: { [Op.or]: [null, 0] } },
    });
    const image = await Image.findAll({
      raw: true,
      where: { approved: { [Op.or]: [null, 0] } },
    });
    const formattedNotices =
      image?.map((notice) => {
        const images = notice?.imagelink?.slice(1, -1) || [];
        // const innerImages = JSON.parse(`[${images}]`)?.map((image) => {
        // let imgArray;
        // imgArray = JSON.parse(`${image}`); // Parse if it's a JSON string

        //   return image;
        // });
        return { ...notice, imagelink: images };
      }) || [];

    const teachers = await Teachers.findAll({
      raw: true,
      where: { approved: { [Op.or]: [null, 0] } },
    });
    const vacancy = await Vacancy.findAll({
      raw: true,
      where: { approved: { [Op.or]: [null, 0] } },
    });
    const calendar = await Calender.findAll({
      raw: true,
      where: { approved: { [Op.or]: [null, 0] } },
    });
    const facilities = await facility.findAll({
      raw: true,
      where: { approved: { [Op.or]: [null, 0] } },
    });
    return res.send({
      status: 200,
      data: encrypt({
        calendar,
        facilities,
        vacancy,
        teachers,
        image: formattedNotices,
        notice,
        publications,
      }),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Failed to load the data.");
  }
};
exports.GetAllApproved = async (req, res) => {
  try {
    const publications = await Post.findAll({
      raw: true,
      where: {
        approved: {
          [Op.is]: 1,
        },
      },
    });
    const notice = await Notice.findAll({
      raw: true,
      where: { approved: { [Op.is]: 1 } },
    });
    const image = await Image.findAll({
      raw: true,
      where: { approved: { [Op.is]: 1 } },
    });

    const formattedNotices =
      image?.map((notice) => {
        const images = notice?.imagelink?.slice(1, -1) || [];
        // const innerImages = JSON.parse(`[${images}]`)?.map((image) => {
        // let imgArray;
        // imgArray = JSON.parse(`${image}`); // Parse if it's a JSON string

        //   return image;
        // });
        return { ...notice, imagelink: images };
      }) || [];

    const teachers = await Teachers.findAll({
      raw: true,
      where: { approved: { [Op.is]: 1 } },
    });
    const vacancy = await Vacancy.findAll({
      raw: true,
      where: { approved: { [Op.is]: 1 } },
    });
    const calendar = await Calender.findAll({
      raw: true,
      where: { approved: { [Op.or]: 1 } },
    });
    const facilities = await facility.findAll({
      raw: true,
      where: { approved: { [Op.or]: 1 } },
    });
    return res.send({
      status: 200,
      data: encrypt({
        calendar,
        facilities,
        vacancy,
        teachers,
        image: formattedNotices,
        notice,
        publications,
      }),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Failed to load.");
  }
};

exports.AprroveActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { approve, modelName } = req.body;

    let model = db[modelName.toLowerCase()];
    if (!modelName) {
      throw new Error({ Status: 501, Message: "Cannot update!" });
    }
    await model.update(
      {
        approved: approve,
      },
      {
        where: { id: id },
      }
    );
    const updatedData = await model.findAll({
      raw: true,
      where: { approved: { [Op.or]: [null, 0] } },
    });

    return res.send({
      status: 200,
      Message: "Approved",
      data: encrypt(updatedData),
    });
  } catch (ex) {
    console.log("eerr");
    return res.send({ Status: 501, Message: "Cannot update!" });
  }
};

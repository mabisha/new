const cloudinary = require("cloudinary").v2;

const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const Post = db.post;

cloudinary.config({
  cloud_name: "dnpwitaw1",
  api_key: "252358372712499",
  api_secret: "SWHVmjanXI_k427Ndl-_BdU5aXg",
});
exports.createActivity = async (req, res) => {
  try {
    // const imageLink = await cloudinary.uploader.upload(req.body.imagelink, {
    //   folder: "Posts",
    // });
    // const result = [];
    // if (imageLink) {
    //   result.push({
    //     public_id: imageLink.public_id,
    //     url: imageLink.secure_url,
    //   });
    // }
    // req.body.imagelink = result[0].url;
    // req.body.public_id = result[0].public_id;

    const user = await Post.create(req.body);
    res.send({ status: 201, data: encrypt(user) });
  } catch (err) {
    console.log(err);
  }
};

exports.GetActivityById = async (req, res) => {
  const project = await Post.findByPk(req.params.id);
  if (project === null) {
    console.log("Not found!");
    return res.send({ status: 501 });
  } else {
    return res.send({ status: 200, data: encrypt(project) });
  }
};

exports.DeleteActivity = async (req, res) => {
  try {
    const row = await Post.findOne({
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
exports.GetAllActivity = async (req, res) => {
  try {
    const user = await Post.findAll({ raw: true });
  
    return res.send({ status: 200, data: encrypt(user) });
  } catch (err) {
    console.log(err);
  }
};

exports.GetAllActiveActivity = async (req, res) => {
  try {
    const user = await Post.findAll({ raw: true, where: { status: 1 } });
    console.log(user);
    return res.send({ status: 200, data: encrypt(user) });
  } catch (err) {
    console.log(err);
  }
};

exports.UpdateActivity = async (req, res) => {
  try {
    const { status, title, description, imagelink, public_id } = req.body;
    const updateObject = {
      title: title,
      description: description,
      status: status,
      imagelink: imagelink,
    };

    if (public_id) {
      updateObject.public_id = public_id;
    }

    const updatedRows = await Post.update(updateObject, {
      where: { id: req.params.id },
    });
    res.send({ status: 200, Message: "successful" });
  } catch (ex) {
    console.log(ex);
    res.send({ Status: 501, data: [], Message: "Cannot update!" });
  }
};

const db = require("../Schemas");
const Notice = db.image;
const { encrypt } = require("../utils/crypto");

exports.PostImage = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res
      .status(201)
      .json({ status: 201, data: encrypt(notice), message: "success" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.GetAllImage = async (req, res) => {
  try {
    const notices = await Notice.findAll({ raw: true });

    const formattedNotices =
      notices?.map((notice) => {
        const images = notice?.imagelink?.slice(1, -1) || [];
        // const innerImages = JSON.parse(`[${images}]`)?.map((image) => {
        // let imgArray;
        // // Check if photo.imagelink is an array or JSON string
        // if (typeof image !== "string") {
        //   imgArray = image; // Use directly if it's an array
        // } else {
        //   imgArray = JSON.parse(`${image}`); // Parse if it's a JSON string
        // }

        //   console.log(images);
        //   console.log(image);
        //   return image;
        // });

        return { ...notice, imagelink: images };
      }) || [];

    return res.send({
      status: 200,
      data: encrypt(formattedNotices),
      message: "success",
    });
  } catch (err) {
    console.log(err);
    return res.send({ status: 501, data: [], message: "error" });
  }
};
exports.DeleteImage = async (req, res) => {
  try {
    const row = await Notice.findOne({
      where: { id: req.params.id },
    });

    if (row) {
      await row.destroy(); // deletes the row
    }
    return res.send({ status: 200, message: "success" });
  } catch (ex) {
    console.log(ex);
    return res.send({
      status: 501,
      data: [],
      Message: "Error: Cannot delete !",
    });
  }
};
exports.UpdatePhoto = async (req, res) => {
  try {
    const { status, title, description, imagelink, public_id } = req.body;
    const updateObject = {
      title: title,
      description: description,
      status: status,
    };

    if (imagelink?.length > 0) {
      updateObject.imagelink = imagelink;
      updateObject.public_id = public_id;
    }

    const updatedRows = await Notice.update(updateObject, {
      where: { id: req.params.id },
    });
    res.send({ status: 200, message: "success" });
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({
      status: "error",
      message: "Internal server error !",
      errorType: ex,
      data: encrypt([]),
    });
  }
};

exports.GetPhotoById = async (req, res) => {
  console.log("Phot by id", req.params.id);
  const project = await Notice.findByPk(req.params.id);
  if (project === null) {
    return res.send({ status: 501, data: [] });
  } else {
    const formattedNotices = () => {
      const images = project?.imagelink?.slice(1, -1) || [];
      // const innerImages = JSON.parse(`[${images}]`)?.map((image) => {
      // let imgArray;
      // // Check if photo.imagelink is an array or JSON string
      // if (typeof image !== "string") {
      //   imgArray = image; // Use directly if it's an array
      // } else {
      //   imgArray = JSON.parse(`${image}`); // Parse if it's a JSON string
      // }
      //   return image;
      // });
      return images;
    };

    // console.log("formatednotice", req.params.id, formattedNotices());
    return res.send({
      status: 200,
      data: encrypt({
        title: project?.title,
        id: project?.id,
        description: project?.description,
        imagelink: formattedNotices(),
      }),
    });
  }
};

exports.DeletePhoto = async (req, res) => {
  try {
    const row = await Notice.findOne({
      where: { id: req.params.id },
    });

    if (row) {
      await row.destroy(); // deletes the row
    }
    return res.send({ status: 200, message: "success" });
  } catch (ex) {
    console.log(ex);
    return res.status(500).json({
      status: "error",
      message: "Internal server error !",
      errorType: ex,
      data: encrypt([]),
    });
  }
};

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookie = require("cookie-parser");
const db = require("../Schemas");
const { encrypt } = require("../utils/crypto");
const User = db.users;
const SECRETKEY = "FKAKJFAKJ";

exports.GetAllUser = async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });

    // Remove password field from each user object
    const updatedUsers = users.map((user) => {
      const { password, ...newUser } = user;
      return newUser;
    });

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: encrypt(updatedUsers),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 500,
      message: "Error fetching users",
      data: encrypt([]),
    });
  }
};

exports.signUp = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if email already exists
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({
        status: "error",
        message: "Email already exists",
        data: encrypt([]),
      });
    }

    // Check if username already exists
    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      return res.status(409).json({
        status: "error",
        message: "Username already exists",
        data: encrypt([]),
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      role,
      password: hashedPassword,
    });

    return res.status(200).json({
      status: 200,
      message: "User added successfully",
      data: encrypt(newUser),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to add user. Please try again later.",
      data: encrypt([]),
    });
  }
};

exports.Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let user;

    if (emailRegex.test(username)) {
      // Search by email
      user = await User.findOne({ where: { email: username } });
    } else {
      // Search by username
      user = await User.findOne({ where: { username } });
    }

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: "Authentication failed",
        data: encrypt([]),
      });
    }

    // Compare passwords
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        status: "error",
        message: "Authentication failed",
        data: encrypt([]),
      });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, SECRETKEY, {
      expiresIn: "30m",
    });

    // Set token in cookie
    res.cookie("userToken", token, {
      maxAge: 30 * 60 * 1000, // 30 minutes
      httpOnly: false,
    });

    // Remove password from user object
    const { password: omitPassword, ...userData } = user.dataValues;

    return res.status(200).json({
      status: 200,
      message: "Login successful",
      data: encrypt(userData),
      username: user.username,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: encrypt([]),
    });
  }
};

exports.logOut = async (req, res) => {
  try {
    res.clearCookie("userToken");
    res.status(200).json({
      status: 200,
      message: "Logged out successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Failed to log out",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
        data: encrypt([]),
      });
    }

    await user.destroy();

    return res.status(200).json({
      status: 200,
      message: "User deleted successfully",
      data: [],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to delete user",
      data: encrypt([]),
    });
  }
};

exports.GetUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
        data: encrypt([]),
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: encrypt(user),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to fetch user",
      data: encrypt([]),
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const userId = req.params.id;

    const updatedFields = {
      username,
      email,
      role,
    };

    if (password) {
      updatedFields.password = await bcrypt.hash(password, 10);
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
        data: encrypt([]),
      });
    }

    const updatedUser = await user.update(updatedFields);

    return res.status(200).json({
      status: 200,
      message: "User updated successfully",
      data: encrypt([]),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to update user",
      data: encrypt([]),
    });
  }
};

//update password

exports.updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const ID = req.params.id;

    // Find the user by ID
    const user = await User.findByPk(ID);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    // Check if the current password provided by the user matches the stored password
    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "error",
        message: "Current password is incorrect",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to update password",
    });
  }
};

//update username

exports.updateUsername = async (req, res) => {
  try {
    const { newName } = req.body;
    const ID = req.params.id;

    // Find the user by ID
    const user = await User.findByPk(ID);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    // Check if the new username already exists
    const existingUsername = await User.findOne({
      where: {
        username: newName,
        id: { [db.Sequelize.Op.not]: ID }, // Exclude current user ID
      },
    });

    if (existingUsername) {
      return res.status(409).json({
        status: "error",
        message: "Username already exists",
      });
    }

    // Update the user's username
    user.username = newName;
    await user.save();

    return res.status(200).json({
      status: "success",
      message: "Username updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to update username",
    });
  }
};
exports.updateUsername = async (req, res) => {
  try {
    const { newName } = req.body;
    const ID = req.params.id;

    // Find the user by ID
    const user = await User.findByPk(ID);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    // Check if the new username already exists
    const existingUsername = await User.findOne({
      where: { username: newName },
    });
    if (existingUsername) {
      return res.status(409).json({
        status: "error",
        message: "Username already exists",
      });
    }

    // Update the user's username
    user.username = newName;
    const newUser = await user.save();
    const { password, ...newUserDetail } = newUser.toJSON();
    return res.status(200).json({
      status: "success",
      message: "Username updated successfully",
      data: encrypt(newUserDetail),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Failed to update username",
    });
  }
};

exports.GetUserToken = (req, res, next) => {};

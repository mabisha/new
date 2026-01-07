const jwt = require("jsonwebtoken");
const SECRETKEY = "FKAKJFAKJ";
exports.clearCookies = (req, res, next) => {
  res.clearCookie("userToken");
  res.end();
};
exports.verifyToken = (req, res, next) => {
  const token = req.cookies["userToken"] || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    // console.log("user token", token);
    // const decoded = jwt.verify(token, SECRETKEY, (err, res) => {
    //   if (err) {
    //     return err;
    //   }

    //   return res;
    // });
    // // req.user = decoded;
    // console.log("decodced role", decoded);
    // exports.verifyRole(decoded?.role);
    if (token) next();
  } catch (err) {
    return res.status(401).send("Invalid Token !");
  }
};

exports.verifyRole = (req, res, next) => {
  const role = req?.toLowerCase();

  if (role === "admin") {
    return;
  } else {
    res.status(401).send("Invalid User Token !");
  }
};

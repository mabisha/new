require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routes = require("./Routes/AdminRoutes");
const helmet = require("helmet");
const db = require("./Schemas");

const app = express();

const ALLOWED_ORIGINS = [
  "https://rosebudschoolnepal.org",
  "https://www.rosebudschoolnepal.org",
  "rosebudschoolnepal.org",
  "http://localhost:7896",
  process.env.FRONTEND_URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (ALLOWED_ORIGINS.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.options("*", cors());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use((req, res, next) => {
  const requestOrigin = req.headers.origin;
  if (requestOrigin && !ALLOWED_ORIGINS.includes(requestOrigin)) {
    return res.status(403).json({
      error: "Access Forbidden",
      message: `You are not allowed to access this resource from this origin ${requestOrigin}.`,
    });
  }
  next();
});

app.use("/app", routes);

const port = process?.env?.PORT || 5000;

// 2. REPLACE THE 'app.listen' PART WITH THIS:
db.sequelize.sync({ alter: true }).then(() => {
  console.log("Synced db.");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err) => {
  console.log("Failed to sync db: " + err.message);
});
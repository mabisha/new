const Sequelize = require("sequelize");
const pg = require("pg"); // <--- 1. IMPORT PG EXPLICITLY
const dbConfig = require("../Config/DatabaseConn");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectModule: pg, // <--- 2. FORCE SEQUELIZE TO USE PG
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },

  // 3. PASS SSL OPTIONS (Crucial for Supabase/Render/Neon)
  dialectOptions: dbConfig.dialectOptions,

  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected to discover`);
  })
  .catch((err) => {
    console.log(err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//connecting to model
db.users = require("./userModel")(sequelize, Sequelize);
db.post = require("./PostModel")(sequelize, Sequelize);
db.notice = require("./NoticeModel")(sequelize, Sequelize);
db.image = require("./ImageModel")(sequelize, Sequelize);
db.teachers = require("./TeacherModel")(sequelize, Sequelize);
db.vacancy = require("./VacancyModel")(sequelize, Sequelize);
db.calender = require("./CalenderEventModel")(sequelize, Sequelize);
db.facility = require("./FacilityModel")(sequelize, Sequelize);

module.exports = db;
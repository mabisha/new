module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "98472",
  DB: "rosedb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

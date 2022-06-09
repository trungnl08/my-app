const userRoutes = require("./users/user.routes");
const cititesRoutes = require("./city/city.routes");

module.exports = app => {
  app.use("/api/v1/users", userRoutes);
  app.use("/api/v1/cities", cititesRoutes);
};

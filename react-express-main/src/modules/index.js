const userRoutes = require("./users/user.routes");
// const postRoutes = require("./posts/post.routes");

module.exports = app => {
  app.use("/api/v1/users", userRoutes);
  // app.use("/api/v1/posts", postRoutes);
};

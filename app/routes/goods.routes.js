// const { verifySignUp } = require("../middleware");
const controller = require("../controllers/goods.controller");

module.exports = function(app) {

  app.post(
    "/api/goods/add",controller.add
  );

  app.get("/api/goods/all", controller.all);
};
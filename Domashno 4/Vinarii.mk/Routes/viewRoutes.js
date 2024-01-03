express = require("express");
const viewRoute = express.Router();
const viewController = require("./../controllers/viewController");
viewRoute.get("/mapa", viewController.getOverview);
viewRoute.get("/", viewController.getHome);
viewRoute.get("/aboutUs", viewController.getUs);
viewRoute.get("/winery/:slug", viewController.getWinery);
module.exports = viewRoute;

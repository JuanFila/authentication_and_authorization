const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const verifyUserAuthorization = require("../middlewares/verifyYserAuthorization");

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.use(ensureAuthenticated);

productsRoutes.get("/", productsController.index);
productsRoutes.post("/", verifyUserAuthorization("admin"), productsController.create); // admin tem acesso para criar em uma unica rota 

module.exports = productsRoutes;
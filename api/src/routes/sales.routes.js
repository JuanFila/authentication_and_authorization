const { Router } = require("express");
const SalesController = require("../controllers/SalesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyYserAuthorization");


const salesRoutes = Router();

const salesController = new SalesController();

salesRoutes.use(ensureAuthenticated);
salesRoutes.use(verifyUserAuthorization("admin")) // somente o admin tem acesso as rotas 

salesRoutes.get("/", salesController.index);

module.exports = salesRoutes;
const { Router } = require("express");
const { getItems } = require("../controller/vendedores");
const router = Router();

router.get("/", getItems);

module.exports = router;

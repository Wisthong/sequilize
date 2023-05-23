const { Router } = require("express");
const { getItems,getItem } = require("../controller/vendedores");
const router = Router();

router.get("/", getItems);

router.get("/:id", getItem);

module.exports = router;

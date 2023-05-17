const { response, request } = require("express");
const { vendedoresModels } = require("../model");

const getItems = async (req = request, res = response) => {
  try {
    const data = await vendedoresModels.findAll();
    res.send({
      data,
      ok: true,
      message: "Has obtenido el post",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getItems };

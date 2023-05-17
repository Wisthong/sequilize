require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnectMySQL } = require("./db/sql");

const app = express();
app.use(cors());
app.use(express.json());

dbConnectMySQL();

app.listen(process.env.PORT, () => {
  console.log("Escuchando por el puerto", process.env.PORT);
});

app.use("/api", require("./routes"));

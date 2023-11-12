const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./DB");

const app = express();

app.set ("port", process.env.PORT || 5000);

//Middlevares
app.use(morgan ("dev"));
app.use(express.json());
app.use(cors());

db();

app.listen(app.get ("port"), () => {
    console.log('Servidor esta corriendo en el puerto: ${app.get("port")}');
});

module.exports = app;
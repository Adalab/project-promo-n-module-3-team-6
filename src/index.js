// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 3000
const serverPort = 4001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
// servidor estático
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

// Escribimos los endpoints que queramos
server.get("/card", (req, res) => {
  const fields = [];

  if (req.body.phone === "") {
    fields.push("Ups❕ 😓, debes rellenar completo tu móvil");
  }
  if (req.body.name === "") {
    fields.push("Ups❕ 😓, debes rellenar tu nombre");
  }
  if (req.body.job === "") {
    fields.push("Ups❕ 😓, debes rellenar tu profesión");
  }
  if (req.body.photo === "") {
    fields.push("Ups❕ 😓, debes rellenar tu foto");
  }
  if (req.body.email === "") {
    fields.push("Ups❕ 😓, debes rellenar tu email");
  }

  if (req.body.linkedin === "") {
    fields.push("Ups❕ 😓, debes rellenar tu linkedin");
  }

  if (req.body.github === "") {
    fields.push("Ups❕ 😓, debes rellenar tu github");
  }

  const response = {};
  if (fields.length === 0) {
    response.cardURL = "http://localhost:4001/card/";
    response.success = true;
  } else {
    response.error = fields;
    response.success = false;
  }

  res.json(response);
});

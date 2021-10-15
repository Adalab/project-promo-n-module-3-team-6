// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const dataBase = require("better-sqlite3");
const db = dataBase("./src/cards.db", {
  verbose: console.log
})

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());
server.use('view engine', 'ejs');
server.use( express.json({limit:'10mb'}));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
// servidor estático
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));
//endpoint paint data
server.get('/data/:id', (req, res)=>{
  const id= req.params.id;
  const query =db.prepare(' SELECT * FROM cards WHERE id = ?');
  const data = query.get(id);
  if (data != null){
    res.render ('card',data);
  }else{
    res.render ('notFound');
  }
})

// Escribimos los endpoints que queramos
server.get("/card", (req, res) => {
  const fields = [];

  if (req.body.phone === "") {
    fields.push("Ups❕ 😓, debes rellenar completo tu móvil");
  }
  if (req.body.palette === ""){
    fields.push("Ups❕ 😓, debes elegir un estilo para tu tarjeta");
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

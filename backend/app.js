"use strict";

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// cargar archivos rutas
var projectRoutes = require("./routes/project");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Rutas

app.use("/api", projectRoutes);

/* app.get("/", (req, res) => {
	res.status(200).send("<h1>Hola mundo desde mi API de NodeJS</h1>");
});

app.post("/test/:id", (req, res) => {
	console.log(req.body.nombre);
	console.log(req.query.edad);
	console.log(req.params.id);
	res.status(200).send({
		message: "Hola mundo desde mi API de NodeJS",
	});
}); */

// Exportar
module.exports = app;

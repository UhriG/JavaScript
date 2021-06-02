"use strict";
var Project = require("../models/project");

var controller = {
	home: function (req, res) {
		return res.status(200).send({
			message: "Soy la home",
		});
	},
	test: function (req, res) {
		return res.status(200).send({
			message: "Soy el método test del controlador de project",
		});
	},
	saveProject: function (req, res) {
		var project = new Project();
		return res.status(200).send({
			message: "Metodo saveProject",
		});
	},
};

module.exports = controller;

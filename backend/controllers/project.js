"use strict";
var Project = require("../models/project");
const { param } = require("../routes/project");
var fs = require("fs");
const { exists } = require("../models/project");
var path = require("path");

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

		var params = req.body;
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored) => {
			if (err)
				return res.status(500).send({ message: "Error al guardar" });
			if (!projectStored)
				return res
					.status(404)
					.send({ message: "No se ha podido guardar el proyect" });
			return res.status(200).send({ project: projectStored });
		});
	},

	getProject: function (req, res) {
		var projectID = req.params.id;

		if (projectID == null)
			return res.status(404).send({ message: "El proyecto no existe" });

		Project.findById(projectID, (err, project) => {
			if (err)
				return res
					.status(500)
					.send({ message: "Error al devolver los datos" });
			if (!project)
				return res
					.status(404)
					.send({ message: "El proyecto no existe" });
			return res.status(200).send({ project });
		});
	},

	getProjects: function (req, res) {
		Project.find({})
			.sort("-year")
			.exec((err, projects) => {
				if (err)
					return res
						.status(500)
						.send({ message: "Error al devolver los proyectos" });
				if (!projects)
					return res
						.status(404)
						.send({ message: "No hay proyectos para mostrar" });
				return res.status(200).send({ projects });
			});
	},

	updateProject: function (req, res) {
		var projectID = req.params.id;
		var update = req.body;

		if (projectID == null)
			return res.status(404).send({ message: "El proyecto no existe" });

		Project.findByIdAndUpdate(
			projectID,
			update,
			{ new: true },
			(err, projectUpdated) => {
				if (err)
					return res
						.status(500)
						.send({ message: "Error al actualizar el proyecto" });
				if (!projectUpdated)
					return res.status(404).send({
						message: "No existe el proyecto para actualizar",
					});
				return res.status(200).send({
					project: projectUpdated,
				});
			}
		);
	},

	deleteProject: function (req, res) {
		var projectID = req.params.id;

		if (projectID == null)
			return res.status(404).send({ message: "El proyecto no existe" });

		Project.findByIdAndDelete(projectID, (err, projectDeleted) => {
			if (err)
				return res
					.status(500)
					.send({ message: "Error al borrar el proyecto" });
			if (!projectDeleted)
				return res.status(404).send({
					message: "No existe el proyecto para borrar",
				});
			return res.status(200).send({
				project: projectDeleted,
			});
		});
	},

	uploadImage: function (req, res) {
		var projectID = req.params.id;

		if (projectID == null)
			return res.status(404).send({ message: "El proyecto no existe" });

		var fileName = "Sin imagen";

		if (req.files) {
			var filePath = req.files.image.path;
			var fileSlipt = filePath.split("\\");
			var fileName = fileSlipt[1];
			var extSplit = fileName.split(".");
			var fileExt = extSplit[1];

			if (
				fileExt == "png" ||
				fileExt == "jpg" ||
				fileExt == "jpeg" ||
				fileExt == "gif"
			) {
				Project.findByIdAndUpdate(
					projectID,
					{ image: fileName },
					{ new: true },
					(err, projectUpdated) => {
						if (err)
							return res
								.status(500)
								.send({ message: "La imagen no se ha subido" });
						if (!projectUpdated)
							return res
								.status(404)
								.send({ message: "El proyecto no existe" });
						return res.status(200).send({
							project: projectUpdated,
						});
					}
				);
			} else {
				fs.unlink(filePath, (err) => {
					return res.status(200).send({
						message: "La extensión de la imagen no es válida",
					});
				});
			}
		} else {
			return res.status(200).send({ message: "Sin imagen" });
		}
	},

	getImageFile: function (req, res) {
		var file = req.params.image;
		var path_file = "./uploads/" + file;
		fs.access(path_file, fs.constants.F_OK, (err) => {
			if (err) {
				return res.status(200).send({ message: "No existe la imagen" });
			} else {
				return res.sendFile(path.resolve(path_file));
			}
		});
	},
};

module.exports = controller;

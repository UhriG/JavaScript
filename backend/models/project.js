"use strict";

var Mongoose = require("mongoose");
var Schema = Mongoose.Schema;

var ProjectSchema = Schema({
	name: String,
	description: String,
	category: String,
	year: Number,
	langs: [String],
});

module.exports = Mongoose.model("Project", ProjectSchema); //projects

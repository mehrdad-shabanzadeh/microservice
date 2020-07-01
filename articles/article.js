const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		description: String,
	},
});

module.exports = mongoose.model('Article', ArticleSchema);

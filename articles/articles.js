const express = require('express');
const mongoose = require('mongoose');
const Article = require('./article');
const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/Article-Microservice', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

app.use(express.json());

app.post('/article', (req, res) => {
	new Article({
		title: req.body.title,
		description: req.body.description,
	}).save((err, article) => {
		if (err) {
			return res.send('Error');
		} else {
			return res.json(article);
		}
	});
});

app.get('/articles', (req, res) => {
	Article.find()
		.then((articles) => {
			return res.json(articles);
		})
		.catch((err) => {
			return res.send('Error');
		});
});

app.listen(3000, () => console.log('Up and running --- articles microservice...'));

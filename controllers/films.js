//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');


var express = require('express')
var filmRouter = new express.Router();

//index
filmRouter.get('/', function (req, res) {
  res.json({data: films});
});

//show
filmRouter.get('/:id', function (req, res) {
  res.json({data:films[req.params.id]});
});

//update
filmRouter.put('/:id', function (req, res) {
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

//create
filmRouter.post('/', function (req, res) {
  console.log(req.body);
  films.push(req.body.film);
  res.json({data: films});
});

//delete
filmRouter.delete('/:id', function (req, res) {
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmRouter;
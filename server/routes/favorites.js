var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var FavoriteSchema = mongoose.Schema({
  Title : String,
  Director : String,
  Genre : String,
  Plot : String,
  Rated : String,
  Released : String,
  Actors : String,
  Ratings : String,
  Poster : String
});

var Favorite = mongoose.model('favorite', FavoriteSchema, 'favorites');

router.get('/', function(req,res){
  Favorite.find({}, function (err, allFavorites){
    if (err){
      console.log('Mongo Error: ', err);
    }
    res.send(allFavorites);
  });
});

router.post('/', function(req,res){
  var favorite = new Favorite({
    Title : req.body.Title,
    Director : req.body.Director,
    Genre : req.body.Genre,
    Plot : req.body.Plot,
    Rated : req.body.Rated,
    Released : req.body.Released,
    Actors : req.body.Actors,
    Ratings : req.body.Ratings,
    Poster : req.body.Poster
  });
  favorite.save(function(err, saveFavorite){
    if(err){
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.send(saveFavorite);
  });
});

router.delete('/:id', function (req,res){
  console.log(req.params);
  Favorite.findByIdAndRemove((req.params.id), function (err, allFavorites){
    if (err) {
      console.log("mongo error: ", err);
      sendStatus(500);
    }
    res.sendStatus(200);
  });
});

module.exports=router;

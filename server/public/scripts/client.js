var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.getOMDB = MovieService.getOMDB;
  $scope.movieFavorites = MovieService.movieFavorites;
}]);

myApp.controller('TwoController', ['$scope', 'MovieService', function($scope, MovieService){

}]);

myApp.factory('MovieService', ['$http', function($http){
  var movieFavorites = [];

function receivedMovie (movie) {
   var newMovie =  {
    Title : movie.Title,
    Director : movie.Director,
    Genre : movie.Genre,
    Plot : movie.Plot,
    Rated : movie.Rated,
    Released : movie.Released,
    Actors : movie.Actors,
    Ratings : movie.Ratings,
    Poster : movie.Poster
  };
  movieFavorites.push(newMovie);
}

  function getNewMovie (object) {
    //get movie from DB here

  }

  function addToFavorites (object){

    movieFavorites.push(object);

  }

  return {
  movieFavorites : movieFavorites,

  getOMDB : function (movie) {
    console.log(movie);
    $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=full&r=json').then(function(response){
      console.log(response);
      receivedMovie(response.data);
    });
  }
};

}]);

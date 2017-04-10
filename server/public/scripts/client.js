var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.clearSubmit = function() {
    $scope.movie.name = '';
  };

  $scope.getOMDB = MovieService.getOMDB;
  $scope.newMovie = MovieService.newMovie;
  $scope.addToFavorites = MovieService.addToFavorites;
}]);

myApp.controller('TwoController', ['$scope', '$http', 'MovieService', function($scope, $http, MovieService){
  $scope.favorites = MovieService.favorites;
  $scope.getFavorites = MovieService.getFavorites;
  $scope.getFavorites();

  $scope.deleteFavorites = function (index) {
    var favoriteToDelete = $scope.favorites[0][index];
    console.log(favoriteToDelete._id);
    $http.delete('/favorites/' + favoriteToDelete._id).then(function(response){
      $scope.getFavorites();
    });
  };
}]);

myApp.factory('MovieService', ['$http', function($http){
  var favorites = [];
  var newMovie = [];

function receivedMovie (movie) {
    newMovie.length = 0;
    var movieObject = {
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

    newMovie.push(movieObject);
}

 function addToFavorites(object){
  $http.post('/favorites', object).then(function(response){
    getFavorites();
  });
  }

  function getFavorites(){
    $http.get('/favorites').then(function(response){
      favorites.length = 0;
      favorites.push(response.data);
    });
  }

  return {
  getFavorites : getFavorites,
  addToFavorites : addToFavorites,
  favorites : favorites,

  getOMDB : function (movie) {
    console.log(movie);
    $http.get('http://www.omdbapi.com/?t=' + movie + '&y=&plot=full&r=json').then(function(response){
      console.log(response);
      receivedMovie(response.data);
    });
  },
  newMovie : newMovie,

};

}]);

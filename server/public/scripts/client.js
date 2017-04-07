var myApp = angular.module('myApp', []);

myApp.controller('OneController', ['$scope', 'MovieService', function($scope, MovieService){

}]);

myApp.controller('TwoController', ['$scope', 'MovieService', function($scope, MovieService){

}]);

myApp.factory('MovieService', [function(){
  var movieFavorites = [];

  function getNewMovie (object) {
    //get movie from DB here

  }

  function addToFavorites (object){

    movieFavorites.push(object);

  }

  return {
    movieFavorites : movieFavorites,
    getNewMovie : getNewMovie
  };
}]);

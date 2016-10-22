var app = angular.module('myApp', []);
app.controller('cardsListController', function($scope) {
 $scope.cards = [{ id: 1 }, { id: 2 }];
});
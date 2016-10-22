var app = angular.module('LibrairieSection', []);
app.controller('LibrairieController', function($scope) {
 $scope.lectures = [
 {id: 1, image: 'scripts/file/guerilla.jpg', titre: "Guerilla - Le jour où tout s'embrasa", auteur: "Laurent Obertone", prix: "19.95 euros", disponible:"En stock", commentaire:"Un incident avec la police va conduire à une véritable guerre civile et paralyser toute l'économie: plus d'électricité, plus d'eau, plus de nourriture, plus de réseau.... Le chaos s'installe. Un livre brutal (prédictif?)"},
 {id: 2, image: 'scripts/file/premiermiracle2.jpeg', titre: "Le premier miracle ", auteur: "Gilles Legardinier", prix: "19.90 euros", disponible:"En stock", commentaire:"On ne présente plus l'auteur qui habite à Saint Leu et que les Plessis Buccardésiens aiment beaucoup. Un nouveau roman qui n'est pas sans rappeler les aventures d'Indiana Jones et de James Bond à la fois. Bien documenté, bien écrit, drôle, impossible à lâcher."},
 ];

 $scope.decouvertes = [
 {id: 1, image: 'scripts/file/rougebonbon.jpg' , titre: "Rouge bonbon", auteur: "Cathy Cassidy", prix: "14.95 euros", disponible:"En stock", commentaire:"Auteure des Filles au chocolat, Cathy Cassidy raconte ici les tourments de Scarlett, âgée de 12 ans et en colère depuis le divorce de ses parents. Elle se fait exclure de son collège et part habiter chez son père."},
 ];

 $scope.conseils = [
 {id: 1, image: 'scripts/file/nuitbucher.jpg' , titre: "La nuit du bûcher", auteur: "Sandor Marai", prix: "19 euros", disponible:"En stock", commentaire:"1598: Un carme espagnol vient à Rome pour découvrir comment l'Inquisition lutte contre les hérétiques. C'est par sa voix que le lecteur entre dans ce monde où il faut« réduire à néant tous les livres, auteurs et lecteurs louches parce qu'il n'y aurait pas d'ordre dans le monde tant que vivraient des hommes qui feraient l'expérience de penser par eux-mêmes ». L'apprenti inquisiteur rencontre alors Giordano Bruno, qui a formulé l'hypothèse d'un univers infini qui n'a pas de centre, peuplé d'une quantité innombrable d'astres et de mondes identiques au nôtre. Emprisonné depuis 7 ans, le scientifique n'est pas repenti (et le paiera de sa vie). Le sujet de la résistance à l'idéologie dominante ne s'use pas et le cheminement du moine permet d'espérer."},
 ];
});
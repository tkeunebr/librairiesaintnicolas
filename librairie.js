var app = angular.module('LibrairieSection', []);
app.controller('LibrairieController', function($scope) {
 $scope.lectures = [
 {id: 1, image: 'scripts/file/guerilla.jpg', titre: "Guerilla - Le jour où tout s'embrasa", auteur: "Laurent Obertone", prix: "19.95 euros", disponible:"En stock", commentaire:"Un incident avec la police va conduire à une véritable guerre civile et paralyser toute l'économie: plus d'électricité, plus d'eau, plus de nourriture, plus de réseau.... Le chaos s'installe. Un livre brutal (prédictif?)"},
 {id: 2, image: 'scripts/file/premiermiracle2.jpeg', titre: "Le premier miracle", auteur: "Gilles Legardinier", prix: "19.90 euros", disponible:"En stock", commentaire:"On ne présente plus l'auteur qui habite à Saint Leu et que les Plessis Buccardésiens aiment beaucoup. Un nouveau roman qui n'est pas sans rappeler les aventures d'Indiana Jones et de James Bond à la fois. Bien documenté, bien écrit, drôle, impossible à lâcher."},
 {id: 3, image: 'scripts/file/guideegares.jpg', titre: "Le guide des égarés", auteur: "Jean d'Ormesson", prix: "14 euros", disponible:"En stock", commentaire:"Ce n'est pas un hasard si la médiathèque communale porte son nom. Auteur apprécié des Plessis Buccardésiens, Jean d'Ormesson livre le fruit de ses réflexions sur 'ce monde peu vraisemblable où nous avons été jetés malgré nous'.  Quelques pistes pour les quêteurs du sens de l'existence."},
 {id: 4, image: 'scripts/file/chansondouce.jpg', titre: "Chanson douce", auteur: "Leïla Slimani", prix: "18 euros", disponible:"En stock", commentaire:"Goncourt du public, Chanson douce est l'histoire d'une nounou qui tue les enfants dont elle a la garde. Huit clos dans l'intimité d'un couple de bourgeois dont le mariage bat de l'aile. Leila Slimani a le vent en poupe au Plessis comme ailleurs."},

 ];

 $scope.decouvertes = [
 {id: 1, image: 'scripts/file/rougebonbon.jpg' , titre: "Rouge bonbon", auteur: "Cathy Cassidy", prix: "14.95 euros", disponible:"En stock", commentaire:"Auteure des Filles au chocolat, Cathy Cassidy raconte ici les tourments de Scarlett, âgée de 12 ans et en colère depuis le divorce de ses parents. Elle se fait exclure de son collège et part habiter chez son père."},
 {id: 2, image: 'scripts/file/blackmortimer.jpg' , titre: "Blake et Mortimer, tome 24: Le testament de William S", auteur: "Yves Sente", prix: "15.95 euros", disponible:"En stock", commentaire:""},
  {id: 3, image: 'scripts/file/seuls.jpg' , titre: "Seuls, tome 10: La machine à démourir", auteur: "Bruno Gazzotti", prix: "10.60 euros", disponible:"En stock", commentaire:""},
 {id: 4, image: 'scripts/file/aiglesrome.jpg' , titre: "Les aigles de Rome, tome 5: Les aigles de Rome", auteur: "Enrico Marini ", prix: "13.99 euros", disponible:"En stock", commentaire:""},

 ];

 $scope.conseils = [
 {id: 1, image: 'scripts/file/eveil.jpg' , titre: "L'Eveil, Stade 1", auteur: "Jean-Baptiste de Panafieu", prix: "16.50 euros", disponible:"En stock", commentaire:"L'EVEIL Stade 1 de Jean-Baptiste de Panafieu raconte le développement d'un virus ayant pour but de rendre les animaux plus intelligents. Il se propage très rapidement dans les villes, les élevages et les forêts et affole les biologistes. Le rapport de force entre les animaux et les hommes va-t-il s'inverser? Les bêtes éveillées vont-elles lutter pour retrouver leur liberté? Belle couverture, construction originale (chaque partie correspond à un mois), écriture fluide, et une suite à paraître en mars 2017.", par: "Baptiste Keunebroek"},
 {id: 2, image: 'scripts/file/nuitbucher.jpg' , titre: "La nuit du bûcher", auteur: "Sandor Marai", prix: "19 euros", disponible:"En stock", commentaire:"1598: Un carme espagnol vient à Rome pour découvrir comment l'Inquisition lutte contre les hérétiques. C'est par sa voix que le lecteur entre dans ce monde où il faut« réduire à néant tous les livres, auteurs et lecteurs louches parce qu'il n'y aurait pas d'ordre dans le monde tant que vivraient des hommes qui feraient l'expérience de penser par eux-mêmes ». L'apprenti inquisiteur rencontre alors Giordano Bruno, qui a formulé l'hypothèse d'un univers infini qui n'a pas de centre, peuplé d'une quantité innombrable d'astres et de mondes identiques au nôtre. Emprisonné depuis 7 ans, le scientifique n'est pas repenti (et le paiera de sa vie). Le sujet de la résistance à l'idéologie dominante ne s'use pas et le cheminement du moine permet d'espérer.", par: "Le libraire"},
  {id: 3, image: 'scripts/file/pluies.jpg' , titre: "Les pluies", auteur: "Vincent Villeminot", prix: "16.90 euros", disponible:"En stock", commentaire:"Kosh et Lou âgés de 14 ans, s'aiment depuis leur première rencontre. La pluie tombe depuis 8 mois, les barrages cèdent et emportent tout. Kosh doit évacuer ses frères et sœurs car les parents ne sont pas là. Mouvement de foule, les réfugiés prennent les derniers bateaux d'assaut: les jeunes héros sont séparés... Un roman d'aventure qui pose la question du choix dans un monde désorganisé et violent. Les Pluies de Vincent Villeminot est le premier livre de la série. Suite prévue en février 2017.", par: "Le libraire"},
 {id: 4, image: 'scripts/file/gaulois.jpg' , titre: "Ma part de gaulois", auteur: "Magyd Cherfi", prix: "19.80 euros", disponible:"En stock", commentaire:"Prix du Parisien magazine pour le parolier de Zebda, fils d'immigré algérien qui raconte sa jeunesse toulousaine et plus précisément l'année de son bac. 1981, l'arrivée de Mitterrand au pouvoir, la mort de Georges Brassens et de Bob Marley, l'impasse des cités déjà. Un récit à la fois énergique et amer, une écriture jubilatoire, beaucoup de plaisir et d'interrogations sur l'identité et l'intégration.", par: "Le libraire"},

 ];
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
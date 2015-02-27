var miniWeb = angular.module('miniWeb', ['negRoute']);

miniWeb.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactContrller'
		});
});




miniWeb.controller('mainController', function($scope) {
	$scope.message = "Dude, please stop looking at my site. Thanks.";
});

miniWeb.controller('aboutController', function($scope) {
	$scope.message = "This page is a page about me for you.";
	$scope.avatar = "images/avatar.jpg";
});

miniWeb.controller('contactController', function($scope) {
	$scope.message = "Come on over sometime, have a beer! I\'ll make you a sandwich with cheese in it."
});
var miniWeb = angular.module('miniWeb', ['negRoute']);

miniWeb.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		});
});




miniWeb.controller('mainController', function($scope) {
	$scope.message = "Dude, please stop looking at my site. Thanks.";
});
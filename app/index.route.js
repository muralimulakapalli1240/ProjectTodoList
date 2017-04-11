(function() {
  'use strict';

  angular
    .module('angularTdd').config(function($stateProvider, $urlRouterProvider,$locationProvider)
	{


		$stateProvider
		.state('home', {
        url: '/',
        templateUrl: '../templates/todo.html',
        controller:"TodoListController"
    })
    .state('details', {
        url: '/:id',
        templateUrl: '../templates/details.html',
        
                resolve: {
                        detail: function (services, $state, $stateParams) {
                                                    var IDI = $stateParams.id;
                                                    return services.details(IDI);
                                                }
                    },
                    controller: 'DetailsController',
    })
$locationProvider.html5Mode(true)
	})

  

})();

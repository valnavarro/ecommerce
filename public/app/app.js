
var app = angular.module('app', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise('/');

	$stateProvider.
		// Main Layout Structure
		state('/', {
			url: '/',
			template : '',
			controller  : 'mainController',
			controllerAs: 'raiz'
		}). 
		state('acidentes-pessoais', {
			url: '/catalogo-acidentes-pessoais',
			templateUrl: 'app/views/pages/catalogo-acidentes-pessoais.html',
   			controller  : 'mainController',
    		controllerAs: 'ap'
		}).
		state('acidentes-pessoais-etapa1', {
			url: '/catalogo-acidentes-pessoais/etapa1',
			templateUrl: 'app/views/pages/identificacao.html',
   			controller  : 'mainController',
    		controllerAs: 'ap'
		}).
		state('acidentes-pessoais-etapa2', {
			url: '/catalogo-acidentes-pessoais/etapa2',
			templateUrl: 'app/views/pages/endereco.html',
   			controller  : 'mainController',
    		controllerAs: 'ap'
		}).
		state('acidentes-pessoais-confirmacao', {
			url: '/catalogo-acidentes-pessoais/confirmacao',
			templateUrl: 'app/views/pages/confirmacao.html',
   			controller  : 'mainController',
    		controllerAs: 'ap'
		}).
		state('viagem', {
			url: '/catalogo-viagem',
			templateUrl: 'app/views/pages/catalogo-viagem.html',
   			controller  : 'mainController',
    		controllerAs: 'vi'
		}).
		state('residencial', {
			url: '/catalogo-residencial',
			templateUrl: 'app/views/pages/catalogo-residencial.html',
   			controller  : 'mainController',
    		controllerAs: 're'
		});


});

app.controller('mainController', function($location) {

	var vm = this;

});






(function() {

	'use strict';
	
    angular
		.module('app')
		.controller('AtividadeController', AtividadeController);
		
	AtividadeController.$inject = ['$scope', 'atividadeApi'];
		
	function AtividadeController($scope, atividadeApi) { 
		
		$scope.showLoading = false;

		$scope.atividades = atividadeApi.getAtividades();
						
	}
	
}());
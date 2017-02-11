
(function() {

	'use strict';
	
    angular
		.module('app')
		.controller('AtividadeController', AtividadeController);
		
	AtividadeController.$inject = ['$scope', 'atividadeApi'];
		
	function AtividadeController($scope, atividadeApi) { 
		
		$scope.showLoading = true;
		$scope.atividades = null;

		$scope.loadAtividades = function(){
            $scope.atividades = atividadeApi.obtemAtividades();
            $scope.showLoading = false;
        };

        $scope.loadAtividades();
			
	}
	
}());
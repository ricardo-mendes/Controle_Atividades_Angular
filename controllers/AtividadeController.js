
(function() {

	'use strict';
	
    angular
		.module('app')
		.controller('AtividadeController', AtividadeController);
		
	AtividadeController.$inject = ['$scope', 'atividadeApi'];
		
	function AtividadeController($scope, atividadeApi) { 
		
		const praFazer = 0;
		const fazendo = 1;
		const concluida = 2;

		$scope.filtroDataConclusao = "";
		$scope.showLoading = true;
		$scope.atividade = {
			titulo: "", 
			dataConclusao: "", 
			status: "0",
		}
		$scope.atividades = null;


		$scope.loadAtividades = function(){
            $scope.atividades = atividadeApi.obterAtividades();
            $scope.showLoading = false;
        };

        $scope.loadAtividades();

        $scope.limparFiltroDePesquisa = function() {
        	$scope.filtroDataConclusao = "";
        };

        $scope.criarAtividade = function(){
			atividadeApi.criarAtividade($scope.atividade);
			delete $scope.atividade;
			$('#criarAtividadeModal').modal('hide');
			$scope.loadAtividades();
		};
    }
	
}());
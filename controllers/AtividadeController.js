
(function() {

	'use strict';
	
    angular
		.module('app')
		.controller('AtividadeController', AtividadeController);
		
	AtividadeController.$inject = ['$scope', 'atividadeApi'];
		
	function AtividadeController($scope, atividadeApi) { 
		
		const paraFazer = "Para fazer";
		const fazendo = "Fazendo";
		const concluida = "Concluída";

		$scope.filtroDataConclusao = "";
		$scope.showLoading = true;
		$scope.atividade = {
			id: "",
			titulo: "", 
			dataConclusao: "", 
			status: "0",
		}
		$scope.atividades = null;


		$scope.loadAtividades = function(){
            $scope.atividades = atividadeApi.obterTodasAtividades();
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

		$scope.abrirModalDeEditarAtividade = function(atividade){
			$('#editarAtividadeModal').modal('show');
			$scope.atividade = atividade;
		};

		$scope.fecharModalDeEditarAtividade = function(){
			delete $scope.atividade;
			$('#editarAtividadeModal').modal('hide');
		};

		$scope.editarAtividade = function(){
			//atividadeApi.editarAtividade($scope.atividade);
			delete $scope.atividade;
			$('#editarAtividadeModal').modal('hide');
		};
    }
	
}());
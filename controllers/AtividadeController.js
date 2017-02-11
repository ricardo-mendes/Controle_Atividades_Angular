
(function() {

	'use strict';
	
    angular
		.module('app')
		.controller('AtividadeController', AtividadeController);
		
	AtividadeController.$inject = ['$scope', 'atividadeApi', '$q'];
		
	function AtividadeController($scope, atividadeApi, $q) { 
		
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
		$scope.atividadeRemovida = null;
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

		$scope.beforeDrop = function() {
		    var deferred = $q.defer();
		    if (confirm('Tem certeza?')) {
		      deferred.resolve();
		    } else {
		      deferred.reject();
		    }
   		 	return deferred.promise;
  		};

  		$scope.excluirAtividade = function() {
		    atividadeApi.excluirAtividade($scope.atividadeRemovida);
		    $scope.loadAtividades();
  		};

		/*$scope.editarAtividade = function(){
			//atividadeApi.editarAtividade($scope.atividade);
			delete $scope.atividade;
			$('#editarAtividadeModal').modal('hide');
		};*/
    }
	
}());
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
		$scope.atividade = {
			id: "",
			titulo: "", 
			dataConclusao: "", 
			status: paraFazer,
		}
		$scope.atividadeRemovida = null;
		$scope.atividadeEditada = null;
		$scope.atividades = null;

		$scope.loadAtividades = function(){
            $scope.atividades = atividadeApi.obterTodasAtividades();
        };

        $scope.loadAtividades();

        $scope.limparFiltroDePesquisa = function() {
        	$scope.filtroDataConclusao = "";
        };

        $scope.criarAtividade = function(){
			atividadeApi.criarAtividade($scope.atividade);
			delete $scope.atividade;
			$scope.loadAtividades();
			
			esconderModal('criarAtividadeModal');

			exibirModal('atividadeCadastradaComSucessoModal');
		    esconderModalEmDoisSegundos('atividadeCadastradaComSucessoModal');
		};

		$scope.abrirModalDeEditarAtividade = function(atividade){
			exibirModal('editarAtividadeModal');

			$scope.atividade = atividade;
			$scope.atividadeEditada = angular.copy(atividade);
		};

		$scope.fecharModalDeEditarAtividade = function(){
			delete $scope.atividade;
			delete $scope.atividadeEditada;

			esconderModal('editarAtividadeModal');
		};

		$scope.editarAtividade = function(){
			atividadeApi.editarAtividade($scope.atividade, $scope.atividadeEditada);
			delete $scope.atividadeEditada;
			delete $scope.atividade;
			$scope.loadAtividades();

			esconderModal('editarAtividadeModal');

			exibirModal('atividadeAtualizadaComSucessoModal');
		    esconderModalEmDoisSegundos('atividadeAtualizadaComSucessoModal');
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

		    exibirModal('atividadeExcluidaComSucessoModal');
		    esconderModalEmDoisSegundos('atividadeExcluidaComSucessoModal');
  		};

  		//------------------

  		function exibirModal(modalId){
  			$('#' + modalId).modal('show');
  		};

  		function esconderModal(modalId){
			$('#' + modalId).modal('hide');
  		};

  		function esconderModalEmDoisSegundos(modalId){
  			setTimeout(function () {
    			$('#' + modalId).modal('hide')
			}, 2000);
  		};
    }
	
}());
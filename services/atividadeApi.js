(function(){

	'use strict';
    
    angular
		.module('app')
		.factory('atividadeApi', atividadeApi);
		
	atividadeApi.$inject = ['$http', '$q'];
		
	function atividadeApi($http, $q) {
	
		const paraFazer = "Para fazer";
		const fazendo = "Fazendo";
		const concluida = "Concluída";

		var atividades = [
			{
				id: guid(), titulo: 'Estudar Padrões de Projetos', dataConclusao: "01/03/2015", status: concluida,
			},
			{
				id: guid(), titulo: 'Estudar Padrões de Arquitetura', dataConclusao: "02/03/2017", status: fazendo,
			}
		];

		var service = {
			obterTodasAtividades: obterTodasAtividades,
			criarAtividade: criarAtividade,
			editarAtividade: editarAtividade,
			excluirAtividade: excluirAtividade
		};

		return service;

		////////////

		function obterTodasAtividades() {
			console.log(atividades);
			return atividades;
		}

		function criarAtividade(atividade) {
			atividade.id = guid();
			atividades.push(angular.copy(atividade)); 
		}

		function editarAtividade(atividadeAtual, atividadeAtualizada) {
			var index = atividades.indexOf(atividadeAtual);
			atividades.splice(index, 1, atividadeAtualizada);
		}

		function excluirAtividade(atividade){
			var index = atividades.indexOf(atividade);
			atividades.splice(index, 1);
		}

		function guid() {
		  function s4() {
		    return Math.floor((1 + Math.random()) * 0x10000)
		      .toString(16)
		      .substring(1);
		  }
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		    s4() + '-' + s4() + s4() + s4();
		}
		
	}	
    
}());
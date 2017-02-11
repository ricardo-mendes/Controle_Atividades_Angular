(function(){

	'use strict';
    
    angular
		.module('app')
		.factory('atividadeApi', atividadeApi);
		
	atividadeApi.$inject = ['$http', '$q'];
		
	function atividadeApi($http, $q) {
	
		const praFazer = 0;
		const fazendo = 1;
		const concluida = 2;

		var atividades = [
			{
				titulo: 'Estudar Padrões de Projetos', dataConclusao: "01/03/2015", status: concluida,
			},
			{
				titulo: 'Estudar Padrões de Arquitetura', dataConclusao: "02/03/2017", status: fazendo,
			}
		];

		var service = {
			obterAtividades: obterAtividades,
			criarAtividade: criarAtividade
		};

		return service;

		////////////

		function obterAtividades() {
			return atividades;
		}

		function criarAtividade(atividade) {
			atividades.push(angular.copy(atividade)); 
		}
		
	}	
    
}());
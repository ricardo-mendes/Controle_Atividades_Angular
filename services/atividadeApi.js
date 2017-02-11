(function(){

	'use strict';
    
    angular
		.module('app')
		.factory('atividadeApi', atividadeApi);
		
	atividadeApi.$inject = ['$http', '$q'];
		
	function atividadeApi($http, $q) {
	
		var praFazer = 0;
		var fazendo = 1;
		var concluida = 2;

		var service = {
			obtemAtividades: obtemAtividades
		};

		return service;

		////////////

		function obtemAtividades() {
			return [
				{
					titulo: 'Estudar Padrões de Projetos', dataConclusao: new Date(), status: concluida,
				},
				{
					titulo: 'Estudar Padrões de Arquitetura', dataConclusao: new Date(), status: fazendo,
				}
			];
		}
		
	}	
    
}());
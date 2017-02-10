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

		var service = {
			getAtividades: getAtividades
		};

		return service;

		////////////

		function getAtividades() {
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
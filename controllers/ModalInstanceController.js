(function() {

	'use strict';
	
    angular
		.module('app')
		.controller('ModalInstanceController', ModalInstanceController);
		
	ModalInstanceController.$inject = ['$scope', '$modalInstance'];
		
	function ModalInstanceController($scope, $modalInstance) { 
		$scope.sim = function () {
   			$modalInstance.close();
    	};
    	$scope.nao = function () {
    		$modalInstance.dismiss('cancel');
  		};
    }
	
}());
(function(){
    
    var app = angular.module("app", ["ngRoute", "ngDragDrop", "ui.bootstrap"]);  
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/atividades", {
                templateUrl: "templates/atividades.html",
                controller: "AtividadeController"
            }) 
            .otherwise({redirectTo:"/atividades"});
    });
    
}());


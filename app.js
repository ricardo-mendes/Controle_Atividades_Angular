(function(){
    
    var app = angular.module("app", ["ngRoute"]);  
    
    app.config(function($routeProvider){
        $routeProvider
            .when("/atividades", {
                templateUrl: "templates/atividades.html",
                controller: "AtividadeController"
            }) 
            .otherwise({redirectTo:"/atividades"});
    });
    
}());


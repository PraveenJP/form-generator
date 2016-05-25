'use strict';

var app = angular.module('formGenerator', ['ui.bootstrap', '$strap.directives']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/create.html',
            controller: 'createCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}).run(['$rootScope',  function() {}]);



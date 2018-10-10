(function (ng) {
    'use strict';

    var app = ng.module("LawFirmApp", ['ngRoute']);

    app.config(function ($routeProvider,$locationProvider) {
        $routeProvider
            .when("/index.html", {
                templateUrl: "home.html"
            })
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/about-us.html", {
                templateUrl: "about-us.html"
            })
            .when("/green", {
                templateUrl: "green.htm"
            })
            .when("/blue", {
                templateUrl: "blue.htm"
            });

        $locationProvider.html5Mode(true);
    });

    app.controller("mainController", function () {

    });

    app.controller("about-us",function(){

        load_js();
    });


    app.controller("home",function($scope){

        load_js();


        $scope.ShowTab = function (tabName) {
            angular.element(document.getElementsByClassName("card-collapse collapse")).attr('ng-hide',true).removeClass('show');

            $scope.currentTabName = tabName;
            angular.element(document.getElementById(tabName)).removeAttr("ng-hide").addClass('show');
        };


    });


}(angular));

function load_js()
{
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.src= 'js/script.js';
    head.appendChild(script);
}

/*


var app = angular.module("LawFirmApp", ['ngRoute','ngLoadScript']);

app.config(function ($routeProvider,$locationProvider) {
    $routeProvider
    .when("/index.html", {
        templateUrl: "home.html"
    })
    .when("/", {
        templateUrl: "home.html"
    })
    .when("/about-us.html", {
        templateUrl: "about-us.html"
    })
    .when("/green", {
        templateUrl: "green.htm"
    })
    .when("/blue", {
        templateUrl: "blue.htm"
    });

    $locationProvider.html5Mode(true);

});

app.directive('script', function() {
    return {
        restrict: 'E',
        scope: false,
        link: function (scope, elem, attr) {
            if (attr.type == 'text/javascript-lazy') {
                var code = elem.text();
                var f = new Function(code);
                f();
            }
        }
    }
});*/

(function (ng) {
    'use strict';

    var app = ng.module("LawFirmApp", ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {

        $routeProvider
            .when("/index.html", {
                templateUrl: "home.html"
            })
            .when("/", {
                templateUrl: "home.html"
            })
            .when("/home", {
                templateUrl: "home.html"
             })
            .when("/about-us", {
                templateUrl: "about-us.html"
            })
            .when("/litigation", {
                templateUrl: "litigation.html"
            })
            .when("/arbitration", {
                templateUrl: "arbitration.html"
            })
            .when("/civil-law", {
                templateUrl: "civil-law.html"
            })
            .when("/commercial-corporate", {
                templateUrl: "commercial-corporate.html"
            })
            .when("/intellectual-property-law", {
                templateUrl: "intellectual-property-law.html"
            })
            .when("/realestate-construction", {
                templateUrl: "realestate-construction.html"
            })
            .when("/family-law", {
                templateUrl: "family-law.html"
            })
            .when("/criminal-law", {
                templateUrl: "criminal-law.html"
            })
            .when("/labor-law", {
                templateUrl: "labor-law.html"
            })
            .when("/practice-areas", {
                templateUrl: "practice-areas.html"
            })
            .when("/wills-trust", {
                templateUrl: "wills-trust.html"
            })
            .when("/maritime-law", {
                templateUrl: "maritime-law.html"
            })
            .when("/sharia-law", {
                templateUrl: "sharia-law.html"
            })
            .when("/medical-malpractice", {
                templateUrl: "medical-malpractice.html"
            })
            .when("/insurance-law", {
                templateUrl: "insurance-law.html"
            })
            .when("/government-regulations", {
                templateUrl: "government-regulations.html"
            })
            .when("/expert-opinion", {
                templateUrl: "expert-opinion.html"
            })

            .when("/contract-drafting", {
                templateUrl: "contract-drafting.html"
            })

            .when("/bankruptcy", {
                templateUrl: "bankruptcy.html"
            })
            .otherwise({redirectTo: '/home'});

        $locationProvider.html5Mode(true);
        
    });


    app.controller("mainController", function ($scope) {
    });

    app.controller("laborLawController", function () {

        load_js();

    });
    app.controller("insuranceLawController", function () {

        load_js();

    });

    app.controller("bankruptcyController", function () {

        load_js();

    });

    

    app.controller("insuranceLawController", function () {

        load_js();

    });

    app.controller("governmentRegulationsController", function () {

        load_js();

    });
    app.controller("contractDraftingController", function () {

        load_js();

    });
    
    
    app.controller("maritimeLawController", function () {

        load_js();

    });
    app.controller("medicalMalpracticeController", function () {

        load_js();

    });
    app.controller("shariaLawController", function () {

        load_js();

    });

    app.controller("expertOpinionController", function () {

        load_js();

    });
    
    
    app.controller("civillawController", function () {

        load_js();
    });

    app.controller("willTrustController", function () {

        load_js();
    });
    

    app.controller("about-us", function ($scope) {

        load_js();
    });
    
    app.controller("IntellectualPropertyController", function () {

        load_js();
    });
    app.controller("arbitrationController", function () {

        load_js();
    });
    app.controller("practiseAreasController", function () {

        load_js();
    });

    app.controller("litigationController", function () {

        load_js();
    });
    app.controller("commercialCorporateController", function () {

        load_js();
    });

    
    app.controller("realEstateConstructionController", function () {

        load_js();
    });

    app.controller("familyLawController", function () {

        load_js();
    });

    app.controller("criminalLawController", function () {

        load_js();
    });
    
    

    app.controller("home",function($scope){

        load_js();


        $scope.ShowTab = function (tabName) {

            var cardBody = $("#" + tabName)
            var cardHeadId = angular.element(cardBody).attr("aria-labelledby");
            var cardHead = angular.element($('#' + cardHeadId)[0].firstElementChild.firstElementChild);
            var val = cardHead.attr("aria-expanded");

            $(".card-collapse").each(function () {
               
                $(this).collapse('hide');
            });

            $(".card-title").each(function () {
                var temb = angular.element($(this.firstElementChild));
                temb.addClass('collapsed');
                temb.attr("aria-expanded", false);         
            });        

            cardBody.collapse('show');

            if (val == "true") {

                cardHead.addClass('collapsed');
                cardHead.attr("aria-expanded", false);
            }

            if (val == "false") {

                cardHead.removeClass('collapsed');
                cardHead.attr("aria-expanded", true);
            }         
           
        };


    });


}(angular));

function load_js()
{
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.src = 'js/script.js';
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

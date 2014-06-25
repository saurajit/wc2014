'use strict';
var appEx = angular.module('wc2014ChromeEx', ['ngRoute','ui']);

appEx.config(function($routeProvider) {
  $routeProvider
	.when('/', {
      templateUrl: 'templates/game.html', 
      controller: 'gameCtrl'
    })
	.when('/round/:roundId?', {
      templateUrl: 'templates/game.html', 
      controller: 'gameCtrl'
    })
	.when('/round-list', {
      templateUrl: 'templates/roundList.html', 
      controller: 'roundListCtrl'
    })
    .otherwise({redirectTo: '/round/10'});
})
.config( ['$compileProvider', function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);
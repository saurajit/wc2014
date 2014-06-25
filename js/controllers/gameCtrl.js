'use strict';
appEx
	.controller('gameCtrl', ['$scope', '$http', 'footballDb', '$route', '$routeParams',
        function ($scope, $http, footballDb, $route, $routeParams) {
			$scope.event = {};
			$scope.round = {};
			$scope.games = {};

			$scope.roundId = 'today';

			if (angular.isDefined($routeParams.roundId) && $routeParams.roundId !== 'today') {
				$scope.roundId = parseInt($routeParams.roundId, 10);
			}

			$scope.dateOptions = {
				changeYear: false,
				changeMonth: false,
			};

			$scope.loadRounds = function () {
				footballDb.getGames($scope.roundId)
					.success(function (response, status) {
						if (status === 200) {
							$scope.event = response.event;
							$scope.round = response.round;
							$scope.games = response.games;
						}
					});
			};
 }]);
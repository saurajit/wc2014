'use strict';
appEx
	.controller('roundListCtrl', ['$scope', '$http', 'footballDb', '$location',
		function ($scope, $http, footballDb, $location) {
			$scope.event = {};
			$scope.rounds = {};
			$scope.loadRoundList = function () {
				footballDb.getAllRounds()
					.success(function (response, status) {
						if (status === 200) {
							$scope.event = response.event;
							$scope.rounds = response.rounds;
						}
					});
			};

			$scope.viewGame = function (roundId) {
				$location.path('#/round/' + roundId);
			};
	}]);
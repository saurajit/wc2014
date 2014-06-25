appEx
	.factory('footballDb', ['$http', function ($http) {
		var apiBaseUrl = 'http://footballdb.herokuapp.com/api/v1/';
		var eventId = 'world.2014';
		
		return {
			getTeams: function () {
				return $http.get(apiBaseUrl + 'event/' + eventId +'/teams');
			},
			getAllRounds: function () {
				return $http.get(apiBaseUrl + 'event/' + eventId +'/rounds');
			},
			getRounds: function (roundId) {
				if (angular.isUndefined(roundId)) {
					roundId = 'today';
				}
				return $http.get(apiBaseUrl + 'rounds/' + roundId);
			},
			getGames: function (roundId) {
				if (angular.isUndefined(roundId)) {
					roundId = 'today';
				}
				return $http.get(apiBaseUrl + 'event/' + eventId +'/round/' + roundId + '?' + Date.now());
			}
		};
	}]);
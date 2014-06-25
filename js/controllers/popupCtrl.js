'use strict';
appEx
	.controller('popupCtrl', ['$scope', '$location',
		function ($scope, $location) {
			$scope.currentPath = '';
			$scope.menuItems = [
				{
					'url': 'round-list',
					'title': 'All Matches'
				},
				{
					'url': '',
					'title': 'Today\'s Match'
				}
			];

			$scope.$on('$routeChangeSuccess', function () {
				$scope.currentPath = $location.path();
			});

		}]);
import './app.scss';

export const test01 = {
	template: require('./app.html'),
	controller($scope, $http, buttonService) {
		$scope.buttons = [];

		function initialize() {
			buttonService.getData().then(function (response) {
				$scope.buttons = response.data;
			});
		}

		initialize();
	}
};

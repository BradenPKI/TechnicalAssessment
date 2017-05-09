export function windowResizeDirective() {
  angular
    .module('app')
    .directive('ngWindowResize', WindowResize);

  WindowResize.$inject = ['$window', '$rootScope'];
  function WindowResize($window, $rootScope) {
    return {
      restrict: 'CA',
      link: function (scope) {
        angular.element($window).on('resize', function (e) {
          scope.$broadcast('window-resize', {
            'eventTarget': e.target
          });

          $rootScope.$broadcast('window-resize', {
            'eventTarget': e.target
          });
        });
      }
    };
  }
};
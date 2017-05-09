export function buttonResizeDirective() {

  angular
    .module('app')
    .directive('ngAllSameHeight', SameHeight);

  SameHeight.$inject = ['$timeout', '$q'];

  function SameHeight($timeout, $q) {
    return {
      restrict: 'CAD',
      scope: {
        targetEl: '@targetElement'
      },
      link: function (scope, element) {
        var selectedElements;

        scope.height = null;

        $timeout(function () {
          if (!scope.targetEl) {
            // if an element is not defined, it will look for the next available element
            selectedElements = element.children();
          } else {
            selectedElements = angular.element(element).find(scope.targetEl);
          }

          scope.adjustHeight();
        });

        // finds the maximum height of all elements and sets height of all elements to this maximum height
        scope.setMaxHeight = function () {
          return $q(function (resolve) {
            var height = 0;

            for (var i = 0; i < selectedElements.length; i++) {
              var offsetHeight = selectedElements[i].offsetHeight;

              if (height < offsetHeight) {
                height = offsetHeight;
                scope.height = height;
              }
            }
            for (var i = 0; i < selectedElements.length; i++) {
              angular.element(selectedElements[i]).css('height', height + 'px');
            }
            resolve();
          });
        };

        // resets height to auto
        scope.resetHeights = function () {
          return $q(function (resolve) {
            for (var i = 0; i < selectedElements.length; i++) {
              angular.element(selectedElements[i]).css('height', 'auto');
            }
            resolve();
          });
        };

        // checks to see if mobile and applies class and styles
        scope.adjustHeight = function () {
          scope.resetHeights().then(function () {
            scope.setMaxHeight();
          });
        };

        // watches screen resize and re-calculates the height of the elements
        scope.$on('window-resize', function () {
          $timeout(function () {
            scope.adjustHeight();
          });
        });
      }
    }
  };
};
'use strict';

angular.module('app')

.directive('loader', function() {
  return {
    templateUrl: 'app/components/loader/loader.html',
    restrict: 'E',
    replace: true
  };
})

.factory('Loader', function() {
  function Loader () {
    this.state = true;
  }

  Loader.prototype = {
    change: function(loader) {
      this.state = !loader;
    }
  };

  return Loader;
});
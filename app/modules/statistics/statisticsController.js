'use strict';

angular.module('statistics')

.controller('statisticsController', function($scope, entities, Loader, Notification) {
  var loader = new Loader();
  $scope.loader = loader;

  getStatistics();

  $scope.config = {
    title: 'Vehicles',
    tooltips: true,
    labels: false,
    legend: {
      display: true,
      position: 'right'
    }
  };

  function getStatistics() {
    entities.statistics.get().then(function(res) {
      $scope.data = res.data;

      loader.change($scope.loader.state);
    }, function(err){
      Notification.error({message: err.error});
    });
  }
});
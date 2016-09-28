'use strict';

angular.module('statistics', [
  'ui.router',
  'angularCharts'
])

.config(function($stateProvider) {
  $stateProvider
    .state('statistics', {
      url: '/statistics',
      templateUrl: 'app/modules/statistics/statistics.html',
      controller: 'statisticsController'
    })
});
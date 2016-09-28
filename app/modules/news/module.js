'use strict';

angular.module('news', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('news', {
      url: '/news?edit',
      templateUrl: 'app/modules/news/views/news.html',
      controller: 'newsController'
    })
});
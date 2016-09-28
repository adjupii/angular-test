'use strict';

angular.module('article', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('article', {
      url: '/article/:id',
      templateUrl: 'app/modules/article/article.html',
      controller: 'articleController'
    })
});
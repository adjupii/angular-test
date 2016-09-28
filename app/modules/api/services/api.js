'use strict';

angular.module('api')

.factory('api', function($resource) {
  return {
    news: function(params) {
      return $resource('assets/mocks/news.json', params, {
        getNews: {method: 'GET'},
        saveNews: {method: 'GET'}
      })
    },
    company: function(params) {
      return $resource('assets/mocks/company.json', params, {
        getCompany: {method: 'GET'},
        saveCompany: {method: 'GET'}
      })
    },
    article: function(params) {
      return $resource('assets/mocks/article.json', params, {
        getArticle: {method: 'GET'},
        saveArticle: {method: 'GET'}
      })
    },
    statistics: function(params) {
      return $resource('assets/mocks/statistics.json', params, {
        getStatistics: {method: 'GET'}
      })
    },
    feedback: function(params) {
      return $resource('assets/mocks/feedback.json', params, {
        sendFeedback: {method: 'GET'}
      })
    }
  }
});
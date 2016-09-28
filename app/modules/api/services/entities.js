'use strict';

angular.module('api')

.factory('entities', function(api, $q) {
  function wrappedPromise($q, callback) {
    var deferred = $q.defer();

    setTimeout(function() {
      callback(deferred);
    }, 1000);

    return deferred.promise;
  }

  return {
    news: {
      get: function() {
        return wrappedPromise($q, function(deferred) {
          api.news().getNews().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      },
      save: function(params) {
        return wrappedPromise($q, function(deferred) {
          api.news(params).saveNews().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      }
    },
    company: {
      get: function() {
        return wrappedPromise($q, function(deferred) {
          api.company().getCompany().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      },
      save: function(params) {
        return wrappedPromise($q, function(deferred) {
          api.company(params).saveCompany().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      }
    },
    article: {
      get: function(params) {
        return wrappedPromise($q, function(deferred) {
          api.article(params).getArticle().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      },
      save: function(params) {
        return wrappedPromise($q, function(deferred) {
          api.article(params).saveArticle().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      }
    },
    statistics: {
      get: function(params) {
        return wrappedPromise($q, function(deferred) {
          api.statistics(params).getStatistics().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      }
    },
    feedback: {
      send: function(params) {
        return wrappedPromise($q, function(deferred) {
          api.feedback(params).sendFeedback().$promise.then(function(res) {
            deferred.resolve(res);
          }, function(err) {
            deferred.reject(err);
          });
        });
      }
    }
  }
});
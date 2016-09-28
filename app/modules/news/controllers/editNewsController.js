'use strict';

angular.module('news')

.controller('editNewsController', function($uibModalInstance, newsInfo, entities) {
  var $editNews = this;

  $editNews.newsInfo = angular.copy(newsInfo);

  $editNews.ok = function(newsInfo) {
    $uibModalInstance.close(newsInfo);
  };

  $editNews.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});

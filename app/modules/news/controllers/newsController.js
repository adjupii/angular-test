'use strict';

angular.module('news')

.controller('newsController', function($scope, $state, entities, $uibModal, Loader, Notification) {
  var loader = new Loader();
  $scope.loader = loader;

  getNews();

  $scope.editable = $state.params.edit;

  if ($scope.editable) {
    $scope.loaderNews = {};

    $scope.edit = function(newsInfo) {
      var modalInstance = $uibModal.open({
        templateUrl: 'app/modules/news/views/editNews.html',
        controller: 'editNewsController',
        controllerAs: '$editNews',
        resolve: {
          newsInfo: function () {
            return newsInfo;
          }
        }
      });

      modalInstance.result.then(function(newsInfo) {
        saveNews(newsInfo);
      });
    };
  }

  function getNews() {
    entities.news.get().then(function(res) {
      $scope.news = res.objects;

      loader.change($scope.loader.state);
    }, function(err){
      Notification.error({message: err.error});
    });
  }

  function saveNews(newsInfo) {
    var loader = new Loader();
    $scope.loaderNews[newsInfo.id] = loader;

    return entities.news.save(newsInfo).then(function(res) {
      $scope.news = reRenderNews($scope.news, newsInfo); // must be 'res' instead 'newsInfo' for real project

      loader.change($scope.loaderNews[newsInfo.id].state);
    }, function(err){
      Notification.error({message: err.error});
    });
  }

  function reRenderNews(news, newsInfo) {
    var index = _.findIndex(news, {id: newsInfo.id}),
        newsCopy = angular.copy(news);

    newsCopy.splice(index, 1, newsInfo);

    return newsCopy;
  }
});
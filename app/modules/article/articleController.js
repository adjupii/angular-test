'use strict';

angular.module('article')

.controller('articleController', function($scope, $state, entities, Loader, Notification) {
  var loader = new Loader();
  $scope.loader = loader;

  getArticle($state.params.id);

  $scope.saveArticle = saveArticle;

  function getArticle(id) {
    entities.article.get({id: id}).then(function(res) {
      $scope.article = res.data;

      loader.change($scope.loader.state);
    }, function(err){
      Notification.error({message: err.error});
    });
  }

  function saveArticle(article) {
    var loader = new Loader();
    $scope.loaderSave = loader;

    entities.article.save(article).then(function(res) {
      $scope.article = article;

      loader.change($scope.loaderSave.state);
    }, function(err){
      Notification.error({message: err.error});
    });
  }
});
'use strict';

angular.module('contacts')

.controller('contactsController', function($scope, entities, Loader, Notification) {
  $scope.feedback = {
    title: '',
    author: '',
    message: ''
  };

  $scope.sendFeedback = sendFeedback;

  function sendFeedback(data) {
    var loader = new Loader();
    $scope.loader = loader;

    entities.feedback.send(data).then(function(res) {
      loader.change($scope.loader.state);

      Notification.success({message: 'Your data send successful'});
    }, function(err){
      Notification.error({message: err.error});
    });
  }
});
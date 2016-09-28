'use strict';

angular.module('company')

.controller('companyController', function($scope, $state, entities, Loader, Notification) {
  var loader = new Loader();
  $scope.loader = loader;

  getCompany();

  $scope.editable = $state.params.edit;

  if ($scope.editable) {
    $scope.loaderField = {};
    $scope.opened = {};

    $scope.open = function($event, elementOpened) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened[elementOpened] = !$scope.opened[elementOpened];
    };

    $scope.updateField = updateField;
  }

  function getCompany() {
    entities.company.get().then(function(res) {
      $scope.company = res.data;

      loader.change($scope.loader.state);
    }, function(err){
      Notification.error({message: err.error});
    });
  }

  function updateField(data) {
    var loader = new Loader();
    $scope.loaderField[data.field] = loader;

    return entities.company.save(data).then(function(res) {
      loader.change($scope.loaderField[data.field].state);
    }, function(err){
      Notification.error({message: err.error});
    });
  }
});
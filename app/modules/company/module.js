'use strict';

angular.module('company', [
  'ui.router',
  'xeditable'
])

.config(function($stateProvider) {
  $stateProvider
    .state('company', {
      url: '/company?edit',
      templateUrl: 'app/modules/company/company.html',
      controller: 'companyController'
    })
})

.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});
'use strict';

angular.module('contacts', ['ui.router'])

.config(function($stateProvider) {
  $stateProvider
    .state('contacts', {
      url: '/contacts',
      templateUrl: 'app/modules/contacts/contacts.html',
      controller: 'contactsController'
    })
});
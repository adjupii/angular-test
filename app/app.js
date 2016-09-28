'use strict';

angular.module('app', [
  'api',
  'company',
  'news',
  'article',
  'contacts',
  'statistics',

  'ui.bootstrap',
  'ui-notification'
])

.config(function(NotificationProvider) {
  NotificationProvider.setOptions({
    positionY: 'top',
    positionX: 'center',
    delay: 5000
  });
});
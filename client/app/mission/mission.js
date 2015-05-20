'use strict';

angular.module('tl2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mission', {
        url: '/mission',
        templateUrl: 'app/mission/mission.html',
        controller: 'MissionCtrl'
      });
  });
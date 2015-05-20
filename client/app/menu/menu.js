'use strict';

angular.module('tl2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });
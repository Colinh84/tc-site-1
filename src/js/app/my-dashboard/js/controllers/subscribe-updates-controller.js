/**
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 * @author vikas.agarwal@appirio.com
 * @version 1.0
 *
 * Controller for subscribe for updates widget
 */
(function () {

  /**
   * Create my dashboard controller
   */
  angular
    .module('myDashboard')
    .controller('SubscribeUpdatesCtrl', SubscribeUpdatesCtrl);

  /**
   * Inject dependencies
   * @type {string[]}
   */
  SubscribeUpdatesCtrl.$inject = ['$scope', '$http', '$location', 'AuthService'];

  /**
   * Controller implementation
   *
   * @param $scope
   * @constructor
   */
  function SubscribeUpdatesCtrl($scope, $http, $location, AuthService) {
    var vm = this;
    vm.title = "Subscribe to Updates";
    vm.loggedIn = AuthService.validate();
    vm.frm = {};
    vm.email = null;
    // as of now not able to bind the url to view, so it is hard coded in view too
    vm.feedBlitzUrl = 'https://www.feedblitz.com/f/f.fbz?AddNewUserDirect';
    vm.feedBlitzFormName = 'FeedBlitz_0fd529537e2d11e392f6002590771251';
    vm.feedBlitzPublisher = 34610190;
    vm.feedBlitzFeedId = 926643;
    vm.subscribe = subscribe;

    // activate controller
    activate();

    function activate() {
      // nothing to do yet
    }

    function subscribe() {
      vm.frm = {};
      if (!vm.email || vm.email.trim().length === 0) {
        vm.frm.email = {error : true};
        $scope.$apply();
        return false;
      }
      $scope.$apply();
      return true;
    }

  }


})();
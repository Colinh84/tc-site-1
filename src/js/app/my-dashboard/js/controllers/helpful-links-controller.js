/**
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 * @author mdesiderio
 * @version 1.0
 *
 * Controller for the helpful links widget
 */
 (function () {

  /**
   * Create helpful links controller
   */
  angular
    .module('myDashboard')
    .controller('HelpfulLinksCtrl', HelpfulLinksCtrl);

  /**
   * Inject dependencies
   * @type {string[]}
   */
  HelpfulLinksCtrl.$inject = ['$scope'];

  /**
   * Helpful links controller implementation
   *
   * @param $scope
   * @constructor
   */
  function HelpfulLinksCtrl($scope) {
    var vm = this;
    // widget heading
    this.message = "Helpful Links";
    
    //activate controller
    activate();

    function activate() {
      // nothing to do yet
    }
  }


})();
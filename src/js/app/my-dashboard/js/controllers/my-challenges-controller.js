/**
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 * @author mdesiderio
 * @version 1.0
 *
 * Controller for the my challenges widget
 */
(function () {

  /**
   * Create my challenges controller
   */
  angular
    .module('myDashboard')
    .controller('MyChallengesCtrl', MyChallengesCtrl);

  /**
   * Inject dependencies
   * @type {string[]}
   */
  MyChallengesCtrl.$inject = ['$scope', 'AuthService','ChallengeService'];

  /**
   * Controller implementation
   *
   * @param $scope
   * @param ChallengeService services to access the challenges api
   * @constructor
   */
  function MyChallengesCtrl($scope, AuthService, ChallengeService) {
    var vm = this;
    vm.loading = true;
    vm.pageIndex = 1;
    vm.pageSize = 5;
    vm.sortColumn = 'submissionEndDate';
    vm.sortOrder = 'desc';
    vm.totalPages = 1;
    vm.totalRecords = vm.totalPages * vm.pageSize;
    vm.firstRecordIndex = (vm.pageIndex - 1) * vm.pageSize + 1;
    vm.lastRecordIndex = vm.totalPages * vm.pageSize;
    vm.pageLinks = [];
    vm.prevPageLink = {};
    vm.nextPageLink = {};
    vm.changePage = changePage;
    vm.isCurrentPage = isCurrentPage;
    vm.getCurrentPageClass = getCurrentPageClass;
    vm.sort = sort;

    // activate controller
    if (AuthService.isLoggedIn === true) {
      activate();
    } else {
      return false;
    }

    function activate() {
      initPaging();
      var searchRequest = {
        pageIndex: vm.pageIndex,
        pageSize: vm.pageSize,
        sortColumn: vm.sortColumn,
        sortOrder: vm.sortOrder
      };
      // show loading icon
      vm.loading = true;
      // Fetch my active
      return ChallengeService.getMyActiveChallenges(searchRequest)
        .then(function(data) {
          if (data.pagination) {
            vm.totalPages = Math.ceil(data.pagination.total / vm.pageSize);
            vm.totalRecords = data.pagination.total;
            vm.firstRecordIndex = (vm.pageIndex - 1) * vm.pageSize + 1;
            vm.lastRecordIndex = vm.pageIndex * vm.pageSize;
            vm.lastRecordIndex = vm.lastRecordIndex > vm.totalRecords ? vm.totalRecords : vm.lastRecordIndex;
          }
          vm.myChallenges = data;
          // stop loading icon
          vm.loading = false;

      });
    }

    function changePage(pageLink) {
      vm.pageIndex = pageLink.val;
      activate();
    }

    function isCurrentPage (pageLink) {
      return pageLink.val === vm.pageIndex;
    }

    function getCurrentPageClass(pageLink) {
      return isCurrentPage(pageLink) ? 'current-page' : '';
    }

    function sort(column) {
      if (vm.sortColumn === column) {
        vm.sortOrder = vm.sortOrder === 'desc' ? 'asc' : 'desc';
      } else {
        vm.sortOrder = 'desc';
      }
      vm.sortColumn = column;
      activate();
    }

    function initPaging() {
      vm.pageLinks = [
        {text: "Prev", val: vm.pageIndex - 1},
        {text: "Next", val: vm.pageIndex + 1}
      ];
      vm.prevPageLink = {text: "Prev", val: vm.pageIndex - 1};
      vm.nextPageLink = {text: "Next", val: vm.pageIndex + 1};
    }
  }


})();
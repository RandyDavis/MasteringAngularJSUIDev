angular.module('app.core')
    .controller('SearchController', SearchController);

SearchController.$inject = ['ShowService', '$timeout', 'StoreFactory'];

function SearchController (ShowService, $timeout, StoreFactory) {
    var vm = this;

    vm.results = false;
    vm.searching = false;
    vm.query = query;
    vm.typeahead = typeahead;
    vm.currentPage = 1;
    vm.totalResults = 0;


    function query (query) {
        vm.searching = true;
        ShowService.search(query, vm.currentPage).then(function (response) {
            vm.results = response.results;
            vm.totalResults = response.total_results;
            $timeout(function () {
                vm.searching = false;
            }, 500);
        });
    }

    function typeahead (query) {
        return ShowService.search(query, 1).then(function (response) {
            return response.results.map(function (show) {
                return show.name;
            });
        });
    }
}
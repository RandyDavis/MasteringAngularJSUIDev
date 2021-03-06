angular.module('app.core')
    .controller('SearchController', SearchController);

SearchController.$inject = ['ShowService', '$timeout', 'StoreFactory'];

function SearchController (ShowService, $timeout, StoreFactory) {
    var vm = this;

    vm.results = false;
    vm.searching = false;
    vm.query = query;

    function query (query) {
        vm.searching = true;
        ShowService.search(query).then(function (response) {
            vm.results = response;
            $timeout(function () {
                vm.searching = false;
            }, 500);
        }).catch(function (error) {

        });
    };


}
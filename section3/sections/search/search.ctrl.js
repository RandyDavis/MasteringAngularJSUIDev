angular.module('app.core')
    .controller('SearchController', SearchController);

SearchController.$inject = ['ShowService', '$timeout', 'StoreFactory'];

function SearchController (ShowService, $timeout, StoreFactory) {
    var vm = this;

    vm.results = false;
    vm.searching = false;
    vm.query = query;
    vm.trackShow = trackShow;
    vm.unTrackShow = unTrackShow;
    vm.hasShow = hasShow;


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

    function trackShow (show) {
        StoreFactory.addShow(show);
    };

    function unTrackShow (id) {
        StoreFactory.removeShow(id);
    };

    function hasShow (id) {
        return (StoreFactory.getShow(id) !== false);
    };
}
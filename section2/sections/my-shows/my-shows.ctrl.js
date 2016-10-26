angular.module('app.core')
    .controller('MyShowsController', MyShowsController);

MyShowsController.$inject = ['StoreFactory'];

function MyShowsController(StoreFactory) {
    var vm = this;

    vm.results = StoreFactory.getShows();
    vm.unTrackShow = unTrackShow;

    function unTrackShow (id) {
        StoreFactory.removeShow(id);
    }
}
angular.module('app.core')
    .controller('SearchController', SearchController);

SearchController.$inject = ['ShowService'];

function SearchController (ShowService) {
    var vm = this;

    vm.query = query;



    function query (query) {
        ShowService.search(query).then(function (response) {
            console.log(response);
        }).catch(function (error) {

        });
    };


    vm.query("Game of Thrones");
}
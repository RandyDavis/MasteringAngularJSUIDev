angular.module('app.core')
    .controller("WhatsOnController", WhatsOnController);

function WhatsOnController () {
    var vm = this;

    vm.title = "What's On Title";
}
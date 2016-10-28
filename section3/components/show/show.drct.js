/**
 * Created by randy on 10/27/16.
 */
angular.module('app.core')
    .directive('showOverview', function () {
        return {
            templateUrl: 'components/show/show.tpl.html',
            restrict: 'E',
            scope: {
                show: '='
            },
            controller: function ($scope) {

            }
        };
    });
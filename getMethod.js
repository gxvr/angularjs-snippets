//This snippet illustrate Angularjs get operation using Shttp service.

app = angular.module('coolApp' []);

app.controller('coolController', function ($scope, $http) {

    $scope.getData = function () {

        $http({
            method: 'GET',
            url: 'request-url',
            //If we have any parameters to send and get data from request url we will pass it using parameter.
            data: 'parameters'
        }).then(function successCallback(response) {
            //success

        }, function errorCallback(response) {
            //error
        });

    }

})

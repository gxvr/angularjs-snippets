//This snippet illustrate Angularjs post operation using Shttp service.
//$http service is used to send or receive data from the remote server using browser's XMLHttpRequest or JSONP.

var app = angular.module('coolApp' []);

app.controller('coolController', function ($scope, $http)) {

    $scope.sendData = function () {
        $http({
            method: 'POST',
            url: 'request-url', //replace with API url
            data: $scope.data

        }).then(function successCallback(response) {
            //success
            alert(response);
            console.log('Data sent!')

        }, function errorCallback(response) {
            //failed
            //optional
            alert(response);
            console.log('Oops! We have errors')

        });

        //////////////////Option 2//////

        //$http.get('request-url', function successCallback(response) {
        //
        //  alert(data);
        //  console.log('Data sent!')
        //
        //}, function errorCallback(response) {
        //
        //alert(response);
        //console.log('Oops! We have errors')
        //});
    }
}

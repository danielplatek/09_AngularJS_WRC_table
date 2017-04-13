'use strict';

var app = angular.module( 'application', [] );
var urlJson = 'http://localhost:3000/drivers/';     //Local json server

app.controller( 'tableController', [ '$scope', '$filter','$http', function( $scope, $filter, $http ) {

    // Sort by POS column on load
    $scope.sortGetData = function(){
        $scope.sortGet = 'Pos';
    };

    // Simple GET request
    $scope.jsonLoad = function (){
        $http.get(urlJson)
          .then(function(drivers) {
              $scope.drivers = drivers.data;
              console.log('json - ok');
              $scope.sortGetData();
          });
    };

    $scope.jsonLoad();


    //Sort by selected column
    $scope.sortBy = function( sort ) {
        if ($scope.mySortBy == sort){
            $scope.mySortBy = '-' + sort;  // reverse sort
        }else{
            $scope.mySortBy = sort;
        }
    };

    //Function adding the result of the new driver
    $scope.addDriver = function(){

        var dataObj = {
            Pos : $scope.posDriver,
            Car_No : $scope.carnoDriver,
            Driver : $scope.nameDriver,
            Team : $scope.teamDriver,
            Time : $scope.timeDriver,
            Diff_1st : $scope.diff1stDriver
        };

        $http({
            method: 'POST',
            url: urlJson,
            data: JSON.stringify(dataObj),
            contentType:"application/json; charset=utf-8",
            dataType:"json",

        }).then(function successCallback(response) {
            $scope.drivers.splice( 0, 0, {
                Pos : $scope.posDriver,
                Car_No : $scope.carnoDriver,
                Driver : $scope.nameDriver,
                Team : $scope.teamDriver,
                Time : $scope.timeDriver,
                Diff_1st : $scope.diff1stDriver,
            });

            $scope.jsonLoad();

            console.log(response);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });
    };


    //Function to remove the result of the driver
    $scope.delDriver = function( $index ){
        $http({
            method: 'DELETE',
            url: urlJson + $scope.drivers[$index].id,
        })
        .then(function(response) {

            console.log($scope.drivers[$index]);
            $scope.drivers.splice( $index, 1 ); //Remove one item

        }, function(rejection) {
            console.log(rejection.data);
            console.log('nie działa del');
        });
    };


    $scope.edit = false;
}]);
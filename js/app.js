'use strict';

var app = angular.module( 'application', [] );

app.controller( 'tableController', [ '$scope', '$filter', function($scope) {

    $scope.sortBy = function( sort ) {
        if ($scope.mySortBy == sort){
            $scope.mySortBy = '-' + x;  // reverse sort
        }else{
            $scope.mySortBy = sort;
        }
    };

    $scope.addDriver = function(){
        $scope.drivers.splice( 0, 0, { Pos : $scope.posDriver, Car_No : $scope.carnoDriver, Driver : $scope.nameDriver, Team : $scope.teamDriver, Time : $scope.timeDriver, Diff_1st : $scope.diff1stDriver });  //index 0 (doda na początek tabeli)
    };

    $scope.edit = false;

    $scope.delDriver = function( $index ){

        console.log($scope.drivers[$index]);
        $scope.drivers.splice( $index, 1 );  // usuwa jeden element // $index - odwołanie do, którego elementu, drugi parametr - ile elementów, trzeci, czy ma dodać elementy
    };


    // ==============    Only for tests  ===================
    $scope.drivers =
        [
            {
                "Pos": 1,
                "Car_No": 1,
                "Driver": "S. OGIER",
                "Co_driver": "J. INGRASSIA",
                "Team": "M-Sport World Rally Team",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:00:03.6",
                "Diff_Prev": "",
                "Diff_1st": "+0:00.0"
            },
            {
                "Pos": 2,
                "Car_No": 10,
                "Driver": "J. LATVALA",
                "Co_driver": "M. ANTTILA",
                "Team": "Toyota Gazoo Racing Wrc",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:02:18.6",
                "Diff_Prev": "+2:15.0",
                "Diff_1st": "+2:15.0"
            },
            {
                "Pos": 3,
                "Car_No": 2,
                "Driver": "O. TANAK",
                "Co_driver": "M. JARVEOJA",
                "Team": "M-Sport World Rally Team",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:03:01.4",
                "Diff_Prev": "+42.8",
                "Diff_1st": "+2:57.8"
            },
            {
                "Pos": 4,
                "Car_No": 6,
                "Driver": "D. SORDO",
                "Co_driver": "M. MARTI",
                "Team": "Hyundai Motorsport",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:03:39.4",
                "Diff_Prev": "+38.0",
                "Diff_1st": "+3:35.8"
            },
            {
                "Pos": 5,
                "Car_No": 14,
                "Driver": "C. BREEN",
                "Co_driver": "S. MARTIN",
                "Team": "Citroen Total Abu Dhabi Wrt",
                "Eligibility": "",
                "Group_Class": "RC1",
                "Time": "4:03:51.4",
                "Diff_Prev": "+12.0",
                "Diff_1st": "+3:47.8"
            },
            {
                "Pos": 6,
                "Car_No": 3,
                "Driver": "E. EVANS",
                "Co_driver": "D. BARRITT",
                "Team": "M-Sport World Rally Team",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:06:48.6",
                "Diff_Prev": "+2:57.2",
                "Diff_1st": "+6:45.0"
            },
            {
                "Pos": 7,
                "Car_No": 31,
                "Driver": "A. MIKKELSEN",
                "Co_driver": "A. JAEGER SYNNEVAAG",
                "Team": "Skoda Motorsport",
                "Eligibility": "WRC2",
                "Group_Class": "RC2",
                "Time": "4:09:36.3",
                "Diff_Prev": "+2:47.7",
                "Diff_1st": "+9:32.7"
            },
            {
                "Pos": 8,
                "Car_No": 32,
                "Driver": "J. KOPECKY",
                "Co_driver": "P. DRESLER",
                "Team": "Skoda Motorsport",
                "Eligibility": "WRC2",
                "Group_Class": "RC2",
                "Time": "4:13:01.7",
                "Diff_Prev": "+3:25.4",
                "Diff_1st": "+12:58.1"
            },
            {
                "Pos": 9,
                "Car_No": 8,
                "Driver": "S. LEFEBVRE",
                "Co_driver": "G. MOREAU",
                "Team": "Citroen Total Abu Dhabi Wrt",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:14:47.4",
                "Diff_Prev": "+1:45.7",
                "Diff_1st": "+14:43.8"
            },
            {
                "Pos": 10,
                "Car_No": 40,
                "Driver": "B. BOUFFIER",
                "Co_driver": "D. GIRAUDET",
                "Team": "Gemini Clinic Rally Team",
                "Eligibility": "WRC2",
                "Group_Class": "RC2",
                "Time": "4:16:13.0",
                "Diff_Prev": "+1:25.6",
                "Diff_1st": "+16:09.4"
            },
            {
                "Pos": 11,
                "Car_No": 76,
                "Driver": "P. TIDEMAND",
                "Co_driver": "J. ANDERSSON",
                "Team": "Skoda Motorsport II",
                "Eligibility": "",
                "Group_Class": "RC2",
                "Time": "4:16:20.0",
                "Diff_Prev": "+7.0",
                "Diff_1st": "+16:16.4"
            },
            {
                "Pos": 12,
                "Car_No": 39,
                "Driver": "E. CAMILLI",
                "Co_driver": "B. VEILLAS",
                "Team": "M-Sport World Rally Team",
                "Eligibility": "WRC2",
                "Group_Class": "RC2",
                "Time": "4:19:32.1",
                "Diff_Prev": "+3:12.1",
                "Diff_1st": "+19:28.5"
            },
            {
                "Pos": 13,
                "Car_No": 35,
                "Driver": "Q. GILBERT",
                "Co_driver": "R. JAMOUL",
                "Team": "Gilbert Quentin",
                "Eligibility": "WRC2",
                "Group_Class": "RC2",
                "Time": "4:21:13.1",
                "Diff_Prev": "+1:41.0",
                "Diff_1st": "+21:09.5"
            },
            {
                "Pos": 14,
                "Car_No": 78,
                "Driver": "O. BURRI",
                "Co_driver": "S. REY",
                "Team": "Burri Olivier",
                "Eligibility": "",
                "Group_Class": "RC2",
                "Time": "4:27:19.6",
                "Diff_Prev": "+6:06.5",
                "Diff_1st": "+27:16.0"
            },
            {
                "Pos": 15,
                "Car_No": 5,
                "Driver": "T. NEUVILLE",
                "Co_driver": "N. GILSOUL",
                "Team": "Hyundai Motorsport",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:30:56.1",
                "Diff_Prev": "+3:36.5",
                "Diff_1st": "+30:52.5"
            },
            {
                "Pos": 16,
                "Car_No": 11,
                "Driver": "J. HANNINEN",
                "Co_driver": "K. LINDSTROM",
                "Team": "Toyota Gazoo Racing Wrc",
                "Eligibility": "M",
                "Group_Class": "RC1",
                "Time": "4:32:20.4",
                "Diff_Prev": "+1:24.3",
                "Diff_1st": "+32:16.8"
            },
            {
                "Pos": 17,
                "Car_No": 38,
                "Driver": "E. BERGKVIST",
                "Co_driver": "J. SJOBERG",
                "Team": "Bergkvist Emil",
                "Eligibility": "WRC2",
                "Group_Class": "RC2",
                "Time": "4:36:48.1",
                "Diff_Prev": "+4:27.7",
                "Diff_1st": "+36:44.5"
            },
            {
                "Pos": 18,
                "Car_No": 42,
                "Driver": "A. CRUGNOLA",
                "Co_driver": "M. FERRARA",
                "Team": "Crugnola Andrea",
                "Eligibility": "WRC2",
                "Group_Class": "RC2",
                "Time": "4:39:47.1",
                "Diff_Prev": "+2:59.0",
                "Diff_1st": "+39:43.5"
            },
            {
                "Pos": 19,
                "Car_No": 71,
                "Driver": "R. ASTIER",
                "Co_driver": "F. VAUCLARE",
                "Team": "Astier Raphael",
                "Eligibility": "WRC3",
                "Group_Class": "RC4",
                "Time": "4:39:55.8",
                "Diff_Prev": "+8.7",
                "Diff_1st": "+39:52.2"
            }
        ]
}]);
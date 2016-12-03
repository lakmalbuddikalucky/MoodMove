'use strict'

var MoodMove = angular.module('MoodMove', ['ngRoute', 'ngResource']);

MoodMove.controller('AppController', ['$scope', function($scope) {
    $scope.selectedHour;

    $scope.textHour = "hours"

    $scope.changeHour = function(selectedHour) {
        if (selectedHour == "1") {
            $scope.textHour = "hour";
        } else {
            $scope.textHour = "hours";
        }
    }

    $scope.hourList = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9"
    };

    $scope.goToItenary = function() {
        window.location.href = "./itenary.html"
    }

}]);
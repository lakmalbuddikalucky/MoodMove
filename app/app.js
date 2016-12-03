(function() {
    angular.module('MoodMove')
        .controller('AppController', ['$scope', '$http', '$state', function($scope, $http, $state) {
            $scope.sampleData = "";
            $scope.logUserIn = function() {
                $http.post('api/user/login', $scope.sampleData)
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(fallback) {
                        //console.log(fallback);
                    })
            }
        }])
}());
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter) {
        $scope.items = "";
        $scope.message = "";

        $scope.checkItems = function () {
            if ($scope.items === ""){
                $scope.message = "Please enter data first";
            } else {
                var arrOfItems = $scope.items.split(",");
                var cleanedArray = arrOfItems.filter(item => item.trim());
                if (cleanedArray.length){
                    if (cleanedArray.length <= 3){
                        $scope.message = "Enjoy!"
                    } else {
                        $scope.message = "Too much!";
                    }
                } else {
                    $scope.message = "Please enter data first";
                }
            }
        };
    }

})();

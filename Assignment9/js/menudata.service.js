(function () {

    angular.module('data').service('menuDataService', MenuDataService);

    MenuDataService.$inject = ['$http'];

    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                url: "https://davids-restaurant.herokuapp.com/categories.json",
                responseType: "json"
            }).then(function (response) {
                let categories = response.data;
                return categories;
            });
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json",
                params: {category: categoryShortName},
                responseType: "json"
            }).then(function (response) {
                let items = response.data
                return items;
            });
        };
    };

})(window);

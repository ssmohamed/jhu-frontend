(function () {

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories.html',
                controller: 'categoryController as controller',
                resolve: {
                    categories: ['menuDataService', function (menuDataService) {
                        return menuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{categoryShortName}',
                templateUrl: 'templates/items.html',
                controller: 'itemController as controller',
                resolve: {
                    items: ['$stateParams', 'menuDataService', function ($stateParams, menuDataService) {
                        return menuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            })
    }

})(window);

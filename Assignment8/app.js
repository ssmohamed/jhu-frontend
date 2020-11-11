(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)

    function FoundItemsDirective() {
        const ddo = {
            scope: {
                found: '<',
                onRemove: '&',
            },
            templateUrl: 'foundItems.html',
            bindToController: true,
            controller: NarrowItDownController,
            controllerAs: 'listToSearch'
        };
        return ddo;
    }

    function MenuSearchService($http) {
        const service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function (result) {
                // process result and only keep items that match
                const foundItems = [];
                if (searchTerm !== '') {
                    const menuItems = result.data.menu_items;
                    menuItems.forEach(element => {
                        if (element.description.indexOf(searchTerm.toLowerCase()) >= 0){
                            foundItems.push(element);
                        }
                        return false;
                    })
                }
                // return processed items
                return foundItems;
            }).catch(function (e) {
                console.log("items could not be processed", e);
                throw e;
            });
        }
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        const narrowItDown = this;
        narrowItDown.searchTerm = '';

        narrowItDown.search = function () {
            MenuSearchService.getMatchedMenuItems(narrowItDown.searchTerm).then(function (response) {
                narrowItDown.found = response;
            })
        }

        narrowItDown.removeItem = function (index) {
            narrowItDown.found.splice(index, 1);
        };
    }


})();

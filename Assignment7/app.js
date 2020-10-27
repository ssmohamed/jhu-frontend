(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('TotalPrice', TotalPriceFilter)

    function TotalPriceFilter() {
        return function (pricePerItem, quantity) {
            const totalPrice = quantity * pricePerItem;
            return '$$$' + totalPrice.toFixed(2);
        };
    }

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        const ListToBuy = this;
        ListToBuy.items = ShoppingListCheckOffService.getItems();
        ListToBuy.removeItem = function (itemIndex) {
            ShoppingListCheckOffService.removeItem(itemIndex);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        const PurchasedList = this;
        PurchasedList.items = ShoppingListCheckOffService.getPurchasedItems();
    }

    function ShoppingListCheckOffService() {
        const service = this;

        const arroItemsToBuy = [
            {
                name: "Milk",
                quantity: 5,
                pricePerItem: 2.99
            },
            {
                name: "Eggs",
                quantity: 12,
                pricePerItem: 3.25
            },
            {
                name: "Yogurt",
                quantity: 3,
                pricePerItem: 4.00
            },
            {
                name: "Sugar",
                quantity: 1,
                pricePerItem: 2.00
            },
            {
                name: "Coffee",
                quantity: 1,
                pricePerItem: 15.00
            },
            {
                name: "Donuts",
                quantity: 12,
                pricePerItem: 14.00
            }
        ];

        const arroItemsPurchased = [];

        service.getItems = function () {
            return arroItemsToBuy;
        }

        service.removeItem = function (itemIndex) {
            const removedItem = arroItemsToBuy.splice(itemIndex, 1);
            arroItemsPurchased.push(removedItem[0]);
        }

        service.getPurchasedItems = function () {
            return arroItemsPurchased;
        }
    }
})();

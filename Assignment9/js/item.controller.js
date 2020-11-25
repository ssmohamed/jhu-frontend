(function () {

    angular.module('MenuApp').controller('itemController', itemController);

    itemController.$inject = ['items'];

    function itemController(items) {
        let controller = this;
        controller.category = items.category || {};
        controller.items = items.menu_items || [];
    }

})(window);

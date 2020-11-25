(function () {

    angular.module('MenuApp').component('items', {
        templateUrl: 'templates/item.html',
        bindings: {
            items: '<'
        }
    });

})(window);

(function () {
    angular.module('MenuApp').component('categories', {

        templateUrl: 'templates/category.html',
        bindings: {
            items: '<'
        }
    });

})(window);

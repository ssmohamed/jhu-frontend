(function () {
    angular.module('MenuApp').controller('categoryController', categoryController);

    categoryController.$inject = ['categories'];
    function categoryController(categories) {
        let controller = this;
        controller.categories = categories || [];
    }

})(window);

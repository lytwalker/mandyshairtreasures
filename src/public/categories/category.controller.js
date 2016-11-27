(function () {
    "use strict";

    angular.module('public')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['categories'];
    function CategoryController(categories) {
        var $ctrl = this;
        $ctrl.categories = categories;
    }


})();
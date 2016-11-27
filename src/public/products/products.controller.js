(function () {
    "use strict";

    angular.module('public')
        .controller('ProductController', ProductController);

    ProductController.$inject = ['products'];
    function ProductController(products) {
        var $ctrl = this;
        $ctrl.products = products;
    }


})();
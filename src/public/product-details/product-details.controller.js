(function () {
    "use strict";

    angular.module('public')
        .controller('ProductDetailsController', ProductDetailsController);

    ProductDetailsController.$inject = ['productDetails'];
    function ProductDetailsController(productDetails) {
        var $ctrl = this;
        $ctrl.productDetails = productDetails;
    }

})();
(function () {
    "use strict";

    angular.module('public')
        .component('productsListItem', {
            templateUrl: 'src/public/products-list-item/products-list-item.html',
            bindings: {
                item: '<'
            }
        });


})();
(function () {
    "use strict";

    angular.module('public')
        .component('categoriesListItem', {
            templateUrl: 'src/public/categories-list-item/categories-list-item.html',
            bindings: {
                item: '<'
            }
        });


})();
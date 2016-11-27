(function () {
    "use strict";

    angular.module('public')
        .component('articlesListItem', {
            templateUrl: 'src/public/articles-list-item/articles-list-item.html',
            bindings: {
                item: '<'
            }
        });


})();
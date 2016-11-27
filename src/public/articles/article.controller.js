(function () {
    "use strict";

    angular.module('public')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['articleList'];
    function ArticleController(articleList) {
        var $ctrl = this;
        $ctrl.articleList = articleList;
    }


})();
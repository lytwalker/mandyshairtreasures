(function () {
    "use strict";

    angular.module('public')
        .controller('ArticleDetailsController', ArticleDetailsController);

    ArticleDetailsController.$inject = ['articleDetails'];
    function ArticleDetailsController(articleDetails) {
        var $ctrl = this;
        $ctrl.articleDetails = articleDetails;
        $ctrl.articleDetails.created_at = Date.parse($ctrl.articleDetails.created_at);
    }

})();
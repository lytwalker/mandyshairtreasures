(function () {
    "use strict";

    angular.module('common')
        .service('ArticleService', ArticleService);


    ArticleService.$inject = ['$http', 'ApiPath'];
    function ArticleService($http, ApiPath) {
        var service = this;

        service.getArticles = function () {
            return $http.get(ApiPath + '/articles.json').then(function (response) {
                //console.log("articles list data: ", response.data);
                return response.data;
            });
        };


        service.getArticleDetails = function (article) { 
            var articleUrl = "";
            if (article) {
              articleUrl = "/" + article;
            }            

            return $http.get(ApiPath + '/articles' + articleUrl + '.json' ).then(function (response) {
                //console.log("article details data: ", response.data);
                return response.data;
            });
        };

    }


})();
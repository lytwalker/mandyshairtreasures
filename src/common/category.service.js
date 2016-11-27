(function () {
    "use strict";

    angular.module('common')
        .service('CategoryService', CategoryService);


    CategoryService.$inject = ['$http', 'ApiPath', '$filter'];
    function CategoryService($http, ApiPath, $filter) {
        var service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };


        service.getCategoryBy = function (type) {
            var typeUrl = "";
            var filteredcategories;
            if (type) {
                typeUrl = "/" + type;
            }

            return $http.get(ApiPath + '/categories.json').then(function (response) {
                //console.log("categories: ", response.data);
                filteredcategories = $filter('filter')(response.data, function (category) {
                    return category.type.id == type;
                });
                //console.log("filtered categories: ", filteredcategories);
                return filteredcategories;
            });
        };

    }


})();
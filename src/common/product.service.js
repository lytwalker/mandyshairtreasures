(function () {
    "use strict";

    angular.module('common')
        .service('ProductService', ProductService);


    ProductService.$inject = ['$http', 'ApiPath', '$filter'];
    function ProductService($http, ApiPath, $filter) {
        var service = this;

        service.getProducts = function () {
            return $http.get(ApiPath + '/products.json').then(function (response) {
                return response.data;
            });
        };


        service.getProductBy = function (category) {
            var categoryUrl = "";
            var filteredproducts;
            if (category) {
                categoryUrl = "/" + category;
            }

            return $http.get(ApiPath + '/products.json').then(function (response) {
                filteredproducts = $filter('filter')(response.data, function (product) {
                    return product.category.id == category;
                });
                //console.log("filtered products: ", filteredproducts);
                return filteredproducts;
            });
        };


        service.getProductDetails = function (product) { 
            var productUrl = "";
            if (product) {
              productUrl = "/" + product;
            }            

            return $http.get(ApiPath + '/products' + productUrl + '.json' ).then(function (response) {
                //console.log("product details data: ", response.data);
                return response.data;
            });
        };

    }


})();
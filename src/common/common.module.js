(function () {
    "use strict";

    angular.module('common', [])
        .constant('ApiPath', 'https://mandyshairtreasures-cms.herokuapp.com')
        .config(config);

    config.$inject = ['$httpProvider'];

    function config($httpProvider) {
        $httpProvider.interceptors.push('loadingHttpInterceptor');
    }

})();
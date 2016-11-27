(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.about', {
      url: '/about',
      templateUrl: 'src/public/about/about.html'
    })
    .state('public.contact', {
      url: '/contact',
      templateUrl: 'src/public/contact/contact.html'
    })
    .state('public.articles', {
      url: '/articles',
      templateUrl: 'src/public/articles/articles.html',
      controller: 'ArticleController',
      controllerAs: 'articleCtrl',
      resolve: {
        articleList: ['ArticleService', function (ArticleService) {
          return ArticleService.getArticles();
        }]
      }
    })
    .state('public.articledetails', {
      url: '/articles/{article}',
      templateUrl: 'src/public/article-details/article-details.html',
      controller: 'ArticleDetailsController',
      controllerAs: 'articleDetailsCtrl',
      resolve: {
        articleDetails: ['$stateParams','ArticleService', function ($stateParams, ArticleService) {
          return ArticleService.getArticleDetails($stateParams.article);
        }]
      }
    })
    .state('public.categories', {
      url: '/categories/{type}',
      templateUrl: 'src/public/categories/categories.html',
      controller: 'CategoryController',
      controllerAs: 'categoryCtrl',
      resolve: {
        categories: ['$stateParams','CategoryService', function ($stateParams, CategoryService) {
          return CategoryService.getCategoryBy($stateParams.type);
        }]
      }
    })
    .state('public.products', {
      url: '/products/{categoryname}/{category}',
      templateUrl: 'src/public/products/products.html',
      controller: 'ProductController',
      controllerAs: 'productCtrl',
      resolve: {
        products: ['$stateParams','ProductService', function ($stateParams, ProductService) {
          return ProductService.getProductBy($stateParams.category);
        }]
      }
    })
    .state('public.productdetails', {
      url: '/products/{product}',
      templateUrl: 'src/public/product-details/product-details.html',
      controller: 'ProductDetailsController',
      controllerAs: 'productDetailsCtrl',
      resolve: {
        productDetails: ['$stateParams','ProductService', function ($stateParams, ProductService) {
          return ProductService.getProductDetails($stateParams.product);
        }]
      }
    });
}
})();

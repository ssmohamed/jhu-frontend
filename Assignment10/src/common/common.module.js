(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://powerful-beach-62506.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

//instatiate an AngularJS module and inject an dependancy modules
var rentapply = angular.module('rentapply', ['ui.router', 'firebase']);
 
//Configure application states and routes
rentapply.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) {
    


    //define states
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
      })
      .state('profile', {
        url: '/profile/:username',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .state('apply', {
        url: '/apply',
        templateUrl: 'apply/apply.html',
        controller: 'ApplyCtrl'
      })
      .state('registertofindtenants', {
        url: '/register-to-find-tenants',
        templateUrl: 'register-to-find-tenants/registertofindtenants.html',
        controller: 'RegisterToFindTenantsCtrl'
      })
      .state('find', {
        url: '/find',
        templateUrl: 'find/find.html',
        controller: 'FindCtrl'
      })
      

  });//END config

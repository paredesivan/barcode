angular.module('starter', ['ionic', 'orm','barcode'])

  .run(function ($ionicPlatform,
                 orm,
  ) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      inicializar();

      function inicializar() {
        abrirBd();
        crearTabla()
          .then(select("produc")
            .then(function (res) {
              console.log("resu:" + JSON.stringify(res));
            }).catch(function () {
              console.log("mal")
            }))
      }


      function abrirBd() {
        orm.abrirBD("my2.db");
      }

      function crearTabla() {
        return orm.crearTabla()
      }

      function select(tabla) {
        return orm.select(tabla)
      }


    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state('tab.dash', {
        url: '/dash/:op',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'dash.controller'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash/');

  });

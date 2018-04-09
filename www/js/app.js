// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova.plugins.sqlite', 'starter.services'])

  .run(function ($ionicPlatform,
                 sql,$rootScope) {
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



      var opciones = {name: "my2.db", location:'default'};


      if (window.cordova && window.SQLitePlugin) {
        $rootScope.db = sql.openDB(opciones);

      } else {
        //var dbShell = window.openDatabase(database_name, database_version, database_displayname, database_size);
        $rootScope.db = window.openDatabase("my2.db", '1.0', "my2.db", 8 * 1024 * 1024);

      }

      var query = 'CREATE TABLE IF NOT EXISTS productos (codigoBarras integer primary key, fecha date)';
      sql.execute($rootScope.db, query).then(function (res) {
        console.log('ok')
      }, function (err) {
        console.error(err);
      });





      // cordova.plugins.barcodeScanner.scan(
      //   function (result) {
      //     alert("We got a barcode\n" +
      //       "Result: " + result.text + "\n" +
      //       "Format: " + result.format + "\n" +
      //       "Cancelled: " + result.cancelled);
      //   },
      //   function (error) {
      //     console.log("Scanning failed: " + error);
      //   },
      //   {
      //     preferFrontCamera: true, // iOS and Android
      //     showFlipCameraButton: true, // iOS and Android
      //     showTorchButton: true, // iOS and Android
      //     torchOn: true, // Android, launch with the torch switched on (if available)
      //     saveHistory: true, // Android, save scan history (default false)
      //     prompt: "Place a barcode inside the scan area", // Android
      //     resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      //     formats: "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
      //     orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      //     disableAnimations: true, // iOS
      //     disableSuccessBeep: false // iOS and Android
      //   }
      // );
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
      })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash/');

  });

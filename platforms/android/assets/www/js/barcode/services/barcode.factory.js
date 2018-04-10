angular
  .module('barcode', [])
  .factory('barcode', barcode);

function barcode($q) {


  var factory = {

    escanear: escanear,
    codificar:codificar

}
  ;

  return factory;

  function codificar(){
    // var defer = $q.defer();
    // defer.resolve();
    // defer.reject();
    // return defer.promise;
    // // TEXT_TYPE
    // // EMAIL_TYPE
    // // PHONE_TYPE
    // // SMS_TYPE
    // // A full example could be:
    //
    //   cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
    //       alert("encode success: " + success);
    //     }, function(fail) {
    //       alert("encoding failed: " + fail);
    //     }
    //   );
  }

  function escanear() {

    var defer = $q.defer();

    cordova.plugins.barcodeScanner.scan(
      function (result) {
        defer.resolve(result);

      },
      function (error) {
        defer.reject(error);
        console.log("Scanning failed: " + error);
      },
      {
        preferFrontCamera: false, // iOS and Android
        showFlipCameraButton: true, // iOS and Android
        showTorchButton: true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        saveHistory: true, // Android, save scan history (default false)
        prompt: "escanea tu producto", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
        orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations: true, // iOS
        disableSuccessBeep: false // iOS and Android
      }
    );

    return defer.promise;


  }


}

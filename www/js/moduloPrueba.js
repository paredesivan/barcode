angular.module('moduloPrueba', [])
  .factory('asincronico', function($q,$timeout) {


  return {
    tes:tes,
    caballo:caballo
  };


  function caballo(){
    return true
  }

  function tes(){
    // Get a jQuery deferred
    var deferred = $q.defer();

    // Wait two seconds, then set the flag to true
    setTimeout(function () {

      deferred.resolve(79);
    }, 50);

    // Return the deferred promise
    return deferred.promise;
  }

});

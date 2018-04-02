angular.module('moduloPrueba', [])
      .factory('asincronico', function($q) {
  return {
    testAsyncWithDeferred:function() {
        // Get a jQuery deferred
        var deferred = $q.defer();

        // Wait two seconds, then set the flag to true
        setTimeout(function () {
            flag = true;

            // Resolve the deferred
            deferred.resolve();
        }, 2000);

        // Return the deferred promise
        return deferred.promise();
    }
  };
})

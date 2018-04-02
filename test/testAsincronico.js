describe("IGUAL A", function () {

   it("works for simple literals and variables", function () {
        var a = 12;
        expect(a).toBe(12);
        expect(a).not.toBe(124);

    });

    it('description', function(done) {

      done();
    });

    // Specs

});



describe("Testing async calls with beforeEach and passing the special done callback around", function () {

    beforeEach(function (done) {
        // Make an async call, passing the special done callback
        testAsync(done);
    });

    it("Should be true if the async call has completed", function () {
        expect(flag).toEqual(true);
    });

});

// Specs
describe("Testing async calls with beforeEach and invoking the special done callback in the promise's done callback", function () {

      var flag = false;
      var asinc;

      //agregando prubea/
      //cargo el modulo starter.factories
      beforeEach(module('moduloPrueba'));

      //inyecto el servicio
      beforeEach(inject(function (asincronico) {
          asinc = asincronico;
      }));

      beforeEach(function(done) {
          asinc.testAsyncWithDeferred()
          .done(function (result) {
              // Invoke the special done callback
              done();
          });
    });

    it("Should be true if the async call has completed", function () {
        expect(flag).toEqual(true);
    });

});

// xdescribe("IGUAL A", function () {
//
//    xit("works for simple literals and variables", function () {
//         var a = 12;
//         expect(a).toBe(12);
//         expect(a).not.toBe(124);
//
//     });
//
//     it('description', function(done) {
//
//       done();
//     });
//
//     // Specs
//
// });
//
//
//
// xdescribe("Testing async calls with beforeEach and passing the special done callback around", function () {
//
//     beforeEach(function (done) {
//         // Make an async call, passing the special done callback
//         testAsync(done);
//     });
//
//     it("Should be true if the async call has completed", function () {
//         expect(flag).toEqual(true);
//     });
//
// });
//
//
// describe('descridption', function() {
//   var asi;
//
//   beforeEach(function (){
//     module('moduloPrueba');
//     inject(function (asincronico) {
//       asi = asincronico;
//     })}
//   );
//
//   it('should ', function () {
//     expect(asi.caballo()).toBeTruthy();
//   });
// });


// pasos:
// 1-declarar variables
// 2-inyectar rootscope y servicio
// 3-en el it llamar a la funcion y el resultado guardarlo en una variable
// 4-en un settimeout realizar el espect de esa variable
describe('description', function () {
  // declarar variables
  var asi;
  var root;
  var res;

  beforeEach(function () {
    module('moduloPrueba');
    inject(function (asincronico, $rootScope) {
      root = $rootScope;
      asi = asincronico;
    })
  });

  it('should ', function (done) {
    asi.tes().then(function (resp) {
      res = resp;
      done();
    });

    setTimeout(function () {
      root.$digest();
      expect(res).toEqual(79);
      expect(res).not.toEqual(123);
    }, 100);
  })
});

// funcionando. en moduloprueba hay que envolver el retorno con $timeout
xdescribe('description', function () {
  var asi;
  var root;
  var res;
  var ti;

  beforeEach(function () {
    module('moduloPrueba');
    inject(function (asincronico, $rootScope,$timeout) {
      root = $rootScope;
      asi = asincronico;
      ti = $timeout;
    })
  });

  it('should ', function () {
    asi.tes().then(function (resp) {
      expect(resp).toEqual(79);
      expect(resp).not.toEqual(123);
    });

    ti.flush();
    root.$digest();

  });

});


xdescribe('Test to print out jasmine version', function () {
  it('prints jasmine version', function () {
    console.log('jasmine-version:' + jasmine.version);
  });
});

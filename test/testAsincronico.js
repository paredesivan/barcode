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


describe('description', function () {
  var asi;
  var root;
  var res;
  var pro;


  beforeEach(function () {
    module('moduloPrueba');

  });

  beforeEach(inject(function (asincronico, $rootScope) {
    root = $rootScope;
    asi = asincronico;

  }));

  it('should ', function (done) {
    asi.tes().then(function (resp) {
      res = resp;
      done();
    });

    setTimeout(function () {
      root.$digest();
      expect(res).toEqual(79);
      expect(res).not.toEqual(123);
    }, 200);

  });


});


xdescribe('Test to print out jasmine version', function () {
  it('prints jasmine version', function () {
    console.log('jasmine-version:' + jasmine.version);
  });
});

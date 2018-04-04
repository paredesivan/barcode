// Code under test
var flag = false;

function testAsync(done) {
    // Wait two seconds, then set the flag to true
    setTimeout(function () {
        flag = true;

        // Invoke the special done callback
        done();
    }, 2000);
}

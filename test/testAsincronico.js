describe("IGUAL A", function () {

   it("works for simple literals and variables", function () {
        var a = 12;
        expect(a).toBe(12);
        expect(a).not.toBe(124);
    });
});

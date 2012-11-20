describe("factorial", function() {
  it("evaluates correctly for a single-digit number", function() {
    expect(factorial(5)).toEqual(120);
  });

  it('evaluates correctly for a double-digit number', function() {
    expect(factorial(11)).toEqual(39916800);
  });

  it('evaluates correctly for 0', function() {
    expect(factorial(0)).toEqual(0);
  });

});
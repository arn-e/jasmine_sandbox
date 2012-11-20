describe("find_missing_v1()", function() {
  it("guesses the missing number", function() {
    // test code
    var a = [1,2,3,5,6];
    expect(missing(a)).toEqual(4);
  });
});

describe("find_missing_v2()", function() {
  it("guesses the missing number", function() {
    // same test code as above
    var a = [1,2,3,5,6];
    expect(missing2(a)).toEqual(4);
  });
});
function getRelationship(x, y) {
  if(x > y) {
    return x + " > " + y;
  } else if(x < y) {
    return x + " < " + y;
  } else {
    return x + " = " + y;
  }
}

var assert = require("assert")
describe("getRelationship(2,3)", function () {
  it("should return '2 < 3'", function () {
    assert.equal('2 < 3', getRelationship(2, 3));
  });
});

describe("getRelationship(3,2)", function () {
  it("should return '3 > 2'", function () {
    assert.equal('3 > 2', getRelationship(3, 2));
  });
});

describe("getRelationship(3,3)", function () {
  it("should return '3 = 3'", function () {
    assert.equal('3 = 3', getRelationship(3, 3));
  });
});

function displayValue(value) {
  if (value === undefined) {
    return "undefined";
  } else {
    return '"' + value + '"';
  }
}

function cannotCompareNaN(value) {
  return 'Can\'t compare relationships because ' + displayValue(value) + ' is not a number.';
}

function isNotNumber(value) {
  return typeof(value) != "number";
}

function getRelationship(x, y) {
  if (isNotNumber(x) && isNotNumber(y)) {
    return 'Can\'t compare relationships because ' + displayValue(x) + ' and ' + displayValue(y) + ' are not numbers.';
  }

  if (isNotNumber(x)) {
    return cannotCompareNaN(x);
  }

  if (isNotNumber(y)) {
    return cannotCompareNaN(y);
  }

  if (x > y) {
    return x + " > " + y;
  } else if (x < y) {
    return x + " < " + y;
  } else {
    return x + " = " + y;
  }
}

var assert = require("assert")
describe("getRelationship()", function () {

  describe("getRelationship(2, 3)", function () {
    it("should return '2 < 3'", function () {
      assert.equal('2 < 3', getRelationship(2, 3));
    });
  });

  describe("getRelationship(3, 2)", function () {
    it("should return '3 > 2'", function () {
      assert.equal('3 > 2', getRelationship(3, 2));
    });
  });

  describe("getRelationship(3, 3)", function () {
    it("should return '3 = 3'", function () {
      assert.equal('3 = 3', getRelationship(3, 3));
    });
  });

  describe("getRelationship('this', 3)", function () {
    it('should return "Can\'t compare relationships because "this" is not a number."', function () {
      assert.equal('Can\'t compare relationships because "this" is not a number.', getRelationship("this", 3));
    });
  });

  describe("getRelationship(3, 'that')", function () {
    it('should return "Can\'t compare relationships because "that" is not a number."', function () {
      assert.equal('Can\'t compare relationships because "that" is not a number.', getRelationship(3, "that"));
    });
  });

  describe("getRelationship('that')", function () {
    it('should return "Can\'t compare relationships because "that" and undefined are not numbers."', function () {
      assert.equal('Can\'t compare relationships because "that" and undefined are not numbers.', getRelationship("that"));
    });
  });

  describe("getRelationship(undefined, 'this')", function () {
    it('should return "Can\'t compare relationships because undefined and "this" are not numbers."', function () {
      assert.equal('Can\'t compare relationships because undefined and "this" are not numbers.', getRelationship(undefined, "this"));
    });
  });
});

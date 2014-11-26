/*
Returns a string explaining the reason why the first argument is not a number.
 */
function cannotCompareNaN(value) {
  return 'Can\'t compare relationships because ' + value + ' is not a number';
}

/*
Requires two arguments of any type.
Returns a string describing the relative values of those two inputs.
 */
function getRelationship(x, y) {
  if (isNaN(x) && isNaN(y)) {
    return 'Can\'t compare relationships because ' + x + ' and ' + y + ' are not numbers';
  }

  if (isNaN(x)) {
    return cannotCompareNaN(x);
  }

  if (isNaN(y)) {
    return cannotCompareNaN(y);
  }

  if (x > y) {
    return ">";
  } else if (x < y) {
    return "<";
  } else {
    return "=";
  }
}

var assert = require("assert");

describe("isNaN()", function () {
  describe("isNaN(2)", function () {
    it("should return false", function () {
      assert.equal(false, isNaN(2));
    });
  });

  describe("isNaN('that')", function () {
    it("should return true", function () {
      assert.equal(true, isNaN('that'));
    });
  });

  describe("isNaN(NaN)", function () {
    it("should return true", function () {
      assert.equal(true, isNaN(NaN));
    });
  });
});

describe("getRelationship()", function () {

  describe("getRelationship(2, 3)", function () {
    it("should return '<'", function () {
      assert.equal('<', getRelationship(2, 3));
    });
  });

  describe("getRelationship(3, 2)", function () {
    it("should return '>'", function () {
      assert.equal('>', getRelationship(3, 2));
    });
  });

  describe("getRelationship(3, 3)", function () {
    it("should return '='", function () {
      assert.equal('=', getRelationship(3, 3));
    });
  });

  describe("getRelationship('this', 3)", function () {
    it('should return "Can\'t compare relationships because this is not a number"', function () {
      assert.equal('Can\'t compare relationships because this is not a number', getRelationship("this", 3));
    });
  });

  describe("getRelationship(3, 'that')", function () {
    it('should return "Can\'t compare relationships because that is not a number"', function () {
      assert.equal('Can\'t compare relationships because that is not a number', getRelationship(3, "that"));
    });
  });

  describe("getRelationship(3)", function () {
    it('should return "Can\'t compare relationships because undefined is not a number"', function () {
      assert.equal('Can\'t compare relationships because undefined is not a number', getRelationship(3));
    });
  });

  describe("getRelationship('that')", function () {
    it('should return "Can\'t compare relationships because that and undefined are not numbers"', function () {
      assert.equal('Can\'t compare relationships because that and undefined are not numbers', getRelationship("that"));
    });
  });

  describe("getRelationship('this', 'that')", function () {
    it('should return "Can\'t compare relationships because this and that are not numbers"', function () {
      assert.equal('Can\'t compare relationships because this and that are not numbers', getRelationship("this", "that"));
    });
  });

  describe("getRelationship(undefined, 'this')", function () {
    it('should return "Can\'t compare relationships because undefined and this are not numbers"', function () {
      assert.equal('Can\'t compare relationships because undefined and this are not numbers', getRelationship(undefined, "this"));
    });
  });

  describe("getRelationship(NaN)", function () {
    it('should return "Can\'t compare relationships because NaN and undefined are not numbers"', function () {
      assert.equal('Can\'t compare relationships because NaN and undefined are not numbers', getRelationship(NaN));
    });
  });
});

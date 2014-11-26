var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

var alphabetizedFormattedMoonWalkers = [
  "Aldrin, Buzz",
  "Armstrong, Neil",
  "Bean, Alan",
  "Cernan, Eugene",
  "Conrad, Pete",
  "Duke, Charles",
  "Irwin, James",
  "Mitchell, Edgar",
  "Schmitt, Harrison",
  "Scott, David",
  "Shepard, Alan",
  "Young, John"
];

/*
 Requires a name as a string in the format "First Last" as first argument.
 Returns an Object which responds to "first" and "last".
 */
function splitName(name) {
  var nameObj = {};
  var nameParts = name.split(" ");
  nameObj.first = nameParts[0];
  nameObj.last = nameParts[1];
  return nameObj;
}

/*
 Requires an array of names in the format "First Last" as first argument.
 Returns an array of names in the format "Last, First".
 */
function formatNames(names) {
  var formattedNames = [];
  for (var i = 0; i < names.length; i++) {
    var name = splitName(names[i]);
    formattedNames.push(name.last + ", " + name.first);
  }
  return formattedNames;
}

/*
 Requires an array of names in the format "First Last" as first argument.
 Returns an array of names in the format "Last, First" sorted alphabetically.
 */
function alphabetizer(names) {
  return formatNames(names).sort();
}


var assert = require("assert");

describe("formatNames()", function () {
  describe("formatNames(['Brian Buchalter', 'Coral Buchalter'])", function () {
    it("should return ['Buchalter, Brian','Buchalter, Coral']", function () {
      assert.deepEqual(['Buchalter, Brian', 'Buchalter, Coral'], formatNames(['Brian Buchalter', 'Coral Buchalter']));
    });
  });
});

describe("alphabetizer()", function () {
  describe("alphabetizer(moonWalkers)", function () {
    it("should return an alphabetized array of names in lastname, firstname format", function () {
      assert.deepEqual(alphabetizedFormattedMoonWalkers, alphabetizer(moonWalkers));
    });
  });
});

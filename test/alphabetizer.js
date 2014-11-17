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

function formatNames(names) {
  var formattedNames = [];
  for(var i = 0; i < names.length; i++) {
    var nameParts = names[i].split(" ");
    var firstName = nameParts[0];
    var lastName = nameParts[1];
    formattedNames.push(lastName + ", " + firstName);
  }
  return formattedNames;
}

function alphabetizer(names) {
  return formatNames(names).sort();
}

var assert = require("assert");

describe("formatNames()", function () {
  describe("formatNames(['Brian Buchalter', 'Coral Buchalter'])", function () {
    it("should return ['Buchalter, Brian','Buchalter, Coral']", function () {
      assert.deepEqual(['Buchalter, Brian','Buchalter, Coral'], formatNames(['Brian Buchalter', 'Coral Buchalter']));
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

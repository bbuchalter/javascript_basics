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

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

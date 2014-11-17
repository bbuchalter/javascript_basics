function cannotCompareNaN(value) {
  return 'Can\'t compare relationships because ' + value + ' is not a number';
}

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

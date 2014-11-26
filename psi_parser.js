function totalBytes(results) {
  return parseInt(results.pageStats.totalRequestBytes);
}

function ruleList(results) {
  var list = [];
  var ruleResults = results.formattedResults.ruleResults;
  for (var rule in ruleResults) {
    var ruleResult = ruleResults[rule];
    list.push(ruleResult.localizedRuleName);
  }
  return list;
}

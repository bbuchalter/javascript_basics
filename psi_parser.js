function totalBytes(psiResults) {
  return parseInt(psiResults.pageStats.totalRequestBytes);
}

function ruleList(psiResults) {
  var list = [];
  var ruleResults = psiResults.formattedResults.ruleResults;
  for (var rule in ruleResults) {
    var ruleResult = ruleResults[rule];
    list.push(ruleResult.localizedRuleName);
  }
  return list;
}

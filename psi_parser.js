/*
 Returns an integer of total number of bytes in the request and response including totalRequestBytes, cssResponseBytes,
 imageResponseBytes, javascriptResponseBytes, and otherResponseBytes.
 */
function totalBytes(results) {
  return parseInt(results.pageStats.totalRequestBytes) +
    parseInt(results.pageStats.htmlResponseBytes) +
    parseInt(results.pageStats.cssResponseBytes) +
    parseInt(results.pageStats.imageResponseBytes) +
    parseInt(results.pageStats.javascriptResponseBytes) +
    parseInt(results.pageStats.otherResponseBytes);
}

/*
 Returns an array of the localized rule names PSI suggests you improve.
 */
function ruleList(results) {
  var list = [];
  var ruleResults = results.formattedResults.ruleResults;
  for (var rule in ruleResults) {
    var ruleResult = ruleResults[rule];
    list.push(ruleResult.localizedRuleName);
  }
  return list;
}

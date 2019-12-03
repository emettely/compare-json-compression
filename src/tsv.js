const fs = require("fs");
var TSV = require("tsv");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath
} = require("./utils");
const largeJson = require(fileName);
const path = outPath("data.tsv");
const doc = [];
largeJson.response.results.forEach(r => {
  r.alternatives[0].words.forEach(w => doc.push(w));
});

printSize(doc, "Just words In memory");

var data = TSV.stringify(doc);
printSize(data, "TSV");

fs.writeFileSync(path, data);
printFileSizeInMB(path);

const doc_2 = TSV.parse(data);
printSize(doc_2, "TSV to JSON:");

printMemoryUsage();

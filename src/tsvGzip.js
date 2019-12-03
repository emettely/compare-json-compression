const fs = require("fs");
const TSV = require("tsv");
const zlib = require("zlib");

const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath,
  printExecTime
} = require("./utils");
const largeJson = require(fileName);
const path = outPath("data.tsv.gz");

const doc = [];
largeJson.response.results.forEach(r => {
  r.alternatives[0].words.forEach(w => doc.push(w));
});

printSize(doc, "Just words In memory");

var data = TSV.stringify(doc);

printSize(data, "TSV");

const compressed = zlib.gzipSync(data);

fs.writeFileSync(path, compressed);
printFileSizeInMB(path);

printMemoryUsage();
printExecTime();

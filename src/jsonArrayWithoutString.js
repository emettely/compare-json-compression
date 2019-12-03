const fs = require("fs");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath
} = require("./utils");

const largeJson = require(fileName);
const path = outPath("dataArrayWithoutString");

const doc = [];
largeJson.response.results.forEach(r => {
  r.alternatives[0].words.forEach(w => doc.push(w));
});

printSize(doc, "Just words In memory");

const data = doc.map(r => [r.startTime, r.endTime, r.word]);

printSize(data, "JSON array");

fs.writeFileSync(path, data);
printFileSizeInMB(path);

const hugeString = fs.readFileSync(path, "utf8");
printSize(hugeString, "read from File, then you'd have to parse anyway... :(");

printMemoryUsage();

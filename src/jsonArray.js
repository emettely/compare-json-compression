const fs = require("fs");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath,
  printExecTime
} = require("./utils");

const largeJson = require(fileName);
const path = outPath("dataArray.json");

const doc = [];
largeJson.response.results.forEach(r => {
  r.alternatives[0].words.forEach(w => doc.push(w));
});

printSize(doc, "Just words In memory");

const data = doc.map(r => [r.startTime, r.endTime, r.word]);
const dataString = JSON.stringify(data);

printSize(dataString, "Stringified");

fs.writeFileSync(path, dataString);
printFileSizeInMB(path);

const parsed = JSON.parse(dataString);
printSize(parsed, "String to JSON");

printMemoryUsage();
printExecTime();

const fs = require("fs");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath
} = require("./utils");

const path = outPath("data.json");
const doc = require(fileName);
printSize(doc, "In-memory size");
const data = doc;

fs.writeFileSync(path, data);
printFileSizeInMB(path);

printMemoryUsage();

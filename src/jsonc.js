const fs = require("fs");
const JSONC = require("jsoncomp");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath
} = require("./utils");
const largeJson = require(fileName);
const path = outPath("dataCompressed");
const Base64 = require("B");

const doc = largeJson;
printSize(doc);

var data = JSONC.pack(largeJson, true);
// const data = BSON.serialize(doc);
printSize(data, "compressed");
fs.writeFileSync(path, data);
printFileSizeInMB(path);
const doc_2 = BSON.deserialize(data);
printSize(doc_2, "decompressed");
printMemoryUsage();

const fs = require("fs");
const BSON = require("bson");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath
} = require("./utils");
const largeJson = require(fileName);
const path = outPath("dataBson");

// start processing
const doc = largeJson;
printSize(doc, "In-memory size");
const data = BSON.serialize(doc);
printSize(data, "serialized");
fs.writeFileSync(path, data);
printFileSizeInMB(path);

const doc_2 = BSON.deserialize(data);
printSize(doc_2, "deserialized");

printMemoryUsage();

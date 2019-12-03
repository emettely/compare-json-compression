const fs = require("fs");
const JSONC = require("jsoncomp");
const { size, logMemoryUsage, fileName } = require("./utils");
const largeJson = require(fileName);
const Base64 = require("B");

Object.size = size;

const doc = largeJson;
console.log(Object.size(doc));

var data = JSONC.pack(largeJson, true);
// const data = BSON.serialize(doc);
console.log("data:", data);
fs.writeFileSync("data", data);
console.log(Object.size(data));
// Deserialize the resulting Buffer
const doc_2 = BSON.deserialize(data);
// console.log('doc_2:', doc_2);
console.log(Object.size(doc_2));

logMemoryUsage();

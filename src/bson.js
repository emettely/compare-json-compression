const fs = require("fs");
const BSON = require("bson");
const { size, logMemoryUsage, fileName } = require("./utils");
const largeJson = require(fileName);

Object.size = size;

const doc = largeJson;
console.log(Object.size(doc));
const data = BSON.serialize(doc);

console.log("data:", data);
fs.writeFileSync("data", data);
console.log(Object.size(data));
// Deserialize the resulting Buffer
const doc_2 = BSON.deserialize(data);
// console.log('doc_2:', doc_2);
console.log(Object.size(doc_2));

logMemoryUsage();

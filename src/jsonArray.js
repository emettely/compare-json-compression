const fs = require("fs");
const { size, logMemoryUsage, fileName } = require("./utils");

Object.size = size;
const doc = require(fileName);
console.log("In memory size:", Object.size(doc));
const data = doc;

fs.writeFileSync("data.json", data);

logMemoryUsage();

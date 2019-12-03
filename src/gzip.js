const fs = require("fs");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath,
  printExecTime
} = require("./utils");

const zlib = require("zlib");

const path = outPath("data.json.gz");
const doc = require("../data/wordsOnly.json");
// const doc = require(fileName);
printSize(doc, "In-memory size");
const stringify = JSON.stringify(doc);
printSize(stringify, "Stringify");
const compressed = zlib.gzipSync(stringify);
printSize(compressed, "Gzipped in memory");

fs.writeFileSync(path, compressed);
printFileSizeInMB(path);

// opening file
const compressedContents = fs.readFileSync(path);
const decompressed = zlib.gunzipSync(compressedContents);

printMemoryUsage();
printExecTime();

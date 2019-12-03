const fs = require("fs");
const json = require("big-json");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath
} = require("./utils");

const readStream = fs.createReadStream(fileName);
const parseStream = json.createParseStream();

parseStream.on("data", function(pojo) {
  // => receive reconstructed POJO
  const doc = [];
  pojo.response.results.forEach(r => {
    r.alternatives[0].words.forEach(w => doc.push(w));
  });

  printSize(doc, "In-memory size");
});

readStream.pipe(parseStream);

printMemoryUsage();

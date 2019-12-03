const fs = require("fs");
const json = require("big-json");
const { size, logMemoryUsage, fileName } = require("./utils");

Object.size = size;

const readStream = fs.createReadStream(fileName);
const parseStream = json.createParseStream();

parseStream.on("data", function(pojo) {
  // => receive reconstructed POJO
  const doc = [];
  pojo.response.results.forEach(r => {
    r.alternatives[0].words.forEach(w => doc.push(w));
  });
  console.log("In-memory size", Object.size(doc));
});

readStream.pipe(parseStream);

logMemoryUsage();

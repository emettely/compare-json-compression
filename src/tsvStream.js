const fs = require("fs");
var TSV = require("tsv");
const json = require("big-json");
const {
  printSize,
  printMemoryUsage,
  printFileSizeInMB,
  fileName,
  outPath,
  printExecTime
} = require("./utils");

const path = outPath("dataStream.tsv");
const readStream = fs.createReadStream("data/one_hour.json");
const parseStream = json.createParseStream();

parseStream.on("data", pojo => {
  // => receive reconstructed POJO
  const doc = [];
  pojo.response.results.forEach(r => {
    r.alternatives[0].words.forEach(w => doc.push(w));
  });

  printSize(doc, "In-memory size");

  var data = TSV.stringify(doc);

  printSize(data, "compressed data:");
  fs.writeFileSync(path, data);
  printFileSizeInMB(path);

  printSize(data, "TSV size:");

  const doc_2 = TSV.parse(data);
  printSize(doc_2, "decompressed data:");

  printMemoryUsage();
  printExecTime();
});

readStream.pipe(parseStream);

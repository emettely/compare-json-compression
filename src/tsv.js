const fs = require("fs");
var TSV = require("tsv");
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

  const data = TSV.stringify(doc);
  fs.writeFileSync("data.tsv", data);

  console.log("TSV size: ", Object.size(data));

  const doc_2 = TSV.parse(data);
  console.log("Parsed size: ", Object.size(doc_2));
  console.log(doc_2);
});

readStream.pipe(parseStream);

logMemoryUsage();

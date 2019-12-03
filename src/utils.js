const fs = require("fs");
var start = process.hrtime();

// https://stackoverflow.com/questions/10617070/how-to-measure-execution-time-of-javascript-code-with-callbacks
const printExecTime = () => {
  var precision = 3; // 3 decimal places
  var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
  console.log("==========Elapsed Time==========");
  console.log(
    process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms"
  ); // print message + time
  start = process.hrtime(); // reset the timer
};

const bytesToMB = bytes => {
  return Math.round((bytes / 1024 / 1024) * 100) / 100;
};

const size = obj => {
  const size = bytesToMB(roughSizeOfObject(obj));
  return size;
};

function roughSizeOfObject(object) {
  var objectList = [];
  var stack = [object];
  var bytes = 0;

  while (stack.length) {
    var value = stack.pop();

    if (typeof value === "boolean") {
      bytes += 4;
    } else if (typeof value === "string") {
      bytes += value.length * 2;
    } else if (typeof value === "number") {
      bytes += 8;
    } else if (typeof value === "object" && objectList.indexOf(value) === -1) {
      objectList.push(value);

      for (var i in value) {
        stack.push(value[i]);
      }
    }
  }
  return bytes;
}

const printSize = (obj, msg = "") => {
  if (msg) {
    msg = msg + " ";
  }
  console.log(`${msg}${size(obj)} MB`);
};

const printMemoryUsage = () => {
  console.log("===========Memory Usage===========");
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`${key} ${bytesToMB(used[key])} MB`);
  }
};

const fileName = "../data/one_hour.json";

const outPath = name => `out/${name}`;

const printFileSizeInMB = file => {
  const stats = fs.statSync(file);
  const fileSizeInBytes = stats.size;
  const fileSizeInMegabytes = bytesToMB(fileSizeInBytes);
  console.log(`File size: ${fileSizeInMegabytes} MB`);
};

printFileSizeInMB("data/one_hour.json");

exports.fileName = fileName;
exports.printMemoryUsage = printMemoryUsage;
exports.printFileSizeInMB = printFileSizeInMB;
exports.outPath = outPath;
exports.printSize = printSize;
exports.printExecTime = printExecTime;

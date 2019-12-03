const fs = require("fs");

const size = obj => {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const printSize = (obj, msg = "") => {
  if (msg) {
    msg = msg + " ";
  }
  console.log(`${msg}${size(obj)}`);
};

const printMemoryUsage = () => {
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(
      `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
    );
  }
};

const fileName = "../data/one_hour.json";
const outPath = name => `../out/${name}`;

const printFileSizeInMB = file => {
  const stats = fs.statSync(file);
  const fileSizeInBytes = stats.size;
  const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;
  console.log(`File size: ${fileSizeInMegabytes}`);
};

export { printMemoryUsage, printSize, printFileSizeInMB, fileName, outPath };

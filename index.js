var productAgg = require("./app/ProductAggregator.js");

var fileNames = new Array();

for (i = 2; i < process.argv.length; i++) {
  // console.log(process.argv[i]);
  fileNames.push(process.argv[i]);
}

productAgg.productAggrigator(fileNames);





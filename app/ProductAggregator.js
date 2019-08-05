var csv = require("./CsvReader.js");
var datUtils = require("./DataUtil.js");

var productAggrigator = function(fileNames) {
    csv.csvFilesReader(fileNames)
    .then(function(jsonArray) {
        var productList = convertToObject(jsonArray);
        doAggregation(productList);
    }).catch(function(error) {
        console.error(error);
    });
}

var convertToObject = function convertToObject(jsonArray) {
    // console.log("jsonArray : " + JSON.stringify(jsonArray));
    // console.log("\n");
    console.log(jsonArray);
    var productList = JSON.parse(JSON.stringify(jsonArray), function(k, v) { 
      return (typeof v === "object" || isNaN(v)) ? v : parseInt(v, 10)});
    // console.log(productList);
    return productList;
  }

var doAggregation = function(productList) {
  var averagePricePerCategory = datUtils.getAvaeragePricePerCategory(productList);
  console.log("Average Price per Category : " + JSON.stringify(averagePricePerCategory));

  var noOfProductPerCategory = datUtils.getNoOfProductPerCategory(productList);
  console.log("Number of Product per Category : " + JSON.stringify(noOfProductPerCategory));

  var costlyProduct = datUtils.getCostlyProduct(productList);
  console.log("Costly Product : " + JSON.stringify(costlyProduct));

  var cheapestProduct = datUtils.getCheapestProduct(productList);
  console.log("Cheapest Product : " + JSON.stringify(cheapestProduct));
}

exports.productAggrigator = productAggrigator;
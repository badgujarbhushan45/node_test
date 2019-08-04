const fs = require('fs');
// let fileName =  process.argv[2];
const csv = require("csvtojson");

csvReader = async function (csvFile) {
    return new Promise(function(resolve, reject) {
        csv()
        .fromFile(csvFile)
        .then(function(jsonArrayObj) { //when parse finished, result will be emitted here
            // console.log(jsonArrayObj.length);
            // product_name,SKU,price,order_quantity,category
            // console.log(jsonArrayObj);
            resolve(jsonArrayObj);
        }, function(error) {
            console.log(error);
            reject(error);
        });
    });
}

 csvFilesReader =  async function (csvFiles) {
    var jsonArrayObjs = [];
    return new Promise(function(resolve, reject) {
        var count = 0;
       csvFiles.forEach(csvFile => {
                csvReader(csvFile).then(function (jsonArray) {
                    // console.log(csvFile  + " : " + jsonArray.length);
                    jsonArrayObjs = jsonArrayObjs.concat(jsonArray);
                    count++;
                    if (count == csvFiles.length) {
                        resolve(jsonArrayObjs);
                    }
                }, function (error) {
                    reject(error);
                });
            })
        });
    }

exports.csvReader = csvReader;
exports.csvFilesReader = csvFilesReader;
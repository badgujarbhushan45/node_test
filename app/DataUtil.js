var getAvaeragePricePerCategory = function (productList) {
    var sumPricePerCategory = getSumPricePerCategory(productList);
    var noOfProductPerCategory = getNoOfProductPerCategory(productList);
    var result = productList.reduce( (acc, product) => 
            (acc[product.category] = (sumPricePerCategory[product.category] / noOfProductPerCategory[product.category]).toFixed(2), acc),  {} );
    return result;
}

var getSumPricePerCategory = function (productList) {
    return productList.reduce( (acc, product) => (acc[product.category] = (acc[product.category] || 0) + product.price, acc),  {} )
}
var getNoOfProductPerCategory = function (productList) {
    return productList.reduce( (acc, product) => (acc[product.category] = (acc[product.category] || 0)+1, acc),  {} );
}

var getCostlyProduct = function (productList) {
    return productList.reduce(function(previous, product) {
        return previous === undefined || product.price > previous.price ? product : previous;
    }, undefined);
}

var getCheapestProduct = function (productList) {
    return productList.reduce(function(previous, product) {
        return previous === undefined || product.price < previous.price ? product : previous;
    }, undefined);
}

exports.getAvaeragePricePerCategory = getAvaeragePricePerCategory;
exports.getNoOfProductPerCategory = getNoOfProductPerCategory;
exports.getCostlyProduct = getCostlyProduct;
exports.getCheapestProduct = getCheapestProduct;

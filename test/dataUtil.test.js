var datUtils = require("./DataUtil.js");
describe('DataUtilTest', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var jsonArray = "[ { product_name: 'Red TShirt', SKU: 'REDTS-123', price: '349', order_quantity: '10', category: 'Apparel' }, " 
         + " { product_name: 'Blue TShirt', SKU: 'BLUETS-123', price: '299', order_quantity: '10', category: 'Apparel' }, "
         + " { product_name: 'teddy', SKU: 'TED-123', price: '199', order_quantity: '15', category: 'TOY' }, "
         + " { product_name: 'Rose Hair Band', SKU: 'RHB-123', price: '150', order_quantity: '10', category: 'Accessories' },"
         + " { product_name: 'IornMan Toy', SKU: 'IORN-123', price: '899', order_quantity: '15', category: 'TOY' }, "
         + " { product_name: 'hearPhone holder', SKU: 'EPH-123', price: '100', order_quantity: '10', category: 'Accessories' },";
         var productList = JSON.parse(JSON.stringify(jsonArray), function(k, v) { 
            return (typeof v === "object" || isNaN(v)) ? v : parseInt(v, 10)});
    });

    it('cheapestProduct is ', function() {
        var product = datUtils.cheapestProduct(productList)
        expect(product.price).toBe('100');
      });
    

});
//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose; //mongoose extends restful


var schema = mongoose.Schema
//Schema setup
var productSchema = new schema({
    name: String,
    sku: String,
    price: Number
});

//Return model
module.exports = restful.model('Products', productSchema);
//Dependencies
var express = require('express');
var router = express.Router();

//Bring in the Model
var Product = require('../models/products');

//Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products'); //register endpoint to router

/*
//Test Route
router.get('/products', function(req, res){
    res.send('api is working');
});
*/

//Export/return router as a module
module.exports = router;
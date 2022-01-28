const Product = require('../models/product.model');


module.exports.index = (req, res) => {
    res.json({
        message: "Welcome."
    });
    };

module.exports.createNewProduct = (req, res) => {
    console.log("Creating new...")
    Product.create(req.body)
        .then(newlyCreatedProduct =>
        res.json({ results: newlyCreatedProduct }))
        .catch(err =>
        res.json({ err: err, message: "Something went wrong." }));
    };

module.exports.findAllProducts = (req, res) => {
    console.log("Finding all...")
    Product.find()
        .then(allProducts => {
        res.json({ results: allProducts })
        })
        .catch(err =>
        res.json({ err: err, message: "Something went wrong." }));
    };

module.exports.findOneProduct = (req, res) => {
    console.log("Finding one...")
    Product.findOne({ _id: req.params.id }) 
        .then(oneProduct => {
        res.json({ results: oneProduct })
        })
        .catch(err =>
        res.json({ err: err, message: "Something went wrong." }));
    };

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body, 
        { new: true })
        .then(updatedProduct => {
        res.json({ results: updatedProduct })
        })
        .catch(err =>
        res.json({ err: err, message: "Something went wrong." }));
    };

module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
        res.json({ results: deletedProduct })
        })
        .catch(err =>
        res.json({ err: err, message: "Something went wrong." }));
};
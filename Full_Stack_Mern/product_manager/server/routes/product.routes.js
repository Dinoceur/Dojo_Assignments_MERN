const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/', ProductController.index);
    app.post('/api/product/new', ProductController.createNewProduct);
    app.get('/api/product/', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/product/update/:id', ProductController.updateExistingProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteOneProduct);
}
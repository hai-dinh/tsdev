const Router = require('koa-router');
const bookHandler = require('../handlers/books/bookHandlers');

// Prefix all routes with /books
const router = new Router({
  prefix: '/api'
});

// Routes will go here
router.get('/', bookHandler.home);
router.get('/products', bookHandler.getBooks);
router.get('/product/:id', bookHandler.getBook);
router.post('/products', bookHandler.postProduct);
router.put('/products', bookHandler.putProduct);
router.delete('/product/:id', bookHandler.deleteProduct);

module.exports = router;

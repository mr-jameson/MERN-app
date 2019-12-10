const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book_controller');

// home page
router.get('/', BookController.index);
// create a new book
router.post('/', BookController.create);
// show new book page
router.get('/new', BookController.make);
// show book
router.get('/:id', BookController.show);
// show edit page
router.get('/:id/edit', BookController.edit);
// update book
router.put('/:id', BookController.update);
router.patch('/:id', BookController.update);
// delete book
router.delete('/:id', BookController.destroy);

module.export = router;
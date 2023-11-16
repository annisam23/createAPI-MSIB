const { getAllBooks, createBook,getBookDetail,deleteBook ,updateBook} = require('../controllers/book.controller');

const router = require('express').Router();

// Get All
router.get('/books', getAllBooks);
// Create Book
router.post('/book', createBook);
// Get Detail
router.get('/book/:bookId', getBookDetail);
// Update
router.put('/book/:bookId', updateBook);
// Delete
router.delete('/book/:bookId', deleteBook);
module.exports = router;
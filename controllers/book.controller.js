const { Book } = require('../models');
const getAllBooks = async (req, res) => {
    try {
        const data = await Book.findAll();

        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
};

const createBook = async (req, res) => {
    try {
        const { title, author, stock, description } = req.body;
        const data = await Book.create({
            title,
            author,
            stock,
            description
        });

        res.status(201).json({
            status: 'success',
            data,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        });
    }
}

const getBookDetail = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.status(404).json({
                status: 'failed',
                message: 'Book not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: book,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message,
        });
    }
}

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const { title, author, stock, description } = req.body;

        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.status(404).json({
                status: 'failed',
                message: 'Book not found',
            });
        }

        // Update the book with the new data
        await book.update({
            title,
            author,
            stock,
            description,
        });

        res.status(200).json({
            status: 'success',
            data: book,
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message,
        });
    }
};

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.status(404).json({
                status: 'failed',
                message: 'Book not found',
            });
        }

        await book.destroy();

        res.status(204).json({
            status: 'success',
            message: 'berhasil menghapus buku',
        }); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message,
        });
    }
};

module.exports = {
    getAllBooks,
    createBook,
    getBookDetail,
    updateBook,
    deleteBook,
}
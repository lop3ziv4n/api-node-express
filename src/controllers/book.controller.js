const db = require('../models');
const Book = db.books;

const getAll = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.json({message: err.message});
    }
}

const getById = async (req, res) => {
    try {
        const book = await Book.findOne({
            where: {id: req.params.id}
        });
        res.json(book);
    } catch (err) {
        res.json({message: err.message});
    }
}

const create = async (req, res) => {
    try {
        await Book.create(req.body);
        res.json({message: "Created successfully"});
    } catch (err) {
        res.json({message: err.message});
    }
};

const update = async (req, res) => {
    try {
        await Book.update(req.body, {
            where: {id: req.params.id}
        });
        res.json({message: "Updated successfully"});
    } catch (err) {
        res.json({message: err.message});
    }
}

const remove = async (req, res) => {
    try {
        await Book.destroy({
            where: {id: req.params.id}
        });
        res.json({message: "Deleted successfully"});
    } catch (err) {
        res.json({message: err.message});
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
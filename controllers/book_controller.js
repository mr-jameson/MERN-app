const BookController = require('./../database/models/book_model');

// creating a resource
async function create (req, res) {
    let { name, author } = req.body;
    let book = await BookModel.create({ name, author});
    .catch(err => res.status(500).send(err));
    res.redirect('/books');
}
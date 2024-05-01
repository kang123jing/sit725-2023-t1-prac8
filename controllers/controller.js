const collection = require('../models/cat');

const postCat = (req, res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        } else {
            res.status(500).json({ statusCode: 500, message: 'Failed to post cat', error: err });
        }
    });
}

const getAllCats = (req, res) => {
    collection.getAllCats((error, result) => {
        if (!error) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        } else {
            res.status(500).json({ statusCode: 500, message: 'Failed to get all cats', error: error });
        }
    });
}

const deleteCat = (req, res) => {
    let cat = req.body;
    collection.deleteOne(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 200, message: 'Cat deleted successfully', data: result });
        } else {
            res.status(500).json({ statusCode: 500, message: 'Failed to delete cat', error: err });
        }
    });
}

module.exports = { postCat, getAllCats, deleteCat };

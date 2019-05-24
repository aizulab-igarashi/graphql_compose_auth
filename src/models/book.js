import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookModel = new Schema({
    title: String,
    author: String
});

export default mongoose.model('Book', BookModel);

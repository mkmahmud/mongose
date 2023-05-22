import mongoose, { Model, Schema, model } from "mongoose";
import { Books } from "./books.interface";

const booksSchema = new Schema<Books>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publication: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    publisher: {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    },
    reviews: [
        {
            user: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ]
})

const bookSchema = new mongoose.Schema({
    
    rating: { type: Number, required: true }
    
});


// Creating Modal 

export const BooksModal = model<Books>('Books', booksSchema)



// Create the Book model
export const Book = mongoose.model('Book', bookSchema);




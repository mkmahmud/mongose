
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import BooksRoute from "./app/modules/Books/books.route";


app.use('/server', BooksRoute)




export default app
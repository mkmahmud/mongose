import express from "express";
import { SciFiBook, Staticbooks, addBook, fantasyBooks } from "./books.controller";

const router = express.Router();


router.post('/addBook', addBook);
router.get('/fantasyBooks', fantasyBooks);
router.get('/sciFiBook', SciFiBook);
router.get('/Staticbooks', Staticbooks);

export default router;




import express from "express";
import { SciFiBook, Staticbooks, addBook, fantasyBooks, updatebooks } from "./books.controller";

const router = express.Router();


router.post('/addBook', addBook);
router.get('/fantasyBooks', fantasyBooks);
router.get('/sciFiBook', SciFiBook);
router.get('/Staticbooks', Staticbooks);
router.post('/updatebooks', updatebooks);

export default router;




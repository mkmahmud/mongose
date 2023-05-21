import express from "express";
import { SciFiBook, addBook, fantasyBooks } from "./books.controller";

const router = express.Router();


router.post('/addBook', addBook);
router.get('/fantasyBooks', fantasyBooks);
router.get('/sciFiBook', SciFiBook);

export default router;




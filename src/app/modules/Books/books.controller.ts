import { NextFunction, Request, Response } from "express";
import { addNewBook, getFantasyBooks, getSciFiBooks, retrieveFeaturedBooks } from "./books.services";

export const addBook = async (req: Request, res: Response, next: NextFunction) => {


    const data = req.body;
    const book = await addNewBook(data)
    res.status(200).json({
        status: 'success',
        data: book
    })

}

export const fantasyBooks = async (req: Request, res: Response, next: NextFunction) => {


    const book = await getFantasyBooks()
    res.status(200).json({
        status: 'success',
        data: book
    })

}
export const SciFiBook = async (req: Request, res: Response, next: NextFunction) => {


    const book = await getSciFiBooks()
    res.status(200).json({
        status: 'success',
        data: book
    })

}
export const Staticbooks = async (req: Request, res: Response, next: NextFunction) => {


    const book = await retrieveFeaturedBooks()
    res.status(200).json({
        status: 'success',
        data: book
    })

}
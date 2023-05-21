import { Books } from "./books.interface";
import BooksModal from "./books.model";


export const addNewBook = async (payload: Books): Promise<Books> => {
    const book = await new BooksModal(payload);
    await book.save()
    console.log(book)
    return book;
}

export const getFantasyBooks = async () => {

    const fantasybook = await BooksModal.find({ genre: 'Fantasy' })

    return fantasybook
} 

export const getSciFiBooks = async () => {

    const fantasybook = await BooksModal.find({ genre: 'Sci-Fi', publication:'Roli Books' })

    return fantasybook
} 
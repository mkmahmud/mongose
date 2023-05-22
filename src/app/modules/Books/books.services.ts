import { Books } from "./books.interface";
import { Book, BooksModal } from "./books.model";


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

    const fantasybook = await BooksModal.find({ genre: 'Sci-Fi', publication: 'Roli Books' })

    return fantasybook
}


export const retrieveFeaturedBooks = () => {
    return Book.find({ rating: { $gte: 4 } })
        .then(books => {
            const featuredBooks = books.map(book => {
                const featured = book.rating > 4.5 ? 'BestSeller' : 'Popular';
                return { ...book._doc, featured };
            });
            return featuredBooks;
        })
        .catch(error => {
            throw error;
        });
};



export const upBooks = async () => {

    const updateBook = await BooksModal.updateMany({
        year: { $gt: 2020 },
        price: { $type: 'string' }
    },
        [
            {
                $set: {
                    price: {
                        $convert: {
                            input: '$price',
                            to: 'int',
                            onError: 0,
                            onNull: 0
                        }
                    }
                }
            }
        ]
    )

    return updateBook

} 
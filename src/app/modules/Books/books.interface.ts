export interface Books {
    id: String;
    title: String;
    author: String;
    genre: String;
    publication: String;
    year: number;
    rating: number;
    price: number;
    publisher: {
        name: String;
        location: String;
    };
    reviews: [
        {
            user: String;
            comment: String;
        },
        {
            user: String;
            comment: String;
        }
    ]

}





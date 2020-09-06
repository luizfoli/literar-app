export const initialState = {
    booksToRead: [],
    booksReading: [],
    booksReaded: []
};

export const UserReduce = (state, action) => {
    switch(action.type) {
        case 'setBookToRead':
            return {...state, booksToRead: booksToRead.push(action.payload.book)};
        break;
        default:
            return state;
    }
};
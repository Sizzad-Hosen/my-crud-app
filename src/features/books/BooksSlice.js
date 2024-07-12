import { createSlice } from '@reduxjs/toolkit'


const initialBooks = {
    books: [
      { id: 1, title: "Man is not alive alone", author: "Me" ,price:500 , quantity:2},
      { id: 2, title: "Everygreen bangladesh", author: "brusly",price:180 , quantity:5 },
    ],

  };
export const booksSlice = createSlice({
    name:"books",
    initialState: initialBooks,
    reducers:{
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        }, 
        updateBook: (state, action) => {
            const { id, title, author,price,quantity } = action.payload;
            const isBookExist = state.books.find((book) => book.id === id);

            if (isBookExist) {
              isBookExist.title = title;
              isBookExist.author = author;
              isBookExist.price = price;
              isBookExist.quantity = quantity;
            }
          },

        deleteBooks : (state,action)=>{
            const id = action.payload;
            state.books = state.books.filter((book)=>book.id !== id)

        }
    },
});

export const {showBooks, addBook,  updateBook,  deleteBooks} = booksSlice.actions
export default booksSlice.reducer;
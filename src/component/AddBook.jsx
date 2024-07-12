import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook ,updateBook} from "../features/books/BooksSlice";

const AddBook = ({bookToEdit, onCancle}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      dispatch(updateBook(book));
    } else {
      dispatch(addBook({ ...book, id: nanoid() }));
    }
    setBook({
      title: '',
      author: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            id="price"
            name="price"
            value={book.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={book.quantity}
            onChange={handleChange}
            required
          />
        </div>
     
        <button   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{bookToEdit ? 'Update Book' : 'Add Book'}</button>
     {bookToEdit &&  <button onClick={onCancle}>Cancle</button>}
      </form>
    </div>
  );
};

export default AddBook;

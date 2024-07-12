import { useDispatch, useSelector} from 'react-redux'
import  { deleteBooks} from "../features/books/BooksSlice"

const BookView = ({onhandle}) => {

//  bookreducer e data store korsi ekta central jaigai..seta theke access kortesi
// bookreducer er morda books gula ase..tai nisi....

    const books = useSelector((state) => state.booksReducer.books);

    const dispatch = useDispatch()

    // delete handeler set 
    const handlerDelete =(id)=>{
        dispatch(deleteBooks(id))
        onhandle(deleteBooks);
    }
    const handlerEdit=(book)=>{
        onhandle(book);
    }
    return (
        <div>
      <h2>List of Books</h2>
      <table>
        <thead>
          <tr >
            {/* <th>ID</th> */}
            <th className='p-2'>Title</th>
            <th className='p-2'>Author</th>
            <th className='p-2'>Price</th>
            <th className='p-2'>Quantity</th>
            <th className='p-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
          
            books &&
            books.map((book) => {
         
              return (
                <tr key={book.id}>
                  {/* <td>{id}</td> */}
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.quantity}</td>

                  <td>
                  <button onClick={()=>handlerEdit(book)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                    </button>
                    
              {/* delete */}
                  </td>
                  <td>
                  <button onClick={()=>handlerDelete(book.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                    </button>
                    
              {/* delete */}
                  </td>


                </tr>
              );
            })}

        </tbody>
      </table>
    </div>
    );
};

export default BookView;
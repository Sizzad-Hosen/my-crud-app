
import { useState } from 'react'
import './App.css'
import AddBook from './component/AddBook'
import BookView from './component/BookView'

function App() {
  const [bookToEdit,setBookToEdit] = useState();
const handleEdit = (book)=>{
  setBookToEdit(book);
}
const handleCancle = (book)=>{
  setBookToEdit(null);
}

  return (
    <>
    <AddBook bookToEdit={bookToEdit} onCancle={handleCancle}></AddBook>
    <BookView onhandle={handleEdit }></BookView>
      
    </>
  )
}

export default App

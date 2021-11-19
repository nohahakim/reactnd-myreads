import React from 'react';
import { Link } from 'react-router-dom';


import Shelf from "./Shelf";


 function BookCase (props) {
  
    const {books, shelfChanger}= props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf key='currentReadShelf' shelfChanger={shelfChanger} name="Currently Reading" books={books.filter(b => b.shelf === "currentlyReading")} />
            <Shelf key='wantReadShelf' shelfChanger={shelfChanger} name="Want To Read" books={books.filter(b => b.shelf === "wantToRead")} />
            <Shelf key='readShelf' shelfChanger={shelfChanger} name="Read" books={books.filter(b => b.shelf === "read")} />

          </div>
        </div>
        <div className="open-search">
          <Link to='/search' >Add a book</Link>
        </div>
      </div>

    )
  
}


export default BookCase;
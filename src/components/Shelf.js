import React from "react";
import Book from "./Book";

function Shelf (props){    
  const {books, shelfChanger, name}= props
        return(
          <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        books.map((book)=> <Book shelfChanger={shelfChanger} book={book} key= {book.id}/>)
                      }
                    </ol>
                </div>
            </div>              
          
        )    
} 

export default Shelf;
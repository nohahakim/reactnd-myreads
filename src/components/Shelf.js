import React from "react";
import Book from "./Book";
import PropTypes from 'prop-types'


function Shelf(props) {
  const { books, shelfChanger, name } = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((book) => <Book shelfChanger={shelfChanger} book={book} key={book.id} />)
          }
        </ol>
      </div>
    </div>

  )
}
Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfChanger: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}


export default Shelf;
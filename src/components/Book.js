import React from "react";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from 'prop-types'


function Book(props) {

    const { book, shelfChanger } = props;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks && `url(${book.imageLinks.thumbnail})`) }}></div>
                <BookShelfChanger book={book}
                    shelfChanger={shelfChanger}
                />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
    )
}
Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelfChanger: PropTypes.func.isRequired,
}


export default Book;
// import React, { Component } from "react";
import React from "react";

import BookShelfChanger from "./BookShelfChanger";

function Book (props) {
  
        const { book, shelfChanger, shelf } = props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (props.book.imageLinks && `url(${props.book.imageLinks.thumbnail})`) }}></div>
                    <BookShelfChanger book={book}
                        shelfChanger={shelfChanger}
                        shelf={shelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )    
}

export default Book;
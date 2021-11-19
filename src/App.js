import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import BookCase from './components/BookCase'
import SearchPage from './components/SearchPage'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  fetchAllBooks = () => {
    BooksAPI.getAll()
      .then(resp => {
        this.setState({ books: resp });
      });
  }

  componentDidMount() {
    this.fetchAllBooks();
  }

  updateSearch = (query) => {
    if (query) {
      BooksAPI.search(query.trim()).then(res => {
        if (res.error) {
          return this.setState({ searchResults: [] });
        }
        else {
          res.map(searchedBook => {
            this.state.books.forEach(book => {
              if (searchedBook.id === book.id) {
                searchedBook.shelf = book.shelf;
              }
            });
            return this.setState({ searchResults: res });
          });
        }
      })

    } else {
      this.setState({ searchedResults: [] })
    }

  }
  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(resp => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
      });
  }

  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<BookCase books={this.state.books} shelfChanger={this.shelfChanger} />} />

          <Route exact path="search" element={<SearchPage searchResults={this.state.searchResults}
            updateSearch={this.updateSearch}
            shelfChanger={this.shelfChanger} />} />
        </Routes>


      </div>
    )
  }
}

export default BooksApp

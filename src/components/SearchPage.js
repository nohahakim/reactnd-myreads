import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Book from "./Book";
import PropTypes from 'prop-types';
import {DebounceInput} from 'react-debounce-input';


class SearchPage extends Component {
    state = {
        query: ''
    };

    updateQuery = (query) => {
        this.setState({ query: query });
        this.props.updateSearch(query)
    }
    render() {
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/" className="close-search" >Close</Link>
                        <div className="search-books-input-wrapper" onSubmit={(event) => event.preventDefault()} >

                            <DebounceInput type="text" placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(event) => this.updateQuery(event.target.value)} 
                                debounceTimeout={300}
                                />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                            {
                                this.props.searchResults.map((book) => <Book shelfChanger={this.props.shelfChanger} book={book} key={book.id} />)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}
SearchPage.propTypes = {
    searchResults: PropTypes.array.isRequired,
    shelfChanger: PropTypes.func.isRequired,
    updateSearch: PropTypes.func.isRequired,
}

export default SearchPage;
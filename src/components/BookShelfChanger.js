import React from "react"
import PropTypes from 'prop-types'


function BookShelfChanger(props) {

    const { book, shelfChanger } = props

    return (
        <div className="book-shelf-changer">
            <select value={book.shelf || 'none'}
                onChange={(e) => { shelfChanger(book, e.target.value) }}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    shelfChanger: PropTypes.func.isRequired,
}


export default BookShelfChanger;
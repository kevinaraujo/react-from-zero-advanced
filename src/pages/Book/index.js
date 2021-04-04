import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, updateBookAmount } from './../../store/modules/Book/actions';

import { MdDelete, MdRemoveCircle, MdAddCircle } from 'react-icons/md'; 
import './styles.css';

const Book = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.book);
    
    let title = `You requested ${books.length} book`;

    if (books.length > 1) {
        title = title.replace('book', 'books');
    }

    function handleRemove (id) {
        dispatch(removeBook(id));
    }

    function incrementAmount(book) {
        dispatch(updateBookAmount(book.id, book.amount + 1));
    }

    function decrementAmount(book) {
        dispatch(updateBookAmount(book.id, book.amount - 1));
    }

    return (
        <div>
            <h1 className="title">{ title }</h1>

            { books.map(book => (
                <div className="div-books" key={ book.id }>
                    <img src={ book.image } alt={ book.title }/>
                    <strong>{ book.title }</strong>

                    <div id="amount">
                        <button type="button" onClick={() => decrementAmount(book)}>
                            <MdRemoveCircle size={25} color="#191919"/>
                        </button>
                        <input type="text" readOnly value={ book.amount }/>
                        <button type="button" onClick={() => incrementAmount(book)}>
                            <MdAddCircle size={25} color="#191919"/>
                        </button>
                    </div>

                    <button
                    type="button"
                    onClick={() => handleRemove(book.id)}
                    >
                        <MdDelete size={20} color="#191919"/>
                    </button>
                </div>
            ))}
        
            <footer>
                <button type="button">Request book</button>
            </footer>
        </div>
    );
}
export default Book;
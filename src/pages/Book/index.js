import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md'; 
import './styles.css';

const Book = () => {
    const books = useSelector(state => state.book);
    
    let title = `You requested ${books.length} book`;

    if (books.length > 1) {
        title = title.replace('book', 'books');
    }

    return (
        <div>
            <h1 className="title">{ title }</h1>

            { books.map(book => (
                <div className="div-book" key={ book.id }>
                    <img src={ book.image } alt={ book.title }/>
                    <strong>{ book.title }</strong>
                    <span>Quantity: { book.amount }</span>
                    <button
                    type="button"
                    onClick={() => {}}
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
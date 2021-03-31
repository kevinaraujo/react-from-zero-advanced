import React from 'react';
import { MdDelete } from 'react-icons/md'; 
import './styles.css';

const Book = () => {
    return (
        <div>
            <h1 className="title">You requested 1 book</h1>
            <div className="div-book">
                <img 
                src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/caribe.jpg"
                alt="Maceio"
                />
                <strong>Trip Maceió 7 days</strong>
                <span>Quantity: 2</span>
                <button
                    type="button"
                    onClick={() => {}}
                >
                    <MdDelete size={20} color="#191919"/>
                </button>
            </div>

            <footer>
                <button type="button">Request book</button>
            </footer>
        </div>
    );
}
export default Book;
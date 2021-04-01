import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import './style.css';

export default function Header() {
    const books = useSelector(state => state.book);
    let totalBooks = `${books.length} book`;
   
    if (books.length > 1) {
        totalBooks = totalBooks.replace('book', 'books');
    }

    return (
        <header className="container">
            <Link to="/">
                <img src={logo} className="logo" alt="Project logo"/>
            </Link>

            <Link className="book" to="/book">
                <div>
                    <strong>My Books</strong>
                    <span>{ totalBooks }</span>
                </div>
            </Link>
        </header>
    );
}
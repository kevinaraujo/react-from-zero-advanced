import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import './style.css';

export default function Header() {
    return (
        <header className="container">
            <Link to="/">
                <img src={logo} className="logo" alt="Project logo"/>
            </Link>

            <Link className="reservation" to="/reservations">
                <div>
                    <strong>My Reservations</strong>
                    <span>0 reservation</span>
                </div>
            </Link>
        </header>
    );
}
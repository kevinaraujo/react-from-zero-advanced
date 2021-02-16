import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">Developer Blog</Link>
                <Link to="/login">Sign in</Link>
            </div>
        </header>
    );
}

export default Header;
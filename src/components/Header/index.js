import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

const Header = () => {
    return (
        <header>
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link smooth to="#home">Home</Link></li>
                        <li><Link smooth to="#about">Sobre</Link></li>
                        <li><Link smooth to="#contact">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    ); 
}
export default Header;
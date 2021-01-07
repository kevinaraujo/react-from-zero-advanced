import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

const Start = () => {
    return (
        <div className="home" id="contact">
            <h1>Contact</h1>
            <h2>Phone: (11) 96772-0277</h2>
            <h3>Address: 1th Avenue</h3>
            <Link smooth to="#home" style={{color: '#fff'}}>Go to Home</Link>
        </div>
    ); 
}
export default Start;
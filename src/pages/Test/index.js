import React from 'react';
import Cookies from 'universal-cookie';

const Test = () => {
    const cookies = new Cookies();
    let u = cookies.get('user');
    console.log('u', u);
    return(
        <div>Test Page</div>
    );
}

export default Test;
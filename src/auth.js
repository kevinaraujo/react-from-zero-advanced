import Cookies from 'universal-cookie';

export const authenticated = () => {  
    const cookies = new Cookies();
 
    const cookie = cookies.get('user');

    if (typeof cookie === 'undefined') {
        return false;
    }
    
    return true;
}

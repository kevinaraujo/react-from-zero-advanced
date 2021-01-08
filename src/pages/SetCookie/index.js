import Cookies from 'universal-cookie';

const SetCookie = () => {
       
    const user = { name: 'Kevin' };

    const cookies = new Cookies();
    cookies.set('user', user, {
        expires: new Date(Date.now()+60000)
    });

    return (
        <div>
            Cookies set!
        </div>
    );
}

export default SetCookie;
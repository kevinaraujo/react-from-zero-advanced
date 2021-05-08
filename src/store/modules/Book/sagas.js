import { select, call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookSuccess, updateBookSuccess } from './actions';
import api from '../../../services/api';    
import history from '../../../services/history';    

function* addToBook({ id }) {

    const tripExists = yield select(
        state => state.book.find(trip => trip.id === id)
    );

    const response = yield call(api.get, `/stock/${id}`);
        
    const stockAmount = response.data.amount;
    const currentStock = tripExists ? tripExists.amount : 0;
        
    if ((currentStock + 1) > stockAmount) {
        alert('Max quantity reached!');
        return;
    }

    if (tripExists) {

        const amount = tripExists.amount + 1;
        yield put(updateBookSuccess(id, amount));

    } else {
        const response = yield call(api.get, `trips/${id}`);

        const data = {
            ...response.data,
            amount: 1
        };

        yield put(addBookSuccess(data));

        history.push('/book');
    }    
}

function* updateAmount({ id, amount}) {
    if (amount <= 0) return;

    const myStock = yield call(api.get, `/stock/${id}`);   

    const stockAmount = myStock.data.amount;
    
    if (amount > stockAmount) {
        alert('Max quantity reached!');
        return;
    }

    yield put(updateBookSuccess(id, amount));
}

export default all([
    takeLatest('ADD_BOOK_REQUEST', addToBook),
    takeLatest('UPDATE_BOOK_REQUEST', updateAmount)
]);
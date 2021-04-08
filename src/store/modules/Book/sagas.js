import { call, put, all, takeLatest } from 'redux-saga/effects';
import { addBookSuccess } from './actions';
import api from '../../../services/api';    

function* addToBook({ id }) {
    const response = yield call(api.get, `trips/${id}`);

    yield put(addBookSuccess(response.data));
}

export default all([
    takeLatest('ADD_BOOK_REQUEST', addToBook)
]);
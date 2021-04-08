import { all } from 'redux-saga/effects';

import book from './Book/sagas';

export default function* rootSaga() {
    return yield all([
        book
    ])
}
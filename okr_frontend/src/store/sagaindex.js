import { takeEvery, takeLatest } from 'redux-saga/effects'
import { incrementCounter } from './appsaga';

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", incrementCounter);
}

export default mySaga;
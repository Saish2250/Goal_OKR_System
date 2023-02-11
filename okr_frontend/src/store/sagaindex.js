import { takeEvery, takeLatest } from 'redux-saga/effects'
import { adminlogin, signupcalled } from './appsaga';
import API from '../services/Api';

const api = API.create();

function* mySaga() {
    yield takeEvery("loginadmincalled", adminlogin, api);
    yield takeEvery("signupcalled", signupcalled, api);
}

export default mySaga;
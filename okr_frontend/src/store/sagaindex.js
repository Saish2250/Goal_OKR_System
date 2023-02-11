import { takeEvery, takeLatest } from 'redux-saga/effects'
import { adminlogin } from './appsaga';
import API from '../services/Api';

const api = API.create();

function* mySaga() {
    yield takeEvery("loginadmincalled", adminlogin, api);
}

export default mySaga;
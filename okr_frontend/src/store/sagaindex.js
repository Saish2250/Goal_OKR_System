import { takeEvery, takeLatest } from 'redux-saga/effects'
import { adminlogin, signupcalled, createTeam, getTeams, createObj } from './appsaga';
import API from '../services/Api';

const api = API.create();

function* mySaga() {
    yield takeEvery("loginadmincalled", adminlogin, api);
    yield takeEvery("signupcalled", signupcalled, api);
    yield takeEvery("createteamcalled", createTeam, api);
    yield takeEvery("getTeamsCalled", getTeams, api);
    yield takeEvery("createObjcalled", createObj, api);
}

export default mySaga;
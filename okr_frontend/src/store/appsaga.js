import { call, put } from 'redux-saga/effects'
import { increment, decrement } from './appredux';

export function* incrementCounter(action) {
    try {
       yield put(increment());
       console.log("Try block");
    } catch (e) {
        console.log("Catch block");
    }
}

export function* decrementCounter(action) {
    try {
       yield put(decrement());
       console.log("Try block");
    } catch (e) {
        console.log("Catch block");
    }
}
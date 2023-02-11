import { call, put } from 'redux-saga/effects'
import { setadminlogintrigger, setadminloginerror, setadminloginsuccess, setsignuperror, setsignupsuccess, setsignuptrigger } from './appredux';
import Api from "./../services/ApiCaller";

// export function* incrementCounter(action) {
//     try {
//        yield put(increment());
//        console.log("Try block");
//     } catch (e) {
//         console.log("Catch block");
//     }
// }

// export function* createBank(api, { payload = {} }) {
//     yield put(createBankTrigger(true));
//     try {
//       const {} = payload;
//       const token = yield getAccessToken();
//       const result = yield call(
//         Api.callServer,
//         api.addBank,
//         {
//           BankName,
//           address,
//           logoBgColor,
//           exchangeSymbol,
//           BankDetails,
//           bankCode,
//           token,
//         },
//         true
//       );
//       yield put(createBankSuccess(result));
//       const result2 = yield call(
//         Api.callServer,
//         api.getAllBanks,
//         {
//           token,
//         },
//         true
//       );
//       yield put(getBankSuccess(result2));
//     } catch (e) {
//       yield put(createBankFailure(e));
//     } finally {
//       yield put(createBankTrigger(false));
//     }
//   }

export function* adminlogin(api, {payload}){
    try{
        yield put(setadminlogintrigger(true));
        yield put(setadminloginerror({}));
        const {email,password, navigation} = payload;
        const result = yield call(
            Api.callServer,
            api.adminlogin,
            {
                emailid : email,
                password
            },
            true
        );
        if(result != null){
            yield put(setadminloginsuccess(result));
            navigation('/');
        }
    } catch(e){
        yield put(setadminloginerror(e));
    } finally{
        yield put(setadminlogintrigger(false));
    }
}

export function* signupcalled(api, {payload}){
    try{
        yield put(setsignuptrigger(true));
        yield put(setsignuperror({}));
        const {email, first_name, last_name, navigation} = payload;
        const result = yield call(
            Api.callServer,
            api.signup,
            {
                emailid : email,
                name : first_name + " " + last_name
            },
            false
        );
        if(result != null){
            yield put(setsignupsuccess(result));
            navigation('/signin');
        }
    } catch(e){
        yield put(setsignuperror(e));
    } finally{
        yield put(setsignuptrigger(false));
    }
}
import { call, put } from 'redux-saga/effects'
import { 
    setadminlogintrigger, 
    setadminloginerror, 
    setadminloginsuccess, 
    setsignuperror, 
    setsignupsuccess, 
    setsignuptrigger,
    setGetTeamsSuccess
} from './appredux';
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

export function* createTeam(api, {payload}){
    try{
        const {teamname, teamcolor, teamtitle, navigation} = payload;
        const result = yield call(
            Api.callServer,
            api.createTeam,
            {
                teamname,
                teamcolor,
                teamtitle
            },
            false
        );
        if(result != null){
            console.log("Hello");
            navigation('/');
        }
    } catch(e){
    } finally{
    }
}

export function* getTeams(api, {payload}){
    try{
        const result = yield call(
            Api.callServer,
            api.getTeams,
            {},
            false
        );
        if(result){
            console.log(result)
            yield put(setGetTeamsSuccess(result))
        }
    } catch(e){
    } finally{
    }
}

export function* createObj(api, {payload}){
    try{
        const { teamid, objective } = payload;
        const result = yield call(
            Api.callServer,
            api.createObjective,
            {
                teamid,
                objective,
                userid: 'c34176ad-ada0-48fd-bf72-463397ff031b'
            },
            false
        );
    } catch(e){
    } finally{
    }
}
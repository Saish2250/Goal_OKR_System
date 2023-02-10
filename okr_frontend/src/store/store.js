import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import mySaga from './sagaindex'
import appredux from './appredux'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    app : appredux
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware : [
        ...getDefaultMiddleware({
            thunk: false,
            serializableCheck: false
        }),
        sagaMiddleware
    ]
})

sagaMiddleware.run(mySaga);

let persistor = persistStore(store);

export {persistor, store} 
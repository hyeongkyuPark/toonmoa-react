import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, applyMiddleware } from "redux";
import webtoonReducer, { webtoonSaga } from "./webtoon/webtoon";


function* rootSaga() {
    yield all([
        webtoonSaga()
    ]);
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    webtoon: webtoonReducer
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
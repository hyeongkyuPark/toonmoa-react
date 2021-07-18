import { takeLatest } from '@redux-saga/core/effects';
import * as webtoonAPI from '../../api/webtoonAPI';
import { createAsync } from '../../util/asyncUtil';

export const GET_RECOMMEND_TOON = 'GET_RECOMMEND_TOON';
export const GET_RECOMMEND_TOON_SUCCESS = 'GET_RECOMMEND_TOON_SUCCESS';
export const GET_RECOMMEND_TOON_ERROR = 'GET_RECOMMEND_TOON_ERROR';
export const GET_MY_TOON = 'GET_MY_TOON';
export const GET_MY_TOON_SUCCESS = 'GET_MY_TOON_SUCCESS';
export const GET_MY_TOON_ERROR = 'GET_MY_TOON_ERROR';

const initialState = {
    recommendToon: {
        loading: false,
        data: null,
        error: null
    },
    myToon: {
        loading: false,
        data: null,
        error: null
    }
}

const {
    actionCreator: getRecommendToon,
    reducer: recommedToonReducer,
    saga: getRecommendToonSaga } = createAsync(initialState, GET_RECOMMEND_TOON, 'recommendToon', webtoonAPI.getRecommendToon);

const {
    actionCreator: getMyToon,
    reducer: myToonReducer,
    saga: getMyToonSaga } = createAsync(initialState, GET_MY_TOON, 'myToon', webtoonAPI.getMyToon);

export function* webtoonSaga() {
    yield takeLatest(GET_RECOMMEND_TOON, getRecommendToonSaga);
    yield takeLatest(GET_MY_TOON, getMyToonSaga);
}

const webtoonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECOMMEND_TOON:
        case GET_RECOMMEND_TOON_SUCCESS:
        case GET_RECOMMEND_TOON_ERROR:
            return recommedToonReducer(state, action);
        case GET_MY_TOON:
        case GET_MY_TOON_SUCCESS:
        case GET_MY_TOON_ERROR:
            return myToonReducer(state, action);
        default:
            return state;
    }
}

export {
    getRecommendToon,
    getMyToon
};
export default webtoonReducer;
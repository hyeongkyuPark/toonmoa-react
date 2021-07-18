import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as webtoonAPI from '../../api/webtoonAPI';
import { createAsync } from '../../util/asyncUtil';

export const GET_RECOMMEND_TOON = 'GET_RECOMMEND_TOON';
export const GET_RECOMMEND_TOON_SUCCESS = 'GET_RECOMMEND_TOON_SUCCESS';
export const GET_RECOMMEND_TOON_ERROR = 'GET_RECOMMEND_TOON_ERROR';
export const GET_MY_TOON = 'GET_MY_TOON';
export const GET_MY_TOON_SUCCESS = 'GET_MY_TOON_SUCCESS';
export const GET_MY_TOON_ERROR = 'GET_MY_TOON_ERROR';
export const REMOVE_MY_TOON = 'REMOVE_MY_TOON';
export const REMOVE_MY_TOON_SUCCESS = 'REMOVE_MY_TOON_SUCCESS';
export const REMOVE_MY_TOON_ERROR = 'REMOVE_MY_TOON_ERROR';

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
const removeMyToon = (id) => ({ type: REMOVE_MY_TOON, id: id });

function* removeMyToonSaga(action) {
    try {
        console.log(action);
        yield call(webtoonAPI.removeMyToonById, action.id);
        yield put({ type: REMOVE_MY_TOON_SUCCESS, payload: action.id });
    } catch (e) {
        console.log(e);
        yield put({ type: REMOVE_MY_TOON_ERROR, payload: e });
    }
};

export function* webtoonSaga() {
    yield takeLatest(GET_RECOMMEND_TOON, getRecommendToonSaga);
    yield takeLatest(GET_MY_TOON, getMyToonSaga);
    yield takeLatest(REMOVE_MY_TOON, removeMyToonSaga);
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
        case REMOVE_MY_TOON:
            return {
                ...state,
                myToon: {
                    loading: true,
                    data: state.myToon.data,
                    error: null,
                }
            }
        case REMOVE_MY_TOON_SUCCESS:
            return {
                ...state,
                myToon: {
                    loading: false,
                    data: state.myToon.data.filter(toon => toon.id !== action.payload),
                    error: null,
                }
            }
        case REMOVE_MY_TOON_ERROR:
            return {
                ...state,
                myToon: {
                    loading: false,
                    data: null,
                    error: action.payload,
                }
            }
        default:
            return state;
    }
}

export {
    getRecommendToon,
    getMyToon,
    removeMyToon
};
export default webtoonReducer;
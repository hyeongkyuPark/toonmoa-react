import { call, put, takeLatest } from '@redux-saga/core/effects';
import { cancel, delay, fork, take } from 'redux-saga/effects';
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
export const OPEN_DETAIL_MY_TOON = 'OPEN_DETAIL_MY_TOON';
export const OPEN_DETAIL_MY_TOON_SUCCESS = 'OPEN_DETAIL_MY_TOON_SUCCESS';
export const OPEN_DETAIL_MY_TOON_ERROR = 'OPEN_DETAIL_MY_TOON_ERROR';
export const cLOSE_DETAIL_MY_TOON = 'cLOSE_DETAIL_MY_TOON';
export const cLOSE_DETAIL_MY_TOON_SUCESS = 'cLOSE_DETAIL_MY_TOON_SUCESS';
export const OPEN_DETAIL_ONLY = 'OPEN_DETAIL_ONLY';

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
    },
    detailMyToon: {
        isOpend: false,
        selectToon: null,
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
const detailMyToon = (toon) => ({ type: OPEN_DETAIL_MY_TOON, toon: toon });
const closeDetailMyToon = () => ({ type: cLOSE_DETAIL_MY_TOON });
const oepnDetailMyToon = () => ({ type: OPEN_DETAIL_ONLY });

function* removeMyToonSaga(action) {
    try {
        yield call(webtoonAPI.removeMyToonById, action.id);
        yield put({ type: REMOVE_MY_TOON_SUCCESS, payload: action.id });
    } catch (e) {
        yield put({ type: REMOVE_MY_TOON_ERROR, payload: e });
    }
};

function* detailMyToonSaga(id) {
    try {
        const payload = yield call(webtoonAPI.detailMyToonById, id);
        console.log(payload);
        yield delay(3000);
        yield put({ type: OPEN_DETAIL_MY_TOON_SUCCESS, payload });
    } catch (e) {
        yield put({ type: OPEN_DETAIL_MY_TOON_ERROR, payload: e });
    }
}

function* detailFlow() {
    while (true) {
        const { toon } = yield take(OPEN_DETAIL_MY_TOON);
        const task = yield fork(detailMyToonSaga, toon.id);
        yield take(cLOSE_DETAIL_MY_TOON);
        yield cancel(task);
    }
}

export function* webtoonSaga() {
    yield takeLatest(GET_RECOMMEND_TOON, getRecommendToonSaga);
    yield takeLatest(GET_MY_TOON, getMyToonSaga);
    yield takeLatest(REMOVE_MY_TOON, removeMyToonSaga);
    yield call(detailFlow);
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
        case OPEN_DETAIL_MY_TOON:
            return {
                ...state,
                detailMyToon: {
                    isOpend: true,
                    selectToon: action.toon,
                    loading: true,
                    data: null,
                    error: null,
                }
            }
        case OPEN_DETAIL_MY_TOON_SUCCESS:
            return {
                ...state,
                detailMyToon: {
                    isOpend: true,
                    selectToon: state.detailMyToon.selectToon,
                    loading: false,
                    data: action.payload,
                    error: null,
                }
            }
        case OPEN_DETAIL_MY_TOON_ERROR:
            return {
                ...state,
                detailMyToon: {
                    isOpend: true,
                    selectToon: state.detailMyToon.selectToon,
                    loading: false,
                    data: null,
                    error: action.payload,
                }
            }
        case cLOSE_DETAIL_MY_TOON:
            return {
                ...state,
                detailMyToon: {
                    isOpend: false,
                    selectToon: state.detailMyToon.selectToon,
                    loading: false,
                    data: state.detailMyToon.data,
                    error: null,
                }
            }
        case OPEN_DETAIL_ONLY:
            return {
                ...state,
                detailMyToon: {
                    isOpend: true,
                    selectToon: state.detailMyToon.selectToon,
                    loading: false,
                    data: state.detailMyToon.data,
                    error: null,
                }
            }
        default:
            return state;
    }
}

export {
    getRecommendToon,
    getMyToon,
    removeMyToon,
    detailMyToon,
    closeDetailMyToon,
    oepnDetailMyToon
};
export default webtoonReducer;
import { call, put } from '@redux-saga/core/effects';

export const createAsync = (initialState, initialType, name, asyncApi) => {
    const [SUCCESS, ERROR] = [`${initialType}_SUCCESS`, `${initialType}_ERROR`];

    const actionCreator = () => ({ type: initialType });

    function* saga() {
        try {
            const toon = yield call(asyncApi);

            yield put({ type: SUCCESS, payload: toon });
        } catch (e) {
            yield put({ type: ERROR, payload: e });
        }
    };

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case initialType:
                return {
                    ...state,
                    [name]: {
                        loading: true,
                        data: state[name].data,
                        error: null
                    }
                };
            case SUCCESS:
                return {
                    ...state,
                    [name]: {
                        loading: false,
                        data: action.payload,
                        error: null
                    }
                };
            case ERROR:
                return {
                    ...state,
                    [name]: {
                        loading: false,
                        data: null,
                        error: action.payload
                    }
                };
            default:
                return state;
        }
    }

    return { actionCreator, saga, reducer };
}
import {
    FETCH_AUTH_START,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_FAILURE,
    LOGOUT
} from "./types";

const initialState = {
    isAuthenticated: false,
    isFetching: true,
    isFetched: false,
    user: null,
    errorMessage: undefined
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_AUTH_START:
        return {
            ...state,
            isFetching: true
        };
    case FETCH_AUTH_SUCCESS:
        return {
            ...state,
            user: action.payload,
            isFetching: false,
            isFetched: true,
            isAuthenticated: true,
            errorMessage: undefined
        };
    case LOGOUT:
    case FETCH_AUTH_FAILURE:
        return {
            ...state,
            isAuthenticated: false,
            isFetching: false,
            isFetched: false,
            user: null,
            errorMessage: action.payload
        }
    default:
        return state;
    }
};

export default authReducer;

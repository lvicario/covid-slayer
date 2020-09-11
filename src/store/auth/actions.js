import { mockApi } from "@src/apis";

import {
    FETCH_AUTH_START,
    FETCH_AUTH_SUCCESS,
    FETCH_AUTH_FAILURE,
    LOGOUT
} from "./types";

export const fetchAuthStart = () => {
    return {
        type: FETCH_AUTH_START,
    };
};

export const fetchAuthSuccess = data => {
    return {
        type: FETCH_AUTH_SUCCESS,
        payload: data
    }
}

export const fetchAuthFailure = errorMessage => {
    return {
        type: FETCH_AUTH_FAILURE,
        payload: errorMessage
    }
}

export const fetchAuth = loginData => async dispatch => {
    dispatch(fetchAuthStart());

    console.log("loginData:", loginData);

    try {
        const response = await mockApi.post("/signin", loginData);
        console.log("response.data:", response.data);

        dispatch(fetchAuthSuccess(response.data));
    } catch (err) {
        console.dir(err);
        dispatch(fetchAuthFailure("Incorrect credentials..."));
    }
};

export const logout = ()  => dispatch => {
    dispatch({
        type: LOGOUT
    });
};

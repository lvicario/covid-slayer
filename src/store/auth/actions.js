import jwtDecode from "jwt-decode";
import authService from "@services/authService";

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

export const fetchAuth = (data) => async dispatch => {
    dispatch(fetchAuthStart());

    try {
        const result = await authService.login(data);

        loadUserFromStorage(dispatch);
    } catch (err) {
        dispatch(fetchAuthFailure("Error logging in..."));
    }
};

export const loadUserFromStorage = dispatch => {
    try {
        const token = localStorage.getItem("token");
        const decoded = jwtDecode(token);

        dispatch(fetchAuthSuccess(decoded));
    } catch (err) {}
}

export const logout = ()  => dispatch => {
    localStorage.removeItem("token");

    dispatch({
        type: LOGOUT
    });
};


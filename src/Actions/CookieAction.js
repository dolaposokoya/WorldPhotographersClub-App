import { GET_COOKIE, COOKIE_REQUEST, DELETE_COOKIE } from '../ActionType/ActionType';
import { base_url, cookieName } from '../Config/Config';
import CookieManager from '@react-native-cookies/cookies';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useWebKit = true;

export const GetCookieAction = (callback) => {
    return dispatch => {
        dispatch({ type: COOKIE_REQUEST });
        AsyncStorage.getItem('@WPC_USER_SESSION').then(data => {
            if (data !== null) {
                const response = JSON.parse(data)
                dispatch({ type: GET_COOKIE, payload: response });
                callback({ success: true, message: 'Success', data: response, error: false });
            }
            else {
                dispatch({ type: GET_COOKIE, payload: null });
                callback({ success: false, message: 'No cookie present', data: null, error: true });
            }
        }).catch(error => {
            dispatch({ type: GET_COOKIE, payload: error.message });
            callback({ success: false, error: true, message: error.message });
        });
    };
};

export const DeleteCookieAction = (callback) => {
    return dispatch => {
        dispatch({ type: COOKIE_REQUEST });
        AsyncStorage.removeItem('@WPC_USER_SESSION').then(response => {
            dispatch({ type: DELETE_COOKIE, payload: response });
            callback({ success: true, message: 'Success', data: response, error: false });
        }).catch(error => {
            dispatch({ type: DELETE_COOKIE, payload: error.message });
            callback({ success: false, error: true, message: error.message });
        });
    };
};
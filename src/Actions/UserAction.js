import { GET_USER, GET_USER_REQUEST } from '../ActionType/ActionType';
import { base_url } from '../Config/Config';



export const UserAction = (user_id, callback) => {
    return dispatch => {
        dispatch({ type: GET_USER_REQUEST });
        const formData = new FormData()
        formData.append("user_id", user_id);
        formData.append("actionType", GET_USER);
        const requestOptions = {
            method: 'POST',
            body: formData,
        }
        fetch(`${base_url}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success === 1) {
                    dispatch({ type: GET_USER, payload: data, message: 'Success', });
                    callback({ success: data.success, message: 'Success', data: data, error: false });
                }
                else {
                    dispatch({ type: GET_USER, payload: {}, message: 'Something went wrong', });
                    callback({ success: data.success, message: 'Something went wrong', data: data, error: true });
                }
            })
            .catch(error => {
                dispatch({ type: GET_USER, payload: {}, message: error.message });
                callback({
                    error: true, message: error.message
                });
            });
    };
};
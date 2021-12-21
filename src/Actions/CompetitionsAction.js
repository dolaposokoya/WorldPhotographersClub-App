import { COMPETITION, COMPETITION_REQUEST } from '../ActionType/ActionType';
import { base_url } from '../Config/Config';



export const CompetitionAction = (callback) => {
    return dispatch => {
        dispatch({ type: COMPETITION_REQUEST });
        const formData = new FormData()
        formData.append('actionType', COMPETITION)
        formData.append("offset", 1);
        const requestOptions = {
            method: 'POST',
            body: formData,
        }
        fetch(`${base_url}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success === 1) {
                    dispatch({ type: COMPETITION, payload: data });
                    callback({ success: data.success, message: 'Success', data: data, error: false });
                }
                else {
                    dispatch({ type: COMPETITION, payload: data });
                    callback({ success: data.success, message: 'Something went wrong', data: [], error: true });
                }
            })
            .catch(error => {
                dispatch({ type: COMPETITION, payload: [], message: error.message });
                callback({
                    error: true, message: error.message, data: []
                });
            });
    };
};
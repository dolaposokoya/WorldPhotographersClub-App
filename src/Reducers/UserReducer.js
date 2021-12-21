import { GET_USER } from '../ActionType/ActionType';
const initial_state = {
    userData: {},
};

const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, userData: action.payload, message: action.message };
        default:
            return state;
    }
};

export default userReducer;

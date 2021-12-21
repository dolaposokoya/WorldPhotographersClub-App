import { COMPETITION, COMPETITION_REQUEST } from '../ActionType/ActionType';
const initial_state = {
    competitionData: {},
};

const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case COMPETITION:
            return { ...state, competitionData: action.payload };
        default:
            return state;
    }
};

export default userReducer;

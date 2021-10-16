import { USER_DATA_UPDATE, USER_LOGGED_IN } from '../constants/userConstants';

const initState = {
    user: ''
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...state,
                user: action.userData.user
            };
        case USER_DATA_UPDATE:
            return {
                ...state,
                user: action.userData
            }
        default:
            return state;
    }
}

export default reducer;
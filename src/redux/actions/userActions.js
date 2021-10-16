import { USER_DATA_UPDATE, USER_LOGGED_IN } from "../constants/userConstants"

export const setUser = (userData) => {
    return {
        type: USER_LOGGED_IN,
        userData
    }
}

export const updateUserData = (userData) => {
    return {
        type: USER_DATA_UPDATE,
        userData
    }
}
import axios from 'axios';

const url = process.env.REACT_APP_API_URL

export const register = (userDetails) => {
    return axios.post(`${url}/register`, { userDetails })
        .then((response) => response);
}

export const login = (userDetails) => {
    return axios.post(`${url}/signin`, { userDetails })
        .then((response) => response);
}

export const updateEmail = (userDetails) => {
    return axios.put(`${url}/email_settings`, { userDetails })
        .then((response) => response)
}
export const updateName = (userDetails) => {
    return axios.put(`${url}/name_settings`, { userDetails })
        .then((response) => response)
}
export const updateDOB = (userDetails) => {
    return axios.put(`${url}/dob_settings`, { userDetails })
        .then((response) => response)
}
export const updateGender = (userDetails) => {
    return axios.put(`${url}/gender_settings`, { userDetails })
        .then((response) => response)
}
export const updatePassword = (userDetails) => {
    return axios.put(`${url}/password_settings`, { userDetails })
        .then((response) => response)
}


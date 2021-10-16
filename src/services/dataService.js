import axios from 'axios';

const url = process.env.REACT_APP_MF_API

export const fetchAllMutualFunds = () => {
    return axios.get(`${url}`)
        .then((response) => response);
}

export const fetchMFData = (schemeCode) => {
    return axios.get(`https://api.mfapi.in/mf/${schemeCode}`)
        .then((response) => response)
}


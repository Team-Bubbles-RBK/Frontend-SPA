import Axios from 'axios';

const token = localStorage.getItem('token') || '';
const headers = {Authorization: `Bearer ${token}`};

export const HttpRequest = (method, url) => {
    return Axios({
        method,
        url,
        headers,
    });
};
import Axios from 'axios';

let token = '';

if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || '';
}
const headers = {Authorization: `Bearer ${token}`};

export const HttpRequest = (method, endpoint, data) => {
    return Axios({
        method,
        url: `http://localhost:3000${endpoint}`,
        headers,
        data
    });
};
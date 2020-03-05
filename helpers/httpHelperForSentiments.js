import Axios from 'axios';

let token = '';

if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || '';
}
const headers = {Authorization: `Bearer ${token}`};

export const HttpRequest2 = (method, endpoint, data = null) => {
    return Axios({
        method,
        url: `http://localhost:8000${endpoint}`,
        headers,
        data
    });
};

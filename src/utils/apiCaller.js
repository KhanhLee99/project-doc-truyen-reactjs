import axios from 'axios';

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `http://127.0.0.1:8000/api/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};


import axios from 'axios';
import * as Config from './../constants/Config';

//function callApi() cần có 3 tham số truyền vào đó là: endpoint, data, method.
export default function callApi(endpoint, method = 'GET', body) { //body là data
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`, // Sau này có nhiều resource ta không thể khai báo hết url, nên ta phải tạo const cho nó
        data: body,
    }).catch(err => {
        console.log(err);          
    });
} 
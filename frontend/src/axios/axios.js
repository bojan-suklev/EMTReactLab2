import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emtlab2frontendreact.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*',
       // 'Authorization': localStorage.getItem("JWT")
    }
})

export default instance;

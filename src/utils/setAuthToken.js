import axios from 'axios';

const setAuthToken = token => {
    if(token){
        //Áp dụng cho mọi request
        axios.defaults.headers.common['Authorization'] = token;
    }else{
        //Xóa auth header
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;
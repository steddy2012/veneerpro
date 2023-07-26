import axios from 'axios';

export default axios.create({
    baseURL: '', //insert base API https
    params: {
        key: '' //insert API for coresponding 
    }
})
import axios from 'axios';
const __DOMAIN = "http://localhost:9090";


const api = axios.create({
    baseURL: `${__DOMAIN}/usuarios`,
    headers : {
        'Authorization' : localStorage.getItem('token')
    }
  });

export const getUsuarios = () => {
    return api.get();
}

export const postUsuarios = (values) => {
    console.log(values);
    return api.post(values);
}
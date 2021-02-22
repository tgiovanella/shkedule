import axios from 'axios';
const __DOMAIN = "http://localhost:9090";


const api = axios.create({
    baseURL: `${__DOMAIN}/empresas`,
    headers : {
        'Authorization' : localStorage.getItem('token')
    }
  });

export const getEmpresas = () => {
    return api.get();
}

export const postEmpresas = (values) => {
    console.log(values);
    return api.post(values);
}
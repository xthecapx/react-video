import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://tm-kitchen-api-alpha.herokuapp.com'
});

export default instance;

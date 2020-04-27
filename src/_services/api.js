import axios from 'axios';

export default axios.create({
  baseURL: 'https://backend-crm-api.herokuapp.com/',
});

import axios from 'axios';

export default axios.create({
  //   baseURL: `http://api.sportigo.id/api`,
  baseURL: 'http://localhost:8080',
  responseType: 'json',
});

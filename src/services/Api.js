import axios from 'axios';
import AppConfig from './AppConfig';
import { getToken } from './Token';

const Api = axios.create({
  baseURL: AppConfig.WsbaseUrl,
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});

export default Api;

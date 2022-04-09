import axios from 'axios';
import { CATALOG_API } from './constants';

const axiosInstance = axios.create({
  baseURL: CATALOG_API,
});

export default axiosInstance;

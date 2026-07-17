import { Platform } from 'react-native';

const LOCAL_IP = '172.20.10.2';

export const API_URL = Platform.OS === 'web'
  ? 'http://localhost:5000/v1/usuarios/'
  : `http://${LOCAL_IP}:5000/v1/usuarios/`;

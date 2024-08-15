import axios from 'axios';
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import type { UnisatApiClientOptions } from './type';

class RequestClient {
  public client: AxiosInstance;

  constructor({ apikey, network, baseURL }: UnisatApiClientOptions) {
    let url =
      network === 'testnet'
        ? 'https://open-api-testnet.unisat.io'
        : 'https://open-api.unisat.io';
    if (baseURL) {
      url = baseURL;
    }
    this.client = axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`,
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      (error) => {
        console.error('API调用失败:', error);
        return Promise.reject(error);
      },
    );
  }
}

export default RequestClient;

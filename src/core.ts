import axios, { type AxiosInstance } from 'axios';

interface APIClientOptions {
  baseURL: string;
  timeout: number;
}

export class APIClient {
  client: AxiosInstance;

  constructor({ baseURL, timeout }: APIClientOptions) {
    this.client = axios.create({ baseURL, timeout });
  }
}

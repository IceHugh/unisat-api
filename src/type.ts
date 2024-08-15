export type Network = 'mainnet' | 'testnet';

export interface UnisatApiClientOptions {
  apikey: string;
  network?: Network;
  baseURL?: string;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T;
}

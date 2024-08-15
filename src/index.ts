import RequestClient from './client';
import RunesClient from './runes';
import type { UnisatApiClientOptions } from './type';

class UnisatApiClient {
  private client: RequestClient;
  public runes: RunesClient;

  constructor({
    apikey,
    network,
    baseURL,
  }: UnisatApiClientOptions) {
    this.client = new RequestClient({
      apikey: apikey,
      network: network,
      baseURL: baseURL,
    });
    this.runes = new RunesClient(this.client.client);
  }
}

export default UnisatApiClient;

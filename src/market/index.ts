import type { AxiosInstance } from 'axios';
import MarketCollectionClient from './collection';
import MarketBRC20Client from './brc20';
import MarketDomainClient from './domain';
import MarketRunesClient from './runes';

class MarketClient {
  public collection: MarketCollectionClient;
  public brc20: MarketBRC20Client;
  public domain: MarketDomainClient;
  public runes: MarketRunesClient;

  constructor(client: AxiosInstance) {
    this.collection = new MarketCollectionClient(client);
    this.brc20 = new MarketBRC20Client(client);
    this.domain = new MarketDomainClient(client);
    this.runes = new MarketRunesClient(client);
  }
}
export default MarketClient;

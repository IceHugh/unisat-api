import type { UnisatApiClientOptions } from './type';
import RequestClient from './client';
import RunesClient from './runes';
import MarketClient from './market';
import BlocksClient from './blocks';
import BRC20SwapClient from './brc20swap';
import AddressClient from './addresses';
import InscribeClient from './inscribe';
import InscriptionClient from './inscriptions';
import TransactionClient from './transactions';

class UnisatApiClient {
  private client: RequestClient;
  public runes: RunesClient;
  public market: MarketClient;
  public blocks: BlocksClient;
  public brc20swap: BRC20SwapClient;
  public address: AddressClient;
  public inscription: InscribeClient;
  public inscriptions: InscriptionClient;
  public transaction: TransactionClient;
  constructor({ apikey, network, baseURL }: UnisatApiClientOptions) {
    this.client = new RequestClient({
      apikey: apikey,
      network: network,
      baseURL: baseURL,
    });
    this.runes = new RunesClient(this.client.client);
    this.market = new MarketClient(this.client.client);
    this.blocks = new BlocksClient(this.client.client);
    this.brc20swap = new BRC20SwapClient(this.client.client);
    this.address = new AddressClient(this.client.client);
    this.inscription = new InscribeClient(this.client.client);
    this.inscriptions = new InscriptionClient(this.client.client);
    this.transaction = new TransactionClient(this.client.client);
  }
}

export default UnisatApiClient;

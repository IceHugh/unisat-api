import type { AxiosInstance } from 'axios';
import type { ApiResponse } from '../../type';

// 定义接口

interface BindInfoRequest {
  btcAddress: string;
  nftAddress: string;
  sign: string;
}

interface BindInfoResponse {
  // 根据实际响应结构定义
}

interface BRC20KLineRequest {
  tick: string;
  timeStart: number;
  timeEnd: number;
  timeStep: number;
}

interface BRC20KLineResponse {
  price: number;
  timestamp: number;
}

interface BRC20TypesRequest {
  tickLen?: 4 | 5;
  timeType?: 'day1' | 'day7' | 'day30';
  ticks?: string[];
  start?: number;
  limit?: number;
}

interface BRC20TypesResponse {
  BTCPrice: number;
  list: Array<BRC20TypeItem>;
  deploy?: Array<BRC20TypeItem>;
  cap?: Array<BRC20TypeItem>;
}

interface BRC20TypeItem {
  tick: string;
  curPrice: number;
  changePrice: number;
  btcVolume: number;
  amountVolume: number;
  cap: string;
}

interface BRC20TypesSpecifiedRequest {
  timeType: 'day1' | 'day7' | 'day30';
  tick: string;
}

interface BRC20TypesSpecifiedResponse {
  tick: string;
  curPrice: number;
  changePrice: number;
  btcVolume: number;
  amountVolume: number;
}

interface MarketListRequest {
  filter: {
    nftType: 'brc20';
    address?: string;
    tick?: string;
    minPrice?: number;
    maxPrice?: number;
    nftConfirm?: boolean;
    isEnd?: boolean;
    all?: boolean;
  };
  sort?: {
    unitPrice?: 1 | -1;
    onSaleTime?: 1 | -1;
    initPrice?: 1 | -1;
    inscriptionNumber?: 1 | -1;
  };
  start: number;
  limit: number;
}

interface MarketListResponse {
  list: Array<{
    auctionId?: string;
    inscriptionId: string;
    inscriptionNumber?: number;
    marketType?: string;
    address?: string;
    price?: number;
    nftType?: string;
    tick?: string;
    limit?: number;
    amount?: number;
    unitPrice?: number;
  }>;
  total: number;
  timestamp: number;
}

interface MarketActionsRequest {
  filter: {
    nftType?: 'brc20';
    address?: string;
    inscriptionId?: string;
    event?: 'Cancel' | 'Claim' | 'Listed' | 'Sold' | 'Updated';
    tick?: string;
  };
  start: number;
  limit: number;
}

interface MarketActionsResponse {
  list: Array<{
    auctionId: string;
    inscriptionId: string;
    inscriptionNumber: number;
    event: 'Listed' | 'Sold' | 'Cancel' | 'Claim' | 'Updated';
    price: number;
    from: string;
    to: string | null;
    timestamp: number;
    nftConfirmNum: number;
    nftType: 'brc20' | 'domain' | 'collection';
    endMsg?: string;
    newest: boolean;
    name?: string;
    unitPrice?: number;
    amount?: number;
    domain?: string;
    domainType?:
      | 'sats'
      | 'unisat'
      | 'btc'
      | 'xbt'
      | 'ord'
      | 'gm'
      | 'bitmap'
      | 'x'
      | null;
    domainCategorys?: Array<string>;
    collectionId?: string;
    collectionItemName?: string;
    contentType?: string;
    contentBody?: string;
    attributes?: Array<{ trait_type: string; value: string }>;
  }>;
  total: number;
}

interface MarketCreatePutOnRequest {
  nftType: string;
  inscriptionId: string;
  initPrice: string;
  unitPrice: string;
  pubkey: string;
  marketType: 'fixedPrice';
  btcAddress: string;
}

interface MarketCreatePutOnResponse {
  auctionId: string;
  psbt: string;
  signIndexes: number[];
}

interface MarketConfirmPutOnRequest {
  auctionId: string;
  psbt: string;
  fromBase64: boolean;
}

interface MarketConfirmPutOnResponse {
  // 根据实际响应结构定义
}

interface MarketCreateBidPrepareRequest {
  auctionId: string;
  bidPrice: number;
  address: string;
  pubkey: string;
}

interface MarketCreateBidPrepareResponse {
  serverFee: number;
  serverReal: number;
  serverFeeRate: number;
  txSize: number;
  nftValue: number;
  feeRate: number;
  availableBalance: number;
  allBalance: number;
}

interface MarketCreateBidRequest {
  auctionId: string;
  bidPrice: number;
  address: string;
  pubkey: string;
  feeRate: number;
  nftAddress: string;
  utxos: Array<{
    txid: string;
    index: number;
  }>;
}

interface MarketCreateBidResponse {
  bidId: string;
  psbtBid: string;
  psbtBid2: string;
  psbtSettle: string;
  serverFee: number;
  networkFee: number;
  feeRate: number;
  nftValue: number;
  bidSignIndexes: number[];
}

interface MarketConfirmBidRequest {
  auctionId: string;
  bidId: string;
  psbtBid: string;
  psbtBid2: string;
  psbtSettle: string;
  fromBase64: boolean;
}

interface MarketConfirmBidResponse {
  txid: string;
}

interface MarketCreatePutOffRequest {
  auctionId: string;
  nftAddress: string;
  btcPubkey: string;
  utxos: Array<{
    txid: string;
    index: number;
  }>;
  rbf: boolean;
  offChain: boolean;
}

interface MarketCreatePutOffResponse {
  psbt: string;
  txSize: number;
  btcSignIndexes: number[];
  nftSignIndexes: number[];
}

interface MarketConfirmPutOffRequest {
  auctionId: string;
  psbt: string;
  fromBase64: boolean;
  offChain: boolean;
}

interface MarketConfirmPutOffResponse {
  txid: string;
}

interface MarketCreateModifyPriceRequest {
  auctionId: string;
  initPrice: string;
  unitPrice: string;
}

interface MarketCreateModifyPriceResponse {
  psbt: string;
  signIndexes: number[];
}

interface MarketConfirmModifyPriceRequest {
  auctionId: string;
  psbt: string;
  fromBase64: boolean;
}

interface MarketConfirmModifyPriceResponse {
  // 根据实际响应结构定义
}

// 定义 MarketBRC20Client 类
class MarketBRC20Client {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getBindInfo(
    data: BindInfoRequest,
  ): Promise<ApiResponse<BindInfoResponse>> {
    return this.client.post('/v3/market/brc20/auction/bind_info', data);
  }

  async getBRC20KLine(
    data: BRC20KLineRequest,
  ): Promise<ApiResponse<BRC20KLineResponse[]>> {
    return this.client.post('/v3/market/brc20/auction/brc20_kline', data);
  }

  async getBRC20Types(
    data: BRC20TypesRequest,
  ): Promise<ApiResponse<BRC20TypesResponse>> {
    return this.client.post('/v3/market/brc20/auction/brc20_types', data);
  }

  async getBRC20TypesSpecified(
    data: BRC20TypesSpecifiedRequest,
  ): Promise<ApiResponse<BRC20TypesSpecifiedResponse>> {
    return this.client.post(
      '/v3/market/brc20/auction/brc20_types_specified',
      data,
    );
  }

  async bindAddress(data: BindInfoRequest): Promise<ApiResponse<{}>> {
    return this.client.post('/v3/market/brc20/auction/bind', data);
  }

  async getMarketList(
    data: MarketListRequest,
  ): Promise<ApiResponse<MarketListResponse>> {
    return this.client.post('/v3/market/brc20/auction/list', data);
  }

  async getInscriptionInfo(data: any): Promise<ApiResponse<any>> {
    return this.client.post('/v3/market/brc20/auction/inscription_info', data);
  }

  async getInscriptionInfoList(data: any): Promise<ApiResponse<any>> {
    return this.client.post(
      '/v3/market/brc20/auction/inscription_info_list',
      data,
    );
  }

  async getMarketActions(
    data: MarketActionsRequest,
  ): Promise<ApiResponse<MarketActionsResponse>> {
    return this.client.post('/v3/market/brc20/auction/actions', data);
  }

  async createPutOn(
    data: MarketCreatePutOnRequest,
  ): Promise<ApiResponse<MarketCreatePutOnResponse>> {
    return this.client.post('/v3/market/brc20/auction/create_put_on', data);
  }

  async confirmPutOn(
    data: MarketConfirmPutOnRequest,
  ): Promise<ApiResponse<MarketConfirmPutOnResponse>> {
    return this.client.post('/v3/market/brc20/auction/confirm_put_on', data);
  }

  async createBidPrepare(
    data: MarketCreateBidPrepareRequest,
  ): Promise<ApiResponse<MarketCreateBidPrepareResponse>> {
    return this.client.post(
      '/v3/market/brc20/auction/create_bid_prepare',
      data,
    );
  }

  async createBid(
    data: MarketCreateBidRequest,
  ): Promise<ApiResponse<MarketCreateBidResponse>> {
    return this.client.post('/v3/market/brc20/auction/create_bid', data);
  }

  async confirmBid(
    data: MarketConfirmBidRequest,
  ): Promise<ApiResponse<MarketConfirmBidResponse>> {
    return this.client.post('/v3/market/brc20/auction/confirm_bid', data);
  }

  async createPutOff(
    data: MarketCreatePutOffRequest,
  ): Promise<ApiResponse<MarketCreatePutOffResponse>> {
    return this.client.post('/v3/market/brc20/auction/create_put_off', data);
  }

  async confirmPutOff(
    data: MarketConfirmPutOffRequest,
  ): Promise<ApiResponse<MarketConfirmPutOffResponse>> {
    return this.client.post('/v3/market/brc20/auction/confirm_put_off', data);
  }

  async createModifyPrice(
    data: MarketCreateModifyPriceRequest,
  ): Promise<ApiResponse<MarketCreateModifyPriceResponse>> {
    return this.client.post(
      '/v3/market/brc20/auction/create_modify_price',
      data,
    );
  }

  async confirmModifyPrice(
    data: MarketConfirmModifyPriceRequest,
  ): Promise<ApiResponse<MarketConfirmModifyPriceResponse>> {
    return this.client.post(
      '/v3/market/brc20/auction/confirm_modify_price',
      data,
    );
  }
}

export default MarketBRC20Client;

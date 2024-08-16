import type { AxiosInstance } from 'axios';
import type { ApiResponse } from '../../type';

// 定义接口

interface RunesTypeStatistic {
  BTCPrice: number;
  list: Array<{
    tick: string;
    curPrice: number;
    changePrice: number;
    btcVolume: number;
    amountVolume: number;
    cap: string;
    holders?: number;
    transactions?: number;
    warning?: boolean;
  }>;
}

interface RunesTypeSpecified {
  tick: string;
  symbol: string;
  curPrice: number;
  changePrice: number;
  btcVolume: number;
  amountVolume: number;
  cap: string;
  capUSD: string;
  deployTime: number;
  holders: number;
  number: number;
  transactions: number;
  warning: boolean;
}

interface RunesAuctionListItem {
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
}

interface RunesAuctionAction {
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
  newest?: boolean;
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
}

interface RunesMarketCreatePutOnRequest {
  inscriptionId: string;
  price: number;
  nftType: string;
}

interface MarketCreatePutOnResponse {
  auctionId: string;
  psbt: string;
  network: string;
  inputsToSign: Array<{
    index: number;
    publicKey: string;
    sighash: string;
  }>;
}

interface MarketConfirmPutOnRequest {
  auctionId: string;
  signedPsbt: string;
}

interface MarketConfirmPutOnResponse {
  auctionId: string;
  txid: string;
}

interface MarketCreateBidPrepareRequest {
  auctionId: string;
  bidPrice: number;
}

interface MarketCreateBidPrepareResponse {
  auctionId: string;
  bidPrice: number;
  payAddress: string;
  payAmount: number;
}

interface MarketCreateBidRequest {
  auctionId: string;
  bidPrice: number;
  receiveAddress: string;
  feeRate: number;
}

interface MarketCreateBidResponse {
  auctionId: string;
  psbt: string;
  network: string;
  inputsToSign: Array<{
    index: number;
    publicKey: string;
    sighash: string;
  }>;
}

interface MarketConfirmBidRequest {
  auctionId: string;
  signedPsbt: string;
}

interface MarketConfirmBidResponse {
  auctionId: string;
  txid: string;
}

interface MarketCreatePutOffRequest {
  auctionId: string;
  feeRate: number;
}

interface MarketCreatePutOffResponse {
  auctionId: string;
  psbt: string;
  network: string;
  inputsToSign: Array<{
    index: number;
    publicKey: string;
    sighash: string;
  }>;
}

interface MarketConfirmPutOffRequest {
  auctionId: string;
  signedPsbt: string;
}

interface MarketConfirmPutOffResponse {
  auctionId: string;
  txid: string;
}

interface MarketCreateModifyPriceRequest {
  auctionId: string;
  price: number;
  feeRate: number;
}

interface MarketCreateModifyPriceResponse {
  auctionId: string;
  psbt: string;
  network: string;
  inputsToSign: Array<{
    index: number;
    publicKey: string;
    sighash: string;
  }>;
}

interface MarketConfirmModifyPriceRequest {
  auctionId: string;
  signedPsbt: string;
}

interface GetRunesAuctionActionsParams {
  filter: {
    nftType: 'brc20';
    address?: string;
    inscriptionId?: string;
    event?: 'Cancel' | 'Claim' | 'Listed' | 'Sold' | 'Updated';
    tick?: string;
  };
  start: number;
  limit: number;
}

interface GetRunesAuctionActionsResponse {
  list: RunesAuctionAction[];
  total: number;
}
interface MarketConfirmModifyPriceResponse {
  auctionId: string;
  txid: string;
}

interface MarketCreateBatchPutOnRequest {
  inscriptionIds: string[];
  price: number;
  nftType: string;
}

interface MarketCreateBatchPutOnResponse {
  auctionIds: string[];
  psbt: string;
  network: string;
  inputsToSign: Array<{
    index: number;
    publicKey: string;
    sighash: string;
  }>;
}

interface MarketConfirmBatchPutOnRequest {
  auctionIds: string[];
  signedPsbt: string;
}

interface MarketConfirmBatchPutOnResponse {
  auctionIds: string[];
  txid: string;
}

interface MarketCreateBatchBidPrepareRequest {
  auctionIds: string[];
  bidPrice: number;
}

interface MarketCreateBatchBidPrepareResponse {
  auctionIds: string[];
  bidPrice: number;
  payAddress: string;
  payAmount: number;
}

interface MarketCreateBatchBidRequest {
  auctionIds: string[];
  bidPrice: number;
  receiveAddress: string;
  feeRate: number;
}

interface MarketCreateBatchBidResponse {
  auctionIds: string[];
  psbt: string;
  network: string;
  inputsToSign: Array<{
    index: number;
    publicKey: string;
    sighash: string;
  }>;
}

interface MarketConfirmBatchBidRequest {
  auctionIds: string[];
  signedPsbt: string;
}

interface MarketConfirmBatchBidResponse {
  auctionIds: string[];
  txid: string;
}

class MarketRunesClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getRunesTypes(data: {
    timeType?: 'day1' | 'day7' | 'day30';
    start: number;
    limit: number;
  }): Promise<ApiResponse<RunesTypeStatistic>> {
    return this.client.post('/v3/market/runes/auction/runes_types', data);
  }

  async getRunesTypesSpecified(data: {
    timeType: 'day1' | 'day7' | 'day30';
    tick: string;
  }): Promise<ApiResponse<RunesTypeSpecified>> {
    return this.client.post(
      '/v3/market/runes/auction/runes_types_specified',
      data,
    );
  }

  async getRunesAuctionList(data: {
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
  }): Promise<
    ApiResponse<{
      list: RunesAuctionListItem[];
      total: number;
      timestamp: number;
    }>
  > {
    return this.client.post('/v3/market/runes/auction/list', data);
  }

  async getRunesAuctionActions(
    data: GetRunesAuctionActionsParams,
  ): Promise<ApiResponse<GetRunesAuctionActionsResponse>> {
    return this.client.post('/v3/market/runes/auction/actions', data);
  }

  async createPutOn(
    data: RunesMarketCreatePutOnRequest,
  ): Promise<ApiResponse<MarketCreatePutOnResponse>> {
    return this.client.post('/v3/market/runes/auction/create_put_on', data);
  }

  async confirmPutOn(
    data: MarketConfirmPutOnRequest,
  ): Promise<ApiResponse<MarketConfirmPutOnResponse>> {
    return this.client.post('/v3/market/runes/auction/confirm_put_on', data);
  }

  async createBidPrepare(
    data: MarketCreateBidPrepareRequest,
  ): Promise<ApiResponse<MarketCreateBidPrepareResponse>> {
    return this.client.post(
      '/v3/market/runes/auction/create_bid_prepare',
      data,
    );
  }

  async createBid(
    data: MarketCreateBidRequest,
  ): Promise<ApiResponse<MarketCreateBidResponse>> {
    return this.client.post('/v3/market/runes/auction/create_bid', data);
  }

  async confirmBid(
    data: MarketConfirmBidRequest,
  ): Promise<ApiResponse<MarketConfirmBidResponse>> {
    return this.client.post('/v3/market/runes/auction/confirm_bid', data);
  }

  async createPutOff(
    data: MarketCreatePutOffRequest,
  ): Promise<ApiResponse<MarketCreatePutOffResponse>> {
    return this.client.post('/v3/market/runes/auction/create_put_off', data);
  }

  async confirmPutOff(
    data: MarketConfirmPutOffRequest,
  ): Promise<ApiResponse<MarketConfirmPutOffResponse>> {
    return this.client.post('/v3/market/runes/auction/confirm_put_off', data);
  }

  async createModifyPrice(
    data: MarketCreateModifyPriceRequest,
  ): Promise<ApiResponse<MarketCreateModifyPriceResponse>> {
    return this.client.post(
      '/v3/market/runes/auction/create_modify_price',
      data,
    );
  }

  async confirmModifyPrice(
    data: MarketConfirmModifyPriceRequest,
  ): Promise<ApiResponse<MarketConfirmModifyPriceResponse>> {
    return this.client.post(
      '/v3/market/runes/auction/confirm_modify_price',
      data,
    );
  }

  async createBatchPutOn(
    data: MarketCreateBatchPutOnRequest,
  ): Promise<ApiResponse<MarketCreateBatchPutOnResponse>> {
    return this.client.post(
      '/v3/market/runes/auction/create_batch_put_on',
      data,
    );
  }

  async confirmBatchPutOn(
    data: MarketConfirmBatchPutOnRequest,
  ): Promise<ApiResponse<MarketConfirmBatchPutOnResponse>> {
    return this.client.post(
      '/v3/market/runes/auction/confirm_batch_put_on',
      data,
    );
  }

  async createBatchBidPrepare(
    data: MarketCreateBatchBidPrepareRequest,
  ): Promise<ApiResponse<MarketCreateBatchBidPrepareResponse>> {
    return this.client.post(
      '/v3/market/runes/auction/create_batch_bid_prepare',
      data,
    );
  }

  async createBatchBid(
    data: MarketCreateBatchBidRequest,
  ): Promise<ApiResponse<MarketCreateBatchBidResponse>> {
    return this.client.post('/v3/market/runes/auction/create_batch_bid', data);
  }

  async confirmBatchBid(
    data: MarketConfirmBatchBidRequest,
  ): Promise<ApiResponse<MarketConfirmBatchBidResponse>> {
    return this.client.post('/v3/market/runes/auction/confirm_batch_bid', data);
  }
}

export default MarketRunesClient;

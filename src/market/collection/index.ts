import type { AxiosInstance } from 'axios';
import type { ApiResponse } from '../../type';

// 定义接口

interface CollectionStatistic {
  collectionId: string;
  name: string;
  desc: string;
  icon: string;
  iconContentType: string;
  btcValue: number;
  floorPrice: number;
  pricePercent: number;
  listed: number;
  total: number;
  supply: number;
  twitter: string;
  discord: string;
  website: string;
  verification: boolean;
}

interface CollectionSummary {
  collectionId: string;
  icon: string;
  iconContentType: string;
  name: string;
  total: number;
}

interface CollectionInscription {
  collectionId: string;
  collectionName: string;
  collectionItemName: string;
  collectionHighResImgUrl: string;
  inscriptionId: string;
  inscriptionNumber: number;
  contentType: string;
  listed: boolean;
}

interface InscriptionInfo {
  auctionId: string | null;
  inscriptionId: string;
  inscriptionNumber: number | null;
  marketType: string | null;
  address: string | null;
  price: number | null;
  notSupport: boolean;
  verification: boolean;
  nftType: string | null;
  tick: string | null;
  limit: number | null;
  amount: number | null;
  unitPrice: number | null;
  collectionId: string | null;
  contentType: string | null;
  contentBody: string | null;
  collectionItemName: string | null;
  collectionHighResImgUrl: string | null;
  collectionName: string | null;
  notOnSale: boolean | null;
  domain: string | null;
  domainHex: string | null;
  domainType:
    | 'sats'
    | 'unisat'
    | 'btc'
    | 'xbt'
    | 'ord'
    | 'gm'
    | 'bitmap'
    | 'x'
    | null;
}

interface MarketListItem {
  auctionId: string | null;
  inscriptionId: string;
  inscriptionNumber: number | null;
  marketType: string | null;
  address: string | null;
  price: number | null;
  notSupport: boolean;
  verification: boolean;
  nftType: string | null;
  tick: string | null;
  limit: number | null;
  amount: number | null;
  unitPrice: number | null;
  collectionId: string | null;
  contentType: string | null;
  contentBody: string | null;
  collectionItemName: string | null;
  collectionHighResImgUrl: string | null;
  collectionName: string | null;
  notOnSale: boolean | null;
  domain: string | null;
  domainHex: string | null;
  domainType:
    | 'sats'
    | 'unisat'
    | 'btc'
    | 'xbt'
    | 'ord'
    | 'gm'
    | 'bitmap'
    | 'x'
    | null;
}

interface MarketAction {
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
  endMsg: string | null;
  newest: boolean;
  name: string | null;
  unitPrice: number | null;
  amount: number | null;
  domain: string | null;
  domainType:
    | 'sats'
    | 'unisat'
    | 'btc'
    | 'xbt'
    | 'ord'
    | 'gm'
    | 'bitmap'
    | 'x'
    | null;
  domainCategorys:
    | (
        | 'Keyboard'
        | 'Non Keyboard'
        | '1-99'
        | '3D'
        | '4D'
        | '5D'
        | 'Single Emoji'
        | 'Multi Emoji'
        | 'Common Word'
        | '1 Letter + 1 Number'
        | '2 Letters'
        | '3 Letters'
        | 'Numbers'
      )[]
    | null;
  collectionId: string | null;
  collectionItemName: string | null;
  contentType: string | null;
  contentBody: string | null;
  attributes: { trait_type: string; value: string }[] | null;
}

interface MarketCreatePutOnRequest {
  nftType?: string;
  inscriptionId: string;
  initPrice: string;
  unitPrice: string;
  pubkey: string;
  marketType: 'fixedPrice';
  btcAddress?: string;
}

interface MarketCreatePutOnResponse {
  auctionId: string;
  psbt: string;
  signIndexes: number[];
}

interface MarketConfirmPutOnRequest {
  auctionId: string;
  psbt: string;
  fromBase64?: boolean;
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
  feeRate?: number;
  nftAddress?: string;
  utxos?: { txid: string; index: number }[];
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
  psbtBid2?: string;
  psbtSettle?: string;
  fromBase64?: boolean;
}

interface MarketConfirmBidResponse {
  txid: string;
}

interface MarketCreatePutOffRequest {
  auctionId: string;
  nftAddress?: string;
  btcPubkey?: string;
  utxos?: { txid: string; index: number }[];
  rbf?: boolean;
  offChain?: boolean;
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
  fromBase64?: boolean;
  offChain?: boolean;
}

interface MarketConfirmPutOffResponse {
  txid: string;
}

interface MarketCreateModifyPriceRequest {
  auctionId: string;
  initPrice: string;
  unitPrice: string;
}
interface GetCollectionStatisticListParams {
  filter: {
    timeType: string;
    name?: string;
    collections?: string[];
  };
  start: number;
  limit: number;
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
interface GetMarketListParams {
  filter: {
    nftType: 'brc20' | 'domain' | 'collection';
    address?: string;
    tick?: string;
    minPrice?: number;
    maxPrice?: number;
    nftConfirm?: boolean;
    isEnd?: boolean;
    domainType?:
      | 'sats'
      | 'unisat'
      | 'btc'
      | 'xbt'
      | 'ord'
      | 'gm'
      | 'bitmap'
      | 'x';
    domainMinLength?: number;
    domainMaxLength?: number;
    domainCategory?: string;
    domainFuzzy?: string;
    collectionId?: string;
    collectionFuzzy?: string;
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

interface GetMarketActionsParams {
  filter: {
    nftType?: 'brc20' | 'collection' | 'domain';
    address?: string;
    inscriptionId?: string;
    event?: 'Cancel' | 'Claim' | 'Listed' | 'Sold' | 'Updated';
    tick?: string;
    domainType?: string;
    collectionId?: string;
  };
  start: number;
  limit: number;
}

class MarketCollectionClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getCollectionStatistic(
    collectionId: string,
  ): Promise<ApiResponse<CollectionStatistic>> {
    return this.client.post(
      '/v3/market/collection/auction/collection_statistic',
      { collectionId },
    );
  }

  async getCollectionStatisticList(
    params: GetCollectionStatisticListParams,
  ): Promise<ApiResponse<{ list: CollectionStatistic[]; total: number }>> {
    return this.client.post(
      '/v3/market/collection/auction/collection_statistic_list',
      params,
    );
  }

  async getCollectionSummary(params: {
    address: string;
    firstCollectionId?: string;
  }): Promise<ApiResponse<{ list: CollectionSummary[] }>> {
    return this.client.post(
      '/v3/market/collection/auction/collection_summary',
      params,
    );
  }

  async getCollectionInscriptions(params: {
    collectionId: string;
    address: string;
    start: number;
    limit: number;
  }): Promise<ApiResponse<{ list: CollectionInscription[]; total: number }>> {
    return this.client.post(
      '/v3/market/collection/auction/collection_inscriptions',
      params,
    );
  }

  async getInscriptionInfo(
    inscriptionId: string,
  ): Promise<ApiResponse<InscriptionInfo>> {
    return this.client.post('/v3/market/collection/auction/inscription_info', {
      inscriptionId,
    });
  }

  async getInscriptionInfoList(params: {
    address?: string;
    inscriptionIds: string[];
  }): Promise<ApiResponse<{ list: InscriptionInfo[] }>> {
    return this.client.post(
      '/v3/market/collection/auction/inscription_info_list',
      params,
    );
  }

  async getMarketList(
    params: GetMarketListParams,
  ): Promise<
    ApiResponse<{ list: MarketListItem[]; total: number; timestamp: number }>
  > {
    return this.client.post('/v3/market/collection/auction/list', params);
  }

  async getMarketActions(
    params: GetMarketActionsParams,
  ): Promise<ApiResponse<{ list: MarketAction[]; total: number }>> {
    return this.client.post('/v3/market/collection/auction/actions', params);
  }

  async createPutOn(
    data: MarketCreatePutOnRequest,
  ): Promise<ApiResponse<MarketCreatePutOnResponse>> {
    return this.client.post(
      '/v3/market/collection/auction/create_put_on',
      data,
    );
  }

  async confirmPutOn(
    data: MarketConfirmPutOnRequest,
  ): Promise<ApiResponse<void>> {
    return this.client.post(
      '/v3/market/collection/auction/confirm_put_on',
      data,
    );
  }

  async createBidPrepare(
    data: MarketCreateBidPrepareRequest,
  ): Promise<ApiResponse<MarketCreateBidPrepareResponse>> {
    return this.client.post(
      '/v3/market/collection/auction/create_bid_prepare',
      data,
    );
  }

  async createBid(
    data: MarketCreateBidRequest,
  ): Promise<ApiResponse<MarketCreateBidResponse>> {
    return this.client.post('/v3/market/collection/auction/create_bid', data);
  }

  async confirmBid(
    data: MarketConfirmBidRequest,
  ): Promise<ApiResponse<MarketConfirmBidResponse>> {
    return this.client.post('/v3/market/collection/auction/confirm_bid', data);
  }

  async createPutOff(
    data: MarketCreatePutOffRequest,
  ): Promise<ApiResponse<MarketCreatePutOffResponse>> {
    return this.client.post(
      '/v3/market/collection/auction/create_put_off',
      data,
    );
  }

  async confirmPutOff(
    data: MarketConfirmPutOffRequest,
  ): Promise<ApiResponse<MarketConfirmPutOffResponse>> {
    return this.client.post(
      '/v3/market/collection/auction/confirm_put_off',
      data,
    );
  }

  async createModifyPrice(
    data: MarketCreateModifyPriceRequest,
  ): Promise<ApiResponse<MarketCreateModifyPriceResponse>> {
    return this.client.post(
      '/v3/market/collection/auction/create_modify_price',
      data,
    );
  }

  async confirmModifyPrice(
    data: MarketConfirmModifyPriceRequest,
  ): Promise<ApiResponse<void>> {
    return this.client.post(
      '/v3/market/collection/auction/confirm_modify_price',
      data,
    );
  }
}

export default MarketCollectionClient;

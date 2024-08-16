import type { AxiosInstance } from 'axios';
import type { ApiResponse } from '../../type';

// 接口定义
interface DomainTypeStatistic {
  btcVolume: number;
  btcVolumePercent: number;
  amountVolume: number;
  curPrice: number;
  domainType: string;
}

interface DomainStatistic {
  demo: string;
  domainCategory: string;
  total: number;
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
  utxo: Record<string, any>;
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

// 请求参数接口
interface GetDomainStatisticParams {
  domainType: string;
}

interface GetInscriptionInfoParams {
  inscriptionId: string;
}

interface GetInscriptionInfoListParams {
  address?: string;
  inscriptionIds: string[];
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

interface CreatePutOnParams {
  nftType?: string;
  inscriptionId: string;
  initPrice: string;
  unitPrice: string;
  pubkey: string;
  marketType: 'fixedPrice';
  btcAddress?: string;
}

interface ConfirmPutOnParams {
  auctionId: string;
  psbt: string;
  fromBase64?: boolean;
}

interface CreateBidPrepareParams {
  auctionId: string;
  bidPrice: number;
  address: string;
  pubkey: string;
}

interface CreateBidParams {
  auctionId: string;
  bidPrice: number;
  address: string;
  pubkey: string;
  feeRate?: number;
  nftAddress?: string;
  utxos?: { txid: string; index: number }[];
}

interface ConfirmBidParams {
  auctionId: string;
  bidId: string;
  psbtBid: string;
  psbtBid2?: string;
  psbtSettle?: string;
  fromBase64?: boolean;
}

interface CreatePutOffParams {
  auctionId: string;
  nftAddress?: string;
  btcPubkey?: string;
  utxos?: { txid: string; index: number }[];
  rbf?: boolean;
  offChain?: boolean;
}

interface ConfirmPutOffParams {
  auctionId: string;
  psbt: string;
  fromBase64?: boolean;
  offChain?: boolean;
}

interface CreateModifyPriceParams {
  auctionId: string;
  initPrice: string;
  unitPrice: string;
}

interface ConfirmModifyPriceParams {
  auctionId: string;
  psbt: string;
  fromBase64: boolean;
}

// 响应接口
interface GetDomainTypesResponse {
  list: DomainTypeStatistic[];
}

interface GetDomainStatisticResponse {
  list: DomainStatistic[];
}

interface GetMarketListResponse {
  list: MarketListItem[];
  total: number;
  timestamp: number;
}

interface GetMarketActionsResponse {
  list: MarketAction[];
  total: number;
}

interface CreatePutOnResponse {
  auctionId: string;
  psbt: string;
  signIndexes: number[];
}

interface CreateBidPrepareResponse {
  serverFee: number;
  serverReal: number;
  serverFeeRate: number;
  txSize: number;
  nftValue: number;
  feeRate: number;
  availableBalance: number;
  allBalance: number;
}

interface CreateBidResponse {
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

interface ConfirmBidResponse {
  txid: string;
}

interface CreatePutOffResponse {
  psbt: string;
  txSize: number;
  btcSignIndexes: number[];
  nftSignIndexes: number[];
}

interface ConfirmPutOffResponse {
  txid: string;
}

interface CreateModifyPriceResponse {
  psbt: string;
  signIndexes: number[];
}

class MarketDomainClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getDomainTypes(): Promise<ApiResponse<GetDomainTypesResponse>> {
    return this.client.post('/v3/market/domain/auction/domain_types');
  }

  async getDomainStatistic(
    params: GetDomainStatisticParams,
  ): Promise<ApiResponse<GetDomainStatisticResponse>> {
    return this.client.post(
      '/v3/market/domain/auction/domain_statistic',
      params,
    );
  }

  async getInscriptionInfo(
    params: GetInscriptionInfoParams,
  ): Promise<ApiResponse<InscriptionInfo>> {
    return this.client.post(
      '/v3/market/domain/auction/inscription_info',
      params,
    );
  }

  async getInscriptionInfoList(
    params: GetInscriptionInfoListParams,
  ): Promise<ApiResponse<{ list: InscriptionInfo[] }>> {
    return this.client.post(
      '/v3/market/domain/auction/inscription_info_list',
      params,
    );
  }

  async getMarketList(
    params: GetMarketListParams,
  ): Promise<ApiResponse<GetMarketListResponse>> {
    return this.client.post('/v3/market/domain/auction/list', params);
  }

  async getMarketActions(
    params: GetMarketActionsParams,
  ): Promise<ApiResponse<GetMarketActionsResponse>> {
    return this.client.post('/v3/market/domain/auction/actions', params);
  }

  async createPutOn(
    params: CreatePutOnParams,
  ): Promise<ApiResponse<CreatePutOnResponse>> {
    return this.client.post('/v3/market/domain/auction/create_put_on', params);
  }

  async confirmPutOn(
    params: ConfirmPutOnParams,
  ): Promise<ApiResponse<Record<string, never>>> {
    return this.client.post('/v3/market/domain/auction/confirm_put_on', params);
  }

  async createBidPrepare(
    params: CreateBidPrepareParams,
  ): Promise<ApiResponse<CreateBidPrepareResponse>> {
    return this.client.post(
      '/v3/market/domain/auction/create_bid_prepare',
      params,
    );
  }

  async createBid(
    params: CreateBidParams,
  ): Promise<ApiResponse<CreateBidResponse>> {
    return this.client.post('/v3/market/domain/auction/create_bid', params);
  }

  async confirmBid(
    params: ConfirmBidParams,
  ): Promise<ApiResponse<ConfirmBidResponse>> {
    return this.client.post('/v3/market/domain/auction/confirm_bid', params);
  }

  async createPutOff(
    params: CreatePutOffParams,
  ): Promise<ApiResponse<CreatePutOffResponse>> {
    return this.client.post('/v3/market/domain/auction/create_put_off', params);
  }

  async confirmPutOff(
    params: ConfirmPutOffParams,
  ): Promise<ApiResponse<ConfirmPutOffResponse>> {
    return this.client.post(
      '/v3/market/domain/auction/confirm_put_off',
      params,
    );
  }

  async createModifyPrice(
    params: CreateModifyPriceParams,
  ): Promise<ApiResponse<CreateModifyPriceResponse>> {
    return this.client.post(
      '/v3/market/domain/auction/create_modify_price',
      params,
    );
  }

  async confirmModifyPrice(
    params: ConfirmModifyPriceParams,
  ): Promise<ApiResponse<Record<string, never>>> {
    return this.client.post(
      '/v3/market/domain/auction/confirm_modify_price',
      params,
    );
  }
}

export default MarketDomainClient;

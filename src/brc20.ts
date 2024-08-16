import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

// 定义接口

interface BRC20InfoItem {
  ticker: string;
  holder_count: number;
  minted_count: string;
  max_supply: string;
  decimal: number;
  limit_per_mint: string;
  deploy_by: string;
  deploy_time: number;
  txid: string;
}

interface BRC20HistoryItem {
  ticker: string;
  type: string;
  amount: string;
  from: string;
  to: string;
  timestamp: number;
  txid: string;
  inscriptionId: string;
  inscriptionNumber: number;
  blockHeight: number;
}

interface BRC20TransferableInscription {
  inscriptionId: string;
  inscriptionNumber: number;
  amount: string;
  ticker: string;
  address: string;
  utxo: string;
  offset: number;
  satoshi: number;
}

// 定义通用的分页参数接口
interface PaginationParams {
  start: number;
  limit: number;
}

class BRC20Client {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getBRC20BestBlockHeight(): Promise<
    ApiResponse<{ height: number; total: number }>
  > {
    return this.client.get('/v1/indexer/brc20/best-block-height');
  }

  async getBRC20List(
    params: PaginationParams & { tick_filter?: 8 | 16 | 24 },
  ): Promise<
    ApiResponse<{
      detail: string[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get('/v1/indexer/brc20/list', { params });
  }

  async getBRC20Status(
    params: PaginationParams & {
      sort?: 'holders' | 'deploy' | 'minted' | 'transactions';
      tick_filter?: 8 | 16 | 24;
      complete?: 'yes' | 'no';
    },
  ): Promise<
    ApiResponse<{
      height: number;
      start: number;
      total: number;
      detail: BRC20InfoItem[];
    }>
  > {
    return this.client.get('/v1/indexer/brc20/status', { params });
  }

  async getBRC20Info(ticker: string): Promise<ApiResponse<BRC20InfoItem>> {
    return this.client.get(`/v1/indexer/brc20/${ticker}/info`);
  }

  async getBRC20Holders(
    ticker: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      detail: {
        address: string;
        availableBalance: string;
        overallBalance: string;
        transferableBalance: string;
      }[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(`/v1/indexer/brc20/${ticker}/holders`, { params });
  }

  async getBRC20History(
    ticker: string,
    params: PaginationParams & {
      type: 'inscribe-mint' | 'inscribe-transfer' | 'transfer';
      height: number;
    },
  ): Promise<
    ApiResponse<{
      detail: BRC20HistoryItem[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(`/v1/indexer/brc20/${ticker}/history`, { params });
  }

  async getBRC20TxHistory(
    ticker: string,
    txid: string,
    params: PaginationParams & {
      type: 'inscribe-mint' | 'inscribe-transfer' | 'transfer';
    },
  ): Promise<
    ApiResponse<{
      detail: BRC20HistoryItem[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(`/v1/indexer/brc20/${ticker}/tx/${txid}/history`, {
      params,
    });
  }

  async getBRC20HistoryByHeight(
    height: number,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      height: number;
      total: number;
      start: number;
      detail: BRC20HistoryItem[];
    }>
  > {
    return this.client.get(`/v1/indexer/brc20/history-by-height/${height}`, {
      params,
    });
  }

  async getBRC20AddressSummary(
    address: string,
    params: PaginationParams & { tick_filter?: 8 | 16 | 24 },
  ): Promise<
    ApiResponse<{
      height: number;
      start: number;
      total: number;
      detail: {
        ticker: string;
        overallBalance: string;
        transferableBalance: string;
        availableBalance: string;
      }[];
    }>
  > {
    return this.client.get(`/v1/indexer/address/${address}/brc20/summary`, {
      params,
    });
  }

  async getBRC20AddressSummaryByHeight(
    address: string,
    height: string,
    params: PaginationParams & { tick_filter?: 8 | 16 | 24 },
  ): Promise<
    ApiResponse<{
      height: number;
      start: number;
      total: number;
      detail: {
        ticker: string;
        overallBalance: string;
        transferableBalance: string;
        availableBalance: string;
      }[];
    }>
  > {
    return this.client.get(
      `/v1/indexer/address/${address}/brc20/summary-by-height/${height}`,
      { params },
    );
  }

  async getBRC20AddressTokenInfo(
    address: string,
    ticker: string,
  ): Promise<
    ApiResponse<{
      ticker: string;
      overallBalance: string;
      availableBalance: string;
      availableBalanceSafe: string;
      availableBalanceUnSafe: string;
      transferableBalance: string;
      historyCount: number;
    }>
  > {
    return this.client.get(
      `/v1/indexer/address/${address}/brc20/${ticker}/info`,
    );
  }

  async getBRC20AddressHistory(
    address: string,
    params: PaginationParams & {
      ticker?: string;
      type?: 'inscribe-mint' | 'inscribe-transfer' | 'transfer';
    },
  ): Promise<
    ApiResponse<{
      detail: BRC20HistoryItem[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(`/v1/indexer/address/${address}/brc20/history`, {
      params,
    });
  }

  async getBRC20AddressTokenHistory(
    address: string,
    ticker: string,
    params: PaginationParams & {
      type?: 'inscribe-mint' | 'inscribe-transfer' | 'transfer';
    },
  ): Promise<
    ApiResponse<{
      detail: BRC20HistoryItem[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(
      `/v1/indexer/address/${address}/brc20/${ticker}/history`,
      { params },
    );
  }

  async getBRC20AddressTokenTransferableInscriptions(
    address: string,
    ticker: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      detail: BRC20TransferableInscription[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(
      `/v1/indexer/address/${address}/brc20/${ticker}/transferable-inscriptions`,
      { params },
    );
  }
}

export default BRC20Client;

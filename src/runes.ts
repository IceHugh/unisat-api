import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

interface RuneStatus {
  bestHeight: number;
  runes: number;
  minimumRune: string;
  halvingBlockCount: number;
}

interface RuneEntry {
  runeid: string;
  rune: string;
  spacedRune: string;
  number: number;
  height: number;
  txidx: number;
  timestamp: number;
  divisibility: number;
  symbol: string;
  etching: string;
  premine: string;
  terms: {
    amount: string;
    cap: string;
    heightStart: number;
    heightEnd: number;
    offsetStart: null | number;
    offsetEnd: null | number;
  };
  mints: string;
  burned: string;
  holders: number;
  transactions: number;
  supply: string;
  start: number;
  end: number;
  mintable: boolean;
  remaining: string;
}

interface RuneHolder {
  address: string;
  amount: string;
}

interface RunesBalance {
  amount: string;
  runeid: string;
  rune: string;
  spacedRune: string;
  symbol: string;
  divisibility: number;
}

interface RuneUtxo {
  txid: string;
  vout: number;
  runes: Array<{
    amount: string;
    runeid: string;
    rune: string;
    spacedRune: string;
    symbol: string;
    divisibility: number;
  }>;
}

interface RunesEventItem {
  type: 'etch' | 'mint' | 'burn' | 'receive' | 'send';
  address: string;
  amount: string;
  height: number;
  txidx: number;
  txid: string;
  timestamp: number;
  rune: string;
  runeid: string;
}

// 定义通用的分页参数接口
interface PaginationParams {
  start?: number;
  limit?: number;
}

// 定义各方法的参数接口
interface GetRunesListParams extends PaginationParams {
  rune?: string;
  sort?: 'holders' | 'transactions' | 'timestamp';
  complete?: 'yes' | 'no';
}

interface GetRunesEventParams extends PaginationParams {
  rune?: string;
  type?: 'etch' | 'mint' | 'burn' | 'receive' | 'send';
  address?: string;
  height?: number;
  txid?: string;
}

class RunesClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getRunesStatus(): Promise<ApiResponse<RuneStatus>> {
    return this.client.get('/v1/indexer/runes/status');
  }

  async getRunesList(
    params: GetRunesListParams,
  ): Promise<
    ApiResponse<{ total: number; start: number; detail: RuneEntry[] }>
  > {
    return this.client.get('/v1/indexer/runes/info-list', { params });
  }

  async getRuneInfo(runeid: string): Promise<ApiResponse<RuneEntry>> {
    return this.client.get(`/v1/indexer/runes/${runeid}/info`);
  }

  async getRuneHolders(
    runeid: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{ total: number; start: number; detail: RuneHolder[] }>
  > {
    return this.client.get(`/v1/indexer/runes/${runeid}/holders`, { params });
  }

  async getAddressRunesBalanceList(
    address: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{ start: number; total: number; detail: RunesBalance[] }>
  > {
    return this.client.get(
      `/v1/indexer/address/${address}/runes/balance-list`,
      { params },
    );
  }

  async getAddressRuneBalance(
    address: string,
    runeid: string,
  ): Promise<ApiResponse<RunesBalance>> {
    return this.client.get(
      `/v1/indexer/address/${address}/runes/${runeid}/balance`,
    );
  }

  async getUtxoRunesBalance(
    txid: string,
    index: string,
  ): Promise<ApiResponse<RunesBalance[]>> {
    return this.client.get(`/v1/indexer/runes/utxo/${txid}/${index}/balance`);
  }

  async getAddressRuneUtxo(
    address: string,
    runeid: string,
    params: PaginationParams,
  ): Promise<ApiResponse<{ start: number; total: number; utxo: RuneUtxo[] }>> {
    return this.client.get(
      `/v1/indexer/address/${address}/runes/${runeid}/utxo`,
      { params },
    );
  }

  async getRunesEvent(
    params: GetRunesEventParams,
  ): Promise<
    ApiResponse<{ detail: RunesEventItem[]; start: number; total: number }>
  > {
    return this.client.get('/v1/indexer/runes/event', { params });
  }
}

export default RunesClient;

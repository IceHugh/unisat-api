import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

// 区块链信息接口
interface BlockchainInfo {
  chain: string;
  blocks: number;
  headers: number;
  bestBlockHash: string;
  prevBlockHash: string;
  medianTime: number;
  chainwork: string;
}

// 交易历史项接口
interface TxHistoryItem {
  txid: string;
  nIn: number;
  nOut: number;
  inSatoshi: number;
  outSatoshi: number;
  locktime: number;
  size: number;
  witOffset: number;
  height: number;
  idx: number;
  blkid: string;
  confirmations: number;
  timestamp: number;
}

// 区块交易列表响应接口
interface BlockTransactionsResponse {
  detail: TxHistoryItem[];
  start: number;
  total: number;
}

class BlocksClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getBlockchainInfo(): Promise<ApiResponse<BlockchainInfo>> {
    return this.client.get('/v1/indexer/blockchain/info');
  }

  async getBlockTransactions(
    height: number,
    cursor: number,
    size: number,
  ): Promise<ApiResponse<BlockTransactionsResponse>> {
    return this.client.get(`/v1/indexer/block/${height}/txs`, {
      params: { cursor, size },
    });
  }
}

export default BlocksClient;

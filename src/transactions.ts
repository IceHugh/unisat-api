import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

// 定义接口

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

interface TxInput {
  address: string;
  codeType: number;
  inscriptions: InscriptionItem[];
  satoshi: number;
  scriptPk: string;
  scriptSig: string;
  scriptType: string;
  scriptWits: string;
  sequence: number;
  height: number;
  txid: string;
  idx: number;
  heightTxo: number;
  utxid: string;
  vout: number;
}

interface TxOutput {
  address: string;
  codeType: number;
  inscriptions: InscriptionItem[];
  satoshi: number;
  scriptPk: string;
  scriptType: string;
  height: number;
  txid: string;
  idx: number;
  heightSpent: number;
  txidSpent: string;
  vout: number;
}

interface InscriptionItem {
  inscriptionId: string;
  inscriptionNumber: number;
  isBRC20: boolean;
  moved: boolean;
  offset: number;
}

interface UTXO {
  address: string;
  codeType: number;
  height: number;
  idx: number;
  inscriptions: InscriptionItem[];
  isOpInRBF: boolean;
  satoshi: number;
  scriptPk: string;
  scriptType: string;
  txid: string;
  vout: number;
}

// 定义通用的分页参数接口
interface PaginationParams {
  cursor?: number;
  size?: number;
}

class TransactionClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getTxSummary(txid: string): Promise<ApiResponse<TxHistoryItem>> {
    return this.client.get(`/v1/indexer/tx/${txid}`);
  }

  async getTxInputs(
    txid: string,
    params: PaginationParams,
  ): Promise<ApiResponse<{ detail: TxInput[]; start: number; total: number }>> {
    return this.client.get(`/v1/indexer/tx/${txid}/ins`, { params });
  }

  async getTxOutputs(
    txid: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{ detail: TxOutput[]; start: number; total: number }>
  > {
    return this.client.get(`/v1/indexer/tx/${txid}/outs`, { params });
  }

  async getUtxoInfo(txid: string, index: string): Promise<ApiResponse<UTXO>> {
    return this.client.get(`/v1/indexer/utxo/${txid}/${index}`);
  }
}

export default TransactionClient;

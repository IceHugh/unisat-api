import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

// 定义接口

interface AddressBalance {
  address: string;
  satoshi: number;
  pendingSatoshi: number;
  utxoCount: number;
  btcSatoshi: number;
  btcPendingSatoshi: number;
  btcUtxoCount: number;
  inscriptionSatoshi: number;
  inscriptionPendingSatoshi: number;
  inscriptionUtxoCount: number;
}

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

interface InscriptionItem {
  inscriptionId: string;
  inscriptionNumber: number;
  isBRC20: boolean;
  moved: boolean;
  offset: number;
}

// 定义通用的分页参数接口
interface PaginationParams {
  cursor: number;
  size: number;
}

class AddressClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getAddressBalance(
    address: string,
  ): Promise<ApiResponse<AddressBalance>> {
    return this.client.get(`/v1/indexer/address/${address}/balance`);
  }

  async getAddressHistory(
    address: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{ detail: TxHistoryItem[]; start: number; total: number }>
  > {
    return this.client.get(`/v1/indexer/address/${address}/history`, {
      params,
    });
  }

  async getAddressUtxos(
    address: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      cursor: number;
      total: number;
      totalConfirmed: number;
      totalUnconfirmed: number;
      totalUnconfirmedSpend: number;
      utxo: UTXO[];
    }>
  > {
    return this.client.get(`/v1/indexer/address/${address}/utxo-data`, {
      params,
    });
  }

  async getAddressInscriptionUtxos(
    address: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      cursor: number;
      total: number;
      totalConfirmed: number;
      totalUnconfirmed: number;
      totalUnconfirmedSpend: number;
      utxo: UTXO[];
    }>
  > {
    return this.client.get(
      `/v1/indexer/address/${address}/inscription-utxo-data`,
      { params },
    );
  }
}

export default AddressClient;

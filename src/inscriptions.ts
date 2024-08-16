import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

// 定义接口

interface InscriptionInfo {
  address: string;
  brc20?: {
    amt: string;
    decimal: string;
    lim: string;
    max: string;
    minted: string;
    op: string;
    tick: string;
    to: string;
  };
  contentBody?: string;
  contentLength: number;
  contentType: string;
  height: number;
  inSatoshi: number;
  outSatoshi: number;
  inscriptionId: string;
  inscriptionIndex: number;
  inscriptionNumber: number;
  offset: number;
  timestamp: number;
  utxo: UTXO;
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

interface InscriptionEvent {
  isTransfer: boolean;
  inscriptionId: string;
  inscriptionNumber: number;
  address: string;
  contentBody?: string;
  contentType?: string;
  inSatoshi: number;
  outSatoshi: number;
  pkScript: string;
  satoshi: number;
  timestamp: number;
  txid: string;
  i: number;
  vout: number;
  sequence: number;
  height: number;
  txidx: number;
}

// 定义通用的分页参数接口
interface PaginationParams {
  cursor: number;
  size: number;
}

class InscriptionClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getInscriptionInfo(
    inscriptionId: string,
  ): Promise<ApiResponse<InscriptionInfo>> {
    return this.client.get(`/v1/indexer/inscription/info/${inscriptionId}`);
  }

  async getInscriptionContent(inscriptionId: string): Promise<any> {
    return this.client.get(`/v1/indexer/inscription/content/${inscriptionId}`, {
      responseType: 'arraybuffer',
    });
  }

  async getInscriptionEvents(params: PaginationParams): Promise<
    ApiResponse<{
      detail: InscriptionEvent[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get('/v1/indexer/inscription/events', { params });
  }

  async getInscriptionsByAddress(
    address: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      detail: InscriptionInfo[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(`/v1/indexer/inscription/inscriptions/${address}`, {
      params,
    });
  }

  async getInscriptionsByTxid(
    txid: string,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      detail: InscriptionInfo[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(
      `/v1/indexer/inscription/inscriptions/txid/${txid}`,
      { params },
    );
  }

  async getInscriptionsByBlockHeight(
    height: number,
    params: PaginationParams,
  ): Promise<
    ApiResponse<{
      detail: InscriptionInfo[];
      start: number;
      total: number;
    }>
  > {
    return this.client.get(
      `/v1/indexer/inscription/inscriptions/block/${height}`,
      { params },
    );
  }
}

export default InscriptionClient;

import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

// 定义接口

interface OrderSummary {
  orderCount: {
    total: number;
    pendingCount: number;
    inscribingCount: number;
    mintedCount: number;
    closedCount: number;
    refundedCount: number;
  };
}

interface Order {
  orderId: string;
  status: 'pending' | 'inscribing' | 'minted';
  payAddress: string;
  receiveAddress: string;
  amount: number;
  paidAmount: number;
  outputValue: number;
  feeRate: number;
  minerFee: number;
  serviceFee: number;
  devFee: number;
  files: {
    filename: string;
    inscriptionId: string;
    status: 'pending' | 'unconfirmed' | 'confirmed';
  }[];
  count: number;
  pendingCount: number;
  unconfirmedCount: number;
  confirmedCount: number;
  createTime: number;
  refundTxid: string;
  refundAmount: number;
  refundFeeRate: number;
}

interface OrderCreateParams {
  receiveAddress: string;
  feeRate: number;
  outputValue: number;
  files: {
    filename: string;
    dataURL: string;
  }[];
  devAddress?: string;
  devFee?: number;
}

interface OrderCreateBRC20DeployParams {
  receiveAddress: string;
  feeRate: number;
  outputValue: number;
  devAddress?: string;
  devFee?: number;
  brc20Ticker: string;
  brc20Max: string;
  brc20Limit: string;
}

interface OrderCreateBRC20MintParams {
  receiveAddress: string;
  feeRate: number;
  outputValue: number;
  devAddress?: string;
  devFee?: number;
  brc20Ticker: string;
  brc20Amount: string;
  count: number;
}

interface OrderCreateBRC20TransferParams {
  receiveAddress: string;
  feeRate: number;
  outputValue: number;
  devAddress?: string;
  devFee?: number;
  brc20Ticker: string;
  brc20Amount: string;
}

interface OrderCreateBRC205ByteMintParams {
  deployerAddress: string;
  deployerPubkey: string;
  receiveAddress: string;
  feeRate: number;
  outputValue: number;
  devAddress?: string;
  devFee?: number;
  brc20Ticker: string;
  brc20Amount: string;
}

interface OrderRequestCommitBRC205ByteMintParams {
  orderId: string;
}

interface OrderRequestCommitBRC205ByteMintResponse {
  psbtHex: string;
  inputsToSign: {
    address: string;
    signingIndexes: number[];
  }[];
}

interface OrderSignCommitBRC205ByteMintParams {
  orderId: string;
  psbt: string;
}

interface OrderSignCommitBRC205ByteMintResponse {
  psbtHex: string;
  inputsToSign: {
    address: string;
    signingIndexes: number[];
  }[];
}

interface OrderSignRevealBRC205ByteMintParams {
  orderId: string;
  psbt: string;
}

interface OrderSignRevealBRC205ByteMintResponse {
  inscriptionId: string;
}

interface OrderCreateRunesEtchParams {
  receiveAddress: string;
  feeRate: number;
  outputValue: number;
  files: {
    filename: string;
    dataURL: string;
    runes_etch: {
      etching: {
        spacedRune: string;
        symbol: string;
        divisibility: number;
        premine: string;
        terms: {
          amount: string;
          cap: string;
          height: number[];
          offset: number[];
        };
      };
    };
  }[];
  devAddress?: string;
  devFee?: number;
}

interface OrderCreateRunesMintParams {
  receiveAddress: string;
  feeRate: number;
  outputValue: number;
  runeid: string;
  count: number;
  devAddress?: string;
  devFee?: number;
}

// 定义通用的分页参数接口
interface PaginationParams {
  cursor?: number;
  size?: number;
}

// 定义各方法的参数接口
interface GetOrderListParams extends PaginationParams {
  sort?: 'asc' | 'desc';
  status?: 'pending' | 'inscribing' | 'minted' | 'closed' | 'refunded';
  receiveAddress?: string;
  clientId?: string;
}

class InscribeClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getOrderSummary(): Promise<ApiResponse<OrderSummary>> {
    return this.client.get('/v2/inscribe/order/summary');
  }

  async getOrderList(
    params: GetOrderListParams,
  ): Promise<ApiResponse<{ detail: Order[]; start: number; total: number }>> {
    return this.client.get('/v2/inscribe/order/list', { params });
  }

  async getOrder(orderId: string): Promise<ApiResponse<Order>> {
    return this.client.get(`/v2/inscribe/order/${orderId}`);
  }

  async createOrder(data: OrderCreateParams): Promise<ApiResponse<Order>> {
    return this.client.post('/v2/inscribe/order/create', data);
  }

  async createBRC20DeployOrder(
    data: OrderCreateBRC20DeployParams,
  ): Promise<ApiResponse<Order>> {
    return this.client.post('/v2/inscribe/order/create/brc20-deploy', data);
  }

  async createBRC20MintOrder(
    data: OrderCreateBRC20MintParams,
  ): Promise<ApiResponse<Order>> {
    return this.client.post('/v2/inscribe/order/create/brc20-mint', data);
  }

  async createBRC20TransferOrder(
    data: OrderCreateBRC20TransferParams,
  ): Promise<ApiResponse<Order>> {
    return this.client.post('/v2/inscribe/order/create/brc20-transfer', data);
  }

  async createBRC205ByteMintOrder(
    data: OrderCreateBRC205ByteMintParams,
  ): Promise<ApiResponse<Order>> {
    return this.client.post('/v2/inscribe/order/create/brc20-5byte-mint', data);
  }

  async requestCommitBRC205ByteMint(
    data: OrderRequestCommitBRC205ByteMintParams,
  ): Promise<ApiResponse<OrderRequestCommitBRC205ByteMintResponse>> {
    return this.client.post(
      '/v2/inscribe/order/request-commit/brc20-5byte-mint',
      data,
    );
  }

  async signCommitBRC205ByteMint(
    data: OrderSignCommitBRC205ByteMintParams,
  ): Promise<ApiResponse<OrderSignCommitBRC205ByteMintResponse>> {
    return this.client.post(
      '/v2/inscribe/order/sign-commit/brc20-5byte-mint',
      data,
    );
  }

  async signRevealBRC205ByteMint(
    data: OrderSignRevealBRC205ByteMintParams,
  ): Promise<ApiResponse<OrderSignRevealBRC205ByteMintResponse>> {
    return this.client.post(
      '/v2/inscribe/order/sign-reveal/brc20-5byte-mint',
      data,
    );
  }

  async createRunesEtchOrder(
    data: OrderCreateRunesEtchParams,
  ): Promise<ApiResponse<Order>> {
    return this.client.post('/v2/inscribe/order/create/runes-etch', data);
  }

  async createRunesMintOrder(
    data: OrderCreateRunesMintParams,
  ): Promise<ApiResponse<Order>> {
    return this.client.post('/v2/inscribe/order/create/runes-mint', data);
  }

  async refundOrder(
    orderId: string,
    data: { refundFeeRate: number },
  ): Promise<ApiResponse<{ txid: string }>> {
    return this.client.post(`/v2/inscribe/order/${orderId}/refund`, data);
  }

  async estimateRefund(orderId: string): Promise<ApiResponse<any>> {
    return this.client.get(`/v2/inscribe/order/${orderId}/refund-estimate`);
  }
}

export default InscribeClient;

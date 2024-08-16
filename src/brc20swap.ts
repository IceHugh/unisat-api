import type { AxiosInstance } from 'axios';
import type { ApiResponse } from './type';

// 定义接口

interface Balance {
  module: string;
  swap: string;
  pendingSwap: string;
  pendingAvailable: string;
}

interface BalanceResponse {
  balance: Balance;
  decimal: string;
}

interface DepositInfo {
  dailyAmount: string;
  dailyLimit: string;
  recommendDeposit: string;
}

interface SelectItem {
  tick: string;
  decimal: string;
  brc20Balance: string;
  swapBalance: string;
}

interface PreOperationResponse {
  signMsg: string;
  bytesL1: number;
  bytesL2: number;
  feeRate: string;
  gasPrice: string;
  serviceFeeL1: string;
  serviceFeeL2: string;
  unitUsdPriceL1: string;
  unitUsdPriceL2: string;
  serviceTickBalance: string;
}

interface DeployPoolParams {
  address: string;
  tick0: string;
  tick1: string;
  ts: number;
  sig: string;
}

interface QuoteAddLiqParams {
  address: string;
  tick0: string;
  tick1: string;
  amount0?: string;
  amount1?: string;
}

interface QuoteAddLiqResponse {
  amount0: string;
  amount1: string;
  amount0USD: string;
  amount1USD: string;
  lp: string;
  tick0PerTick1: string;
  tick1PerTick0: string;
  shareOfPool: string;
}

interface AddLiqParams {
  address: string;
  tick0: string;
  tick1: string;
  amount0: string;
  amount1: string;
  lp: string;
  slippage: string;
  ts: number;
  sig: string;
}

interface RemoveLiqParams {
  address: string;
  tick0: string;
  tick1: string;
  lp: string;
  amount0: string;
  amount1: string;
  slippage: string;
  ts: number;
  sig: string;
}

interface QuoteSwapParams {
  address: string;
  tickIn: string;
  tickOut: string;
  amount: string;
  exactType: 'exactIn' | 'exactOut';
}

interface QuoteSwapResponse {
  amountUSD: string;
  expectUSD: string;
  expect: string;
}

interface SwapParams {
  address: string;
  tickIn: string;
  tickOut: string;
  amountIn: string;
  amountOut: string;
  slippage: string;
  exactType: 'exactIn' | 'exactOut';
  ts: number;
  sig: string;
}

interface PoolListParams {
  search?: string;
  start: number;
  limit: number;
}

interface PoolListItem {
  tick0: string;
  tick1: string;
  lp: string;
  tvl: string;
  volume24h: string;
  volume7d: string;
}

interface PoolListResponse {
  total: number;
  list: PoolListItem[];
}

interface MyPoolListParams {
  address: string;
  tick?: string;
  start: number;
  limit: number;
}

interface MyPoolListItem {
  lp: string;
  shareOfPool: string;
  tick0: string;
  tick1: string;
  amount0: string;
  amount1: string;
}

interface MyPoolListResponse {
  total: number;
  list: MyPoolListItem[];
}

interface MyPoolParams {
  address: string;
  tick0: string;
  tick1: string;
}

interface OverviewResponse {
  liquidity: string;
  volume7d: string;
  volume24h: string;
  transactions: number;
  pairs: number;
}

interface GasHistoryParams {
  address?: string;
  start: number;
  limit: number;
}

interface GasHistoryItem {
  funcType: string;
  tickA: string;
  tickB: string;
  gas: string;
  ts: number;
}

interface GasHistoryResponse {
  total: number;
  list: GasHistoryItem[];
}

interface LiqHistoryParams {
  address?: string;
  tick?: string;
  type?: 'add' | 'remove';
  start: number;
  limit: number;
}

interface LiqHistoryItem {
  type: string;
  tick0: string;
  tick1: string;
  amount0: string;
  amount1: string;
  lp: string;
  ts: number;
}

interface LiqHistoryResponse {
  total: number;
  list: LiqHistoryItem[];
}

interface SwapHistoryParams {
  address?: string;
  tick?: string;
  start: number;
  limit: number;
}

interface SwapHistoryItem {
  tickIn: string;
  tickOut: string;
  amountIn: string;
  amountOut: string;
  exactType: string;
  ts: number;
}

interface SwapHistoryResponse {
  total: number;
  list: SwapHistoryItem[];
}

interface RollupHistoryParams {
  start: number;
  limit: number;
}

interface RollupHistoryItem {
  txid: string;
  height: number;
  transactionNum: number;
  inscriptionId: string;
  inscriptionNumber: number;
  ts: number;
}

interface RollupHistoryResponse {
  total: number;
  list: RollupHistoryItem[];
}

interface DepositListParams {
  address: string;
  tick?: string;
  start: number;
  limit: number;
}

interface DepositListItem {
  tick: string;
  amount: string;
  cur: number;
  sum: number;
  ts: number;
  txid: string;
  type: string;
}

interface DepositListResponse {
  total: number;
  list: DepositListItem[];
}

interface CreateDepositParams {
  inscriptionId: string;
  pubkey: string;
  address: string;
}

interface CreateDepositResponse {
  psbt: string;
  type: string;
  expiredTimestamp: number;
  recommendDeposit: string;
}

interface ConfirmDepositParams {
  psbt: string;
  fromBase64?: boolean;
}

interface ConfirmDepositResponse {
  txid: string;
}

interface SystemStatusResponse {
  status: string;
}

interface WithdrawProcessResponse {
  status: string;
  confirmations: number;
  requiredConfirmations: number;
}
interface WithdrawHistoryItem {
  id: string;
  tick: string;
  totalAmount: string;
  completedAmount: string;
  ts: number;
  totalConfirmedNum: number;
  totalNum: number;
  status: string;
}

interface WithdrawHistoryResponse {
  total: number;
  list: WithdrawHistoryItem[];
}

interface CreateWithdrawResponse {
  id: string;
  paymentPsbt: string;
  approvePsbt: string;
  networkFee: number;
  signMsg: string;
  bytesL1: number;
  bytesL2: number;
  feeRate: string;
  gasPrice: string;
  serviceFeeL1: string;
  serviceFeeL2: string;
  unitUsdPriceL1: string;
  unitUsdPriceL2: string;
  serviceTickBalance: string;
}

interface ConfirmWithdrawParams {
  id: string;
  sig: string;
  paymentPsbt: string;
  approvePsbt: string;
}

interface CreateRetryWithdrawResponse {
  paymentPsbt: string;
  approvePsbt: string;
  networkFee: number;
}

interface ConfirmRetryWithdrawParams {
  id: string;
  paymentPsbt: string;
  approvePsbt: string;
}

interface CreateCancelWithdrawResponse {
  id: string;
  psbt: string;
  networkFee: number;
}

interface ConfirmCancelWithdrawParams {
  id: string;
  psbt: string;
}

class BRC20SwapClient {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  async getConfig(): Promise<ApiResponse<any>> {
    return this.client.get('/v1/brc20-swap/config');
  }

  async getBalance(
    address: string,
    tick: string,
  ): Promise<ApiResponse<BalanceResponse>> {
    return this.client.get('/v1/brc20-swap/balance', {
      params: { address, tick },
    });
  }

  async getAllBalance(
    address: string,
  ): Promise<ApiResponse<Record<string, BalanceResponse>>> {
    return this.client.get('/v1/brc20-swap/all_balance', {
      params: { address },
    });
  }

  async getDepositInfo(
    address: string,
    tick: string,
  ): Promise<ApiResponse<DepositInfo>> {
    return this.client.get('/v1/brc20-swap/deposit_info', {
      params: { address, tick },
    });
  }

  async select(
    address: string,
    search?: string,
  ): Promise<ApiResponse<SelectItem[]>> {
    return this.client.get('/v1/brc20-swap/select', {
      params: { address, search },
    });
  }

  async preDeployPool(
    address: string,
    tick0: string,
    tick1: string,
    ts: number,
  ): Promise<ApiResponse<PreOperationResponse>> {
    return this.client.get('/v1/brc20-swap/pre_deploy_pool', {
      params: { address, tick0, tick1, ts },
    });
  }

  async deployPool(data: DeployPoolParams): Promise<ApiResponse<any>> {
    return this.client.post('/v1/brc20-swap/deploy_pool', data);
  }

  async quoteAddLiq(
    params: QuoteAddLiqParams,
  ): Promise<ApiResponse<QuoteAddLiqResponse>> {
    return this.client.get('/v1/brc20-swap/quote_add_liq', { params });
  }

  async preAddLiq(
    address: string,
    tick0: string,
    tick1: string,
    amount0: string,
    amount1: string,
    lp: string,
    slippage: string,
    ts: number,
  ): Promise<ApiResponse<PreOperationResponse>> {
    return this.client.get('/v1/brc20-swap/pre_add_liq', {
      params: { address, tick0, tick1, amount0, amount1, lp, slippage, ts },
    });
  }

  async addLiq(data: AddLiqParams): Promise<ApiResponse<any>> {
    return this.client.post('/v1/brc20-swap/add_liq', data);
  }

  async quoteRemoveLiq(
    address: string,
    tick0: string,
    tick1: string,
    lp: string,
  ): Promise<ApiResponse<any>> {
    return this.client.get('/v1/brc20-swap/quote_remove_liq', {
      params: { address, tick0, tick1, lp },
    });
  }

  async preRemoveLiq(
    address: string,
    tick0: string,
    tick1: string,
    amount0: string,
    amount1: string,
    lp: string,
    slippage: string,
    ts: number,
  ): Promise<ApiResponse<PreOperationResponse>> {
    return this.client.get('/v1/brc20-swap/pre_remove_liq', {
      params: { address, tick0, tick1, amount0, amount1, lp, slippage, ts },
    });
  }

  async removeLiq(data: RemoveLiqParams): Promise<ApiResponse<any>> {
    return this.client.post('/v1/brc20-swap/remove_liq', data);
  }

  async quoteSwap(
    params: QuoteSwapParams,
  ): Promise<ApiResponse<QuoteSwapResponse>> {
    return this.client.get('/v1/brc20-swap/quote_swap', { params });
  }

  async preSwap(
    address: string,
    tickIn: string,
    tickOut: string,
    amountIn: string,
    amountOut: string,
    slippage: string,
    exactType: 'exactIn' | 'exactOut',
    ts: number,
  ): Promise<ApiResponse<PreOperationResponse>> {
    return this.client.get('/v1/brc20-swap/pre_swap', {
      params: {
        address,
        tickIn,
        tickOut,
        amountIn,
        amountOut,
        slippage,
        exactType,
        ts,
      },
    });
  }

  async swap(data: SwapParams): Promise<ApiResponse<any>> {
    return this.client.post('/v1/brc20-swap/swap', data);
  }

  async getPoolList(
    params: PoolListParams,
  ): Promise<ApiResponse<PoolListResponse>> {
    return this.client.get('/v1/brc20-swap/pool_list', { params });
  }

  async getMyPoolList(
    params: MyPoolListParams,
  ): Promise<ApiResponse<MyPoolListResponse>> {
    return this.client.get('/v1/brc20-swap/my_pool_list', { params });
  }

  async getMyPool(params: MyPoolParams): Promise<ApiResponse<MyPoolListItem>> {
    return this.client.get('/v1/brc20-swap/my_pool', { params });
  }

  async getOverview(): Promise<ApiResponse<OverviewResponse>> {
    return this.client.get('/v1/brc20-swap/overview');
  }

  async getGasHistory(
    params: GasHistoryParams,
  ): Promise<ApiResponse<GasHistoryResponse>> {
    return this.client.get('/v1/brc20-swap/gas_history', { params });
  }

  async getLiqHistory(
    params: LiqHistoryParams,
  ): Promise<ApiResponse<LiqHistoryResponse>> {
    return this.client.get('/v1/brc20-swap/liq_history', { params });
  }

  async getSwapHistory(
    params: SwapHistoryParams,
  ): Promise<ApiResponse<SwapHistoryResponse>> {
    return this.client.get('/v1/brc20-swap/swap_history', { params });
  }

  async getRollupHistory(
    params: RollupHistoryParams,
  ): Promise<ApiResponse<RollupHistoryResponse>> {
    return this.client.get('/v1/brc20-swap/rollup_history', { params });
  }

  async getDepositList(
    params: DepositListParams,
  ): Promise<ApiResponse<DepositListResponse>> {
    return this.client.get('/v1/brc20-swap/deposit_list', { params });
  }

  async createDeposit(
    params: CreateDepositParams,
  ): Promise<ApiResponse<CreateDepositResponse>> {
    return this.client.get('/v1/brc20-swap/create_deposit', { params });
  }
  async confirmDeposit(
    data: ConfirmDepositParams,
  ): Promise<ApiResponse<ConfirmDepositResponse>> {
    return this.client.post('/v1/brc20-swap/confirm_deposit', data);
  }

  async getSystemStatus(): Promise<ApiResponse<SystemStatusResponse>> {
    return this.client.get('/v1/brc20-swap/system_status');
  }

  async getWithdrawHistory(
    address: string,
    start: number,
    limit: number,
    tick?: string,
  ): Promise<ApiResponse<WithdrawHistoryResponse>> {
    return this.client.get('/v1/brc20-swap/withdraw_history', {
      params: { address, start, limit, tick },
    });
  }

  async createWithdraw(
    pubkey: string,
    address: string,
    tick: string,
    amount: string,
    ts: number,
  ): Promise<ApiResponse<CreateWithdrawResponse>> {
    return this.client.get('/v1/brc20-swap/create_withdraw', {
      params: { pubkey, address, tick, amount, ts },
    });
  }

  async confirmWithdraw(data: ConfirmWithdrawParams): Promise<ApiResponse<{}>> {
    return this.client.post('/v1/brc20-swap/confirm_withdraw', data);
  }

  async createRetryWithdraw(
    id: string,
    pubkey: string,
    address: string,
  ): Promise<ApiResponse<CreateRetryWithdrawResponse>> {
    return this.client.get('/v1/brc20-swap/create_retry_withdraw', {
      params: { id, pubkey, address },
    });
  }

  async confirmRetryWithdraw(
    data: ConfirmRetryWithdrawParams,
  ): Promise<ApiResponse<{}>> {
    return this.client.post('/v1/brc20-swap/confirm_retry_withdraw', data);
  }

  async createCancelWithdraw(
    id: string,
  ): Promise<ApiResponse<CreateCancelWithdrawResponse>> {
    return this.client.get('/v1/brc20-swap/create_cancel_withdraw', {
      params: { id },
    });
  }

  async confirmCancelWithdraw(
    data: ConfirmCancelWithdrawParams,
  ): Promise<ApiResponse<{}>> {
    return this.client.post('/v1/brc20-swap/confirm_cancel_withdraw', data);
  }

  async getWithdrawProcess(
    id: string,
  ): Promise<ApiResponse<WithdrawProcessResponse>> {
    return this.client.get('/v1/brc20-swap/withdraw_process', {
      params: { id },
    });
  }
}

export default BRC20SwapClient;

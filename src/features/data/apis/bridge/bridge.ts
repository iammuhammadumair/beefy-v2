import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { ChainEntity } from '../../entities/chain';
import type { BridgeInfoEntity, TxDataRes } from './bridge-types';

export interface FetchBridgeDataResult {
  data: BridgeInfoEntity[];
}

export class BridgeApi {
  public api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://bridgeapi.anyswap.exchange',
    });
  }

  public async getBridgeChainData(
    networkChainId: ChainEntity['networkChainId']
  ): Promise<BridgeInfoEntity> {
    const res: FetchBridgeDataResult = await this.api.get(`/merge/tokenlist/${networkChainId}`);
    const data = Object.values(res.data).filter(
      (token: BridgeInfoEntity) => token.symbol === 'Moovee'
    )[0];
    console.log('getBridgeChainData =>', data);

    return data;
  }

  public async getTxStatus(txHash: string): Promise<TxDataRes> {
    const res = await this.api.get(`/v2/history/details?params=${txHash}`);
    const txData: TxDataRes = res.data;
    return txData;
  }
}

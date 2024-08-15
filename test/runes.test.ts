import { expect, test, describe, beforeEach } from 'bun:test';
import UnisatApiClient from '../src/index';

const NETWORK = 'testnet';
const TXID = 'a9c07a4a509607a9f8f5ff8eb597c29b322e59b03152deae01704552cdde7997';
const ADDRESS =
  'tb1pttjr9292tea2nr28ca9zswgdhz0dasnz6n3v58mtg9cyf9wqr49sv8zjep';
const BLOCK_HASH =
  '0000000000000240128b208e5a99b5733dfb1e6126db48175afba5a3b7b9c7bb';
const ASSET_ID = 'asset_id_example';

describe('BlockstreamClient', () => {
  let client: UnisatApiClient;

  beforeEach(() => {
    client = new UnisatApiClient({ network: NETWORK, apikey: 'apikey' });
  });

  test('getTransaction', async () => {
    const response = await client.runes.getRunesStatus();
    console.log(response);

    expect(response.code).toBeNumber();
    expect(response.data.bestHeight).toBeNumber();
  });
});

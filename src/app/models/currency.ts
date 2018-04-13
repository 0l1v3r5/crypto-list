import { ModelInterface } from './base';

export class Currency implements ModelInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  price_btc: number;

  constructor(attrs: any = null) {
    if (attrs) {
      this.build(attrs);
    }
  }

  build(attrs: any): void {
    this.id = attrs.id;
    this.name = attrs.name;
    this.symbol = attrs.symbol;
    this.rank = attrs.rank;
    this.price_usd = attrs.price_usd;
    this.price_btc = attrs.price_btc;
  }
}

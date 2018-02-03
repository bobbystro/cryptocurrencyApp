export class CrytpocurrenciesCurrencyCompareModel {
  marketLabel: string;
  marketName: string;
  marketPrice: number;
  marketVolume: number;

  constructor(marketLabel = '', marketName = '', marketPrice = 0, marketVolume = 0) {
    this.marketLabel = marketLabel;
    this.marketName = marketName;
    this.marketPrice = marketPrice;
    this.marketVolume = marketVolume;
  }
}


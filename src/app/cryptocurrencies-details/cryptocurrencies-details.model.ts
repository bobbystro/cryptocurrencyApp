export class CryptocurrenciesDetailsModel {
  public bitCoinOpen: string;
  public bitCoinClose: string;
  public bitCoinHigh: string;
  public bitCoinLow: string;
  public bitCoinPriceVolume: string;
  public bitCoinVolume: string;
  public bitDate: string;

  constructor(bitCoinOpen = '',
              bitCoinClose = '',
              bitCoinHigh = '',
              bitCoinLow = '',
              bitCoinPriceVolume = '',
              bitCoinVolume = '',
              bitDate = '') {
    this.bitCoinOpen = bitCoinOpen;
    this.bitCoinClose = bitCoinClose;
    this.bitCoinHigh = bitCoinHigh;
    this.bitCoinLow = bitCoinLow;
    this.bitCoinPriceVolume = bitCoinPriceVolume;
    this.bitCoinVolume = bitCoinVolume;
    this.bitDate = bitDate;
  }
}

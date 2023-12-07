export type fiat = 'USD';

export type Ticker = {
  id: string,
  name: string,
  symbol: string,
  circulating_supply: number,
  first_data_at: string,
  last_updated: string,
  max_supply: number,
  quotes: Record<fiat, Quote>
  beta_value: number,
  rank: number,
  total_supply: number,
  iconPath?: string;
}

export type Quote = {
  ath_date: string,
  ath_price: number,
  market_cap: number,
  market_cap_change_24h: number,
  percent_change_1h: number,
  percent_change_1y: number,
  percent_change_6h: number,
  percent_change_7d: number,
  percent_change_12h: number,
  percent_change_15m: number,
  percent_change_24h: number,
  percent_change_30d: number,
  percent_change_30m: number,
  percent_from_price_ath: number,
  price: number;
  volume_24h: number,
  volume_24h_change_24h: number
}
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, tap } from "rxjs";
import { TickersApiService } from "./tickers-api.service";
import { Ticker } from "../models";

@Injectable()
export class TickersService {


  public $globalMarketCap: BehaviorSubject<number> = new BehaviorSubject(0)

  private readonly TICKERS_URL = '/assets/mocks/tickers.json';
  private readonly COINS_ICONS_URL = '/assets/cryptoicons/';

  constructor(private tickersApiService: TickersApiService) {}
  
  public getTickers(): Observable<Ticker[]> {
    return this.tickersApiService.getTickers(this.TICKERS_URL).pipe(
      map((tickers: Object) => JSON.parse(JSON.stringify(tickers))),
      map((tickers: Ticker[]) => {
        tickers.forEach((t: Ticker) => t.iconPath = `${this.COINS_ICONS_URL}${t.symbol.toLowerCase()}.svg`);
        return tickers;
      }),
      tap((tickers: Ticker[]) => {
        const globalCapitalization: number = tickers.reduce((total: number, ticker: Ticker) => total + ticker.quotes.USD.market_cap, 0);
        this.$globalMarketCap.next(globalCapitalization);
      }),
      catchError((_e) => [])
    )
  }
  
}
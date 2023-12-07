import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticker } from '../shared/models';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NumberWithSpacesPipe } from '../shared/pipes/number-with-spaces.pipe';
import { CommaToSpacePipe } from '../shared/pipes/comma-to-space.pipe';
import { NavigationExtras, Router } from '@angular/router';
import { PageTitleComponent } from '../page-title/page-title.component';
import { TickersService } from '../shared/services/tickers.service';
import { NumberSymbolPipe } from '../shared/pipes/number-short.pipe';

@Component({
  selector: 'ce-tickers-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule, 
    MatTableModule,
    MatProgressSpinnerModule,
    NumberWithSpacesPipe, 
    CommaToSpacePipe,
    NumberSymbolPipe,
    PageTitleComponent
  ],
  providers: [TickersService],
  templateUrl: './tickers-list.component.html',
  styleUrl: './tickers-list.component.scss'
})

export class TickersListComponent {

  public $tickers: Observable<Ticker[]>;
  public $globalMarketCap: Observable<number>;
  public favouriteTickers: string[] = [];
  public tickersColumns: string[] = ['favourite' ,'index', 'name', 'price', '1h%', '24h%', '7d%', 'marketCap', 'volume', 'circulatingSupply'];

  private readonly defaultIconPath = '/assets/cryptoicons/generic.svg';

  constructor(private router: Router, private tickersService: TickersService){

    this.$tickers = this.tickersService.getTickers();
    this.$globalMarketCap = this.tickersService.$globalMarketCap;
  }

  public toggleFavourite(e: Event, selectedId: string): void {
    e.stopImmediatePropagation();

    this.favouriteTickers.includes(selectedId) 
      ? this.favouriteTickers = this.favouriteTickers.filter((id: string) => id !== selectedId)
      : this.favouriteTickers.push(selectedId);
  }

  public goToTickerPreview(t: Ticker): void {
    const extras: NavigationExtras = { state: t };
    this.router.navigate([`/ticker/${t.id}`], extras);
  }

  public loadDefaultIcon(ticker: Ticker): void {
    ticker.iconPath = this.defaultIconPath;

  }
}

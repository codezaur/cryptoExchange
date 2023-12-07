import { Component } from '@angular/core';
import { Ticker } from '../shared/models';
import { Router } from '@angular/router';
import { PageTitleComponent } from '../page-title/page-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ce-ticker',
  standalone: true,
  imports: [CommonModule, PageTitleComponent],
  templateUrl: './ticker.component.html',
  styleUrl: './ticker.component.scss'
})
export class TickerComponent {
  public ticker: Ticker;
  public excludedProperties = ['quotes','iconPath'];

  constructor(private router: Router){
    this.ticker = this.assignTicker();
  }

  private assignTicker(): Ticker {
    return this.router.getCurrentNavigation()?.extras?.state as Ticker;

  }
}

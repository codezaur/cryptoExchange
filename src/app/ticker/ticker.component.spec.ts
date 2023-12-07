import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TickerComponent } from './ticker.component';
import { Router } from '@angular/router';

class RouterStub {
  getCurrentNavigation(){
    return {
       extras: {
          state:{
            beta_value: 1.0563,
            circulating_supply: 19426506,
            first_data_at: "2010-07-17T00:00:00Z",
            iconPath: "/assets/cryptoicons/btc.svg",
            id: "btc-bitcoin",
            last_updated: "2023-07-11T08:40:17Z",
            max_supply: 21000000,
            name: "Bitcoin",
            quotes: {
              USD: {
                ath_date: "2021-11-10T16:50:00Z",
                ath_price: 68692.13703693185,
                market_cap: 593248170920,
                market_cap_change_24h: 1.24,
                percent_change_1h: -0.09,
                percent_change_1y: 54.9,
                percent_change_6h: 0.14,
                percent_change_7d: -1.46,
                percent_change_12h: -0.84,
                percent_change_15m: -0.03,
                percent_change_24h: 1.24,
                percent_change_30d: 18.31,
                percent_change_30m: -0.11,
                percent_from_price_ath: -55.54,
                price: 30538.078793975994,
                volume_24h: 13441600877.886246,
                volume_24h_change_24h: 64.12
            }}},
            rank: 1,
            symbol: "BTC",
            total_supply: 19426512
          }
        }
      }
    }

describe('TickerComponent', () => {
  let component: TickerComponent;
  let fixture: ComponentFixture<TickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TickerComponent],
      providers: [{ provide: Router, useClass: RouterStub }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

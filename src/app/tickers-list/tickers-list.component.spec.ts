import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TickersListComponent } from './tickers-list.component';
import { Router, Routes } from '@angular/router';
import { Ticker } from '../shared/models';
import { RouterTestingModule } from '@angular/router/testing';
import { TickerComponent } from '../ticker/ticker.component';
import { TickersService } from '../shared/services/tickers.service';
import { TickersApiService } from '../shared/services/tickers-api.service';

describe('TickersListComponent', () => {
  let component: TickersListComponent;
  let fixture: ComponentFixture<TickersListComponent>;
  let router: Router;

  const routes: Routes = [
    { path: '', component: TickersListComponent},
    { path: 'ticker/:id', component: TickerComponent},
    { path: '**', component: TickersListComponent },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes), TickersListComponent],
      providers: [TickersService, TickersApiService]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));     
    
    fixture = TestBed.createComponent(TickersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call stopImmediatePropagation on toggleFavourite()', () => {
    const selectedId = 'btc-bitcoin';
    const eventMock = { stopImmediatePropagation: jasmine.createSpy() } as unknown as Event;
    component.toggleFavourite(eventMock, selectedId);

    expect(eventMock.stopImmediatePropagation).toHaveBeenCalled();
  });  

  it('should add tickerId to favouriteTickers', () => {
    const selectedId = 'btc-bitcoin';
    component.favouriteTickers = [];
    const eventMock = { stopImmediatePropagation: jasmine.createSpy() } as unknown as Event;
    component.toggleFavourite(eventMock, selectedId);

    expect(component.favouriteTickers).toContain(selectedId);
  });

  it('should remove tickerId from favouriteTickers', () => {
    const selectedId = 'btc-bitcoin';
    component.favouriteTickers = [ selectedId, 'eth-ethereum'];
    const eventMock = { stopImmediatePropagation: jasmine.createSpy() } as unknown as Event;
    component.toggleFavourite(eventMock, selectedId);

    expect(component.favouriteTickers).not.toContain(selectedId);
  });

  it('should navigate to selected ticker url', waitForAsync(() => {
    const selectedTickerMock = { id: "btc-bitcoin" };
    const extrasMock = { state: selectedTickerMock };
    component.goToTickerPreview(selectedTickerMock as Ticker);

    expect(router.navigate).toHaveBeenCalledWith(
      [`/ticker/${selectedTickerMock.id}`], 
      jasmine.objectContaining(extrasMock));
  }));

});

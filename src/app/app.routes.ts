import { Routes } from '@angular/router';
import { TickersListComponent } from './tickers-list/tickers-list.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./tickers-list/tickers-list.component').then(c => c.TickersListComponent)},
  { path: 'ticker/:id', loadComponent: () => import('./ticker/ticker.component').then(c => c.TickerComponent)},
  { path: '**', component: TickersListComponent },
];

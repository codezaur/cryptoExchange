import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TickersService } from './shared/services/tickers.service';
import { TickersApiService } from './shared/services/tickers-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    TickersService,
    TickersApiService, 
    importProvidersFrom(HttpClientModule), 
    provideAnimations()]
};

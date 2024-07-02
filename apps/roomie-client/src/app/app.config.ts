import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './core/transloco-loader';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(appRoutes),
        provideHttpClient(),
        provideTransloco({
            config: {
                availableLangs: ['en', 'it', 'ro'],
                defaultLang: 'en',
                reRenderOnLangChange: true,
                prodMode: !isDevMode(),
                missingHandler: { allowEmpty: false, logMissingKey: true },
            },
            loader: TranslocoHttpLoader,
        }),
    ],
};

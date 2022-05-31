import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}

import { TextComponent } from './TextCardOne/text/text.component';
import {TextTwoComponent} from './TextCardTwo/text-two/text-two.component';

const APP_ROUTES: Routes = [
    { path: 'textOne', component: TextComponent },
    { path: 'textTwo', component: TextTwoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

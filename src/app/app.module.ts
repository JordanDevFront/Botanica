import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './MenuDesktop/menu/menu.component';
import { BannerComponent } from './BannerDesktop/banner/banner.component';
import { CardComponent } from './CardDesktop/card/card.component';
import { TextComponent } from './TextCardOne/text/text.component';
import { routing } from './app.routing';
import { SobreComponent } from './QuemSomos/sobre/sobre.component';
import { DescriptionComponent } from './DescriptionDesktop/description/description.component';
import { TextTwoComponent } from './TextCardTwo/text-two/text-two.component';
import { RodapeDesktopComponent } from './rodape-desktop/rodape-desktop.component';
import { TextCardOneMobileComponent } from './text-card-one-mobile/text-card-one-mobile.component';
import  {  CarouselModule  }  from  'ngx-owl-carousel-o' ; 


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    CardComponent,
    TextComponent,
    SobreComponent,
    DescriptionComponent,
    TextTwoComponent,
    RodapeDesktopComponent,
    TextCardOneMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { MainComponent } from './main/main/main.component';
import { PagesComponent } from './main/main/pages/pages/pages.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ClasificationComponent } from './main/main/clasification/clasification/clasification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PagesComponent,
    ClasificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

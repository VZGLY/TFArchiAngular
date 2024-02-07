import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { Demo1Component } from './components/demos/demo1/demo1.component';
import { Demo2Component } from './components/demos/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { Demo3Component } from './components/demos/demo3/demo3.component';
import { EuttobtcPipe } from './components/demos/demo3/euttobtc.pipe';
import { Exo1Component } from './components/exos/exo1/exo1.component';
import { TotimePipe } from './components/exos/exo1/totime.pipe';
import { Demo4Component } from './components/demos/demo4/demo4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    EuttobtcPipe,
    Exo1Component,
    TotimePipe,
    Demo4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

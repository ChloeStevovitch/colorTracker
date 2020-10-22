import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { NgxSimpleCalendarModule } from 'ngx-simple-calendar';


@NgModule({
  declarations: [
    AppComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimpleCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

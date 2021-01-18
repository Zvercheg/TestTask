import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {RouterModule, Routes} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import {AddbookComponent} from './components/addbook/addbook.component';

const appRoutes: Routes = [
  {path:'', component: BookComponent},
  {path:'book', component: AddbookComponent}
]

@NgModule({
  declarations: [AppComponent, BookComponent, AddbookComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),  RouterModule.forRoot(appRoutes)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';

import { IgxCalendarModule } from 'igniteui-angular';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [
		AppComponent,
		CalendarComponent
	],
	entryComponents: [],
	imports: [
		BrowserModule,
		MatInputModule,
		MatButtonModule,
		AppRoutingModule,
		IgxCalendarModule,
		IonicModule.forRoot(),
		BrowserAnimationsModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: LOCALE_ID, useValue: 'pt-BR'},
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}

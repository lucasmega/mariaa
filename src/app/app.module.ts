import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { IgxCalendarModule } from 'igniteui-angular';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
	declarations: [
		JobComponent,
		AppComponent,
		HeaderComponent,
		FooterComponent,
		SidenavComponent,
		CalendarComponent
	],
	entryComponents: [],
	imports: [
		FormsModule,
		MatCardModule,
		BrowserModule,
		MatInputModule,
		MatButtonModule,
		AppRoutingModule,
		MatDividerModule,
		IgxCalendarModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		IonicModule.forRoot(),
		BrowserAnimationsModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: LOCALE_ID, useValue: 'pt-BR'},
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class AppModule {
}

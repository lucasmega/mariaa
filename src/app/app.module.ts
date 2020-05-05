import { RouteReuseStrategy } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { IgxCalendarModule } from 'igniteui-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PageModule } from './pages/page.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { LoginComponent  } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegisterComponent } from './register/register.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DetailsWorkComponent } from './details-work/details-work.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';

@NgModule({
	declarations: [
		JobComponent,
		AppComponent,
		LoginComponent,
		HeaderComponent,
		FooterComponent,
		SidenavComponent,
		RegisterComponent,
		CalendarComponent,
		DetailsWorkComponent,
		RegistrationConfirmationComponent
	],
	entryComponents: [
		DetailsWorkComponent
	],
	imports: [
		PageModule,
		FormsModule,
		MatCardModule,
		BrowserModule,
		MatInputModule,
		MatButtonModule,
		MatDialogModule,
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

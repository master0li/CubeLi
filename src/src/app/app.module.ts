import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TimerComponent } from './components/timer/timer.component';
import { ScrambleComponent } from './components/scramble/scramble.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { ScrambleService } from './services/scramble.service';
import { SessionService } from './services/session.service';
import { TimerService } from './services/timer.service';
import { LayoutService } from './services/layout.service';
import { DurationPipe } from './duration.pipe';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TimerPageComponent } from './pages/timer-page/timer-page.component';


import {FlexLayoutModule} from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './components/base/base.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ConfirmPageComponent } from './pages/confirm-page/confirm-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileComponent } from './components/profile/profile.component';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'press': {threshold: 40}, // default threshold: 9
      'tap': {threshold: 20} // default threshold: 9
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ScrambleComponent,
    SessionsComponent,
    DurationPipe,
    TimerPageComponent,
    HomePageComponent,
    
    //pages
    HomePageComponent,
    TimerPageComponent,
    TestPageComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmComponent,
    ForgotPasswordComponent,
    LoginPageComponent,
    BaseComponent,
    RegisterPageComponent,
    ConfirmPageComponent,
    ForgotPasswordPageComponent,
    ProfilePageComponent,
    ProfileComponent,
  ],
  imports: [

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    FlexLayoutModule ,

    ReactiveFormsModule,


  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: MyHammerConfig 
    },
    LayoutService,
    ScrambleService,
    SessionService,
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

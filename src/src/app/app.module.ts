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
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SplashComponent } from './components/splash/splash.component';
import { TimerComponent } from './components/timer/timer.component';
import { ScrambleComponent } from './components/scramble/scramble.component';
import { SessionComponent } from './components/session/session.component';
import { ScrambleService } from './services/scramble.service';
import { SessionService } from './services/session.service';
import { TimerService } from './services/timer.service';
import { LayoutService } from './services/layout.service';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    TimerComponent,
    ScrambleComponent,
    SessionComponent,
    DurationPipe
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
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [
    LayoutService,
    ScrambleService,
    SessionService,
    TimerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

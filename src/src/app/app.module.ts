import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SplashComponent } from './splash/splash.component';
import { TimerComponent } from './timer/timer.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ScrambleComponent } from './scramble/scramble.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    TimerComponent,
    SessionsComponent,
    ScrambleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

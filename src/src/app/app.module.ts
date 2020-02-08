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
import {MatTableModule} from '@angular/material/table';
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
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    FlexLayoutModule ,


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

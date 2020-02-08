import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { TimerComponent } from './components/timer/timer.component';


const routes: Routes = [
  { path: '', component: SplashComponent, pathMatch: 'full' },
  { path: 'timer', component: TimerComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

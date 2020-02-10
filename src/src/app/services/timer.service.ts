import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Session } from '../models/session';
import { ScrambleService } from './scramble.service';
import { SessionService } from './session.service';
import { Solve } from '../models/solve';
import { LayoutService } from './layout.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private _intervalTimer;
  private _isRunning: boolean = false;
  private _isInspection: boolean = false;
  private _milliseconds: number = 0;
  private _time: string = "--:--";
  
  public onTick = new Subject();
  public onStart = new Subject();
  public onStop = new Subject();
  public onInspection = new Subject();
  public onPenalty = new Subject();

  constructor(public scrambleService: ScrambleService, public sessionService: SessionService, public layoutService: LayoutService) { }

  get IsRunning(): boolean {
    return this._isRunning;
  }

  get IsInspection(): boolean {
    return this._isInspection;
  }

  get Milliseconds(): number {
    return this._milliseconds;
  }

  get Time(): number {
    return this._milliseconds;
  }

  public Start(): void {

    clearInterval(this._intervalTimer);
    this._isRunning = true;
    this._isInspection = false;
    this._milliseconds = 0;

    this.onStart.next();

    this._intervalTimer = setInterval(() => {
      
      
      this._milliseconds += 10;
      this.onTick.next();
    }, 10);


  }

  public StartInspection(): void {

    this.onInspection.next();

    
    this.layoutService.OnlyTimer = true;

    this._isInspection = true;

    this._milliseconds = 15000;

    this._intervalTimer = setInterval(() => {

      this.onTick.next();
      this._milliseconds -= 10;

      if (this._milliseconds === 0) {

        this._isInspection = false;
        clearInterval(this._intervalTimer);
        this.onPenalty.next();

      }

    }, 10);
  }

  public Stop(): void {

    clearInterval(this._intervalTimer);
    this._isRunning = false;
    this._isInspection = false;

    
    this.layoutService.OnlyTimer = false;

    let solve = new Solve();

    solve.Scramble = this.scrambleService.Scramble;
    solve.DateSolved = new Date();
    solve.Time = this._milliseconds;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.sessionService.AddSolve(solve); 

    this.onStop.next();

  }

}

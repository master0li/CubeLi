import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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

  constructor() { }

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
      
      this.onTick.next();
      this._milliseconds += 10;

    }, 10);


  }

  public StartInspection(): void {

    this.onInspection.next();

    this._isInspection = true;

    this._milliseconds = 15000;

    this._intervalTimer = setInterval(() => {

      this.onTick.next();
      this._milliseconds -= 10;

      if (this._milliseconds === 0) {

        this._isInspection = false;
        clearInterval(this._intervalTimer);

      }

    }, 10);
  }

  public Stop(): void {

    clearInterval(this._intervalTimer);
    this._isRunning = false;
    this._isInspection = false;

    this.onStop.next();

  }

}

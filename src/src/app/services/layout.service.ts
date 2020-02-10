import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public onUpdate = new Subject();    

  private showToolbar: boolean = true;
  private showScramble: boolean = true;
  private drawScramble: boolean = true;
  private showSession: boolean = true;

  private lastShowScramble: boolean = true;
  private lastDrawScramble: boolean = true;
  private lastShowSession: boolean = true;

  private onlyTimer: boolean = false;

  constructor() { }


  public get ShowToolbar(): boolean {
    return this.showToolbar;
  }


  public get ShowScramble(): boolean {
    return this.showScramble;
  }

  public get DrawScramble(): boolean {
    return this.drawScramble;
  }

  public get ShowSession(): boolean {
    return this.showSession;
  }

  public set ShowToolbar(value: boolean) {
    this.showToolbar = value;
    this.onUpdate.next();
  }

  public set ShowScramble(value: boolean) {
    this.showScramble = value;
    this.onUpdate.next();
  }

  public set DrawScramble(value: boolean) {
    this.drawScramble = value;
    this.onUpdate.next();
  }

  public set ShowSession(value: boolean) {
    this.showSession = value;
    this.onUpdate.next();
  }

  public get OnlyTimer(): boolean {
    return this.onlyTimer;

  }

  public set OnlyTimer(value: boolean) {
    this.onlyTimer = value;

    if (this.onlyTimer) {

      //store last values
      this.lastShowSession = this.showSession;
      this.lastShowScramble = this.showScramble;
      this.lastDrawScramble = this.drawScramble;

      //now hide
      this.showToolbar = false;
      this.showSession = false;
      this.showScramble = false;
      this.drawScramble = false;


    }
    else {
      //restore
      this.showToolbar = true;
      this.showSession = this.lastShowSession;
      this.showScramble = this.lastShowScramble;
      this.drawScramble = this.lastDrawScramble;
    }

    this.onUpdate.next();
  }


}

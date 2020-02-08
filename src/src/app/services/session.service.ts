import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _ao5: number = 0;
  private _ao12: number = 0;
  private _ao100: number = 0;
  
  public onLoaded = new Subject();    

  constructor() { }

  public load() {
    this.onLoaded.next();

  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _sessions: Session[] = [];

  public onLoaded = new Subject();   
  public onAdded = new Subject();  
  public onDeleted = new Subject();    

  constructor() { 
    this.Load();
  }

  public Load() {

    let session = new Session();

    session.Scramble = "asdf";
    session.DateSession = new Date();
    session.Time = 34242;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    session = new Session();

    session.Scramble = "fdsafddfds";
    session.DateSession = new Date();
    session.Time = 6534;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    session = new Session();

    session.Scramble = "rewrgadfadf";
    session.DateSession = new Date();
    session.Time = 23423;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    session = new Session();

    session.Scramble = "rewrgadfadf";
    session.DateSession = new Date();
    session.Time = 23423;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    session = new Session();

    session.Scramble = "rewrgadfadf";
    session.DateSession = new Date();
    session.Time = 93423;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    session = new Session();

    session.Scramble = "rewrgadfadf";
    session.DateSession = new Date();
    session.Time = 83423;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    session = new Session();

    session.Scramble = "rewrgadfadf";
    session.DateSession = new Date();
    session.Time = 43423;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    session = new Session();

    session.Scramble = "rewrgadfadf";
    session.DateSession = new Date();
    session.Time = 23453;
    session.Puzzle = "3x3x3";
    session.Comment = "Comment";

    this._sessions.push(session); 

    this.onLoaded.next();

  }

  get Sessions(): Session[] {
    return this._sessions;
  }

  public Add(session: Session): void {

    this._sessions.unshift(session);
    this.onAdded.next();

  }

  public Delete(session: Session): void {
    this.onDeleted.next();

  }

}

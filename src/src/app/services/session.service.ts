import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Session } from '../models/session';
import { Solve } from '../models/solve';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessions: Session[] = [];
  private currentSession: Session = new Session();

  public onLoaded = new Subject();   
  public onAdded = new Subject();  
  public onDeleted = new Subject();    
  public onSolveAdded = new Subject();  
  public onSolveDeleted = new Subject();  

  constructor() { 
    this.Load();
  }

  public Load() {


    let fourSession: Session = new Session();
    fourSession.Name = "4x4x4"
    this.sessions.unshift(fourSession);

    let twoSession: Session = new Session();
    twoSession.Name = "2x2x2"
    this.sessions.unshift(twoSession);    

    this.currentSession.Name = "3x3x3"

    let solve = new Solve();

    solve.Scramble = "asdf";
    solve.DateSolved = new Date();
    solve.Time = 34242;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    solve = new Solve();

    solve.Scramble = "fdsafddfds";
    solve.DateSolved = new Date();
    solve.Time = 6534;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    solve = new Solve();

    solve.Scramble = "rewrgadfadf";
    solve.DateSolved = new Date();
    solve.Time = 23423;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    solve = new Solve();

    solve.Scramble = "rewrgadfadf";
    solve.DateSolved = new Date();
    solve.Time = 23423;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    solve = new Solve();

    solve.Scramble = "rewrgadfadf";
    solve.DateSolved = new Date();
    solve.Time = 93423;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    solve = new Solve();

    solve.Scramble = "rewrgadfadf";
    solve.DateSolved = new Date();
    solve.Time = 83423;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    solve = new Solve();

    solve.Scramble = "rewrgadfadf";
    solve.DateSolved = new Date();
    solve.Time = 43423;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    solve = new Solve();

    solve.Scramble = "rewrgadfadf";
    solve.DateSolved = new Date();
    solve.Time = 23453;
    solve.Puzzle = "3x3x3";
    solve.Comment = "Comment";

    this.currentSession.Solves.push(solve); 

    this.sessions.unshift(this.currentSession);

    this.onLoaded.next();

  }

  get Sessions(): Session[] {
    return this.sessions;
  }

  get Solves(): Solve[] {
    return this.currentSession.Solves;
  }

  public Add(session: Session): void {

    this.sessions.unshift(session);
    this.onAdded.next();

  }

  public Delete(session: Session): void {
    this.onDeleted.next();

  }

  public AddSolve(solve: Solve): void {

    this.currentSession.Solves.unshift(solve);
    this.onSolveAdded.next();

  }

  public DeleteSolve(solve: Solve): void {
    this.currentSession.Solves.shift();
    this.onSolveDeleted.next();

  }

}

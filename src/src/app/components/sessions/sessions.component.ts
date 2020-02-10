import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/session';
import { MatTableDataSource } from '@angular/material/table';
import { SessionService } from 'src/app/services/session.service';
import { Solve } from 'src/app/models/solve';

@Component({
  selector: 'sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  public name = "Session"
  public sessions: Session[] = [];
  public solveColumns: string[] = ['time', 'ao5', 'ao12'];
  public selectedSession: Session = new Session();

  
  public time: number = 0;
  public ao5: number = 0;
  public ao12: number = 0;
  public ao100: number = 0;

  public solvesDS: MatTableDataSource<Solve>;

  constructor(public sessionService: SessionService) { }

  ngOnInit(): void {

    this.sessionService.onAdded.subscribe(() => {    
      this.sessions = this.sessionService.Sessions;
    })

    this.sessionService.onDeleted.subscribe(() => {    
      this.sessions = this.sessionService.Sessions;
    })

    this.sessionService.onSolveAdded.subscribe(() => {    
      this.solvesDS = new MatTableDataSource(this.sessionService.Solves);
    })

    this.sessionService.onSolveDeleted.subscribe(() => {    
      this.solvesDS = new MatTableDataSource(this.sessionService.Solves);
    })

    this.sessions = this.sessionService.Sessions;

    if (this.sessions.length > 0) {
      this.selectedSession = this.sessions[0];
      this.solvesDS = new MatTableDataSource(this.selectedSession.Solves);
    }
    else {
      this.selectedSession = null;
    }
  }

  get Sessions() {
    return this.sessions;
  }

}